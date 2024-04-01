// Fetches percentage from config.json and initializes progress bar animation based on value
document.addEventListener("DOMContentLoaded", () => {
    fetch('config.json')
        .then(response => response.json())
        .then(data => {
            const percentage = data.percentage;
            animateProgressBar(percentage);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

// Animates the progress bar to incrementally reach the specified percentage value
function animateProgressBar(percentage) {
    const progressBar = document.getElementById("progressBar");
    const progressLabel = document.getElementById("progressLabel");

    let currentValue = 0;

    const animation = setInterval(() => {
        currentValue += 1;
        progressBar.value = currentValue;
        progressLabel.textContent = currentValue + "%";

        if (currentValue >= percentage) {
            clearInterval(animation);
        }
    }, 20);
}

