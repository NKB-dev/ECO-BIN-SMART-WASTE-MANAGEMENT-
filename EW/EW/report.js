// Fetching the canvas element
const ctx = document.getElementById('wasteBarGraph').getContext('2d');

// Data for the last 6 months
const months = ['July', 'August', 'September', 'October', 'November', 'December'];
const wasteData = [120, 150, 100, 180, 200, 160]; // Waste collected in tons

// Create the bar chart
const wasteBarGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'Waste Collected (in tons)',
            data: wasteData,
            backgroundColor: [
                '#4CAF50',
                '#FFC107',
                '#2196F3',
                '#FF5722',
                '#9C27B0',
                '#03A9F4'
            ],
            borderColor: '#ddd',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Waste Collected (in tons)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.raw} tons`;
                    }
                }
            }
        }
    }
});
