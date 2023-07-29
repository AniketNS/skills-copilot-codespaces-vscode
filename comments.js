// create a web server
// listen on port 3000

const express = require('express');
const app = express();
const port = 3000;

// set view engine to ejs
app.set('view engine', 'ejs');

// set public folder to serve static files
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page
app.get('/', (req, res) => {
  let drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 },
  ];
  let tagline =
    "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline,
  });
});

// about page
app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.listen(port);
console.log(`Server is listening on port ${port}`);