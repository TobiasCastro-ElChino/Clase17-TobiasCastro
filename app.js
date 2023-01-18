const express = require('express');
const app = express();
const path = require ('path');
const port = 3020;

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath))

app.get('/', (req,res) => res.sendFile(path.resolve('./views/home.html')))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

