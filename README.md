# EndToEndProject
# Bridal Salon Management System

A comprehensive web application designed to streamline operations in a bridal salon environment.  
The system allows the salon manager to efficiently create and manage profiles for managers, employees, and clients. It supports scheduling, schedule management, and employee work hours tracking. Each employee has access to a dedicated portal where they can view a personal summary of their recorded work hours.

The project also includes a public interface where visitors can explore the salon's dress gallery and easily get in touch via a built-in contact page.

## Key Features

- Dashboard for managing users, roles, and salon operations
- Schedule appointments and calendar management
- Track working hours with a personalized access portal for each employee
- Dress gallery for customers to browse available designs
- Contact page for direct inquiries
- With admin permission, CRUD operations for website pages
- Complex queries and data management across the system  
- Coordinated handling of appointments, wedding dates, and dress returns  
- Efficient management of all salon operations to prevent conflicts and ensure a smooth workflow  
- Secure login using JWT tokens with automatic page refresh while maintaining permission security

## Project Overview

Developed as part of a two-person team, focusing on providing a modern and practical management solution for bridal salons, combining internal operational tools with a clean and user-friendly customer experience.

## Technologies Used

- React.js (Client)
- Node.js & Express (Server)
- MySql (Database)
- JWT for authentication
- CSS for styling

## Running the Project

Open the terminal in both the **client** and **server** directories.
```bash
# Install dependencies
npm install

# Start client
npm run dev

# Start server
npm start
