const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors()); // React에서 호출 가능하게

app.get('/', (req, res) => {
  res.send('Hello Node.js Server!');
});

app.get('/api/data', (req, res) => {
    const py = spawn('python', ['datacrolling.py']); // Python 코드 실행
    let data = '';

    py.stdout.on('data', chunk => { data += chunk.toString(); });
    py.stderr.on('data', err => { console.error(err.toString()); });

    py.on('close', () => {
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
