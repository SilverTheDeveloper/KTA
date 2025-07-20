const express = require('express');
require('dotenv').config();
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');
const careerRoutes = require('./routes/careerRoutes');
const testiRoutes = require('./routes/testiRoutes');
const app = express();
var cors = require('cors')

app.use(express.json());

app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('WELCOME TO THE HOME PAGE');
});
app.use('/api/product', productRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/career', careerRoutes);
app.use('/api/testimonial', testiRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
