const fs = require('fs')
const next = require('next')
const express = require('express')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

const PORT = process.env.PORT || 3000

const shouldCompress = (req, res) => {
  // don't compress responses asking explicitly not
  if (req.headers['x-no-compression']) {
    return false
  }

  // use compression filter function
  return compression.filter(req, res)
}

app.prepare().then(() => {
  const expressServer = express()

  expressServer.use(compression({ filter: shouldCompress }))

  expressServer.all('*', (req, res) => {
    return handler(req, res)
  })

  expressServer.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
