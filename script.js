function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get the value of the radius entered by the user
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);

    let volume; // Declare volume variable

    // Validate the input and calculate the volume accordingly
    if (radius < 0 || isNaN(radius)) {
        volume = 'NaN'; // Set volume to 'NaN' if radius is negative or not a number
    } else {
        // Calculate the volume of the sphere
        volume = (4/3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4); // Round to four decimal places
    }

    // Display the calculated volume in the output field
    const volumeOutput = document.getElementById('volume');
    volumeOutput.value = volume; // Update the volume output field
}

// Attach the volume_sphere function to the form's submit event
document.getElementById('MyForm').onsubmit = volume_sphere;
