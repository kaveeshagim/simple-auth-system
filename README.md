# Authentication App
A simple authentication using JWT(JSON Web Token) from scratch

## Tech Stack

### Backend
- NodeJS with Express
- JWT package For generating and verifying tokens
- MongoDB with mongoose for storing user data
- Bcrypt.js: For hashing passwords before storing them in the database.

### Frontend
- React.js: A popular front-end library for building user interfaces.
- Next.js: If you prefer server-side rendering with React.
- Axios: For making HTTP requests to the backend API.
- Tailwind CSS: For styling the frontend.
- Figma: For wireframe design

## Tutorial

### Backend
Create a package.json file
```
npm init -y
```

Install dependencies
```
npm install express mongoose bcryptjs jsonwebtoken dotenv
npm install --save-dev nodemon
```

## Status codes
- 200 : OK
- 201 : Created
- 400 : Bad request
- 404 : Not found
- 500 : Internal Server Error

### Frontend
Create the react app with the following command :
```
npx create-react-app client
```

Install Axios for making HTTP requests
```
npm install axios
```
