const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err.message));

app.use('/api/contacts', require('./backend/routes/contacts'));
app.use('/api/projects', require('./backend/routes/projects'));
app.use('/api/qualifications', require('./backend/routes/qualifications'));
app.use('/api/users', require('./backend/routes/users'));
app.use('/api/auth', require('./backend/routes/auth'));

app.get('/', (req, res) => res.send('Hello from Node API!'));

if (process.env.NODE_ENV === 'production') {
  const clientBuild = path.join(__dirname, 'client', 'dist');
  if (require('fs').existsSync(clientBuild)) {
    app.use(express.static(clientBuild));
    app.get('*', (req, res) => res.sendFile(path.join(clientBuild, 'index.html')));
  }
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
