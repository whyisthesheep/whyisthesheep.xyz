document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2024-01-12'); // Replace with your start date
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const daysSince = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    document.getElementById('daysCounter').innerText = daysSince + ' days since the start date';
});
