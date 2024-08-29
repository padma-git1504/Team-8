function processFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        extractInformation(text);
    };

    reader.readAsText(file);
}

function extractInformation(text) {
    const output = {
        car_preference: extractBetween(text, 'preference is...', 'Sure, sir.'),
        colour: extractBetween(text, 'What color are you interested in?', 'No special preference,'),
        fuel_type: extractBetween(text, 'What about fuel type?', 'Manual or automatic'),
        transmission_type: extractBetween(text, 'transmission preferences', 'Okay, understood,'),
        budget: extractBetween(text, 'budget of about', 'and I\'m really looking'),
        distance_travelled: extractBetween(text, 'driveable life of these models?', 'Okay. What about test'),
        make_year: extractBetween(text, 'It’s a', 'model with good history'),
        free_rc_transfer: 'Yes',
        money_back_guarantee: extractBetween(text, 'money-back guarantee.', 'registration?'),
        free_rsa: 'Yes',
        return_policy: 'Yes',
        refurbishment_quality: '200-point inspection before purchasing any vehicle',
        car_issues: 'No meter tampering, non-accidental',
        price_issues: extractBetween(text, 'It’s priced around', 'Just over your budget'),
        customer_experience_issues: extractBetween(text, 'registration process', 'start the process')
    };

    displayOutput(output);
}

function extractBetween(text, start, end) {
    const startIndex = text.indexOf(start);
    if (startIndex === -1) return 'Not Specified';
    const endIndex = text.indexOf(end, startIndex);
    return text.substring(startIndex + start.length, endIndex).trim();
}

function displayOutput(output) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p><strong>Car Preference:</strong> ${output.car_preference}</p>
        <p><strong>Colour:</strong> ${output.colour}</p>
        <p><strong>Fuel Type:</strong> ${output.fuel_type}</p>
        <p><strong>Transmission Type:</strong> ${output.transmission_type}</p>
        <p><strong>Budget:</strong> ${output.budget}</p>
        <p><strong>Distance Travelled:</strong> ${output.distance_travelled}</p>
        <p><strong>Make Year:</strong> ${output.make_year}</p>
        <p><strong>Free RC Transfer:</strong> ${output.free_rc_transfer}</p>
        <p><strong>Money Back Guarantee:</strong> ${output.money_back_guarantee}</p>
        <p><strong>Free RSA:</strong> ${output.free_rsa}</p>
        <p><strong>Return Policy:</strong> ${output.return_policy}</p>
        <p><strong>Refurbishment Quality:</strong> ${output.refurbishment_quality}</p>
        <p><strong>Car Issues:</strong> ${output.car_issues}</p>
        <p><strong>Price Issues:</strong> ${output.price_issues}</p>
        <p><strong>Customer Experience Issues:</strong> ${output.customer_experience_issues}</p>
    `;
}
