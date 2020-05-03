const app = require('./app.js');

app.listen(app.port, () => console.log(`Server as started on port ${app.port}`));
