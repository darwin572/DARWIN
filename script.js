document.addEventListener("DOMContentLoaded", function () {
    const daySelect = document.getElementById("day");
    const yearSelect = document.getElementById("year");

    // Populate day dropdown
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Populate year dropdown (1990 - 2025)
    for (let i = 1990; i <= 2025; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
});

function checkBirthday() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;

    // Set correct birthday (March 30)
    if (day === "30" && month === "3") {
        document.getElementById("surprise").classList.remove("hidden");
    } else {
        alert("Oops! Try again, my love! 💖");
    }
}
