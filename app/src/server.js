require('dotenv').config();

const app = require('./app.js');

app.listen(process.env.PORT || 3000, () => console.log('Server started.'));
