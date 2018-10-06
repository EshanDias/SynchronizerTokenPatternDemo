<?php
  require_once 'csrfToken.php';

    session_start();

    if(isset($_POST['content'], $_POST['token'])) {
      $content = $_POST['content'];
      $token = $_POST['token'];
    
      if(!empty($content) && !empty($token)) {
        if (CSRFToken::validateToken($_POST['token'], session_id())) {
          $Message = urlencode("Token Verified!");
        } else {
          $Message = "Token Verifying failed";
        }
        header("Location: result.php?Message=".$Message);
      }
    }
?>
<html>
  <head>
    <title>Synchronizer Token Pattern</title>
  </head>

  <body>
    <h3>HOME</h3>
    <form method="POST" action="">
      <input type="text" name="content" placeholder="Enter your name here"><br/><br/>
      <input type="hidden" name="token" value="<?php CSRFToken::getCSRFToken(session_id()) ?>"/><br/>
      <input type="submit" value="UPDATE"/>
    </form>

  </body>
</html>
