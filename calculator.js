/* parser generated by jison 0.4.2 */
var calculator = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"+":6,"-":7,"*":8,"DZ":9,"/":10,"^":11,"!":12,"%":13,"(":14,")":15,"NUMBER":16,"E":17,"PI":18,"ID":19,"equal":20,";":21,"=":22,"condition":23,"comp":24,"IF":25,"THEN":26,"ELSE":27,"compOperator":28,"==":29,"<=":30,">=":31,"!=":32,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"+",7:"-",8:"*",9:"DZ",10:"/",11:"^",12:"!",13:"%",14:"(",15:")",16:"NUMBER",17:"E",18:"PI",19:"ID",21:";",22:"=",25:"IF",26:"THEN",27:"ELSE",29:"==",30:"<=",31:">=",32:"!="},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,2],[4,3],[4,3],[4,2],[4,2],[4,2],[4,3],[4,1],[4,1],[4,1],[4,1],[4,3],[4,2],[4,4],[4,4],[4,1],[4,2],[4,1],[20,3],[23,7],[24,3],[24,5],[28,1],[28,1],[28,1],[28,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: typeof console !== 'undefined' ? console.log($$[$0-1]) : print($$[$0-1]);
	  a = $$[$0-1].replace(/\n\n+/g,"\n");
          return a; 
break;
case 2:this.$ = $$[$0-2] + $$[$0] + "+\n";
break;
case 3:this.$ = $$[$0-2] + $$[$0] + "-\n";
break;
case 4:this.$ = $$[$0-2] + $$[$0] + "*\n";
break;
case 5: return "Se esta intentando dividir por 0"; 
break;
case 6:this.$ = $$[$0-2] + $$[$0] + "/\n";
break;
case 7:this.$ = $$[$0-2] + $$[$0] + "^\n";
break;
case 8:
          this.$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($$[$0-1]);
        
break;
case 9:this.$ = $$[$0-1]/100;
break;
case 10:this.$ = "-"+ $$[$0];
break;
case 11:this.$ = $$[$0-1];
break;
case 12:this.$ = yytext+"\n";
break;
case 13:this.$ = Math.E+"\n";
break;
case 14:this.$ = Math.PI+"\n";
break;
case 15:
		console.log("Localizado id"); 
		this.$ = yytext + "\n";
		/*	
		if( $$[$0] in variables) {
			
		} 
		else{ 
			return "No existe la variable "+$$[$0];	
		}*/	
	
break;
case 16:
		this.$ = $$[$0-2] + $$[$0];
		
	
break;
case 17:
		this.$ = $$[$0-1]
		console.log("hey");
	
break;
case 18: return "Se esta intenando modificar el PI"; 
break;
case 19: return "Se esta intenando modificar el E"; 
break;
case 20: this.$ = $$[$0]; 
break;
case 21: this.$ =  $$[$0-1] + $$[$0] ; 
break;
case 22: this.$ = $$[$0] ;
break;
case 23:this.$ = $$[$0-2]+"\n" + $$[$0]+"\n" + "="+"\n"
break;
case 24: 
	       this.$ = $$[$0-5]+"jmpz else"+conditionDepth+"\n"+$$[$0-3]+"jump endif"+conditionDepth+"\n"
	       +":else"+conditionDepth+"\n"+$$[$0-1]
	       +":endif"+conditionDepth+"\n";
	       conditionDepth++;
	     
break;
case 25:  this.$ = $$[$0-2]+"\n" + $$[$0]+"\n" + $$[$0-1] +"\n";
break;
case 26: this.$ = $$[$0-3]+"\n" + $$[$0-1]+"\n" + $$[$0-2] +"\n";
break;
case 27:this.$ =  yytext;
break;
case 28:this.$ =  yytext;
break;
case 29:this.$ =  yytext;
break;
case 30:this.$ =  yytext;
break;
}
},
table: [{3:1,4:2,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{1:[3]},{5:[1,13],6:[1,14],7:[1,15],8:[1,16],9:[1,17],10:[1,18],11:[1,19],12:[1,20],13:[1,21],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{4:27,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{4:28,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],15:[2,12],21:[2,12],26:[2,12],27:[2,12],29:[2,12],30:[2,12],31:[2,12],32:[2,12]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],15:[2,13],21:[2,13],22:[1,29],26:[2,13],27:[2,13],29:[2,13],30:[2,13],31:[2,13],32:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],15:[2,14],21:[2,14],22:[1,30],26:[2,14],27:[2,14],29:[2,14],30:[2,14],31:[2,14],32:[2,14]},{5:[2,15],6:[2,15],7:[2,15],8:[2,15],9:[2,15],10:[2,15],11:[2,15],12:[2,15],13:[2,15],15:[2,15],21:[2,15],22:[1,31],26:[2,15],27:[2,15],29:[2,15],30:[2,15],31:[2,15],32:[2,15]},{21:[1,32]},{4:33,5:[2,20],6:[2,20],7:[2,20],8:[2,20],9:[2,20],10:[2,20],11:[2,20],12:[2,20],13:[2,20],14:[1,4],15:[2,20],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,21:[2,20],23:10,24:11,25:[1,12],26:[2,20],27:[2,20],29:[2,20],30:[2,20],31:[2,20],32:[2,20]},{5:[2,22],6:[2,22],7:[2,22],8:[2,22],9:[2,22],10:[2,22],11:[2,22],12:[2,22],13:[2,22],15:[2,22],21:[2,22],26:[2,22],27:[2,22],29:[2,22],30:[2,22],31:[2,22],32:[2,22]},{4:35,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:34,25:[1,12]},{1:[2,1]},{4:36,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{4:37,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{4:38,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],15:[2,5],21:[2,5],26:[2,5],27:[2,5],29:[2,5],30:[2,5],31:[2,5],32:[2,5]},{4:39,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{4:40,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],15:[2,8],21:[2,8],26:[2,8],27:[2,8],29:[2,8],30:[2,8],31:[2,8],32:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],15:[2,9],21:[2,9],26:[2,9],27:[2,9],29:[2,9],30:[2,9],31:[2,9],32:[2,9]},{4:41,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{7:[2,27],14:[2,27],16:[2,27],17:[2,27],18:[2,27],19:[2,27],25:[2,27]},{7:[2,28],14:[2,28],16:[2,28],17:[2,28],18:[2,28],19:[2,28],25:[2,28]},{7:[2,29],14:[2,29],16:[2,29],17:[2,29],18:[2,29],19:[2,29],25:[2,29]},{7:[2,30],14:[2,30],16:[2,30],17:[2,30],18:[2,30],19:[2,30],25:[2,30]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],15:[2,10],21:[2,10],26:[2,10],27:[2,10],28:22,29:[2,10],30:[2,10],31:[2,10],32:[2,10]},{6:[1,14],7:[1,15],8:[1,16],9:[1,17],10:[1,18],11:[1,19],12:[1,20],13:[1,21],15:[1,42],28:43,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{4:44,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{4:45,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{4:46,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{4:47,5:[2,17],6:[2,17],7:[2,17],8:[2,17],9:[2,17],10:[2,17],11:[2,17],12:[2,17],13:[2,17],14:[1,4],15:[2,17],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,21:[2,17],23:10,24:11,25:[1,12],26:[2,17],27:[2,17],29:[2,17],30:[2,17],31:[2,17],32:[2,17]},{5:[2,21],6:[2,21],7:[2,21],8:[2,21],9:[2,21],10:[2,21],11:[2,21],12:[2,21],13:[2,21],15:[2,21],21:[2,21],26:[2,21],27:[2,21],28:22,29:[2,21],30:[2,21],31:[2,21],32:[2,21]},{6:[2,22],7:[2,22],8:[2,22],9:[2,22],10:[2,22],11:[2,22],12:[2,22],13:[2,22],26:[1,48],29:[2,22],30:[2,22],31:[2,22],32:[2,22]},{6:[1,14],7:[1,15],8:[1,16],9:[1,17],10:[1,18],11:[1,19],12:[1,20],13:[1,21],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{5:[2,2],6:[2,2],7:[2,2],8:[1,16],9:[1,17],10:[1,18],11:[1,19],12:[1,20],13:[1,21],15:[2,2],21:[2,2],26:[2,2],27:[2,2],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{5:[2,3],6:[2,3],7:[2,3],8:[1,16],9:[1,17],10:[1,18],11:[1,19],12:[1,20],13:[1,21],15:[2,3],21:[2,3],26:[2,3],27:[2,3],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[2,4],11:[1,19],12:[1,20],13:[1,21],15:[2,4],21:[2,4],26:[2,4],27:[2,4],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[1,19],12:[1,20],13:[1,21],15:[2,6],21:[2,6],26:[2,6],27:[2,6],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[1,20],13:[1,21],15:[2,7],21:[2,7],26:[2,7],27:[2,7],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{5:[2,25],6:[2,25],7:[2,25],8:[2,25],9:[2,25],10:[2,25],11:[2,25],12:[2,25],13:[2,25],15:[2,25],21:[2,25],26:[2,25],27:[2,25],28:22,29:[2,25],30:[2,25],31:[2,25],32:[2,25]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],15:[2,11],21:[2,11],26:[2,11],27:[2,11],29:[2,11],30:[2,11],31:[2,11],32:[2,11]},{4:49,7:[1,3],14:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:9,23:10,24:11,25:[1,12]},{6:[1,14],7:[1,15],8:[1,16],9:[1,17],10:[1,18],11:[1,19],12:[1,20],13:[1,21],21:[1,50],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{6:[1,14],7:[1,15],8:[1,16],9:[1,17],10:[1,18],11:[1,19],12:[1,20],13:[1,21],21:[1,51],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{6:[1,14],7:[1,15],8:[1,16],9:[1,17],10:[1,18],11:[1,19],12:[1,20],13:[1,21],21:[2,23],27:[2,23],28:22,29:[1,23],30:[1,24],31:[1,25],32:[1,26]},{5:[2,16],6:[2,16],7:[2,16],8:[2,16],9:[2,16],10:[2,16],11:[2,16],12:[2,16],13:[2,16],15:[2,16],21:[2,16],26:[2,16],27:[2,16],28:22,29:[2,16],30:[2,16],31:[2,16],32:[2,16]},{19:[1,53],20:52},{6:[2,25],7:[2,25],8:[2,25],9:[2,25],10:[2,25],11:[2,25],12:[2,25],13:[2,25],15:[1,54],28:22,29:[2,25],30:[2,25],31:[2,25],32:[2,25]},{5:[2,19],6:[2,19],7:[2,19],8:[2,19],9:[2,19],10:[2,19],11:[2,19],12:[2,19],13:[2,19],15:[2,19],21:[2,19],26:[2,19],27:[2,19],29:[2,19],30:[2,19],31:[2,19],32:[2,19]},{5:[2,18],6:[2,18],7:[2,18],8:[2,18],9:[2,18],10:[2,18],11:[2,18],12:[2,18],13:[2,18],15:[2,18],21:[2,18],26:[2,18],27:[2,18],29:[2,18],30:[2,18],31:[2,18],32:[2,18]},{27:[1,55]},{22:[1,31]},{5:[2,26],6:[2,26],7:[2,26],8:[2,26],9:[2,26],10:[2,26],11:[2,26],12:[2,26],13:[2,26],15:[2,26],21:[2,26],26:[2,26],27:[2,26],29:[2,26],30:[2,26],31:[2,26],32:[2,26]},{19:[1,53],20:56},{21:[1,57]},{5:[2,24],6:[2,24],7:[2,24],8:[2,24],9:[2,24],10:[2,24],11:[2,24],12:[2,24],13:[2,24],14:[2,24],15:[2,24],16:[2,24],17:[2,24],18:[2,24],19:[2,24],21:[2,24],25:[2,24],26:[2,24],27:[2,24],29:[2,24],30:[2,24],31:[2,24],32:[2,24]}],
defaultActions: {13:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};

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
/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 9
break;
case 2:return 16
break;
case 3:return 8
break;
case 4:return 10
break;
case 5:return 7
break;
case 6:return 6
break;
case 7:return 11
break;
case 8:return 12
break;
case 9:return 13
break;
case 10:return 14
break;
case 11:return 15
break;
case 12:return 21
break;
case 13:return yy_.yytext;
break;
case 14:return 22
break;
case 15:return 18
break;
case 16:return 17
break;
case 17:return reservedWords( yy_.yytext );
break;
case 18:return 5
break;
case 19:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\s*0+\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:[;]+)/,/^(?:[!=<>]=)/,/^(?:=)/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:[a-zA-Z_]+)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = calculator;
exports.Parser = calculator.Parser;
exports.parse = function () { return calculator.parse.apply(calculator, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}