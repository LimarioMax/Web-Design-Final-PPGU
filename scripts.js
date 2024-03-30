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
