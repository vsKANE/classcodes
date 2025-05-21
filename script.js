document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents page refresh

    // Collect form data
    var formData = {
        name: document.querySelector("input[name='name']").value,
        studentID: document.querySelector("input[name='studentID']").value,
        email: document.querySelector("input[name='email']").value,
        date: document.querySelector("input[name='date']").value,
        ip: ""  // Placeholder, IP tracking is optional
    };

    // Send data to Google Sheets Web App
    fetch("https://script.google.com/macros/s/AKfycbwyVweWVxUwpTkeu6YVT7jJd1EY0jjR-SYq9cVFRoieBaFpPCkCoq69JM9gqbVKSepK/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(result => {
        alert("Attendance recorded successfully! ✅");
    })
    .catch(error => {
        alert("Error submitting attendance. ❌ Check your connection.");
        console.error("Submission error:", error);
    });
});
