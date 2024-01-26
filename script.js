// Code to change into dark-theme 
document.addEventListener('DOMContentLoaded', function () {
    const moonIcon = document.querySelector('.fa-moon');

    moonIcon.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        document.querySelector('main').classList.toggle('dark-theme');
    });
});

// code for changing moon icon
document.addEventListener('DOMContentLoaded', function () {
    const moonIcon = document.getElementById('moonIcon');

    moonIcon.addEventListener('click', function () {
        // Toggle between solid and regular moon icons
        if (moonIcon.classList.contains('fa-regular')) {
            moonIcon.classList.remove('fa-regular');
            moonIcon.classList.add('fa-solid');
        } else {
            moonIcon.classList.remove('fa-solid');
            moonIcon.classList.add('fa-regular');
        }

        // Toggle dark theme on the body
        document.body.classList.toggle('dark-theme');
    });
});
