// Timer Script
const countdown = () => {
    const eventDate = new Date('October 16, 2024 00:00:00').getTime(); // Set your event date here
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Calculating time
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Updating the DOM
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Timer expires
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "Event Started!";
    }
};

// Update the timer every second
let timerInterval = setInterval(countdown, 1000);