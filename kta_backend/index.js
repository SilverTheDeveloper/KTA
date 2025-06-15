const express = require('express');
require('dotenv').config();
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes'); // updated path
const contactRoutes = require('./routes/contactRoutes'); // updated path
const careerRoutes = require('./routes/careerRoutes'); // updated path
const app = express();
var cors = require('cors')



app.use(express.json()); // Add this to parse JSON bodies

app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('WELCOME TO THE HOME PAGE');
});
app.use('/api/product', productRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/career', careerRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
