const express = require('express');
const app = express();

//define routes
app.use('/api/repos', require('./routes/api/repos'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('front/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'front', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
