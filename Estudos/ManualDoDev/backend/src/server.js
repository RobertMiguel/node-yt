const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333

app.listen(200, ()=> console.log(`Server running, port ${PORT}`))