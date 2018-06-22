<?php
$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName ="table-reserve";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
mysql_select_db("reserve") or die("No db Found");

if (isset($_POST['submit'])){
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $guests = $_POST['guests'];
    $reserve = $_POST['reserve'];

    $query ="INSERT INTO DATA (fname, lname, email, phone, guests, reserve) VALUES ('$firstName','$lastName','$email','$phone','$guests','$reserve')";
    if(mysql_query($query)){
        echo "Successfully Submitted"
    }
}


?>