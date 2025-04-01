CREATE DATABASE love_calculator;
USE love_calculator;

CREATE TABLE love_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name1 VARCHAR(255),
    name2 VARCHAR(255),
    percentage INT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

