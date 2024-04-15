<?php
include 'connect.php';

// Check if all required fields are set
if (
    !isset($_POST['name']) ||
    !isset($_POST['phone']) ||
    !isset($_POST['date']) ||
    !isset($_POST['email']) ||
    !isset($_POST['number']) ||
    !isset($_POST['time'])
) {
    echo "All fields are required";
    exit;
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$email = $_POST['email'];
$number = $_POST['number'];
$time = $_POST['time'];

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
    exit;
}

$stmt = $conn->prepare("INSERT INTO reservations (name, phone, date, email, number, time) VALUES (?, ?, ?, ?, ?, ?)");

// Check if the prepare statement succeeded
if (!$stmt) {
    echo "Prepare failed: (" . $conn->errno . ") " . $conn->error;
    exit;
}

$stmt->bind_param('ssssis', $name, $phone, $date, $email, $number, $time);

if ($stmt->execute()) {
    echo "Registration successful";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
