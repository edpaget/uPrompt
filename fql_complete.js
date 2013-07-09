(function(){var __bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child};window.Fql={};Fql.Expression=function(){function Expression(){}return Expression}();Fql.Value=function(){function Value(){this["eval"]=__bind(this["eval"],this)}Value.prototype["eval"]=function(){return this};return Value}();Fql.Number=function(_super){__extends(Number,_super);function Number(num){this.num=num;this.pow=__bind(this.pow,this);this.log=__bind(this.log,this);this.greaterThanField=__bind(this.greaterThanField,this);this.greaterThanCFunc=__bind(this.greaterThanCFunc,this);this.greaterThanNumber=__bind(this.greaterThanNumber,this);this.greaterThan=__bind(this.greaterThan,this);this.equalToField=__bind(this.equalToField,this);this.equalToCFunc=__bind(this.equalToCFunc,this);this.equalToNumber=__bind(this.equalToNumber,this);this.equalTo=__bind(this.equalTo,this);this.multiplyField=__bind(this.multiplyField,this);this.multiplyCFunc=__bind(this.multiplyCFunc,this);this.multiplyNumber=__bind(this.multiplyNumber,this);this.multiply=__bind(this.multiply,this);this.reciprocate=__bind(this.reciprocate,this);this.negate=__bind(this.negate,this);this.addCFunc=__bind(this.addCFunc,this);this.addField=__bind(this.addField,this);this.addNumber=__bind(this.addNumber,this);this.add=__bind(this.add,this)}Number.prototype.add=function(value){return value.addNumber(this)};Number.prototype.addNumber=function(_arg){var num;num=_arg.num;return new Fql.Number(this.num+num)};Number.prototype.addField=function(_arg){var name,_this=this;name=_arg.name;return new Fql.CFunc(function(i){return i[name]+_this.num})};Number.prototype.addCFunc=function(value){return value.addNumber(this)};Number.prototype.negate=function(){return new Fql.Number(-this.num)};Number.prototype.reciprocate=function(){return new Fql.Number(1/this.num)};Number.prototype.multiply=function(value){return value.multiplyNumber(this)};Number.prototype.multiplyNumber=function(_arg){var num;num=_arg.num;return new Fql.Number(this.num*num)};Number.prototype.multiplyCFunc=function(value){return value.multiplyNumber(this)};Number.prototype.multiplyField=function(_arg){var name,_this=this;name=_arg.name;return new Fql.CFunc(function(i){return _this.num*i[name]})};Number.prototype.equalTo=function(value){return value.equalToNumber(this)};Number.prototype.equalToNumber=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return num===_this.num})};Number.prototype.equalToCFunc=function(_arg){var func,_this=this;func=_arg.func;return new Fql.CFunc(function(i){return _this.num===func(i)})};Number.prototype.equalToField=function(_arg){var name,_this=this;name=_arg.name;return new Fql.CFunc(function(i){return _this.num===i[name]})};Number.prototype.greaterThan=function(value){return value.greaterThanNumber(this)};Number.prototype.greaterThanNumber=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return num>_this.num})};Number.prototype.greaterThanCFunc=function(_arg){var func,_this=this;func=_arg.func;return new Fql.CFunc(function(i){return func(i)>_this.num})};Number.prototype.greaterThanField=function(_arg){var name,_this=this;name=_arg.name;return new Fql.CFunc(function(i){return i[name]>_this.num})};Number.prototype.log=function(_arg){var num;num=_arg.num;return new Fql.Number(Math.log(this.num)/(num?Math.log(num):1))};Number.prototype.pow=function(_arg){var num;num=_arg.num;return new Fql.Number(Math.pow(this.num,num))};return Number}(Fql.Value);Fql.CFunc=function(_super){__extends(CFunc,_super);function CFunc(func){this.func=func;this.pow=__bind(this.pow,this);this.log=__bind(this.log,this);this.multiplyField=__bind(this.multiplyField,this);this.multiplyCFunc=__bind(this.multiplyCFunc,this);this.multiplyNumber=__bind(this.multiplyNumber,this);this.multiply=__bind(this.multiply,this);this.greaterThanField=__bind(this.greaterThanField,this);this.greaterThanCFunc=__bind(this.greaterThanCFunc,this);this.greaterThanNumber=__bind(this.greaterThanNumber,this);this.greaterThan=__bind(this.greaterThan,this);this.equalToField=__bind(this.equalToField,this);this.equalToCFunc=__bind(this.equalToCFunc,this);this.equalToNumber=__bind(this.equalToNumber,this);this.equalTo=__bind(this.equalTo,this);this.reciprocate=__bind(this.reciprocate,this);this.negate=__bind(this.negate,this);this.addCFunc=__bind(this.addCFunc,this);this.addField=__bind(this.addField,this);this.addNumber=__bind(this.addNumber,this);this.add=__bind(this.add,this)}CFunc.prototype.add=function(value){return value.addCFunc(this)};CFunc.prototype.addNumber=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return _this.func(i)+num})};CFunc.prototype.addField=function(_arg){var name,_this=this;name=_arg.name;return new Fql.CFunc(function(i){return _this.func(i)+i[name]})};CFunc.prototype.addCFunc=function(_arg){var func,_this=this;func=_arg.func;return new Fql.CFunc(function(i){return _this.func(i)+func(i)})};CFunc.prototype.negate=function(){var _this=this;return new Fql.CFunc(function(i){return-_this.func(i)})};CFunc.prototype.reciprocate=function(){var _this=this;return new Fql.CFunc(function(i){return 1/_this.func(i)})};CFunc.prototype.equalTo=function(value){return value.equalToCFunc(this)};CFunc.prototype.equalToNumber=function(value){return value.equalToCFunc(this)};CFunc.prototype.equalToCFunc=function(_arg){var func,_this=this;func=_arg.func;return new Fql.CFunc(function(i){return _this.func(i)===func(i)})};CFunc.prototype.equalToField=function(_arg){var field,_this=this;field=_arg.field;return new Fql.CFunc(function(i){return _this.func(i)===i[field]})};CFunc.prototype.greaterThan=function(value){return value.greaterThanCFunc(this)};CFunc.prototype.greaterThanNumber=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return num>_this.func(i)})};CFunc.prototype.greaterThanCFunc=function(_arg){var func,_this=this;func=_arg.func;return new Fql.CFunc(function(i){return func(i)>_this.func(i)})};CFunc.prototype.greaterThanField=function(_arg){var field,_this=this;field=_arg.field;return new Fql.CFunc(function(i){return i[field]>_this.func(i)})};CFunc.prototype.multiply=function(value){return value.multiplyCFunc(this)};CFunc.prototype.multiplyNumber=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return _this.func(i)*num})};CFunc.prototype.multiplyCFunc=function(_arg){var func,_this=this;func=_arg.func;return new Fql.CFunc(function(i){return _this.func(i)*func(i)})};CFunc.prototype.multiplyField=function(_arg){var name,_this=this;name=_arg.name;return new Fql.CFunc(function(i){return _this.func(i)*i[name]})};CFunc.prototype.log=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return Math.log(_this.func(i))/(num?Math.log(num):1)})};CFunc.prototype.pow=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return Math.pow(_this.func(i),num)})};return CFunc}(Fql.Value);Fql.Field=function(_super){__extends(Field,_super);function Field(name){this.name=name;this.pow=__bind(this.pow,this);this.log=__bind(this.log,this);this.reciprocate=__bind(this.reciprocate,this);this.negate=__bind(this.negate,this);this.mutliplyCFunc=__bind(this.mutliplyCFunc,this);this.multiplyField=__bind(this.multiplyField,this);this.multiplyNumber=__bind(this.multiplyNumber,this);this.multiply=__bind(this.multiply,this);this.greaterThanField=__bind(this.greaterThanField,this);this.greaterThanCFunc=__bind(this.greaterThanCFunc,this);this.greaterThanNumber=__bind(this.greaterThanNumber,this);this.greaterThan=__bind(this.greaterThan,this);this.equalToField=__bind(this.equalToField,this);this.equalToCFunc=__bind(this.equalToCFunc,this);this.equalToNumber=__bind(this.equalToNumber,this);this.equalTo=__bind(this.equalTo,this);this.addCFunc=__bind(this.addCFunc,this);this.addField=__bind(this.addField,this);this.addNumber=__bind(this.addNumber,this);this.add=__bind(this.add,this)}Field.prototype.add=function(value){return value.addField(this)};Field.prototype.addNumber=function(value){return value.addField(this)};Field.prototype.addField=function(_arg){var name,_this=this;name=_arg.name;return new Fql.CFunc(function(i){return i[_this.name]+i[name]})};Field.prototype.addCFunc=function(value){return value.addField(this)};Field.prototype.equalTo=function(value){return value.equalToField(this)};Field.prototype.equalToNumber=function(value){return vlue.equalToField(this)};Field.prototype.equalToCFunc=function(value){return value.equalToField(this)};Field.prototype.equalToField=function(_arg){var field,_this=this;field=_arg.field;return new Fql.CFunc(function(i){return i[field]===i[_this.name]})};Field.prototype.greaterThan=function(value){return value.greaterThanField(this)};Field.prototype.greaterThanNumber=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return num>i[_this.name]})};Field.prototype.greaterThanCFunc=function(_arg){var func,_this=this;func=_arg.func;return new Fql.CFunc(function(i){return func(i)>i[_this.name]})};Field.prototype.greaterThanField=function(_arg){var field,_this=this;field=_arg.field;return new Fql.CFunc(function(i){return i[field]>i[_this.name]})};Field.prototype.multiply=function(value){return value.multiplyField(this)};Field.prototype.multiplyNumber=function(value){return value.multiplyField(this)};Field.prototype.multiplyField=function(_arg){var name,_this=this;name=_arg.name;return new Fql.CFunc(function(i){return i[_this.name]*i[name]})};Field.prototype.mutliplyCFunc=function(value){return value.multiplyField(this)};Field.prototype.negate=function(){var _this=this;return new Fql.CFunc(function(i){return-i[_this.name]})};Field.prototype.reciprocate=function(){var _this=this;return new Fql.CFunc(function(i){return 1/i[_this.name]})};Field.prototype.log=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return Math.log(i[_this.name])/(num?Math.log(num):1)})};Field.prototype.pow=function(_arg){var num,_this=this;num=_arg.num;return new Fql.CFunc(function(i){return Math.pow(i[_this.name],num)})};return Field}(Fql.Value);Fql.Select=function(_super){__extends(Select,_super);function Select(funcExp){this.funcExp=funcExp;this["eval"]=__bind(this["eval"],this)}Select.prototype["eval"]=function(){return{func:this.funcExp["eval"]().func}};return Select}(Fql.Expression);Fql.Filter=function(_super){__extends(Filter,_super);function Filter(funcExp){this.funcExp=funcExp;this["eval"]=__bind(this["eval"],this)}Filter.prototype["eval"]=function(){return{func:this.funcExp["eval"]().func}};return Filter}(Fql.Expression);Fql.NewField=function(_super){__extends(NewField,_super);function NewField(fieldName,funcExp){this.fieldName=fieldName;this.funcExp=funcExp;this["eval"]=__bind(this["eval"],this)}NewField.prototype["eval"]=function(){return{field:this.fieldName,func:this.funcExp["eval"]().func}};return NewField}(Fql.Expression);Fql.Add=function(_super){__extends(Add,_super);function Add(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}Add.prototype["eval"]=function(){return this.exp1["eval"]().add(this.exp2["eval"]())};return Add}(Fql.Expression);Fql.Subtract=function(_super){__extends(Subtract,_super);function Subtract(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}Subtract.prototype["eval"]=function(){return this.exp1["eval"]().add(new Fql.Negate(this.exp2)["eval"]())};return Subtract}(Fql.Expression);Fql.Negate=function(_super){__extends(Negate,_super);function Negate(exp){this.exp=exp;this["eval"]=__bind(this["eval"],this)}Negate.prototype["eval"]=function(){return this.exp["eval"]().negate()};return Negate}(Fql.Expression);Fql.Multiply=function(_super){__extends(Multiply,_super);function Multiply(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}Multiply.prototype["eval"]=function(){return this.exp1["eval"]().multiply(this.exp2["eval"]())};return Multiply}(Fql.Expression);Fql.Reciprocate=function(_super){__extends(Reciprocate,_super);function Reciprocate(exp){this.exp=exp;this["eval"]=__bind(this["eval"],this)}Reciprocate.prototype["eval"]=function(){return this.exp["eval"]().reciprocate()};return Reciprocate}(Fql.Expression);Fql.Divide=function(_super){__extends(Divide,_super);function Divide(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}Divide.prototype["eval"]=function(){return this.exp1["eval"]().muliply(new Reciprocate(this.exp2)["eval"]())};return Divide}(Fql.Expression);Fql.Log=function(_super){__extends(Log,_super);function Log(exp,base){this.exp=exp;this.base=base;this["eval"]=__bind(this["eval"],this)}Log.prototype["eval"]=function(){if(this.base instanceof Fql.Number){return this.exp["eval"]().log(this.base)}else{throw new Error("Base must be a FQL Number")}};return Log}(Fql.Expression);Fql.Pow=function(_super){__extends(Pow,_super);function Pow(exp,pow){this.exp=exp;this.pow=pow;this["eval"]=__bind(this["eval"],this)}Pow.prototype["eval"]=function(){if(this.pow instanceof Fql.Number){return this.exp["eval"]().pow(this.pow)}else{throw new Error("Pow must be an FQL Number")}};return Pow}(Fql.Expression);Fql.Equality=function(_super){__extends(Equality,_super);function Equality(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}Equality.prototype["eval"]=function(){return this.exp1["eval"]().equalTo(this.exp2["eval"]())};return Equality}(Fql.Expression);Fql.Not=function(_super){__extends(Not,_super);function Not(exp){this.exp=exp;this["eval"]=__bind(this["eval"],this)}Not.prototype["eval"]=function(){var _this=this;return new Fql.CFunc(function(i){return!_this.exp["eval"]().func(i)})};return Not}(Fql.Expression);Fql.NotEquality=function(_super){__extends(NotEquality,_super);function NotEquality(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}NotEquality.prototype["eval"]=function(){return new Fql.Not(new Fql.Equality(this.exp1,this.exp2))["eval"]()};return NotEquality}(Fql.Expression);Fql.GreaterThan=function(_super){__extends(GreaterThan,_super);function GreaterThan(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}GreaterThan.prototype["eval"]=function(){return this.exp1["eval"]().greaterThan(this.exp2["eval"]())};return GreaterThan}(Fql.Expression);Fql.Or=function(_super){__extends(Or,_super);function Or(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}Or.prototype["eval"]=function(){var _this=this;return new Fql.CFunc(function(i){return _this.exp1["eval"]().func(i)||_this.exp2["eval"]().func(i)})};return Or}(Fql.Expression);Fql.GreaterThanOrEqual=function(){function GreaterThanOrEqual(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}GreaterThanOrEqual.prototype["eval"]=function(){return new Fql.Or(new Fql.GreaterThan(this.exp1,this.exp2),new Fql.Equality(this.exp1,this.exp2))["eval"]()};return GreaterThanOrEqual}();Fql.LessThan=function(){function LessThan(exp1,exp2){this.exp1=exp1;this.exp2=exp2;this["eval"]=__bind(this["eval"],this)}LessThan.prototype["eval"]=function(){return new Fql.GreaterThan(this.exp2,this.exp1)["eval"]()};return LessThan}();Fql.LessThanOrEqual=function(){function LessThanOrEqual(){this["eval"]=__bind(this["eval"],this)}LessThanOrEqual.prototype.construcotr=function(exp1,exp2){this.exp1=exp1;this.exp2=exp2};LessThanOrEqual.prototype["eval"]=function(){return new Fql.GreaterThanOrEqual(this.exp2,this.exp1)["eval"]()};return LessThanOrEqual}()}).call(this);window.Fql.Parser=function(){function quote(s){return'"'+s.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var result={parse:function(input,startRule){var parseFunctions={start:parse_start,statement:parse_statement,newField:parse_newField,filter:parse_filter,expression:parse_expression,predicate:parse_predicate,comparison:parse_comparison,rightOperator:parse_rightOperator,additionOp:parse_additionOp,leftOperator:parse_leftOperator,multiplyOp:parse_multiplyOp,unary:parse_unary,log:parse_log,pow:parse_pow,negate:parse_negate,reciprocate:parse_reciprocate,primary:parse_primary,value:parse_value,number:parse_number,field:parse_field,_:parse__,LineEnd:parse_LineEnd};if(startRule!==undefined){if(parseFunctions[startRule]===undefined){throw new Error("Invalid rule name: "+quote(startRule)+".")}}else{startRule="start"}var pos=0;var reportFailures=0;var rightmostFailuresPos=0;var rightmostFailuresExpected=[];function padLeft(input,padding,length){var result=input;var padLength=length-input.length;for(var i=0;i<padLength;i++){result=padding+result}return result}function escape(ch){var charCode=ch.charCodeAt(0);var escapeChar;var length;if(charCode<=255){escapeChar="x";length=2}else{escapeChar="u";length=4}return"\\"+escapeChar+padLeft(charCode.toString(16).toUpperCase(),"0",length)}function matchFailed(failure){if(pos<rightmostFailuresPos){return}if(pos>rightmostFailuresPos){rightmostFailuresPos=pos;rightmostFailuresExpected=[]}rightmostFailuresExpected.push(failure)}function parse_start(){var result0,result1;result1=parse_statement();if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_statement()}}else{result0=null}return result0}function parse_statement(){var result0;result0=parse_newField();if(result0===null){result0=parse_filter()}return result0}function parse_newField(){var result0,result1,result2,result3,result4,result5,result6,result7;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,9)==="New Field"){result0="New Field";pos+=9}else{result0=null;if(reportFailures===0){matchFailed('"New Field"')}}if(result0!==null){result1=parse__();if(result1!==null){if(/^[A-z0-9 ]/.test(input.charAt(pos))){result3=input.charAt(pos);pos++}else{result3=null;if(reportFailures===0){matchFailed("[A-z0-9 ]")}}if(result3!==null){result2=[];while(result3!==null){result2.push(result3);if(/^[A-z0-9 ]/.test(input.charAt(pos))){result3=input.charAt(pos);pos++}else{result3=null;if(reportFailures===0){matchFailed("[A-z0-9 ]")}}}}else{result2=null}if(result2!==null){if(input.charCodeAt(pos)===44){result3=",";pos++}else{result3=null;if(reportFailures===0){matchFailed('","')}}if(result3!==null){result4=parse__();if(result4!==null){result5=parse_expression();if(result5!==null){result6=parse__();if(result6!==null){result7=parse_LineEnd();if(result7!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,name,exp){return new Fql.NewField(name.join(""),exp)}(pos0,result0[2],result0[5])}if(result0===null){pos=pos0}return result0}function parse_filter(){var result0,result1,result2,result3,result4;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,10)==="New Filter"){result0="New Filter";pos+=10}else{result0=null;if(reportFailures===0){matchFailed('"New Filter"')}}if(result0!==null){result1=parse__();if(result1!==null){result2=parse_expression();if(result2!==null){result3=parse__();if(result3!==null){result4=parse_LineEnd();if(result4!==null){result0=[result0,result1,result2,result3,result4]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,pred){return new Fql.Filter(pred)}(pos0,result0[2])}if(result0===null){pos=pos0}return result0}function parse_expression(){var result0;result0=parse_predicate();if(result0===null){result0=parse_rightOperator();if(result0===null){result0=parse_leftOperator();if(result0===null){result0=parse_unary()}}}return result0}function parse_predicate(){var result0,result1,result2,result3,result4;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_rightOperator();if(result0!==null){result1=parse__();if(result1!==null){result2=parse_comparison();if(result2!==null){result3=parse__();if(result3!==null){result4=parse_predicate();if(result4!==null){result0=[result0,result1,result2,result3,result4]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,left,comp,right){return new comp(left,right)}(pos0,result0[0],result0[2],result0[4])}if(result0===null){pos=pos0}if(result0===null){result0=parse_rightOperator()}return result0}function parse_comparison(){var result0;var pos0;pos0=pos;if(input.charCodeAt(pos)===61){result0="=";pos++}else{result0=null;if(reportFailures===0){matchFailed('"="')}}if(result0!==null){result0=function(offset){return Fql.Equality}(pos0)}if(result0===null){pos=pos0}if(result0===null){pos0=pos;if(input.substr(pos,2)==="is"){result0="is";pos+=2}else{result0=null;if(reportFailures===0){matchFailed('"is"')}}if(result0!==null){result0=function(offset){return Fql.Equality}(pos0)}if(result0===null){pos=pos0}if(result0===null){pos0=pos;if(input.substr(pos,2)==="=="){result0="==";pos+=2}else{result0=null;if(reportFailures===0){matchFailed('"=="')}}if(result0!==null){result0=function(offset){return Fql.Equality}(pos0)}if(result0===null){pos=pos0}if(result0===null){pos0=pos;if(input.substr(pos,2)==="!="){result0="!=";pos+=2}else{result0=null;if(reportFailures===0){matchFailed('"!="')}}if(result0!==null){result0=function(offset){return Fql.NotEquality}(pos0)}if(result0===null){pos=pos0}if(result0===null){pos0=pos;if(input.charCodeAt(pos)===62){result0=">";pos++}else{result0=null;if(reportFailures===0){matchFailed('">"')}}if(result0!==null){result0=function(offset){return Fql.GreaterThan}(pos0)}if(result0===null){pos=pos0}if(result0===null){pos0=pos;if(input.charCodeAt(pos)===60){result0="<";pos++}else{result0=null;if(reportFailures===0){matchFailed('"<"')}}if(result0!==null){result0=function(offset){return Fql.LessThan}(pos0)}if(result0===null){pos=pos0}if(result0===null){pos0=pos;if(input.substr(pos,2)===">="){result0=">=";pos+=2}else{result0=null;if(reportFailures===0){matchFailed('">="')}}if(result0!==null){result0=function(offset){return Fql.GreaterThanOrEqual}(pos0)}if(result0===null){pos=pos0}if(result0===null){pos0=pos;if(input.substr(pos,2)==="<="){result0="<=";pos+=2}else{result0=null;if(reportFailures===0){matchFailed('"<="')}}if(result0!==null){result0=function(offset){return Fql.LessThanOrEqual}(pos0)}if(result0===null){pos=pos0}}}}}}}}return result0}function parse_rightOperator(){var result0,result1,result2,result3,result4;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_leftOperator();if(result0!==null){result1=parse__();if(result1!==null){result2=parse_additionOp();if(result2!==null){result3=parse__();if(result3!==null){result4=parse_rightOperator();if(result4!==null){result0=[result0,result1,result2,result3,result4]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,left,op,right){return new op(left,right)}(pos0,result0[0],result0[2],result0[4])}if(result0===null){pos=pos0}if(result0===null){result0=parse_leftOperator()}return result0}function parse_additionOp(){var result0;var pos0;pos0=pos;if(input.charCodeAt(pos)===45){result0="-";pos++}else{result0=null;if(reportFailures===0){matchFailed('"-"')}}if(result0!==null){result0=function(offset){return Fql.Subtract}(pos0)}if(result0===null){pos=pos0}if(result0===null){pos0=pos;if(input.charCodeAt(pos)===43){result0="+";pos++}else{result0=null;if(reportFailures===0){matchFailed('"+"')}}if(result0!==null){result0=function(offset){return Fql.Add}(pos0)}if(result0===null){pos=pos0}}return result0}function parse_leftOperator(){var result0,result1,result2,result3,result4;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_unary();if(result0!==null){result1=parse__();if(result1!==null){result2=parse_multiplyOp();if(result2!==null){result3=parse__();if(result3!==null){result4=parse_leftOperator();if(result4!==null){result0=[result0,result1,result2,result3,result4]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,left,op,right){return new op(left,right)}(pos0,result0[0],result0[2],result0[4])}if(result0===null){pos=pos0}if(result0===null){result0=parse_unary()}return result0}function parse_multiplyOp(){var result0;var pos0;pos0=pos;if(input.charCodeAt(pos)===42){result0="*";pos++}else{result0=null;if(reportFailures===0){matchFailed('"*"')}}if(result0!==null){result0=function(offset){return Fql.Multiply}(pos0)}if(result0===null){pos=pos0}if(result0===null){pos0=pos;if(input.charCodeAt(pos)===47){result0="/";pos++}else{result0=null;if(reportFailures===0){matchFailed('"/"')}}if(result0!==null){result0=function(offset){return Fql.Divide}(pos0)}if(result0===null){pos=pos0}}return result0}function parse_unary(){var result0;result0=parse_log();if(result0===null){result0=parse_pow();if(result0===null){result0=parse_negate();if(result0===null){result0=parse_reciprocate()}}}return result0}function parse_log(){var result0,result1,result2,result3,result4;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,3)==="log"){result0="log";pos+=3}else{result0=null;if(reportFailures===0){matchFailed('"log"')}}if(result0!==null){result1=parse__();if(result1!==null){result2=parse_primary();if(result2!==null){if(input.charCodeAt(pos)===44){result3=",";pos++}else{result3=null;if(reportFailures===0){matchFailed('","')}}if(result3!==null){result4=parse_number();if(result4!==null){result0=[result0,result1,result2,result3,result4]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,exp,base){return new Fql.Log(exp,base)}(pos0,result0[2],result0[4])}if(result0===null){pos=pos0}if(result0===null){result0=parse_primary()}return result0}function parse_pow(){var result0,result1,result2,result3,result4;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_primary();if(result0!==null){result1=parse__();if(result1!==null){if(input.charCodeAt(pos)===94){result2="^";pos++}else{result2=null;if(reportFailures===0){matchFailed('"^"')}}if(result2!==null){result3=parse__();if(result3!==null){result4=parse_number();if(result4!==null){result0=[result0,result1,result2,result3,result4]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,exp,base){return new Fql.Pow(exp,base)}(pos0,result0[0],result0[4])}if(result0===null){pos=pos0}if(result0===null){result0=parse_primary()}return result0}function parse_negate(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;if(input.charCodeAt(pos)===45){result0="-";pos++}else{result0=null;if(reportFailures===0){matchFailed('"-"')}}if(result0!==null){result1=parse_primary();if(result1!==null){result0=[result0,result1]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,exp){return new Fql.Negate(exp)}(pos0,result0[1])}if(result0===null){pos=pos0}if(result0===null){result0=parse_primary()}return result0}function parse_reciprocate(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,5)==="recip"){result0="recip";pos+=5}else{result0=null;if(reportFailures===0){matchFailed('"recip"')}}if(result0!==null){result1=parse__();if(result1!==null){result2=parse_primary();if(result2!==null){result0=[result0,result1,result2]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,exp){return new Fql.Reciprocal(exp)}(pos0,result0[2])}if(result0===null){pos=pos0}if(result0===null){result0=parse_primary()}return result0}function parse_primary(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.charCodeAt(pos)===40){result0="(";pos++}else{result0=null;if(reportFailures===0){matchFailed('"("')}}if(result0!==null){result1=parse_expression();if(result1!==null){if(input.charCodeAt(pos)===41){result2=")";pos++}else{result2=null;if(reportFailures===0){matchFailed('")"')}}if(result2!==null){result0=[result0,result1,result2]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,exp){return exp}(pos0,result0[1])}if(result0===null){pos=pos0}if(result0===null){result0=parse_value()}return result0}function parse_value(){var result0;result0=parse_field();if(result0===null){result0=parse_number()}return result0}function parse_number(){var result0,result1;var pos0;pos0=pos;if(/^[0-9.]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++}else{result1=null;if(reportFailures===0){matchFailed("[0-9.]")}}if(result1!==null){result0=[];while(result1!==null){result0.push(result1);if(/^[0-9.]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++}else{result1=null;if(reportFailures===0){matchFailed("[0-9.]")}}}}else{result0=null}if(result0!==null){result0=function(offset,digits){return new Fql.Number(parseFloat(digits.join("")))}(pos0,result0)}if(result0===null){pos=pos0}return result0}function parse_field(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.charCodeAt(pos)===46){result0=".";pos++}else{result0=null;if(reportFailures===0){matchFailed('"."')}}if(result0!==null){if(/^[A-z0-9_]/.test(input.charAt(pos))){result2=input.charAt(pos);pos++}else{result2=null;if(reportFailures===0){matchFailed("[A-z0-9_]")}}if(result2!==null){result1=[];while(result2!==null){result1.push(result2);if(/^[A-z0-9_]/.test(input.charAt(pos))){result2=input.charAt(pos);pos++}else{result2=null;if(reportFailures===0){matchFailed("[A-z0-9_]")}}}}else{result1=null}if(result1!==null){result0=[result0,result1]}else{result0=null;pos=pos1}}else{result0=null;pos=pos1}if(result0!==null){result0=function(offset,letters){return new Fql.Field(letters.join(""))}(pos0,result0[1])}if(result0===null){pos=pos0}return result0}function parse__(){var result0;if(/^[ ]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++}else{result0=null;if(reportFailures===0){matchFailed("[ ]")}}result0=result0!==null?result0:"";return result0}function parse_LineEnd(){var result0;var pos0;if(/^[\n]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++}else{result0=null;if(reportFailures===0){matchFailed("[\\n]")}}if(result0===null){pos0=pos;reportFailures++;if(input.length>pos){result0=input.charAt(pos);pos++}else{result0=null;if(reportFailures===0){matchFailed("any character")}}reportFailures--;if(result0===null){result0=""}else{result0=null;pos=pos0}}return result0}function cleanupExpected(expected){expected.sort();var lastExpected=null;var cleanExpected=[];for(var i=0;i<expected.length;i++){if(expected[i]!==lastExpected){cleanExpected.push(expected[i]);lastExpected=expected[i]}}return cleanExpected}function computeErrorPosition(){var line=1;var column=1;var seenCR=false;for(var i=0;i<Math.max(pos,rightmostFailuresPos);i++){var ch=input.charAt(i);if(ch==="\n"){if(!seenCR){line++}column=1;seenCR=false}else if(ch==="\r"||ch==="\u2028"||ch==="\u2029"){line++;column=1;seenCR=true}else{column++;seenCR=false}}return{line:line,column:column}}var result=parseFunctions[startRule]();if(result===null||pos!==input.length){var offset=Math.max(pos,rightmostFailuresPos);var found=offset<input.length?input.charAt(offset):null;
var errorPosition=computeErrorPosition();throw new this.SyntaxError(cleanupExpected(rightmostFailuresExpected),found,offset,errorPosition.line,errorPosition.column)}return result},toSource:function(){return this._source}};result.SyntaxError=function(expected,found,offset,line,column){function buildMessage(expected,found){var expectedHumanized,foundHumanized;switch(expected.length){case 0:expectedHumanized="end of input";break;case 1:expectedHumanized=expected[0];break;default:expectedHumanized=expected.slice(0,expected.length-1).join(", ")+" or "+expected[expected.length-1]}foundHumanized=found?quote(found):"end of input";return"Expected "+expectedHumanized+" but "+foundHumanized+" found."}this.name="SyntaxError";this.expected=expected;this.found=found;this.message=buildMessage(expected,found);this.offset=offset;this.line=line;this.column=column};result.SyntaxError.prototype=Error.prototype;return result}();