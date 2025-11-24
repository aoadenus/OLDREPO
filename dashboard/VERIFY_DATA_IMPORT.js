// ════════════════════════════════════════════════════════════
// 📊 DASHBOARD DATA IMPORT VERIFICATION
// Copy and paste this into browser console (F12) on any dashboard
// ════════════════════════════════════════════════════════════

console.clear();
console.log('════════════════════════════════════════════════════════════');
console.log('📊 DASHBOARD DATA IMPORT VERIFICATION');
console.log('════════════════════════════════════════════════════════════');
console.log('');

// ═══════════════════════════════════════════════════════════
// 1. DATA IMPORT CHECK
// ═══════════════════════════════════════════════════════════

console.log('1️⃣ DATA IMPORT CHECK:');
console.log('');

if (typeof unifiedMockData === 'undefined') {
    console.error('❌ CRITICAL ERROR: unifiedMockData is not defined!');
    console.error('   The unified-mock-data.js file is not loaded.');
    console.error('   Check that <script src="./js/unified-mock-data.js"></script> exists.');
    console.log('');
} else {
    console.log('✅ unifiedMockData is defined');
    console.log('');
    
    // Check data structure
    console.log('   Data Structure:');
    console.log('   • Orders:', typeof unifiedMockData.orders !== 'undefined' ? '✅' : '❌');
    console.log('   • Customers:', typeof unifiedMockData.customers !== 'undefined' ? '✅' : '❌');
    console.log('   • Products:', typeof unifiedMockData.products !== 'undefined' ? '✅' : '❌');
    console.log('   • Order Statuses:', typeof unifiedMockData.orderStatuses !== 'undefined' ? '✅' : '❌');
    console.log('');
    
    // Check counts
    console.log('   Data Counts:');
    console.log('   • Total Orders:', unifiedMockData.orders.length);
    console.log('   • Total Customers:', unifiedMockData.customers.length);
    console.log('   • Total Products:', unifiedMockData.products.length);
    console.log('   • Order Statuses:', unifiedMockData.orderStatuses.length);
    console.log('');
    
    // Check helper functions
    console.log('   Helper Functions:');
    console.log('   • getCustomer():', typeof unifiedMockData.getCustomer === 'function' ? '✅' : '❌');
    console.log('   • getProduct():', typeof unifiedMockData.getProduct === 'function' ? '✅' : '❌');
    console.log('   • getStatusDescription():', typeof unifiedMockData.getStatusDescription === 'function' ? '✅' : '❌');
    console.log('   • getRecentOrders():', typeof unifiedMockData.getRecentOrders === 'function' ? '✅' : '❌');
    console.log('   • getUpcomingPickups():', typeof unifiedMockData.getUpcomingPickups === 'function' ? '✅' : '❌');
    console.log('');
}

// ═══════════════════════════════════════════════════════════
// 2. TODAY'S DATA CHECK
// ═══════════════════════════════════════════════════════════

if (typeof unifiedMockData !== 'undefined') {
    console.log('2️⃣ TODAY\'S DATA CHECK:');
    console.log('');
    
    const TODAY = '2025-11-23';
    const todaysOrders = unifiedMockData.orders.filter(o => 
        o.orderDate === TODAY && o.isCancelled === 'N'
    );
    const todaysPickups = unifiedMockData.orders.filter(o => 
        o.pickupDate === TODAY && o.isCancelled === 'N'
    );
    
    console.log('   Demo Date:', TODAY);
    console.log('');
    console.log('   Orders Created Today:', todaysOrders.length);
    console.log('   Pickups Scheduled Today:', todaysPickups.length);
    console.log('');
    
    console.log('   Expected Values:');
    console.log('   • Orders Created: 20 (' + (todaysOrders.length === 20 ? '✅ PASS' : '❌ FAIL - got ' + todaysOrders.length) + ')');
    console.log('   • Pickups Scheduled: 6-10 (' + (todaysPickups.length >= 6 && todaysPickups.length <= 10 ? '✅ PASS' : '❌ FAIL - got ' + todaysPickups.length) + ')');
    console.log('');
}

// ═══════════════════════════════════════════════════════════
// 3. KPI DATA CHECK
// ═══════════════════════════════════════════════════════════

if (typeof unifiedMockData !== 'undefined') {
    console.log('3️⃣ KPI DATA CHECK:');
    console.log('');
    
    const TODAY = '2025-11-23';
    const todaysOrders = unifiedMockData.orders.filter(o => 
        o.orderDate === TODAY && o.isCancelled === 'N'
    );
    
    console.log('   Manager Dashboard KPIs:');
    const totalOrders = todaysOrders.length;
    const inProduction = todaysOrders.filter(o => o.statusId === 2 || o.statusId === 3).length;
    const completed = todaysOrders.filter(o => o.statusId === 4 || o.statusId === 5).length;
    
    console.log('   • Total Orders Today:', totalOrders);
    console.log('   • In Production (2+3):', inProduction);
    console.log('   • Completed (4+5):', completed);
    console.log('');
    
    console.log('   Baker Dashboard KPIs:');
    const toBake = todaysOrders.filter(o => o.statusId === 1).length;
    const baking = todaysOrders.filter(o => o.statusId === 2).length;
    const bakerCompleted = todaysOrders.filter(o => o.statusId >= 3).length;
    
    console.log('   • To Bake (Status 1):', toBake);
    console.log('   • In Baking (Status 2):', baking);
    console.log('   • Completed (Status ≥3):', bakerCompleted);
    console.log('');
    
    console.log('   Decorator Dashboard KPIs:');
    const awaiting = todaysOrders.filter(o => o.statusId === 2).length;
    const decorating = todaysOrders.filter(o => o.statusId === 3).length;
    const decoratorCompleted = todaysOrders.filter(o => o.statusId >= 4).length;
    
    console.log('   • Awaiting (Status 2):', awaiting);
    console.log('   • Decorating (Status 3):', decorating);
    console.log('   • Completed (Status ≥4):', decoratorCompleted);
    console.log('');
    
    console.log('   Sales Dashboard KPIs:');
    const created = todaysOrders.length;
    const todaysPickups = unifiedMockData.orders.filter(o => 
        o.pickupDate === TODAY && o.isCancelled === 'N'
    );
    const readyNow = todaysPickups.filter(o => o.statusId === 4).length;
    
    console.log('   • Orders Created Today:', created);
    console.log('   • Scheduled Pickups:', todaysPickups.length);
    console.log('   • Ready Now (Status 4):', readyNow);
    console.log('');
    
    console.log('   Accountant Dashboard KPIs:');
    const revenue = todaysOrders.reduce((sum, o) => sum + o.totalPrice, 0);
    const deposits = todaysOrders.reduce((sum, o) => sum + o.depositAmount, 0);
    const completedRevenue = todaysOrders.filter(o => o.statusId === 5);
    
    console.log('   • Today\'s Revenue: $' + revenue.toFixed(2));
    console.log('   • Deposit Revenue: $' + deposits.toFixed(2));
    console.log('   • Completed Orders:', completedRevenue.length);
    console.log('');
}

