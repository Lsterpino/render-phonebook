# Phonebook

Link to Phonebook App
https://render-phonebook-p6px.onrender.com

## Local use

Follow these steps to run the application:

Clone this repository to your own machine with the command git clone https://github.com/Lsterpino/render-phonebook.git

Navigate to the cloned repository with the command cd render-phonebook

Install the node modules with the command npm install

You need to create a .env file in the root of the project with the following content:

MONGODB_URI=your_database_connection_string
PORT=3001

MONGODB_URI defines the database connection url and PORT defines the port on which the application will be started.

Start the application with the command npm run dev . By default, the application will start on port 3001, so it will be available at http://localhost:3001/.
