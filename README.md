# Logbook Management System
![Picture1](https://github.com/SadeeMsr/mbbs-doctor-logbook-monitoring-app/assets/76898633/32f256bc-0257-4a4e-8bf1-a806401503de)

## Table of Contents
- [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Installation

### Prerequisites
- Node.js: [Install Node.js](https://nodejs.org/)
- express.js: [Install express.js](https://expressjs.com/)
- prisma: [Install Prisma](https://www.prisma.io/)
- postgresql: [Install Postgresql](https://www.postgresql.org/)

### Steps

1. **Connect the postgre DB to servers setting up .env file with `DATABASE_URL="postgresql://Owner:yourPassword@localhost:thePortNumber/dbName?schema=public"` **
2. **Clone the repository:**
   ```bash
   git clone https://github.com/SadeeMsr/inventory-management-system
   cd server
   npm install
   npm start
## API Endpoints
### Products
- Create a product
  (Method: POST, 
  Endpoint: `/products` , 
  Handler: createProduct)
  
- Fetch All Products
  (Method: GET, 
 Endpoint: `/products`, 
 Handler: fetchProducts)

- Fetch a Product by ID
  (Method: GET, 
 Endpoint: `/products/:id` , 
 Handler: fetchProducts)


 - Update a Product by ID
  (Method: PUT, 
 Endpoint:` /products/:id`, 
 Handler: updateProduct)

  - Delete a Product by ID
  (Method: DELETE, 
 Endpoint: `/products/:id`, 
 Handler: deleteProduct)
