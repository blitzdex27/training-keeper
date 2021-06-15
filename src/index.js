const express = require('express');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '..', 'client')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

app.get('/data', async (req, res) => {
  const tK = await readFile(
    path.resolve(__dirname, '..', 'data', 'tKeeper.json')
  );

  res.json(JSON.parse(tK));
});

app.post('/data', async (req, res) => {
  console.log(req.body);
  const tKPath = path.resolve(__dirname, '..', 'data', 'tKeeper.json');
  await writeFile(tKPath, JSON.stringify(req.body, null, 2));
  const tK = await readFile(tKPath);
  return res.json(JSON.parse(tK));
  //   return res.json({ success: true });
});

app.listen(5000, () => {
  process.stdout.write('Server started at port 5000\n');
});
