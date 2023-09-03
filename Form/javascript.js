document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        // Prevent the form from submitting
        e.preventDefault();

        // Get form input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const checkbox = document.querySelector('.form-control-check');
        const radioMale = document.getElementById('flexRadioDefault1');
        const radioFemale = document.getElementById('flexRadioDefault2');
        const date = document.querySelector('input[name="date"]').value;

        let isValid = true;

        // Check if FullName is empty
        if (username.trim() === '') {
            isValid = false;
            alert('Full Name is required.');
        }

        // Check if Email is empty and valid
        if (email.trim() === '') {
            isValid = false;
            alert('Email is required.');
        } else if (!isValidEmail(email)) {
            isValid = false;
            alert('Email is not valid.');
        }

        // Check if Password is empty and matches Confirm Password
        if (password.trim() === '') {
            isValid = false;
            alert('Password is required.');
        } else if (password !== confirmPassword) {
            isValid = false;
            alert('Passwords do not match.');
        }

        // Check if the checkbox is checked
        if (!checkbox.checked) {
            isValid = false;
            alert('Please check the checkbox.');
        }

        // Check if one of the radio buttons is selected
        if (!radioMale.checked && !radioFemale.checked) {
            isValid = false;
            alert('Please select a gender.');
        }

        // Check if date is empty and in the yyyy-mm-dd format
        if (date.trim() === '') {
            isValid = false;
            alert('Date is required.');
        } else if (!isValidDateFormat(date)) {
            isValid = false;
            alert('Date should be in the format yyyy-mm-dd.');
        }

        // Function to validate date format (yyyy-mm-dd)
        function isValidDateFormat(date) {
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            return dateRegex.test(date);
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});