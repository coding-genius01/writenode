WriteNode - a Blog Website with React, Firebase, and User Authentication
This project is a blog website built with React.js, React Hooks, React Router, Firebase Authentication, and Firebase Realtime Database.

🪶Features:
◉ User Authentication with Firebase Auth

◉ Protected Routes for creating and deleting posts

◉ Create new blog posts

◉ Delete posts (only for posts created by the user)

◉ View all blog posts
️ 
🖥️Technologies Used:
Frontend: React.js, React Hooks, React Router

Backend: Firebase Realtime Database

Authentication: Firebase Authentication

🔒Authentication:
Users can sign up and sign in using Firebase Authentication.

Protected routes are implemented using React Router to ensure only authenticated users can create and delete posts.

Creating and Deleting Posts:
Authenticated users can create new blog posts.

Users can only delete posts that they have created. This is achieved by storing the creator's user ID along with each post in the database.
