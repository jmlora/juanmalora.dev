const fs = require('fs')
const https = require('https')
const next = require('next')
const express = require('express')
const compression = require('compression')

let options = {
  key: fs.readFileSync('./ssl/domain.key'),
  cert: fs.readFileSync('./ssl/certificate.pem'),
  ca: fs.readFileSync('./ssl/authority.ca-bundle')
}

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

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

  const httpsServer = https.createServer(options, expressServer)

  httpsServer.listen(3000, () => {
    console.log('HTTPS Server running on port 3000')
  })
})
