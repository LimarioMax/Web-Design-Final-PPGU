document.addEventListener('DOMContentLoaded', function () {
    // Facebook Button
    document.getElementById('facebookBtn').addEventListener('click', function () {
        // Redirect to Facebook URL
        window.location.href = 'https://www.facebook.com';
    });

    // Google Button
    document.getElementById('googleBtn').addEventListener('click', function () {
        // Redirect to Google URL
        window.location.href = 'https://www.google.com'; 
    });

    // Apple Button
    document.getElementById('appleBtn').addEventListener('click', function () {
        // Redirect to Apple URL
        window.location.href = 'https://www.apple.com';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const playerIdInput = document.getElementById("playerIdInput");
    function generateRandomPlayerId() {
        const randomDigits = Math.floor(1000 + Math.random() * 9000); 
        const randomDigits1 = Math.floor(1000 + Math.random() * 9000); 
        const randomDigits2 = Math.floor(1000 + Math.random() * 9000); 
        return `${randomDigits} ${randomDigits1} ${randomDigits2}`; 
    }
    playerIdInput.value = generateRandomPlayerId();
});