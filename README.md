# uPrompt
A small, poorly designed, language for manipulating [ZooTools](http://tools.zooniverse.org). 

## Version
`0.0.0`

## Rationale
You should think of uPrompt as the worst shell ever. uPrompt is not [Turing Complete](http://en.wikipedia.org/wiki/Turing_completeness), as it does not support recursion/looping or conditional branching. It also not does not have functions or variables. All of these restrictions may change in future versions. 

uPrompt's only purpose is to provide a very simple text interface for manipulating objects in the ZooTools dashboard, although at the moment it only allows for creating composite rows and filters. 

## Basic Syntax
It is based around **Statements**, which have a basic structure that looks like this `command arg1, arg2, ..., argn` each individual argument may be composed of infinity nested **Expressions**. Expressions must return the result the command expects. For instance a `filter` command (explained below), must return a Boolean expression using a comparison operator (>, <, etc). Expressions follow normal order of operations. 

Allowed operators in expressions are `( ) recip - ^ log / * - + <= >= < > != == is =`. `==`, `is`, and `=` all represent arithmatic equality, but also should be used with caution when dealing with [floating point numbers](http://en.wikipedia.org/wiki/Floating_point).

You can refer to individual fields in the Dashboard data you're manipulating using a dot ('.') and the **denormalized** name of the field. Denormalized means that `Petro R90` in the tools becomes `.petro_r90` in uPrompt. Examples. 'U' -> `.u` 'RA' -> `.ra`. 

## Commands 
Currently two commands are implemented in uPrompt. `filter`, and `field`.

### `filter bool_expression`

Example: `filter .u > 15.6`

This creates a new filter on a set of data. It takes a single argument, which is an expression that evaluates to a boolean. This means it should have a comparison operator somewhere in the expression. The example above filters a data set to only have objects whose _u_ field is greater than 15.6

### `field string_expression, arithmatic_expression` 

Example: `field 'Colour', .u + .g`

This creates a new field in a set of data. It takes two arguments. The first is a string expression (at the moment this means it can only be a string). The second is a arithmatic expression that results in the field's value. You can apply any of the non-comparison operators detailed above to any number of fields in the data set to compute the value. 

## License
MIT see LICENSE