# Database Upload Guide for Cravé Website

This guide will help you upload the `database.json` file to a free online database service.

## Option 1: Firebase Realtime Database (Recommended - Free Tier Available)

### Steps:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Go to **Realtime Database** in the left menu
4. Click **Create Database**
5. Choose your location and start in **test mode**
6. Once created, click the **⋮** menu → **Import JSON**
7. Upload the `database.json` file
8. Update security rules as needed

### Firebase Commands (Alternative - using Firebase CLI):
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init database

# Import the JSON file
firebase database:set / database.json --project YOUR_PROJECT_ID
```

---

## Option 2: Supabase (Free Tier Available)

### Steps:
1. Go to [Supabase](https://supabase.com/)
2. Sign up and create a new project
3. Go to **Table Editor** in the left menu
4. Create tables manually or use SQL Editor:

### SQL Commands for Supabase:
```sql
-- Create products table
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC,
  currency TEXT DEFAULT 'INR',
  unit TEXT,
  weight TEXT,
  description TEXT,
  image TEXT,
  bestPick BOOLEAN DEFAULT false,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create categories table
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  icon TEXT,
  description TEXT
);

-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  products JSONB,
  total_amount NUMERIC,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

Then use the Supabase dashboard to import data or use their API.

---

## Option 3: MongoDB Atlas (Free Tier Available)

### Steps:
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up and create a free cluster
3. Create a database and collection
4. Use **Import** feature to upload JSON file

### MongoDB Import Command:
```bash
# Install MongoDB Database Tools
# Then use mongoimport
mongoimport --uri "mongodb+srv://username:password@cluster.mongodb.net/crave" \
  --collection products \
  --file database.json \
  --jsonArray
```

---

## Option 4: JSONBin.io (Simple JSON Storage - Free)

### Steps:
1. Go to [JSONBin.io](https://jsonbin.io/)
2. Sign up for free account
3. Create a new bin
4. Copy and paste the contents of `database.json`
5. Save and get the API endpoint

---

## Option 5: Airtable (Free Tier Available)

### Steps:
1. Go to [Airtable](https://airtable.com/)
2. Create a new base
3. Create tables: Products, Categories, Users, Orders
4. Import data manually or use their import feature

---

## Quick Setup Script (Node.js)

Create a file `upload-database.js`:

```javascript
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('database.json', 'utf8'));

// Example for Firebase Admin SDK
const admin = require('firebase-admin');
const serviceAccount = require('./path-to-serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.database();
const ref = db.ref('/');

// Upload products
data.products.forEach(product => {
  ref.child(`products/${product.id}`).set(product);
});

// Upload categories
data.categories.forEach(category => {
  ref.child(`categories/${category.id}`).set(category);
});

console.log('Database uploaded successfully!');
```

---

## Recommended: Firebase Realtime Database

For quick setup, Firebase is recommended because:
- ✅ Free tier with generous limits
- ✅ Real-time updates
- ✅ Easy JSON import
- ✅ Good documentation
- ✅ No credit card required for free tier

### Quick Firebase Setup:
1. Visit: https://console.firebase.google.com/
2. Create project → Enable Realtime Database
3. Import `database.json` via dashboard
4. Get your database URL and add to your website's JavaScript

---

## Notes:
- Replace placeholder values with actual data
- Set up proper authentication/security rules
- Consider adding indexes for better performance
- Regular backups recommended
- Update prices and availability as needed

For any issues, refer to the respective platform's documentation.


