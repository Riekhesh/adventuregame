# adventuregamephp code
<?php
    // getting all values from the HTML form
    if(isset($_POST['q1']))
    {
        $Q1 = $_POST['q1'];
        $Q2 = $_POST['q2'];
        $Q3 = $_POST['q3'];
        $Q4 = $_POST['q4'];
        $Q5 = $_POST['q5'];
        $Q6 = $_POST['q6'];
        $Q7 = $_POST['q7'];
        $Q8 = $_POST['q8'];
        
    }

    // database details
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "riekhesh";

    // creating a connection
    $con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // using sql to create a data entry query
    $sql = "INSERT INTO adventuregame (Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8) VALUES ('$Q1', '$Q2', '$Q3', '$Q4', '$Q5', '$Q6', '$Q7', '$Q8')";
  
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        echo "Entries added!";
    }
  
    // close connection
    mysqli_close($con);

?>
