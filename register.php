<?php
// clean the input so nobody can inject html
function clean($value) {
    return htmlspecialchars(trim($value));
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "<p class='err-box'>Invalid request.</p>";
    exit;
}

$name    = clean($_POST["name"] ?? "");
$email   = clean($_POST["email"] ?? "");
$phone   = clean($_POST["phone"] ?? "");
$dob     = clean($_POST["dob"] ?? "");
$gender  = clean($_POST["gender"] ?? "");
$course  = clean($_POST["course"] ?? "");
$college = clean($_POST["college"] ?? "");
$year    = clean($_POST["year"] ?? "");
$skills  = implode(", ", array_map("clean", $_POST["skills"] ?? []));
$address = nl2br(clean($_POST["address"] ?? ""));

// basic server side check
if ($name == "" || $email == "" || $phone == "" || $dob == "" || $gender == "" || $course == "" || $college == "" || $year == "" || $skills == "" || $address == "") {
    echo "<p class='err-box'>All fields are required.</p>";
    exit;
}
?>

<h2 class="success-title">Registration Successful!</h2>
<p>Thank you, <?php echo $name; ?>. Here are your details:</p>

<div class="card">
  <table>
    <tr><td>Name</td><td><?php echo $name; ?></td></tr>
    <tr><td>Email</td><td><?php echo $email; ?></td></tr>
    <tr><td>Phone</td><td><?php echo $phone; ?></td></tr>
    <tr><td>Date of Birth</td><td><?php echo $dob; ?></td></tr>
    <tr><td>Gender</td><td><?php echo $gender; ?></td></tr>
    <tr><td>Course</td><td><?php echo $course; ?></td></tr>
    <tr><td>College</td><td><?php echo $college; ?></td></tr>
    <tr><td>Year</td><td><?php echo $year; ?></td></tr>
    <tr><td>Skills</td><td><?php echo $skills; ?></td></tr>
    <tr><td>Address</td><td><?php echo $address; ?></td></tr>
  </table>
</div>

<button id="again">Register Another</button>
