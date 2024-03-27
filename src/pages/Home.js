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

