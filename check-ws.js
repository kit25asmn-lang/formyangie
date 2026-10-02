const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const WebSocket = require('ws'); // check if ws is installed or write raw ws frame

// First check if ws is available
try {
  require.resolve('ws');
  console.log('ws is available');
} catch(e) {
  console.log('ws not available, testing with node evaluate');
}
