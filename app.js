const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const cors = require('cors');
const path = require('path');
const joinPath = path.join(__dirname, '../build/web/');

app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(express.static(joinPath))
app.get('/*', (req, res) => {
    res.sendFile(`${joinPath}`)
});
httpServer.listen(80, () => {
    console.log("listing")
})