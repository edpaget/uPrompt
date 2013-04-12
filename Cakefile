fs = require 'fs'
{spawn, exec} = require 'child_process' 
{print} = require 'util'

task 'build', 'Build lib/ from src', (options) ->
  coffee = spawn './node_modules/.bin/coffee', ['-c', 'fql.coffee']
  coffee.stderr.on 'data', (data) ->
    process.stderr.write data.toString()
  coffee.stdout.on 'data', (data) ->
    print data.toString()
  coffee.on 'exit', (code) ->
    invoke 'build:grammar'
    callback?() if code is 0

task 'build:grammar', "Build FQL grammar using pegjs", ->
  exec('./node_modules/.bin/pegjs -e "window.Fql.Parser" fql_grammar.pegjs fql_grammar.js', (err, stdout, stderr) ->
    console.log err if err)
  invoke 'concat'

task 'concat', "Merge parser and interpreter", ->
  exec('uglifyjs fql.js fql_grammar.js --output fql_complete.js', 
    (err, stdout, stderr) -> console.log err if err)