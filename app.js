const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const cors = require('cors');
const path = require('path');
const joinPath = path.join(__dirname, '/web/');

app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(express.static(joinPath))
app.get('/*', (req, res) => {
    res.sendFile(`${joinPath}`)
});
const PORT = process.env.PORT || 80;
httpServer.listen(PORT, () => console.log("listing"));