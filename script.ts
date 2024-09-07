const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('generated-resume') as HTMLElement;

// Listen to form submission
form.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    // Get user input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('graduation-year') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const workYears = (document.getElementById('work-years') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    if (!name || !email) {
        alert("Please fill out all mandatory fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
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
