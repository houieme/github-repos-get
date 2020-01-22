const express = require('express');
const app = express();

app.get('/',(req, res) =>res.send('ApI Running'));
//define routes
app.use('/api/repos', require('./routes/api/repos'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
