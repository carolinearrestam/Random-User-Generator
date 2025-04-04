# Profile Gallery

This project displays a gallery of random user profiles from the [randomuser.me](https://randomuser.me/) API. The profiles include information such as name, age, location, contact info and profile pictures.

## Features

- Displays 50 random user profiles.
- Ability to search profiles based on name, gender, or age.
- Option to filter profiles with a button, pagination is implemented.
- Option to search user by name in a secrch input.
- Responsive design.

## Installation

1. Clone or download the repository.
2. Open the terminal or command prompt and navigate to the backend folder:
   "cd backend"
3. Install the backend dependencies:
   "npm install"
4. Start the backend server using the following command:
   "npm run dev"
   (This will start the backend server and it will be available at http://localhost:3000.)
5. In another terminal window, navigate to the frontend folder:
   "cd frontend"
6. Install the frontend dependencies:
   "npm install"
7. Start the frontend server using the following command:
   "npm run dev"
   (This will start the frontend server and it will be available at your localhost.)

## API

The backend API at http://localhost:3000/api/profiles fetches profiles from the randomuser.me API.

### Example API request:

http://localhost:3000/api/profiles?count=50

Request fetches 50 random profiles. You can adjust the number of profiles by changing the endpoint with count parameter in the query string in example Postman. For example, to fetch 10 profiles, you would use:

http://localhost:3000/api/profiles?count=10
