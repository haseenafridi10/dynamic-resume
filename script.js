"use strict";
const form = document.getElementById('resume-form');
const resumeContainer = document.getElementById('generated-resume');
// Listen to form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const graduationYear = document.getElementById('graduation-year').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const workYears = document.getElementById('work-years').value;
    const skills = document.getElementById('skills').value.split(',');
    if (!name || !email) {
        alert("Please fill out all mandatory fields.");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    const yearRegex = /^\d{4}$/;
    if (!yearRegex.test(workYears)) {
        alert("Please enter a valid number of years worked.");
        return;
    }
    // Clear previous resume
    resumeContainer.innerHTML = '';
    // Dynamically generate the resume HTML
    const resumeHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>

        <h3>Education</h3>
        <p>${degree} - ${institution} (${graduationYear})</p>

        <h3>Work Experience</h3>
        <p>${jobTitle} at ${company} (${workYears})</p>

        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;
    // Append the generated resume to the container
    resumeContainer.innerHTML = resumeHTML;
});
