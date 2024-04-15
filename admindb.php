<?php

mysqli_connect("localhost:4306","root", "","rrs");
if(mysqli_connect_error())
{
echo "Cannot Connect";
}
else{
echo "Connected";
}
?>