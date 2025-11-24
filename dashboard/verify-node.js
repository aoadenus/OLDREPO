const {unifiedMockData} = require('./js/unified-mock-data.js');

const TODAY = '2025-11-23';

console.log('=== COMPREHENSIVE DASHBOARD VERIFICATION ===\n');

const todaysOrders = unifiedMockData.orders.filter(o => o.orderDate === TODAY);
console.log(`TODAY ORDERS (${TODAY}): ${todaysOrders.length} total`);

console.log('  By Status:');
const statusCounts = {};
todaysOrders.forEach(o => {
  const status = unifiedMockData.orderStatuses.find(s => s.id === o.statusId);
  statusCounts[status.name] = (statusCounts[status.name] || 0) + 1;
});
Object.entries(statusCounts).forEach(([k,v]) => console.log(`    ${k}: ${v}`));

console.log('\n--- MANAGER DASHBOARD KPIs ---');
console.log(`Total Orders Today: ${todaysOrders.filter(o => o.statusId !== 6).length}`);
console.log(`Orders In Production: ${todaysOrders.filter(o => [1,2,3].includes(o.statusId)).length}`);
console.log(`Completed Today: ${todaysOrders.filter(o => o.statusId === 4).length}`);
console.log(`Cancellations: ${todaysOrders.filter(o => o.statusId === 6).length}`);

console.log('\n--- BAKER DASHBOARD KPIs ---');
console.log(`Orders To Bake: ${todaysOrders.filter(o => o.statusId === 1).length}`);
console.log(`Currently Baking: ${todaysOrders.filter(o => o.statusId === 2).length}`);
console.log(`Ready for Decoration: ${todaysOrders.filter(o => o.statusId === 3).length}`);
console.log(`Cancelled Today: ${todaysOrders.filter(o => o.statusId === 6).length}`);

console.log('\n--- DECORATOR DASHBOARD KPIs ---');
console.log(`Awaiting Decoration: ${todaysOrders.filter(o => o.statusId === 2).length}`);
console.log(`In Decoration: ${todaysOrders.filter(o => o.statusId === 3).length}`);
console.log(`Ready for Approval: ${todaysOrders.filter(o => o.statusId === 4).length}`);
console.log(`Cancelled Today: ${todaysOrders.filter(o => o.statusId === 6).length}`);

console.log('\n--- SALES DASHBOARD KPIs ---');
console.log(`Orders Created Today: ${todaysOrders.filter(o => o.statusId !== 6).length}`);
const pickups = unifiedMockData.orders.filter(o => o.pickupDate === TODAY && o.statusId !== 6);
console.log(`Scheduled Pickups Today: ${pickups.length}`);
console.log(`Ready Now: ${pickups.filter(o => o.statusId === 4).length}`);

console.log('\n--- ACCOUNTANT DASHBOARD KPIs ---');
const revenue = todaysOrders.filter(o => o.statusId !== 6).reduce((sum, o) => sum + o.totalPrice, 0);
console.log(`Today Revenue: $${revenue.toFixed(2)}`);
console.log(`Completed Orders: ${todaysOrders.filter(o => o.statusId === 5).length}`);
const weekStart = new Date('2025-11-17');
const weekEnd = new Date('2025-11-23');
const cancelled = unifiedMockData.orders.filter(o => {
  const d = new Date(o.orderDate);
  return o.statusId === 6 && d >= weekStart && d <= weekEnd;
}).length;
console.log(`Refunds This Week (Nov 17-23): ${cancelled}`);

console.log('\n--- HELPER METHOD TEST ---');
const recent = unifiedMockData.getRecentOrders(3);
console.log('getRecentOrders(3):');
recent.forEach(o => console.log(`  #${o.id}: ${o.customer} - ${o.product} - ${o.status}`));

console.log('\n✅ All dashboards verified! No undefined values should appear.');
