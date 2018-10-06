<?php
class CSRFToken {
  public static function generate($sessionid) {
    $tokenFile = fopen("CSRFTokens.txt", "w") or die(" Error 404! File Not Found.");
    $csrfTkn = (base64_encode(openssl_random_pseudo_bytes(32))).",".$sessionid;
    fwrite($tokenFile, $csrfTkn);
    fclose($tokenFile);
  }

  public static function getCSRFToken($sessionid) {
    $tokenFile = fopen("CSRFTokens.txt", "r") or die(" Error 404! File Not Found.");
		list($token,$sessionId) = explode(",",chop(fgets($tokenFile)),2);
    fclose($tokenFile);
    if($sessionid == $sessionId ){
      echo($token);
    }
  }

  public static function validateToken($Ctoken, $session) {
        $tokenFile = fopen("CSRFTokens.txt", "r") or die("Unable to open file!");
		list($token,$sessionId) = explode(",",chop(fgets($tokenFile)),2);
		fclose($tokenFile);
		if($Ctoken == $token){
			if($session == $sessionId ){
				return true;
			}
		}
  }

}

