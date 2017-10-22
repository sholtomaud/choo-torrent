var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
  app.use(require('choo-log')())
  // app.use(require('choo-service-worker')('./sw.js'))
} else {
  // Enable service workers by default.
  // app.use(require('choo-service-worker')('../sw.js'))
}

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app
