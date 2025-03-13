document.getElementById('askButton').addEventListener('click', function() {
    const question = document.getElementById('questionDropdown').value;
    const responseDiv = document.getElementById('response');

    let response = '';

    switch (question) {
        case 'materials':
            response = 'Materials can be classified into metals, polymers, ceramics, and composites.';
            break;
        case 'processes':
            response = 'Common engineering processes include casting, machining, joining, and forming.';
            break;
        case 'systems':
            response = 'Systems and control involve the use of sensors, actuators, and controllers to manage and regulate systems.';
            break;
        case 'design':
            response = 'Design and technology focus on the creation and development of products and systems.';
            break;
        default:
            response = 'Please select a question from the dropdown menu.';
    }

    responseDiv.textContent = response;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formResponse = document.getElementById('formResponse');

    formResponse.textContent = `Thank you, ${name}. We have received your message and will get back to you at ${email}.`;

    // Clear the form
    document.getElementById('contactForm').reset();
});
