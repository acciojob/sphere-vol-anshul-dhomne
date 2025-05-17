function volume_sphere() {
    const radiusInput = document.getElementById("radius").value;
    const volumeOutput = document.getElementById("volume");

    const radius = parseFloat(radiusInput);

    // Validate radius: must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
        return false;
    }

    // Calculate volume of sphere: V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display volume rounded to 4 decimal places
    volumeOutput.value = volume.toFixed(4);
    
    return false; // prevent form submission
}
