// Login logic
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const messageDiv = document.getElementById('login-message');
    const loadingSpinner = document.getElementById('loading-spinner');

    if (username === '' || password === '') {
        messageDiv.innerText = 'Please fill in all fields.';
        messageDiv.className = 'error'; 
        return;
    }

    if (username.length < 3) {
        messageDiv.innerText = 'Username must be at least 3 characters long.';
        messageDiv.className = 'error';
        return;
    }

    if (password.length < 6) {
        messageDiv.innerText = 'Password must be at least 6 characters long.';
        messageDiv.className = 'error';
        return;
    }

    const storedPassword = localStorage.getItem(username);
    
    loadingSpinner.style.display = 'block'; // Show spinner

    setTimeout(() => { // Simulate a delay for processing
        if (storedPassword && storedPassword === password) {
            messageDiv.innerText = 'Login successful!';
            messageDiv.className = 'success'; 
            window.location.href = 'dashboard.html'; // Redirect to dashboard page
        } else {
            messageDiv.innerText = 'Invalid username or password.';
            messageDiv.className = 'error';
        }
        loadingSpinner.style.display = 'none'; // Hide spinner
    }, 1000); // Simulated delay of 1 second
});
