# LoveAajKal.in

This repository is designed to implement a Love Calculator web application that calculates compatibility between two names and stores the results in a database. Below is a detailed description of the technologies and languages used, along with the structure of the repository.

Languages and Technologies Used
HTML:
  Used for the frontend interface, allowing users to input names and calculate compatibility.
  The index.html file provides a simple user interface with form fields for entering names and displaying results.

PHP:
  Handles backend processing and database operations.
  The save_love_result.php file processes user inputs via POST requests, interacts with the database, and saves compatibility results.

SQL:
  Used for database creation and management.
  The database.sql file defines the structure of the database, including a table (love_results) to store love calculation results.

MySQL:
  The relational database system used to store calculated results.
  Includes fields such as name1, name2, percentage, message, and timestamps.

Repository Structure
  File Name	Purpose
  index.html ->Provides the user interface for inputting names and calculating love.
  save_love_result.php ->Handles form submissions, calculates love percentage, and saves data into the database.
  database.sql ->Contains SQL commands to create the database (love_calculator) and table (love_results).
  db_connect.php ->(Missing content) Likely used for establishing the connection to the MySQL database.
  README.md	->Documentation explaining the purpose of the project and how to use it.

Database Design
  The database is named love_calculator with a single table called love_results. Below is its structure:

Column Name	Data Type	Description
id	INT (Primary Key)	Auto-incrementing ID for each entry.
name1	VARCHAR(255)	First name entered by the user.
name2	VARCHAR(255)	Second name entered by the user.
percentage	INT	Compatibility percentage calculated.
message	TEXT	Custom message associated with the result.
created_at	TIMESTAMP	Timestamp when the result was saved.

How It Works
Frontend (HTML):
Users input two names into a form on the webpage (index.html) and submit it.
Backend (PHP):
  The form data is sent via POST to save_love_result.php.
  PHP processes this data, calculates compatibility (logic not provided in files), and stores it in the MySQL database using prepared statements.

Database (SQL):
  Results are stored in a structured format in the table love_results.

Example Usage
  Clone this repository from GitHub.
  Set up a MySQL server and execute commands from database.sql.
  Configure database connection details in db_connect.php.
  Deploy on a local server or hosting platform supporting PHP.
  Open index.html in your browser to use the Love Calculator.

Repository Name: LoveCalculator
Description: A simple web application that calculates love compatibility between two names and stores results in a MySQL database.
Tags: PHP, HTML, SQL, MySQL, Web Application
License: Choose an open-source license like MIT or GPL based on your preference.

