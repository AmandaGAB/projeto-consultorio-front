//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`$./dist/Projeto-Consultorio-Front-2.0`));
app.get('/*', (req, res) =>{
    res.sendFile(path.join(`./dist/Projeto-Consultorio-Front-2.0/index.html`));
})

// // Serve only the static files form the dist directory
// app.use(express.static('./dist/Projeto-Consultorio-Front-2.0'));
//
// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/Projeto-Consultorio-Front-2.0/'}),
// );

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
