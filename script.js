$(document).ready(function () {

  $("#regForm").on("submit", function (e) {
    e.preventDefault();
    $(".error").text("");

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var dob = $("#dob").val();
    var gender = $("input[name='gender']:checked").val();
    var course = $("#course").val();
    var college = $("#college").val().trim();
    var year = $("#year").val();
    var skills = $("input[name='skills[]']:checked").length;
    var address = $("#address").val().trim();
    var valid = true;

    if (name.length < 3) {
      $("#nameErr").text("Enter your full name");
      valid = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      $("#emailErr").text("Enter a valid email");
      valid = false;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      $("#phoneErr").text("Phone must be 10 digits");
      valid = false;
    }
    if (dob === "") {
      $("#dobErr").text("Select your date of birth");
      valid = false;
    }
    if (!gender) {
      $("#genderErr").text("Select a gender");
      valid = false;
    }
    if (course === "") {
      $("#courseErr").text("Select a course");
      valid = false;
    }
    if (college.length < 3) {
      $("#collegeErr").text("Enter your college name");
      valid = false;
    }
    if (year === "") {
      $("#yearErr").text("Select your year");
      valid = false;
    }
    if (skills === 0) {
      $("#skillsErr").text("Select at least one skill");
      valid = false;
    }
    if (!$("#terms").is(":checked")) {
      $("#termsErr").text("Please confirm before submitting");
      valid = false;
    }
    if (address.length < 5) {
      $("#addressErr").text("Enter your address");
      valid = false;
    }

    if (!valid) return;

    // send data to PHP
    $.post("register.php", $(this).serialize(), function (response) {
      $("#regForm").hide();
      $("#result").html(response).fadeIn();
    }).fail(function () {
      alert("Something went wrong. Please try again.");
    });
  });

  // button inside the result card
  $("#result").on("click", "#again", function () {
    $("#result").hide().empty();
    $("#regForm")[0].reset();
    $("#regForm").fadeIn();
  });

});
