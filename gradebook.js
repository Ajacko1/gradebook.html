function fetchGradeData() {
    console.log("Fetching grade data...");

    // Example data to simulate database response
    return [
        { name: "Alice", assignment1: 95, assignment2: 88, assignment3: 92 },
        { name: "Bob", assignment1: 78, assignment2: 85, assignment3: 80 },
        { name: "Charlie", assignment1: 90, assignment2: 93, assignment3: 87 }
    ];
}

// Function to populate the gradebook table
function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);
    const tableBody = document.querySelector("#gradebook tbody");

    data.forEach(student => {
        const row = document.createElement("tr");

        // Create and append student name cell
        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        // Append assignment grades
        const assignments = ["assignment1", "assignment2", "assignment3"];
        assignments.forEach(key => {
            const cell = document.createElement("td");
            cell.textContent = student[key];
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// Simulated workflow (remove when connecting to actual database)
const gradeData = fetchGradeData();
populateGradebook(gradeData);
