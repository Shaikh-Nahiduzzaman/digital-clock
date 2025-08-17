function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();

    // Format as two digits
    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    clock.textContent = `${hours}:${mins}:${secs}`;
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);