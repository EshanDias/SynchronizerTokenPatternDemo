<?php
require_once 'csrfToken.php';

if(isset($_POST['username'], $_POST['password'])) {
  if ($_POST['username'] == "Admin" && $_POST['password'] == "1234") {
    session_start();
    setcookie("SSDAssignment1",session_id());
    CSRFToken:: generate(session_id());
    header('Location: home.php');
  } else {
    echo("Incorreect username or password <br/>");
  }
}
?>

<html>
  <head>
    <title>Synchronizer Token Pattern</title>
  </head>

  <body>
    <h3>Login</h3>
    <form method="POST" action="">
      <input type="text" name="username" placeholder="Username (Admin)"><br/><br/>
      <input type="password" name="password" placeholder="Passsword (1234)"><br/>
      <button type="submit">Login</button>
    </form>
  </body>
</html>