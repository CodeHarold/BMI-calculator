// Function to calculate BMI
function calculateBMI() {
    // Get user input for height and weight
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI (formula may vary based on your requirements)
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // Determine BMI category
    let message;
    if (bmi < 18.5) {
        message = "You are underweight. We recommend consulting a healthcare professional.";
        const miImagen = document.getElementById('overweight');
        miImagen.src = './underweight.png';
    } else if (bmi < 24.9) {
        message = "You are a healthy weight for your height according to your BMI. We recommend that you also check your waist measurement. Aim to stay within the healthy weight range by enjoying a heart-healthy eating pattern and being physically active. Most adults should get at least 30 minutes of moderate-intensity physical activity on most, if not all, days.";
        const miImagen = document.getElementById('overweight');
        miImagen.src = './healthy.png';
    } else if (bmi < 29.9) {
        message = "You are overweight. We recommend consulting a healthcare professional.";
        const miImagen = document.getElementById('overweight');
        miImagen.src = './overweight20.png';
    } else {
        message = "You are obese. We recommend consulting a healthcare professional."; 
        const miImagen = document.getElementById('overweight');
        miImagen.src = './overweight.png';

    }

    // Display the message
    document.getElementById('result-message').textContent = message;
    //document.getElementById('result-message').classList.add('alert alert-secondary');
    const miElemento = document.getElementById('result-message');
    miElemento.classList.add('alert','alert-secondary');
}

// Attach an event listener to the "Calculate BMI" button
document.getElementById('calculate').addEventListener('click', calculateBMI);