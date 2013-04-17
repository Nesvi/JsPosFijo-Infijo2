
/* description: Parses end executes mathematical expressions. */

/* Declaración de variables js */
%{
	var stackOutput;
	var conditionDepth = 0;
	function reservedWords( input ){
		 switch( input ){
		 
		 case "else":
		      return 'ELSE';
		 case "if":
		      return 'IF';
		 case "then":
		      return 'THEN';
		 default:
		      return 'ID';
		 }
	}
%}

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
\/\s*0+\b 	      return 'DZ'
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
[;]+                  return ';'
[!=<>]"="             return yytext;
"="		      return '='
"PI"                  return 'PI'
"E"                   return 'E'
[a-zA-Z_]+            return reservedWords( yytext );
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/' DZ
%left '^'
%right '!'
%right '%'
%left '='
%left '==' '<=' '>=' '!='
%left ID 
%left equal
%left compOperator
%left condition
%left '(' ')'
%left UMINUS


%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
	  a = $1.replace(/\n\n+/g,"\n");
          return a; }
    ;

e
    : e '+' e
        {$$ = $1 + $3 + "+\n";}
    | e '-' e
        {$$ = $1 + $3 + "-\n";}
    | e '*' e
        {$$ = $1 + $3 + "*\n";}
    | e DZ
  	{ return "Se esta intentando dividir por 0"; }
    | e '/' e
        {$$ = $1 + $3 + "/\n";}
    | e '^' e
        {$$ = $1 + $3 + "^\n";}
    | e '!'
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}
    | e '%'
        {$$ = $1/100;}
    | '-' e %prec UMINUS
        {$$ = "-"+ $2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = yytext+"\n";}
    | E
        {$$ = Math.E+"\n";}
    | PI
        {$$ = Math.PI+"\n";}
    | ID
	{
		console.log("Localizado id"); 
		$$ = yytext + "\n";
		/*	
		if( $1 in variables) {
			
		} 
		else{ 
			return "No existe la variable "+$1;	
		}*/	
	}

    | equal ';' e 
	{
		$$ = $1 + $3;
		
	}
    | equal ';' 
	{
		$$ = $1
		console.log("hey");
	}
    | PI '=' e ';'
	{ return "Se esta intenando modificar el PI"; }
    | E '=' e ';'
	{ return "Se esta intenando modificar el E"; }
    | condition
	{ $$ = $1; }
    | condition e
      	{ $$ =  $1 + $2 ; }
    | comp
	{ $$ = $1 ;} 
    ;

equal : 
      ID '=' e    
	{$$ = $1+"\n" + $3+"\n" + "="+"\n"}
    ;
	
condition :
	  IF comp THEN equal ELSE equal ";"
             { 
	       $$ = $2+"jmpz else"+conditionDepth+"\n"+$4+"jump endif"+conditionDepth+"\n"
	       +":else"+conditionDepth+"\n"+$6
	       +":endif"+conditionDepth+"\n";
	       conditionDepth++;
	     }
    ;
	  

comp : 
     e compOperator e
     {  $$ = $1+"\n" + $3+"\n" + $2 +"\n";}
     |'(' e compOperator e ')' 
     { $$ = $2+"\n" + $4+"\n" + $3 +"\n";}
;

compOperator :
	     '=='
	     {$$ =  yytext;}
	     |'<='
	     {$$ =  yytext;}
	     |'>='
	     {$$ =  yytext;}
	     |'!='
	     {$$ =  yytext;}
	     ;