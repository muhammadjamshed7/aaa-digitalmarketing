window.onload = function() {
    // Create the alert message
    let alertMessage = document.createElement('div');
    alertMessage.innerText = 'Welcome to AAA Digital';
    alertMessage.style.position = 'fixed';
    alertMessage.style.top = '10px';
    alertMessage.style.left = '50%';
    alertMessage.style.transform = 'translateX(-50%)';
    alertMessage.style.backgroundColor = '#f8d7da';
    alertMessage.style.color = '#721c24';
    alertMessage.style.padding = '10px';
    alertMessage.style.border = '1px solid #f5c6cb';
    alertMessage.style.borderRadius = '5px';
    alertMessage.style.zIndex = '1000';

    // Append the alert message to the body
    document.body.appendChild(alertMessage);

    // Remove the alert message after 5 seconds
    setTimeout(function() {
        document.body.removeChild(alertMessage);
    }, 5000);
};