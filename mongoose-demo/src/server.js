import http from 'http';

import app from './app.js';
import {init} from './db/mongoDb.js'

await init()

const HTTPserver = http.createServer(app)
const PORT = 8080;

HTTPserver.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`)
})