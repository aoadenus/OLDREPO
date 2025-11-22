// Emily Bakes Cakes - Staff Dashboard JavaScript
// Simple vanilla JavaScript for charts and search functionality

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts if on dashboard page
    if (document.getElementById('statusChart')) {
        initStatusChart();
        initPopularChart();
    }

    // Initialize search functionality if search box exists
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', filterOrders);
    }
});

// Initialize the status pie chart
function initStatusChart() {
    const ctx = document.getElementById('statusChart').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['To Be Created', 'In Baking', 'Decorating', 'Ready', 'Picked Up'],
            datasets: [{
                data: [3, 4, 2, 3, 8],
                backgroundColor: [
                    '#3B82F6', // blue
                    '#F59E0B', // amber
                    '#A855F7', // purple
                    '#10B981', // green
                    '#6B7280'  // gray
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12,
                            family: 'Poppins'
                        }
                    }
                }
            }
        }
    });
}

// Initialize the popular cakes bar chart
function initPopularChart() {
    const ctx = document.getElementById('popularChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Chocolate', 'Vanilla', 'Red Velvet', 'Lemon', 'Strawberry'],
            datasets: [{
                label: 'Orders',
                data: [15, 12, 8, 6, 5],
                backgroundColor: '#C44569',
                borderRadius: 6,
                barThickness: 40
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5,
                        font: {
                            size: 11,
                            family: 'Open Sans'
                        }
                    },
                    grid: {
                        color: '#f0f0f0'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 11,
                            family: 'Poppins'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Filter orders table based on search input
function filterOrders() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const tableBody = document.getElementById('ordersTableBody');
    const rows = tableBody.getElementsByTagName('tr');

    // Loop through all table rows
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getElementsByTagName('td');
        let found = false;

        // Search through all cells in the row
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent || cells[j].innerText;
            if (cellText.toLowerCase().indexOf(searchTerm) > -1) {
                found = true;
                break;
            }
        }

        // Show or hide row based on search result
        if (found) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

// Logout function
function logout() {
    // Clear any stored user data
    localStorage.removeItem('staffUser');
    localStorage.removeItem('staffRole');

    // Redirect to staff login page
    window.location.href = 'staff-login.html';
}
