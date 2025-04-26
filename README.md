# Internship Platform

This project is a web application designed to help students find internships based on their strengths. It utilizes a modern tech stack including React.js, TailwindCSS, Spring Boot, MongoDB, AWS S3, and Docker.

## Project Structure

The project is divided into three main parts:

- **Backend**: A Spring Boot application that handles the business logic and data management.
- **Frontend**: A React application that provides the user interface.
- **Database**: MongoDB for data storage.

## Technologies Used

- **Frontend**: 
  - React.js for building user interfaces.
  - TailwindCSS for styling.
  
- **Backend**: 
  - Spring Boot for creating RESTful APIs.
  - MongoDB for data persistence.
  
- **Cloud Storage**: 
  - AWS S3 for storing files and assets.
  
- **Containerization**: 
  - Docker for containerizing the applications.

## Setup Instructions

### Prerequisites

- Java 11 or higher
- Node.js and npm
- Docker
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory.
2. Build the project using Maven:
   ```
   mvn clean install
   ```
3. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

### Running with Docker

1. Ensure Docker is running.
2. Navigate to the root of the project.
3. Run the following command to start all services:
   ```
   docker-compose up
   ```

## Features

- User authentication and profile management.
- Search and filter internships based on user strengths.
- Detailed internship listings with application links.
- Responsive design for mobile and desktop users.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.