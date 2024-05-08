function volume_sphere() {
    //Write your code here


	event.preventDefault(); // Prevent form submission and page reload

    // Get the value of the radius entered by the user
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        // alert('Please enter a non-negative number for the radius.');
        return; // Exit the function if input is invalid
    }

    // Calculate the volume of the sphere
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the output field
    const volumeOutput = document.getElementById('volume');
    volumeOutput.value = volume.toFixed(4); // Round to four decimal places
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
