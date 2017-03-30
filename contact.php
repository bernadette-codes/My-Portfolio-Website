<?php
$myemail = "bernadette@englemaninvest.com";

/* Check inputs */
$yourname = check_input($_POST['yourname'], "Enter your name");
$email = check_input($_POST['email'], "Enter your email");
$subject = check_input($_POST['subject'], "Write a subject");
$message = check_input($_POST['message'], "Write your message");

/* Validate e-mail */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

/* E-mail Message */
$contactForm = "Hello!

Your contact form has been submitted by:

Name: $yourname
E-mail: $email
Subject: $subject
Message: $message

";

/* Send message */
mail($myemail, $subject, $contactForm);

/* Redirect to thank you page after submission */
header('Location: thanks.html');
exit();

function check_input($data, $problem='') {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0) {
        show_error($problem);
    }
    return $data;
}

function show_error($myError) {
?>
    <html>
    <body>

    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>