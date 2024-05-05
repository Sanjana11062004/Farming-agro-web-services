import express from 'express';
import mysql from 'mysql';
import cors from 'cors'; // Import cors middleware

const app = express();
const port = 5002;

app.use(cors()); // Use cors middleware

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'farming'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Parse JSON bodies
app.use(express.json());

// Register endpoint
// Register endpoint
app.post('/register', (req, res) => {
  const { email, password, isFarmer } = req.body;
  const errors = {};

  // Validate email
  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid';
  }

  // Validate password
  if (!password.trim()) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors); // Return validation errors as JSON
  }

  const newUser = { email, password, isFarmer };

  db.query('INSERT INTO registration SET ?', newUser, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Error registering user' }); // Send error as JSON
    }
    console.log('User registered successfully');
    res.status(200).json({ message: 'User registered successfully' }); // Send success message as JSON
  });
});
app.post('/addProduct', (req, res) => {
  const { productName, productImage, sellerName, sellerNumber, areaOfDelivery, price, discount } = req.body;

  const newProduct = {
    productName,
    productImage,
    sellerName,
    sellerNumber,
    areaOfDelivery,
    price,
    discount,
  };

  const sql = 'INSERT INTO products SET ?';

  db.query(sql, newProduct, (err, result) => {
    if (err) {
      console.error('Error adding product:', err);
      return res.status(500).json({ message: 'Failed to add product' });
    }
    console.log('Product added successfully');
    res.status(200).json({ message: 'Product added successfully' });
  });
});


app.get('/getProducts', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Error fetching products' });
    } else {
      res.json(results);
    }
  });
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
