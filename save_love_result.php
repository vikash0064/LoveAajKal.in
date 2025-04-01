<?php
$servername = "localhost";
$username = "love_user"; // Your MySQL username
$password = "vikashsingh0064"; // Your MySQL password
$dbname = "love_calculator"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the data from the POST request
$name1 = $_POST['name1'];
$name2 = $_POST['name2'];
$percentage = $_POST['percentage'];
$message = $_POST['message'];

// Prepare and execute the SQL query
$sql = "INSERT INTO love_results (name1, name2, percentage, message) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name1, $name2, $percentage, $message);

if ($stmt->execute()) {
    echo "Success: Data saved!";
} else {
    echo "Error: " . $conn->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>
