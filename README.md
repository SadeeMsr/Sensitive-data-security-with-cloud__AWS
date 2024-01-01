# Logbook Management System
![Picture1](https://github.com/SadeeMsr/mbbs-doctor-logbook-monitoring-app/assets/76898633/32f256bc-0257-4a4e-8bf1-a806401503de)
*Figure 1: Architecture for Local Dev Environment* 

![final-project-diagram](https://github.com/SadeeMsr/mbbs-doctor-logbook-monitoring-app/assets/76898633/b3f1a73e-6ef0-4959-b765-2cb52c4b2e79)
*Figure 2: AWS Deployment Diagram* 

## Table of Contents
- [Installation](#installation)
- [Project Introduction](#ProjectIntroduction)
- [API Endpoints](#api-endpoints)

## Project Introduction
This project tried to solve the pressing need to enhance data security and monitoring capabilities within the Bangladesh Government's professional healthcare training sectors through the implementation of a secure hybrid cloud infrastructure. Leveraging Amazon Web Services (AWS) Virtual Private Cloud (VPC) architecture and Site-to-site Virtual Private Network (VPN), the proposed solution integrates advanced security measures, including the AES-256-CBC encryption algorithm, to fortify data protection. The project unfolds in two key phases, beginning with a local on-premises prototype before migrating to AWS. The comprehensive approach aims to address scalability, real-time data access, and security challenges inherent in traditional on-premises systems. 

## Installation

### Prerequisites
- Node.js: [Install Node.js](https://nodejs.org/)
- express.js: [Install express.js](https://expressjs.com/)
- prisma: [Install Prisma](https://www.prisma.io/)
- postgresql: [Install Postgresql](https://www.postgresql.org/)
- react: [Install React](https://react.dev/)

### Steps

1. **Connect the postgre DB to servers setting up .env file with `DATABASE_URL="postgresql://Owner:yourPassword@yourLocalHost/Ip/DNS:thePortNumber/dbName?schema=public"` **
2. **Clone the repository:**
   ```bash
   git clone https://github.com/SadeeMsr/mbbs-doctor-logbook-monitoring-app
   //Front-end installation commands
   cd client
   npm install
   npm run dev

   //Backend installation commands
   cd server
   npm install
   npm run watch
   
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
