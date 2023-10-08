const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Bem-vindo à API!' });
});

app.post('/api/somar', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Certifique-se de fornecer "num1" e "num2".' });
  }

  const resultado = num1 + num2;
  res.json({ resultado });
});
//const port = 3000;
//app.listen(port, () => {
//  console.log(`Servidor rodando em http://localhost:${port}`);
//});

module.exports = app; // Exporta o app para que seja possível importá-lo em outros arquivos
