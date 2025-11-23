// ============================================================================
// EMILY BAKES CAKES - UNIFIED MOCK DATA
// Presentation Date: November 25, 2025
// Complete data matching Data Dictionary specifications
// ============================================================================

const unifiedMockData = {
    // Order Status Lookup (Table 6)
    orderStatuses: [
        { id: 1, code: "NEW", description: "To Be Created", color: "#3B82F6" },
        { id: 2, code: "BAKING", description: "In Baking", color: "#F59E0B" },
        { id: 3, code: "DECORATING", description: "Decorating", color: "#A855F7" },
        { id: 4, code: "READY", description: "Ready for Pickup", color: "#10B981" },
        { id: 5, code: "COMPLETED", description: "Picked Up", color: "#6B7280" }
    ],

    // Customer Types (Table 4)
    customerTypes: [
        { id: 1, code: "RETAIL", description: "Retail (Individual)" },
        { id: 2, code: "CORPORATE", description: "Corporate (Business)" }
    ],

    // Products (Table 7)
    products: [
        { id: 1, name: "Birthday Celebration", basePrice: 45.00, servesMin: 8, servesMax: 12 },
        { id: 2, name: "Lemon Doberge", basePrice: 65.00, servesMin: 10, servesMax: 15 },
        { id: 3, name: "German Chocolate", basePrice: 55.00, servesMin: 8, servesMax: 12 },
        { id: 4, name: "Chocolate Ganache", basePrice: 50.00, servesMin: 8, servesMax: 12 },
        { id: 5, name: "Italian Cream", basePrice: 60.00, servesMin: 10, servesMax: 14 },
        { id: 6, name: "Black Forest", basePrice: 58.00, servesMin: 8, servesMax: 12 },
        { id: 7, name: "Almond Delight", basePrice: 52.00, servesMin: 8, servesMax: 12 },
        { id: 8, name: "Lemon & Cream Cheese", basePrice: 54.00, servesMin: 8, servesMax: 12 },
        { id: 9, name: "Strawberry Delight", basePrice: 56.00, servesMin: 10, servesMax: 14 },
        { id: 10, name: "Chocolate Doberge", basePrice: 68.00, servesMin: 10, servesMax: 15 },
        { id: 11, name: "½ & ½ Doberge", basePrice: 70.00, servesMin: 12, servesMax: 16 },
        { id: 12, name: "Pecan Praline", basePrice: 62.00, servesMin: 10, servesMax: 14 },
        { id: 13, name: "Chocolate Banana", basePrice: 53.00, servesMin: 8, servesMax: 12 },
        { id: 14, name: "Cookies and Cream", basePrice: 51.00, servesMin: 8, servesMax: 12 },
        { id: 15, name: "Red Velvet", basePrice: 57.00, servesMin: 10, servesMax: 14 }
    ],

    // Customers (Table 1)
    customers: [
        { id: 100001, firstName: "Sarah", lastName: "Johnson", email: "sarah.johnson@email.com", phone: "(713) 555-0101", typeId: 1, isPreferred: "Y" },
        { id: 100002, firstName: "Michael", lastName: "Chen", email: "michael.chen@email.com", phone: "(713) 555-0102", typeId: 1, isPreferred: "N" },
        { id: 100003, companyName: "ABC Corporation", firstName: "Lisa", lastName: "Martinez", email: "lisa.martinez@abccorp.com", phone: "(713) 555-0103", typeId: 2, isPreferred: "Y" },
        { id: 100004, firstName: "James", lastName: "Wilson", email: "james.wilson@email.com", phone: "(713) 555-0104", typeId: 1, isPreferred: "N" },
        { id: 100005, firstName: "Emily", lastName: "Rodriguez", email: "emily.rodriguez@email.com", phone: "(713) 555-0105", typeId: 1, isPreferred: "Y" },
        { id: 100006, companyName: "Tech Solutions Inc", firstName: "David", lastName: "Thompson", email: "david.thompson@techsol.com", phone: "(713) 555-0106", typeId: 2, isPreferred: "Y" },
        { id: 100007, firstName: "Amanda", lastName: "Garcia", email: "amanda.garcia@email.com", phone: "(713) 555-0107", typeId: 1, isPreferred: "N" },
        { id: 100008, firstName: "Robert", lastName: "Lee", email: "robert.lee@email.com", phone: "(713) 555-0108", typeId: 1, isPreferred: "N" },
        { id: 100009, firstName: "Jennifer", lastName: "Taylor", email: "jennifer.taylor@email.com", phone: "(713) 555-0109", typeId: 1, isPreferred: "Y" },
        { id: 100010, firstName: "Christopher", lastName: "Anderson", email: "chris.anderson@email.com", phone: "(713) 555-0110", typeId: 1, isPreferred: "N" }
    ],

    // Orders (Table 5) - 20 ORDERS - Presentation Date: Nov 25, 2025
    orders: [
        { id: 1001, customerId: 100001, productId: 2, orderDate: "2025-11-20", pickupDate: "2025-11-25", pickupTime: "09:00", totalPrice: 125.00, depositAmount: 62.50, statusId: 4, notes: "VIP customer - Birthday celebration for 15" },
        { id: 1002, customerId: 100002, productId: 3, orderDate: "2025-11-21", pickupDate: "2025-11-25", pickupTime: "10:30", totalPrice: 95.00, depositAmount: 47.50, statusId: 4, notes: "Add chocolate shavings on top" },
        { id: 1003, customerId: 100003, productId: 4, orderDate: "2025-11-22", pickupDate: "2025-11-25", pickupTime: "11:00", totalPrice: 185.00, depositAmount: 92.50, statusId: 4, notes: "Corporate event - Company logo in fondant" },
        { id: 1004, customerId: 100004, productId: 5, orderDate: "2025-11-22", pickupDate: "2025-11-25", pickupTime: "13:00", totalPrice: 105.00, depositAmount: 52.50, statusId: 4, notes: "NO PECANS - severe nut allergy" },
        { id: 1005, customerId: 100005, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "14:30", totalPrice: 78.00, depositAmount: 39.00, statusId: 4, notes: "White icing with rainbow sprinkles" },
        { id: 1006, customerId: 100006, productId: 10, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "15:00", totalPrice: 210.00, depositAmount: 105.00, statusId: 4, notes: "Office retirement party for 25 people" },
        { id: 1007, customerId: 100007, productId: 6, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "16:00", totalPrice: 98.00, depositAmount: 49.00, statusId: 4, notes: "Extra cherries please" },
        { id: 1008, customerId: 100008, productId: 9, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "17:00", totalPrice: 112.00, depositAmount: 56.00, statusId: 4, notes: "Anniversary cake - 10 years" },
        { id: 1009, customerId: 100009, productId: 15, orderDate: "2025-11-25", pickupDate: "2025-11-26", pickupTime: "10:00", totalPrice: 102.00, depositAmount: 51.00, statusId: 3, notes: "Cream cheese frosting, smooth finish" },
        { id: 1010, customerId: 100010, productId: 14, orderDate: "2025-11-25", pickupDate: "2025-11-26", pickupTime: "14:00", totalPrice: 88.00, depositAmount: 44.00, statusId: 2, notes: "Kids birthday - extra Oreos on top" },
        { id: 1011, customerId: 100003, productId: 11, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "09:00", totalPrice: 245.00, depositAmount: 122.50, statusId: 1, notes: "Board meeting - VIP order, must be perfect" },
        { id: 1012, customerId: 100001, productId: 7, orderDate: "2025-11-24", pickupDate: "2025-11-26", pickupTime: "11:30", totalPrice: 95.00, depositAmount: 47.50, statusId: 2, notes: "VIP - ensure perfect execution" },
        { id: 1013, customerId: 100005, productId: 13, orderDate: "2025-11-24", pickupDate: "2025-11-26", pickupTime: "15:30", totalPrice: 89.00, depositAmount: 44.50, statusId: 3, notes: "Fresh banana slices on top layer" },
        { id: 1014, customerId: 100002, productId: 8, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "10:00", totalPrice: 92.00, depositAmount: 46.00, statusId: 1, notes: "Light lemon flavor preferred" },
        { id: 1015, customerId: 100006, productId: 12, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "13:00", totalPrice: 118.00, depositAmount: 59.00, statusId: 1, notes: "Corporate lunch dessert" },
        { id: 1016, customerId: 100004, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "12:00", totalPrice: 98.00, depositAmount: 49.00, statusId: 2, notes: "Rich chocolate - no nuts" },
        { id: 1017, customerId: 100007, productId: 2, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "16:30", totalPrice: 115.00, depositAmount: 57.50, statusId: 3, notes: "Classic lemon - family favorite" },
        { id: 1018, customerId: 100008, productId: 3, orderDate: "2025-11-23", pickupDate: "2025-11-27", pickupTime: "11:00", totalPrice: 101.00, depositAmount: 50.50, statusId: 1, notes: "Extra coconut pecan frosting" },
        { id: 1019, customerId: 100009, productId: 1, orderDate: "2025-11-22", pickupDate: "2025-11-26", pickupTime: "14:00", totalPrice: 82.00, depositAmount: 41.00, statusId: 2, notes: "Simple vanilla with buttercream" },
        { id: 1020, customerId: 100010, productId: 15, orderDate: "2025-11-22", pickupDate: "2025-11-27", pickupTime: "15:00", totalPrice: 108.00, depositAmount: 54.00, statusId: 1, notes: "Traditional cream cheese frosting" }
    ],

    // Dashboard Metrics
    metrics: {
        today: {
            totalOrders: 20,
            ordersInProduction: 11,
            completedToday: 8,
            cancellationsWeek: 0,
            lastOrderTime: "2:14 PM",
            longestInProduction: "42 mins",
            avgCompletionTime: "1 hr 12 mins"
        },
        weekly: {
            revenue: 2450.00,
            lastWeekRevenue: 2189.00,
            percentChange: 11.9,
            revenueByDay: [320, 410, 380, 450, 390, 280, 220],
            ordersByStatus: [5, 3, 2, 8, 2],
            topProducts: [8, 6, 5, 4, 3, 4, 2, 3, 2, 1]
        }
    },

    // Helper functions
    getCustomerName: function(customerId) {
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer) return "Unknown";
        return customer.companyName || `${customer.firstName} ${customer.lastName}`;
    },

    getProductName: function(productId) {
        const product = this.products.find(p => p.id === productId);
        return product ? product.name : "Unknown Product";
    },

    getStatusDescription: function(statusId) {
        const status = this.orderStatuses.find(s => s.id === statusId);
        return status ? status.description : "Unknown";
    },

    getOrdersByStatus: function(statusId) {
        return this.orders.filter(o => o.statusId === statusId);
    },

    getRecentOrders: function(limit = 10) {
        return this.orders
            .sort((a, b) => {
                const dateA = new Date(a.orderDate);
                const dateB = new Date(b.orderDate);
                if (dateB - dateA !== 0) return dateB - dateA;
                return b.id - a.id;
            })
            .slice(0, limit)
            .map(order => ({
                id: order.id,
                customer: this.getCustomerName(order.customerId),
                product: this.getProductName(order.productId),
                orderDate: order.orderDate,
                status: this.getStatusDescription(order.statusId),
                statusId: order.statusId
            }));
    },

    getUpcomingPickups: function(pickupDate = "2025-11-25") {
        return this.orders
            .filter(o => o.pickupDate === pickupDate && o.statusId === 4)
            .sort((a, b) => {
                const timeA = a.pickupTime.replace(':', '');
                const timeB = b.pickupTime.replace(':', '');
                return timeA - timeB;
            })
            .map(order => ({
                id: order.id,
                time: this.formatTime(order.pickupTime),
                customer: this.getCustomerName(order.customerId),
                product: this.getProductName(order.productId),
                pickupDate: order.pickupDate
            }));
    },

    formatTime: function(time24) {
        const [hours, minutes] = time24.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
    },

    formatDate: function(dateStr) {
        const date = new Date(dateStr);
        const month = date.toLocaleString('en-US', { month: 'short' });
        const day = date.getDate();
        return `${month} ${day}`;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = unifiedMockData;
}
