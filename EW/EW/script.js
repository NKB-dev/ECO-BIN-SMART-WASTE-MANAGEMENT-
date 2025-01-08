// Handle search functionality
document.getElementById('searchInput').addEventListener('input', function (e) {
    const searchQuery = e.target.value.toLowerCase();

    const points = document.querySelectorAll('.point');
    points.forEach(point => {
        const title = point.getAttribute('title').toLowerCase();
        if (title.includes(searchQuery)) {
            point.style.border = '2px solid blue';
        } else {
            point.style.border = 'none';
        }
    });
});
