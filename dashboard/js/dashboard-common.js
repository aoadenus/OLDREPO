// ====================================================================
// SHARED DASHBOARD DATA AND FUNCTIONS
// ====================================================================

const dashboardData = {
    orders: [
        { id: 1, customer: 'Sarah Johnson', status: 'ready', total: 145, pickup: '10:00 AM', cake: 'Chocolate Velvet', orderId: 'ORD-001', customerName: 'Sarah Johnson', pickupDate: '2025-11-22', layers: { vanilla: 2, chocolate: 3 } },
        { id: 2, customer: 'Mike Brown', status: 'decorating', total: 120, pickup: '2:00 PM', cake: 'Vanilla Dream', orderId: 'ORD-002', customerName: 'Mike Brown', pickupDate: '2025-11-22', layers: { vanilla: 4, chocolate: 0 } },
        { id: 3, customer: 'Emily Davis', status: 'baking', total: 165, pickup: '4:30 PM', cake: 'Red Velvet', orderId: 'ORD-003', customerName: 'Emily Davis', pickupDate: '2025-11-22', layers: { redvelvet: 3 } },
        { id: 4, customer: 'John Smith', status: 'ready', total: 135, pickup: '11:30 AM', cake: 'Strawberry Bliss', orderId: 'ORD-004', customerName: 'John Smith', pickupDate: '2025-11-22', layers: { strawberry: 2 } },
        { id: 5, customer: 'Lisa Wilson', status: 'ready', total: 150, pickup: '3:00 PM', cake: 'Lemon Zest', orderId: 'ORD-005', customerName: 'Lisa Wilson', pickupDate: '2025-11-22', layers: { lemon: 2 } }
    ],
    bakingQueue: 2 // Number of orders in baking queue
};

function checkAuthentication() {
    return true;
}

function updateHeaderWithUserInfo() {
    const staffName = localStorage.getItem('staffName') || 'Staff Member';
    const staffNameElement = document.getElementById('staff-name');
    if (staffNameElement) {
        staffNameElement.textContent = staffName;
    }
}

function initializeNav() {
    // Navigation already styled
}

function backToSite() {
    window.location.href = '../index.html';
}

function handleLogout() {
    alert('Logging out...');
    window.location.href = '../index.html';
}

function getTodaysPickups() {
    return dashboardData.orders.filter(o => o.status === 'ready');
}

function getWeeklyRevenue() {
    return dashboardData.orders.reduce((sum, o) => sum + o.total, 0);
}

function getNewCustomers() {
    return 12;
}

function getBakingQueue() {
    return dashboardData.bakingQueue;
}

function getStatusCounts() {
    return {
        ready: dashboardData.orders.filter(o => o.status === 'ready').length,
        decorating: dashboardData.orders.filter(o => o.status === 'decorating').length,
        baking: dashboardData.orders.filter(o => o.status === 'baking').length
    };
}

function getCakeLayersToBake() {
    const layers = { Vanilla: 0, Chocolate: 0, 'Red Velvet': 0, Strawberry: 0, Lemon: 0 };
    dashboardData.orders.forEach(order => {
        if (order.layers) {
            if (order.layers.vanilla) layers.Vanilla += order.layers.vanilla;
            if (order.layers.chocolate) layers.Chocolate += order.layers.chocolate;
            if (order.layers.redvelvet) layers['Red Velvet'] += order.layers.redvelvet;
            if (order.layers.strawberry) layers.Strawberry += order.layers.strawberry;
            if (order.layers.lemon) layers.Lemon += order.layers.lemon;
        }
    });
    return layers;
}

function populateRecentOrdersTable() {
    const tbody = document.getElementById('recent-orders-table');
    if (!tbody) return;
    tbody.innerHTML = dashboardData.orders.slice(0, 5).map(order => `
        <tr>
            <td>#${order.id}</td>
            <td>${order.customer}</td>
            <td><span class="status-badge status-${order.status}">${order.status}</span></td>
            <td>$${order.total}</td>
        </tr>
    `).join('');
}

