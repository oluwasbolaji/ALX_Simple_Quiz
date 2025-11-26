// Step 1: Function to check the answer
function checkAnswer() {
    // Step 2: Define correct answer
    const correctAnswer = "4";

    // Step 3: Get user's selected answer
    const selected = document.querySelector('input[name="quiz"]:checked');

    // Check if user selected any option
    if (!selected) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return; // Stop function if nothing selected
    }

    const userAnswer = selected.value;

    // Step 4: Compare with correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 5: Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
