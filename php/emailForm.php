<?

/* Set e-mail recipient */
$myemail  = "dhighe25@gmail.com";

/* Check all form inputs using check_input function */
$name = check_input($_POST['name']);
$email = check_input($_POST['email']);
$message = check_input($_POST["message"]);

echo $name;
echo $email;
echo message;

// /* If e-mail is not valid show error message */
// if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
// {
//     show_error("E-mail address not valid");
// }

// /* If URL is not valid set $website to empty */
// if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $website))
// {
//     $website = '';
// }

// /* Let's prepare the message for the e-mail */
// $email_message = "Hello!

// Your contact form has been submitted by:

// Name: ".$name"
// E-mail: ".$email"

// Message: ".$message"

// End of message
// ";

// /* Send the message using mail() function */
// mail($myemail, $email_message);

// /* Redirect visitor to the thank you page */
// header('Location: ./html/submission.html');
// exit();

// /* Functions we used */
// function check_input($data, $problem='')
// {
//     $data = trim($data);
//     $data = stripslashes($data);
//     $data = htmlspecialchars($data);
//     if ($problem && strlen($data) == 0)
//     {
//         show_error($problem);
//     }
//     return $data;
// }

// function show_error($myError)
// {
?>
