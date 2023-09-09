// Function to update current day and time
function updateDateTime() {
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();

    const currentDay = daysOfWeek[now.getUTCDay()];
    const currentTime = now.toISOString().substr(11, 8);

    currentDayElement.textContent = `Current day of the week: ${currentDay}`;
    currentTimeElement.textContent = `Current UTC time: ${currentTime}`;
}

// Call the function to initially set the current day and time
updateDateTime();

// Update the current day and time every second
setInterval(updateDateTime, 1000);
