# whispering.ground14

To modify the Week 14 Mini Project as a starter code to complete the assignment, you can follow these steps:



Set up the project structure:



Create a new directory for the project.

Copy the starter code from Week 14 Mini Project into the project directory.

Make sure you have Node.js and npm installed on your machine.



Install the necessary dependencies:



Open a terminal or command prompt in the project directory.

Run the command npm install to install the required dependencies mentioned in the package.json file.



Set up the database:



Make sure you have a database server installed (such as MySQL or PostgreSQL) and running on your machine.

Create a new database for the project.

Update the database configuration in the config/connection.js file to connect to your database.



Create the necessary models:



Create a User model that represents a user of the blog site. This model should have fields for username and password.

Create a Post model that represents a blog post. This model should have fields for title, content, creator's username, and date created.

Create a Comment model that represents a comment on a blog post. This model should have fields for the comment, creator's username, and date created.

Define the relationships between the models (e.g., a user can have multiple posts, a post can have multiple comments).



Implement user authentication:



Add routes and controllers for user authentication (sign up, sign in, sign out).

Implement the functionality to create a new user, save their credentials to the database, and handle user sessions.

Add authentication middleware to protect certain routes and ensure that only authenticated users can access them.



Implement blog post functionality:



Add routes and controllers for creating, updating, and deleting blog posts.

Implement the functionality to save blog posts to the database, retrieve them, and update or delete them as needed.

Ensure that only authenticated users can create, update, or delete their own blog posts.



Implement comment functionality:



Add routes and controllers for creating and retrieving comments on blog posts.

Implement the functionality to save comments to the database, retrieve them, and associate them with the corresponding blog post.

Ensure that only authenticated users can leave comments.



Implement session management:



Add functionality to handle idle sessions, where users are prompted to log in again after a certain period of inactivity.

Implement the logic to check for idle sessions and log out the user if necessary.



Implement the frontend:



Use Bootstrap, Google Fonts, jQuery, and Day.js to style and enhance the frontend of the site.

Create templates and views to display the homepage, dashboard, individual blog posts, and comment sections.

Add navigation links and buttons to navigate between different sections of the site.



Test and debug:



Test the functionality of the site by creating users, blog posts, and comments, and verifying that everything works as expected.

Use debugging tools and error handling techniques to identify and fix any issues or bugs in the code.




Remember to break up these tasks among members of your team and collaborate effectively to complete the project. Good luck!

