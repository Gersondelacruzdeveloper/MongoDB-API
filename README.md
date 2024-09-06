# Cyberthreat Metadata Management System

Welcome to the **Cyberthreat Metadata Management System**! This project is a comprehensive solution designed to collect, manage, and visualize cyberthreat data using a robust Django backend with MongoDB and a modern React frontend with TypeScript.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Frontend Components](#frontend-components)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Cyberthreat Metadata Management System aims to provide a seamless and intuitive interface for managing cyberthreat metadata. This tool allows users to:
- Add new cyberthreats.
- View and search through existing threats.
- Easily integrate with other systems via a well-defined API.

The system consists of a Django backend that handles data management and a React frontend that provides a user-friendly interface for interacting with the data.

## Features

- **Django REST API**: Provides endpoints for managing cyberthreat metadata, including adding, viewing, and querying threats.
- **MongoDB Integration**: Stores threat data efficiently with MongoDB for scalability and flexibility.
- **React Frontend**: A responsive and interactive user interface built with React and TypeScript.
- **Authentication**: Secured API access with JWT-based authentication.
- **User-Friendly Interface**: Simple and intuitive UI for managing and visualizing cyberthreat data.

## Technologies

- **Backend**:
  - Django
  - Djongo (Django-MongoDB Connector)
  - Django REST Framework
  - PyMongo (MongoDB Driver)
  - JWT Authentication

- **Frontend**:
  - React
  - TypeScript
  - Axios (for API requests)
  - CSS/SCSS (for styling)

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cyberthreat-metadata-management.git
   cd cyberthreat-metadata-management/backend
