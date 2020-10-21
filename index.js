const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, resoponse) => {
  resoponse.send('Hello word');
})

app.get('/users', (request, resoponse) => {
  resoponse.send('List users');
})

app.listen(port, () => {
  console.log('server listening on port ' + port);
})