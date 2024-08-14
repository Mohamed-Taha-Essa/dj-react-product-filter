
# DJ-React-Product-Filter

A full-stack product filtering application built with Django (backend) and React.js (frontend). This application demonstrates how to implement advanced filtering and searching functionality in a modern web application, making it easy for users to navigate and find products that match their criteria.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project combines the power of Django as a robust backend framework and React.js as a dynamic frontend library. It is designed to handle product data efficiently and provide an intuitive user interface for filtering and searching through products based on various criteria.

## Features

- **Advanced Filtering:** Filter products by categories, price range.
- **Search Functionality:** Full-text search to quickly find products (soon).
- **Responsive Design:** The application is fully responsive and works seamlessly across devices.
- **REST API:** The backend exposes a well-structured REST API for handling product data.
- **Modular Code Structure:** The project is organized to allow easy scalability and maintenance.

## Tech Stack

### Backend
- **Django**: A high-level Python web framework that enables rapid development of secure and maintainable websites.
- **Django REST Framework**: A powerful toolkit for building Web APIs in Django.

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

### Database
- **SQLite**: A lightweight database used for development and testing (can be replaced with PostgreSQL/MySQL for production).

## Installation

### Prerequisites

- Python 3.11
- Node.js & npm
- Git

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mohamed-Taha-Essa/dj-react-product-filter.git
   cd dj-react-product-filter/backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Start the Django development server:**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```


## Usage

1. **Access the application:**
   - Backend API: `http://localhost:8000/api/`
   - Frontend UI: `http://localhost:3000/`

2. **Explore the filtering functionality:**
   - Use category and filters on the frontend to find products that meet your criteria.

## Project Structure

```bash
dj-react-product-filter/
│
├── backend/                 # Django backend
│   ├── product_filter/      # Django project folder
│   ├── products/            # Products app
│   ├── db.sqlite3           # SQLite database (for development)
│   └── manage.py            # Django management script
│
└── frontend/                # React frontend
    ├── public/              # Public assets
    ├── src/                 # React source code
    ├── tailwind.config.js   # Tailwind CSS configuration
    └── package.json         # Node.js dependencies and scripts
```

## API Endpoints

### Products API

- **GET /api/products/**: Retrieve a list of products with filtering and searching capabilities.
- **GET /api/products/:id/**: Retrieve details of a specific product.
- **POST /api/products/**: Add a new product (requires authentication).
- **PUT /api/products/:id/**: Update a product (requires authentication).
- **DELETE /api/products/:id/**: Delete a product (requires authentication).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.
