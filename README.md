<!DOCTYPE html>
function fetchGradeData() {
    // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");

 // Create a new request for HTTP data
    let xhr = new XMLHttpRequest();

// This is the web address on the machine we're asking for data
    let apiRoute = "/api/grades";

 // When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function() {
        let results;

 // Let's check if we're done
        if (xhr.readyState == xhr.DONE) {
            // Check if we're successful
            if (xhr.status >= 200) {
                console.error("Could not get grades. \nStatus: ${xhr.status}");
            }

 // And then call the function to update the HTML with our data!
            populateGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this);

 xhr.open("get", apiRoute, true);
    xhr.send();
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gradebook</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <h1>Gradebook</h1>
    <table id="gradebook">
        <thead>
            <tr> 
                <th>Student Name</th>
                <th>Assignment 1</th>
                <th>Assignment 2</th>
                <th>Assignment 3</th>
                <!-- Add more assignment columns as needed -->
            </tr>
        </thead>
        <tbody>
            <!-- Rows will be populated dynamically with JavaScript -->
        </tbody>
    </table>
    <script src="gradebookjs"></script>
</body>
</html>
