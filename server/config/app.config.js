import express from 'express'
import path from 'path'

const configApp = (app) => {
  // serve static files
  const CWD = process.cwd()
  app.use('/dist', express.static(path.join(CWD, 'dist')))

  // use body-parsers
  app.use(express.json())

  // mount any other setting middleware below this line
}

export default configApp
