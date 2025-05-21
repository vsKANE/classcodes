function nextStep(stepId) {
    document.querySelectorAll("form > div").forEach(div => div.style.display = "none");
    document.getElementById(stepId).style.display = "block";
}
