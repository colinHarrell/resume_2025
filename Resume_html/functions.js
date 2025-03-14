function copy(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text; // Set the value to the text to be copied
    document.body.appendChild(textarea); // Append the textarea to the body
    textarea.select(); // Select the text
    document.execCommand('copy'); // Execute the copy command
    document.body.removeChild(textarea); // Remove the textarea from the document
}

function showCertificate() {
    const certificateImage = document.getElementById('certificateImage');
    if (certificateImage.style.display === 'block') {
        certificateImage.style.display = 'none'; // Hide the certificate image
    } else {
        certificateImage.style.display = 'block'; // Show the certificate image
    }
}
