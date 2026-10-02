const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec, spawn } = require('child_process');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath);
    const contentType = ext === '.html' ? 'text/html' : ext === '.css' ? 'text/css' : ext === '.js' ? 'application/javascript' : 'text/plain';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fs.readFileSync(filePath));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8081, async () => {
  console.log('Test server listening on 8081');
  
  // Launch Edge with remote debugging
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const edge = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    'http://localhost:8081/'
  ]);

  setTimeout(async () => {
    try {
      const fetch = (await import('node:http')).get;
      // Get websocket debugger url
      http.get('http://127.0.0.1:9223/json', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', async () => {
          const list = JSON.parse(data);
          console.log('Target page:', list[0]?.title, list[0]?.url);
          edge.kill();
          server.close();
          process.exit(0);
        });
      });
    } catch(e) {
      console.error(e);
      edge.kill();
      server.close();
      process.exit(1);
    }
  }, 2000);
});
