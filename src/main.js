const express = require('express');
const cors = require('cors')
const app = express()
const PORT = 80;    //port 80 maybe in use (try another port)
app.use(express.json());
app.use(
    cors({
        origin: '*',
    })
)

app.get('/example', (req, res) => {
    res.status(200).send({
        "JSON": "javascript object notation",
    });
})

app.post('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    res.status(200).send({
        "id": id,
        "name": name,
        "email": email
    });
  });

app.listen(
    PORT,
    () => console.log(`listening on http://localhost:${PORT}`)
)
