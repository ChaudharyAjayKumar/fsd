/* copy code in js file */

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

/*to run the code */
/*npm init -y */
/*npm install express */
/* node filename.js */
