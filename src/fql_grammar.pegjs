start = statement+

statement
  = newField 
  / filter

newField
  = "field" _ name:string "," _ exp:expression _ LineEnd { return new Fql.NewField(name, exp); }

filter
  = "filter" _ pred:expression _ LineEnd { return new Fql.Filter(pred); }

expression
  = predicate
  / rightOperator
  / leftOperator
  / unary

predicate
  = left:rightOperator _ comp:comparison _ right:predicate { return new comp(left, right); }
  / rightOperator

comparison
  = "=" { return Fql.Equality; }
  / "is" { return Fql.Equality; }
  / "==" { return Fql.Equality; }
  / "!=" { return Fql.NotEquality; }
  / ">" { return Fql.GreaterThan; }
  / "<" { return Fql.LessThan; }
  / ">=" { return Fql.GreaterThanOrEqual; }
  / "<=" { return Fql.LessThanOrEqual; }

rightOperator 
  = left:leftOperator _ op:additionOp _ right:rightOperator { return new op(left, right); }
  / leftOperator

additionOp
  = "-" { return Fql.Subtract; }
  / "+" { return Fql.Add; }

leftOperator 
  = left:unary _ op:multiplyOp _ right:leftOperator { return new op(left, right); }
  / unary

multiplyOp
  = "*" { return Fql.Multiply; }
  / "/" { return Fql.Divide; }

unary = pow / log / negate / reciprocate / primary

pow
  = exp:primary _ "^" _ pow:number {return new Fql.Pow(exp, pow);}

log
  = "log" _ exp:primary "," _ base:number { return new Fql.Log(exp, base) }

negate
  = "-" exp:primary { return new Fql.Negate(exp) }

reciprocate
  = "recip" _ exp:primary { return new Fql.Reciprocal(exp) }

primary
  = "(" exp:expression ")" { return exp }
  / value

value 
  = field
  / number 

number 
  = digits:[0-9.]+ { return new Fql.Number(parseFloat(digits.join("")));}

field
  = "." letters:[A-z0-9_]+ {return new Fql.Field(letters.join(""));}

string
  = "'" letters:[A-z0-9-_!+*/ ]+ "'" {return new Fql.String(letters.join("").replace(' ', '_'));}

_ = [ ]?

LineEnd = [\n] / !.