// ═══════════════════════════════════════════════════════════
// 4. STATUS MAPPING CHECK
// ═══════════════════════════════════════════════════════════

if (typeof unifiedMockData !== 'undefined') {
    console.log('4️⃣ STATUS MAPPING CHECK:');
    console.log('');
    
    console.log('   Testing getStatusDescription():');
    for (let i = 1; i <= 5; i++) {
        const desc = unifiedMockData.getStatusDescription(i);
        console.log('   • Status ' + i + ':', desc);
    }
    console.log('');
    
    console.log('   Status ID Breakdown (Today):');
    const TODAY = '2025-11-23';
    const todaysOrders = unifiedMockData.orders.filter(o => 
        o.orderDate === TODAY && o.isCancelled === 'N'
    );
    
    for (let i = 1; i <= 5; i++) {
        const count = todaysOrders.filter(o => o.statusId === i).length;
        const desc = unifiedMockData.getStatusDescription(i);
        console.log('   • Status ' + i + ' (' + desc + '):', count);
    }
    console.log('');
}

// ═══════════════════════════════════════════════════════════
// 5. HELPER FUNCTION TESTS
// ═══════════════════════════════════════════════════════════

if (typeof unifiedMockData !== 'undefined') {
    console.log('5️⃣ HELPER FUNCTION TESTS:');
    console.log('');
    
    // Test getCustomer
    const testCustomer = unifiedMockData.getCustomer(1);
    console.log('   getCustomer(1):', testCustomer ? '✅ ' + testCustomer.firstName + ' ' + testCustomer.lastName : '❌ Failed');
    
    // Test getProduct
    const testProduct = unifiedMockData.getProduct(1);
    console.log('   getProduct(1):', testProduct ? '✅ ' + testProduct.name : '❌ Failed');
    
    // Test getCustomerName
    const customerName = unifiedMockData.getCustomerName(1);
    console.log('   getCustomerName(1):', customerName ? '✅ ' + customerName : '❌ Failed');
    
    // Test getProductName
    const productName = unifiedMockData.getProductName(1);
    console.log('   getProductName(1):', productName ? '✅ ' + productName : '❌ Failed');
    
    // Test getRecentOrders
    const recentOrders = unifiedMockData.getRecentOrders(5);
    console.log('   getRecentOrders(5):', recentOrders && recentOrders.length === 5 ? '✅ Returned 5 orders' : '❌ Failed');
    
    // Test getUpcomingPickups
    const pickups = unifiedMockData.getUpcomingPickups('2025-11-23');
    console.log('   getUpcomingPickups("2025-11-23"):', pickups && pickups.length > 0 ? '✅ Found ' + pickups.length + ' pickups' : '❌ Failed');
    
    console.log('');
}

// ═══════════════════════════════════════════════════════════
// 6. FINAL VERIFICATION SUMMARY
// ═══════════════════════════════════════════════════════════

console.log('════════════════════════════════════════════════════════════');
console.log('📋 FINAL VERIFICATION SUMMARY');
console.log('════════════════════════════════════════════════════════════');
console.log('');

const results = [];

if (typeof unifiedMockData !== 'undefined') {
    results.push({ test: 'Data Import', pass: true });
    results.push({ test: 'Data Structure', pass: unifiedMockData.orders && unifiedMockData.customers && unifiedMockData.products });
    results.push({ test: 'Helper Functions', pass: typeof unifiedMockData.getCustomer === 'function' });
    
    const TODAY = '2025-11-23';
    const todaysOrders = unifiedMockData.orders.filter(o => o.orderDate === TODAY && o.isCancelled === 'N');
    results.push({ test: 'Today\'s Orders Count', pass: todaysOrders.length === 20 });
    results.push({ test: 'Status Mapping', pass: unifiedMockData.getStatusDescription(1) !== undefined });
} else {
    results.push({ test: 'Data Import', pass: false });
}

results.forEach(result => {
    console.log((result.pass ? '✅' : '❌') + ' ' + result.test);
});

console.log('');
const allPassed = results.every(r => r.pass);
if (allPassed) {
    console.log('🎉 ALL TESTS PASSED! Data import is working correctly.');
} else {
    console.log('⚠️  SOME TESTS FAILED - See details above.');
}

console.log('');
console.log('════════════════════════════════════════════════════════════');
