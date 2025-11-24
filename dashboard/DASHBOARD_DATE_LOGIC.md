# 📊 DASHBOARD DATE LOGIC REFERENCE

## ✅ MASTER FIX COMPLETE - All Dashboards Synchronized

All dashboards now use **consistent date filtering** for Nov 23, 2025 demo.

---

## 🎯 THE TWO PERSPECTIVES

### 1️⃣ **BUSINESS ACTIVITY** (orderDate)
- When customer **placed** the order
- Used for: **KPIs, Revenue, Daily Counts**
- Filter: `o.orderDate === '2025-11-23'`

### 2️⃣ **WORK SCHEDULE** (pickupDate)
- When order is **due for pickup**
- Used for: **Work Queues, Today's Pickups**
- Filter: `o.pickupDate === '2025-11-23'`

---

## 📋 DASHBOARD-BY-DASHBOARD BREAKDOWN

### 🏢 **MANAGER DASHBOARD**
| KPI | Filter | Logic |
|-----|--------|-------|
| Total Orders Today | orderDate | Orders placed today |
| In Production | orderDate + status 2,3 | Today's orders being made |
| Completed Today | orderDate + status 4,5 | Today's orders finished |
| Cancellations Week | orderDate (Nov 21-27) | This week's cancellations |

**Tables:**
- Recent Orders: Prioritizes `orderDate === TODAY`, fills with other recent
- Today's Pickups: `pickupDate === TODAY`

---

### 🎂 **BAKER DASHBOARD**
| KPI | Filter | Logic |
|-----|--------|-------|
| Orders To Bake | orderDate + status 1 | Today's orders not started |
| Currently Baking | orderDate + status 2 | Today's orders in oven |
| Completed Today | orderDate + status ≥3 | Today's orders done baking |
| Total Today | orderDate | All of today's orders |

**Tables:**
- Baking Queue: `pickupDate === TODAY && status 1,2` (work due today)
- Moving to Decorating: `pickupDate === TODAY && status 3`
- Cancelled Orders: `(pickupDate === TODAY || orderDate === TODAY) && cancelled`

---

### 🎨 **DECORATOR DASHBOARD**
| KPI | Filter | Logic |
|-----|--------|-------|
| Awaiting Decoration | orderDate + status 2 | Today's orders ready to decorate |
| In Decoration | orderDate + status 3 | Today's orders being decorated |
| Completed Today | orderDate + status ≥4 | Today's orders finished |
| Total Today | orderDate | All of today's orders |

**Tables:**
- Decorating Queue: `pickupDate === TODAY && status 3` (work due today)
- Ready for Approval: `pickupDate === TODAY && status 4`
- Cancelled Orders: `(pickupDate === TODAY || orderDate === TODAY) && cancelled`

---

### 💼 **SALES DASHBOARD**
| KPI | Filter | Logic |
|-----|--------|-------|
| Orders Created Today | orderDate | Orders placed today |
| Scheduled Pickups Today | pickupDate | Pickups happening today |
| Ready Now | pickupDate + status 4 | Orders ready for pickup today |
| New Customers Week | customer.id > 30 | New customers this week |

**Tables:**
- Recent Orders: Same as Manager (prioritizes today)
- Today's Pickups: `pickupDate === TODAY`
- Tomorrow's Schedule: `pickupDate === '2025-11-24'`

---

### 💰 **ACCOUNTANT DASHBOARD**
| KPI | Filter | Logic |
|-----|--------|-------|
| Today's Revenue | orderDate | Revenue from orders placed today |
| Deposit Revenue | orderDate | Deposits collected today |
| Completed Orders | orderDate + status 5 | Today's orders picked up |
| Refunds This Week | orderDate (Nov 21-27) | Week's refunds |

**Tables:**
- Recent Transactions: `orderDate === TODAY` (sorted by ID desc)
- Outstanding Balances: `cancelled === 'N' && status < 5` (not picked up)

**Financial Summary:**
- 7-day range: Nov 17-23 (orders placed in last week)

---

## 🔧 CONSTANT USED EVERYWHERE

```javascript
const TODAY = '2025-11-23'; // Hardcoded for demo consistency
```

**Cancelled Filtering:**
- Use: `o.isCancelled === 'N'` or `o.isCancelled === 'Y'`
- NOT: `o.isCancelled !== 'Y'` (for consistency)

---

## 📊 EXPECTED DATA COUNTS (Nov 23, 2025)

| Metric | Expected | What It Means |
|--------|----------|---------------|
| Orders Created Today | 20 | Orders with orderDate = Nov 23 |
| Pickups Scheduled Today | 6-8 | Orders with pickupDate = Nov 23 |
| Status 1 (To Be Created) | 4 | Not started yet |
| Status 2 (In Baking) | 4 | Currently baking |
| Status 3 (Decorating) | 2 | Being decorated |
| Status 4 (Ready) | 9 | Ready for pickup |
| Status 5 (Picked Up) | 1 | Already collected |
| Cancelled Today | 1 | Cancelled on Nov 23 |
| Cancelled This Week | 2-4 | Cancelled Nov 21-27 |

---

## ✅ VERIFICATION CHECKLIST

Run `VERIFY_DASHBOARDS.js` in browser console on any dashboard:

1. ✅ All dashboards use `TODAY = '2025-11-23'`
2. ✅ KPIs filter by `orderDate` (when placed)
3. ✅ Work queues filter by `pickupDate` (when due)
4. ✅ Recent Orders prioritize today's orders
5. ✅ Numbers consistent across all dashboards
6. ✅ No console errors

---

## 🎉 QUICK TEST

Open any dashboard, press **F12**, paste:

```javascript
const TODAY = '2025-11-23';
const todaysOrders = unifiedMockData.orders.filter(o => o.orderDate === TODAY && o.isCancelled === 'N');
console.log('Orders created today:', todaysOrders.length); // Should be 20
console.log('Revenue today:', '$' + todaysOrders.reduce((s,o) => s + o.totalPrice, 0).toFixed(2));
```

Should output:
```
Orders created today: 20
Revenue today: $2,XXX.XX
```

---

## 🚀 CHANGES MADE

**Files Modified:**
1. `dashboard/manager-dashboard.html` - Standardized KPIs, week range for cancellations
2. `dashboard/baker-dashboard.html` - Fixed status counts, consistent TODAY constant
3. `dashboard/decorator-dashboard.html` - Fixed awaiting=2, decorating=3, completed≥4
4. `dashboard/sales-dashboard.html` - Added getStatusClass, fixed Ready Now
5. `dashboard/accountant-dashboard.html` - Already correct ✅

**Pattern Applied:**
- All use `const TODAY = '2025-11-23'`
- All use `o.isCancelled === 'N'` / `'Y'`
- All KPIs filter by `orderDate` (activity)
- All queues filter by `pickupDate` (work schedule)

---

## 📝 NOTES

- **Demo Date:** Nov 23, 2025 is hardcoded for presentation consistency
- **Real-world:** Would use `new Date().toISOString().split('T')[0]`
- **Two Perspectives:** orderDate = business, pickupDate = operations
- **Status IDs:** 1=Pending, 2=Baking, 3=Decorating, 4=Ready, 5=Completed
- **Helper Functions:** getRecentOrders() prioritizes today, getStatusClass() maps IDs

---

**Last Updated:** November 23, 2025  
**Git Commit:** `MASTER FIX - All dashboard KPIs and tables synchronized to Nov 23, 2025`
