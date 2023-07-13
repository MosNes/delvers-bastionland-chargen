const express = require('express');
const path = require('path');

//use heroku defined port or 3001 if developing locally
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const server = app.listen(PORT, function(err) {
    console.log('Express Server listening on port: ' + PORT);
});