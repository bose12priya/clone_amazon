// Back to top button
document.querySelector('.foot-panel1').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    if (searchInput.value.trim() !== '') {
        alert(`Searching for: ${searchInput.value}`);
        
    }
});

// Allow Enter key to trigger search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim() !== '') {
        alert(`Searching for: ${searchInput.value}`);
    }
});