function populateTodaysPickupsCompact() {
    const tbody = document.getElementById('todays-pickups-table');
    if (!tbody) return;
    const pickups = getTodaysPickups();
    tbody.innerHTML = pickups.map(order => `
        <tr>
            <td>${order.pickup}</td>
            <td>${order.customer}</td>
            <td>${order.cake}</td>
            <td><span class="status-badge status-${order.status}">${order.status}</span></td>
        </tr>
    `).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function initializeManagerDashboard() {
    // Update KPIs
    const pickupCount = document.getElementById('pending-pickup-count');
    const ordersCount = document.getElementById('todays-orders-count');
    const revenue = document.getElementById('weekly-revenue');
    const customersCount = document.getElementById('new-customers-count');
    
    if (pickupCount) pickupCount.textContent = getTodaysPickups().length;
    if (ordersCount) ordersCount.textContent = dashboardData.orders.length;
    if (revenue) revenue.textContent = '$' + getWeeklyRevenue().toFixed(0);
    if (customersCount) customersCount.textContent = getNewCustomers();

    // Populate tables
    populateRecentOrdersTable();
    populateTodaysPickupsCompact();

    // Initialize charts after a slight delay to ensure Chart.js is loaded
    setTimeout(() => {
        if (typeof Chart !== 'undefined') {
            initializeCharts();
        } else {
            console.error('Chart.js not loaded');
        }
    }, 100);
}

function initializeBakerDashboard() {
    // Update KPIs
    const bakingQueueCount = document.getElementById('baking-queue-count');
    const pickupCount = document.getElementById('pending-pickup-count');
    const ordersCount = document.getElementById('todays-orders-count');
    const revenue = document.getElementById('weekly-revenue');
    
    if (bakingQueueCount) bakingQueueCount.textContent = getBakingQueue();
    if (pickupCount) pickupCount.textContent = getTodaysPickups().length;
    if (ordersCount) ordersCount.textContent = dashboardData.orders.length;
    if (revenue) revenue.textContent = '$' + getWeeklyRevenue().toFixed(0);

    // Populate tables
    populateRecentOrdersTable();
    populateTodaysPickupsCompact();

    // Initialize charts
    setTimeout(() => {
        if (typeof Chart !== 'undefined') {
            initializeBakerCharts();
        } else {
            console.error('Chart.js not loaded');
        }
    }, 100);
}

function initializeDecoratorDashboard() {
    // Same as baker
    initializeBakerDashboard();
}

function initializeAccountantDashboard() {
    // Same as manager
    initializeManagerDashboard();
}

function initializeSalesDashboard() {
    // Same as manager
    initializeManagerDashboard();
}

function initializeCharts() {
    if (typeof Chart === 'undefined') {
        console.error('Chart.js library not available');
        return;
    }

    // Revenue Trend Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Revenue',
                    data: [340, 420, 380, 510, 460, 390, 435],
                    borderColor: '#C44569',
                    backgroundColor: 'rgba(196, 69, 105, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#C44569',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { 
                            callback: v => '$' + v,
                            font: { size: 10 }
                        },
                        grid: { color: '#F3F4F6' }
                    },
                    x: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Popular Products Chart
    const productsCtx = document.getElementById('productsChart');
    if (productsCtx) {
        new Chart(productsCtx, {
            type: 'bar',
            data: {
                labels: ['Chocolate', 'Vanilla', 'Red Velvet', 'Strawberry', 'Lemon'],
                datasets: [{
                    label: 'Orders',
                    data: [2, 2, 2, 2, 2],
                    backgroundColor: [
                        '#10B981',
                        '#10B981',
                        '#10B981',
                        '#10B981',
                        '#10B981'
                    ],
                    borderRadius: 4,
                    borderSkipped: false
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { 
                        beginAtZero: true,
                        max: 2.5,
                        ticks: { font: { size: 10 } },
                        grid: { color: '#F3F4F6' }
                    },
                    y: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Order Status Distribution Chart
    const statusCtx = document.getElementById('statusChart');
    if (statusCtx) {
        const statusCounts = getStatusCounts();
        new Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: ['Ready', 'Decorating', 'Baking'],
                datasets: [{
                    data: [statusCounts.ready || 3, statusCounts.decorating || 1, statusCounts.baking || 1],
                    backgroundColor: [
                        '#10B981',
                        '#A855F7',
                        '#F59E0B'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { 
                            font: { size: 10 },
                            usePointStyle: true,
                            padding: 10
                        }
                    }
                }
            }
        });
    }
}

function initializeBakerCharts() {
    if (typeof Chart === 'undefined') {
        console.error('Chart.js library not available');
        return;
    }

    // Revenue Trend Chart (same as manager)
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Revenue',
                    data: [340, 420, 380, 510, 460, 390, 435],
                    borderColor: '#C44569',
                    backgroundColor: 'rgba(196, 69, 105, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#C44569',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { 
                            callback: v => '$' + v,
                            font: { size: 10 }
                        },
                        grid: { color: '#F3F4F6' }
                    },
                    x: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Popular Products Chart (same as manager)
    const productsCtx = document.getElementById('productsChart');
    if (productsCtx) {
        new Chart(productsCtx, {
            type: 'bar',
            data: {
                labels: ['Chocolate', 'Vanilla', 'Red Velvet', 'Strawberry', 'Lemon'],
                datasets: [{
                    label: 'Orders',
                    data: [2, 2, 2, 2, 2],
                    backgroundColor: [
                        '#10B981',
                        '#10B981',
                        '#10B981',
                        '#10B981',
                        '#10B981'
                    ],
                    borderRadius: 4,
                    borderSkipped: false
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { 
                        beginAtZero: true,
                        max: 2.5,
                        ticks: { font: { size: 10 } },
                        grid: { color: '#F3F4F6' }
                    },
                    y: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Cake Layers to Bake Chart (BAKER/DECORATOR SPECIFIC)
    const layersCtx = document.getElementById('layersChart');
    if (layersCtx) {
        const layers = getCakeLayersToBake();
        new Chart(layersCtx, {
            type: 'bar',
            data: {
                labels: Object.keys(layers),
                datasets: [{
                    label: 'Layers',
                    data: Object.values(layers),
                    backgroundColor: [
                        '#F59E0B',
                        '#F59E0B',
                        '#F59E0B',
                        '#F59E0B',
                        '#F59E0B'
                    ],
                    borderRadius: 4,
                    borderSkipped: false
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { 
                        beginAtZero: true,
                        max: 12,
                        ticks: { 
                            font: { size: 10 },
                            stepSize: 2
                        },
                        grid: { color: '#F3F4F6' }
                    },
                    y: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// ====================================================================
// TODAY'S PICKUPS MODAL
// ====================================================================

function openTodaysPickupsModal(event) {
    event.preventDefault();

    const modal = document.getElementById('todays-pickups-modal');
    const tbody = document.getElementById('todays-pickups-modal-tbody');

    if (!modal || !tbody) return;

    // Get today's pickups
    const todaysPickups = getTodaysPickups();

    // Clear existing content
    tbody.innerHTML = '';

    if (todaysPickups.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="todays-pickups-modal-empty">No pickups scheduled for today</td></tr>';
    } else {
        todaysPickups.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${order.orderId}</strong></td>
                <td>${order.customerName}</td>
                <td>${formatDate(order.pickupDate)}</td>
                <td>$${order.total.toFixed(2)}</td>
                <td><span class="status-badge badge-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Show modal
    modal.classList.add('active');
}

function closeTodaysPickupsModal() {
    const modal = document.getElementById('todays-pickups-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('todays-pickups-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeTodaysPickupsModal();
            }
        });
    }
});
