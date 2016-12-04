<?php
  $errors = '';
  $myemail = 'dhighe25@gmail.com';//<-----Put Your email address here.
  if(empty($_POST['name'])  ||
     empty($_POST['email']) ||
     empty($_POST['message']))
  {
      $errors .= "\n error: all fields are required";
  }
    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];
    if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email_address))
  {
    $errors .= "\n error: invalid email address";
  }

  if( empty($errors))
  {
    $to = $myemail;
    $email_subject = "contact form submission: $name";
    $email_body = "you have received a new message. ".
    " here are the details:\n Name: $name \n ".
    "email: $email_address\n Message \n $message";
    $headers = "from: $myemail\n";
    $headers .= "reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    //redirect to the 'thank you' page
    header('location: submission.html');
  }
?>
