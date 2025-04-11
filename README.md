# 🛒 E-Commerce Backend API

This is a **Node.js + Express.js** based backend API for an e-commerce application. It is designed with scalability and modularity in mind. The project follows the **MVC architecture** and includes features like user authentication, product management, and more.

---

## ✅ Modules Implemented

### 1. **User Authentication & Authorization**
- User Signup/Login using JWT
- Password hashing using bcrypt
- Role-based access control (Admin/User)

### 2. **Product Management**
- CRUD operations for products
- Multer-based file upload for images
- Product fields: `name`, `description`, `price`, `category`, `stock`, `images[]`
- Search and filter products by name or category
- Products associated with their respective users

---

## 📌 Upcoming Modules

These modules are part of the planned implementation:

- [ ] Cart Management  
- [ ] Order Processing  
- [ ] Payment Simulation

> ⚠️ Note: Due to the wide scope and the intensive nature of the project, only two modules are completed so far. Remaining modules are under development.

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Authentication:** JWT, bcrypt  
- **File Uploads:** Multer (Local or Cloudinary)  
- **Docs:** Swagger (swagger-jsdoc, swagger-ui-express)  
- **Architecture:** MVC Pattern

---

