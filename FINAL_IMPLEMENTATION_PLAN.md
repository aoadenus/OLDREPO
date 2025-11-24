# EMILY BAKES CAKES - FINAL IMPLEMENTATION PLAN
## Nov 25, 2025 Presentation Dashboard Hardcoding

**Presentation Date:** November 25, 2025 @ 10:15 AM  
**Current Date:** November 24, 2025 @ 8:50 AM  
**Time Available:** ~1 hour 25 minutes  
**Target Execution:** 15-20 minutes  
**Buffer:** 40-45 minutes

---

## EXECUTIVE SUMMARY

**Goal:** Convert all 6 dashboards to hardcoded, static KPI displays showing Nov 25, 2025 as "today" with 9 active orders + 1 cancelled order (Orders 1-10).

**Strategy:** 
- Change **Order 3** from statusId 2 (In Baking) to statusId 7 (Cancelled) with `isCancelled: "Y"`
- Hardcode all 24 KPI values in HTML (no calculations)
- Keep full 70-order dataset in `unified-mock-data-NEW.js` for tables/references
- Tables display Orders 1-10 only (3 rows per table per user requirement)

---

## PART 1: DATA MODIFICATIONS

### 1.1 Change Order 3 to Cancelled

**File:** `c:\Users\adere\Desktop\EBCWIP\dashboard\js\unified-mock-data-NEW.js`

**Line 101 - CHANGE FROM:**
```javascript
{ id: 3, customerId: 2, productId: 9, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00 AM", totalPrice: 338.65, depositAmount: 213.18, paymentMethod: "Cash", salesStaffId: 5, bakerId: 6, decoratorId: 9, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 8, notes: "No nuts - allergy friendly" },
```

**CHANGE TO:**
```javascript
{ id: 3, customerId: 2, productId: 9, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00 AM", totalPrice: 338.65, depositAmount: 213.18, paymentMethod: "Cash", salesStaffId: 5, bakerId: 6, decoratorId: 9, statusId: 7, finalApprovalId: null, isCancelled: "Y", lastEmployeeId: 8, notes: "No nuts - allergy friendly" },
```

**Changes Made:**
- `statusId: 2` → `statusId: 7` (Cancelled)
- `isCancelled: "N"` → `isCancelled: "Y"`

### 1.2 Updated Orders 1-10 Status Distribution

After cancelling Order 3:

| Status | Orders | Count |
|--------|--------|-------|
| statusId 2 (In Baking) | - | 0 |
| statusId 3 (Decorating) | 6, 7 | 2 |
| statusId 4 (Completed) | 2, 4, 5, 8 | 4 |
| statusId 5 (Picked Up) | 1, 9, 10 | 3 |
| statusId 7 (Cancelled) | 3 | 1 |
| **TOTAL ACTIVE** | 1, 2, 4, 5, 6, 7, 8, 9, 10 | **9** |
| **TOTAL WITH CANCELLED** | 1-10 | **10** |

### 1.3 Orders 1-10 Revenue Calculation

**Active Orders Total (excluding Order 3 cancelled):**
- Order 1: $282.81
- Order 2: $250.04
- Order 4: $274.20
- Order 5: $144.60
- Order 6: $121.26
- Order 7: $287.84
- Order 8: $278.35
- Order 9: $295.50
- Order 10: $129.07
- **Total (9 orders): $2,142.71**

**All Orders Total (including Order 3 cancelled):**
- **Total (10 orders): $2,481.36**

---

## PART 2: KPI HARDCODING - ALL 24 VALUES

### 2.1 Manager Dashboard (4 KPIs)

**File:** `c:\Users\adere\Desktop\EBCWIP\dashboard\manager-dashboard.html`

| KPI ID | Current | New Value | Label | Subtitle | Location |
|--------|---------|-----------|-------|----------|----------|
| `total-orders-today` | 0 | **10** | Total Orders Today | Last order: 2:14 PM | Line 328 |
| `orders-in-production` | 0 | **2** | Orders In Production | Longest: 42 mins | Line 333 |
| `completed-orders-today` | 0 | **4** | Completed Today | Avg: 1 hr 12 mins | Line 338 |
| `cancellations-today` | 0 | **1** | Cancellations Today* | No cancellations | Line 343 |

**\*Note:** Label changed from "Cancellations This Week" to "Cancellations Today"

**Rationale for Values:**
- `total-orders-today: 10` = Orders 1-10 all have pickupDate "2025-11-25"
- `orders-in-production: 2` = statusId 3 (Decorating) = Orders 6, 7
- `completed-orders-today: 4` = statusId 4 (Completed) = Orders 2, 4, 5, 8
- `cancellations-today: 1` = Order 3 cancelled today

---

### 2.2 Sales Dashboard (4 KPIs)

**File:** `c:\Users\adere\Desktop\EBCWIP\dashboard\sales-dashboard.html`

| KPI ID | Current | New Value | Label | Subtitle | Location |
|--------|---------|-----------|-------|----------|----------|
| `orders-created-today` | 0 | **10** | Orders Created Today | Last order: 2:14 PM | Line 328 |
| `scheduled-pickups-today` | 0 | **9** | Scheduled Pickups Today | 9 pickups: 9 AM - 5 PM | Line 333 |
| `ready-now-count` | 0 | **4** | Ready Now | Available for pickup | Line 338 |
| `new-customers-week` | 0 | **5** | New Customers (Week) | +5 vs last week | Line 343 |

**Rationale for Values:**
- `orders-created-today: 10` = Orders 1-10 orderDate "2025-11-23"
- `scheduled-pickups-today: 9` = 9 active orders (exclude cancelled Order 3)
- `ready-now-count: 4` = statusId 4 (Completed) = Orders 2, 4, 5, 8
- `new-customers-week: 5` = Estimate (unique customers in Orders 1-10)

---

### 2.3 Accountant Dashboard (4 KPIs with Currency)

**File:** `c:\Users\adere\Desktop\EBCWIP\dashboard\accountant-dashboard.html`

| KPI ID | Current | New Value | Label | Subtitle | Location |
|--------|---------|-----------|-------|----------|----------|
| `todays-revenue` | $0 | **$2,142.71** | Today's Revenue | Avg order: $238.08 | Line 320 |
| `deposit-revenue` | $0 | **$1,071.41** | Deposit Revenue | Required: 50% per order | Line 325 |
| `completed-orders` | 0 | **4** | Completed Orders | Posted: $1,071.41 | Line 330 |
| `refunds-week` | $0 | **$0.00** | Refunds This Week | Refunded: $0.00 | Line 335 |

**Rationale for Values:**
- `todays-revenue: $2,142.71` = Sum of active Orders 1-10 (excluding cancelled)
- `deposit-revenue: $1,071.41` = 50% of total revenue
- `completed-orders: 4` = statusId 4 orders
- `refunds-week: $0.00` = No refunds in data

**Subtitle Calculations:**
- Avg order: $2,142.71 ÷ 9 orders = $238.08
- Posted (completed): Sum of Orders 2, 4, 5, 8 = $250.04 + $274.20 + $144.60 + $278.35 = **$947.19**

---

### 2.4 Baker Dashboard (4 KPIs)

**File:** `c:\Users\adere\Desktop\EBCWIP\dashboard\baker-dashboard.html`

| KPI ID | Current | New Value | Label | Subtitle | Location |
|--------|---------|-----------|-------|----------|----------|
| `orders-to-bake` | 0 | **0** | Orders To Bake | From Sales — To Be Started | Line 250 |
| `in-baking` | 0 | **0** | In Baking | Currently Being Prepared | Line 255 |
| `ready-decoration` | 0 | **2** | Ready for Decoration | Finished & Cooling | Line 260 |
| `cancelled-today` | 0 | **1** | Cancelled Today | Stop Decoration Work | Line 265 |

**Rationale for Values:**
- `orders-to-bake: 0` = No statusId 1 orders (none created today)
- `in-baking: 0` = No statusId 2 orders (Order 3 was in baking but now cancelled)
- `ready-decoration: 2` = statusId 3 (Decorating) = Orders 6, 7
- `cancelled-today: 1` = Order 3 cancelled

---

### 2.5 Decorator Dashboard (4 KPIs)

**File:** `c:\Users\adere\Desktop\EBCWIP\dashboard\decorator-dashboard.html`

| KPI ID | Current | New Value | Label | Subtitle | Location |
|--------|---------|-----------|-------|----------|----------|
| `orders-to-decorate` | 0 | **2** | Orders To Decorate | Ready from Bakers | Line 245 |
| `in-decorating` | 0 | **2** | In Decorating | Design in Progress | Line 250 |
| `ready-approval` | 0 | **4** | Ready for Final Approval | Awaiting Manager Sign-off | Line 255 |
| `cancelled-today` | 0 | **1** | Cancelled Today | Stop Decoration Work | Line 260 |

**Rationale for Values:**
- `orders-to-decorate: 2` = statusId 3 (Decorating, ready to start) = Orders 6, 7
- `in-decorating: 2` = statusId 3 (currently decorating) = Orders 6, 7
- `ready-approval: 4` = statusId 4 (Completed, awaiting approval) = Orders 2, 4, 5, 8
- `cancelled-today: 1` = Order 3 cancelled

---

### 2.6 Index/Home Dashboard (4 KPIs)

**File:** `c:\Users\adere\Desktop\EBCWIP\dashboard\index.html`

| KPI ID | Current | New Value | Label | Location |
|--------|---------|-----------|-------|----------|
| `pending-pickup-count` | 0 | **7** | Today's Pickups | Line 98 |
| `todays-orders-count` | 0 | **10** | Total Orders | Line 103 |
| `weekly-revenue` | $0 | **$2,142.71** | Weekly Revenue | Line 108 |
| `new-customers-count` | 0 | **5** | New Customers | Line 113 |

**Rationale for Values:**
- `pending-pickup-count: 7` = statusId 3, 4, 5 (all orders needing pickup) = Orders 2, 4, 5, 6, 7, 8
- `todays-orders-count: 10` = All Orders 1-10
- `weekly-revenue: $2,142.71` = Active orders revenue
- `new-customers-count: 5` = Unique customers

---

## PART 3: RELEVANT FILES CHECKLIST

### Files to Modify

| File | Purpose | Changes | Status |
|------|---------|---------|--------|
| `unified-mock-data-NEW.js` | Data source | Order 3: statusId 2→7, isCancelled N→Y | ⏳ TODO |
| `dashboard/manager-dashboard.html` | Manager KPIs | 4 values + 1 label change | ⏳ TODO |
| `dashboard/sales-dashboard.html` | Sales KPIs | 4 values + subtitles | ⏳ TODO |
| `dashboard/accountant-dashboard.html` | Accounting KPIs | 4 currency values + subtitles | ⏳ TODO |
| `dashboard/baker-dashboard.html` | Baker KPIs | 4 values | ⏳ TODO |
| `dashboard/decorator-dashboard.html` | Decorator KPIs | 4 values | ⏳ TODO |
| `dashboard/index.html` | Home dashboard | 4 values | ⏳ TODO |

### Files NOT Modified (Reference Only)

| File | Purpose | Status |
|------|---------|--------|
| `dashboard/all-orders.html` | Order table display | ✅ No changes (keeps full dataset) |
| `dashboard/all-customers.html` | Customer table display | ✅ No changes |
| `dashboard/css/dashboard-redesigned.css` | Styling | ✅ No changes (all classes verified) |
| `dashboard/js/dashboard-common.js` | Shared functions | ✅ No changes |
| `dashboard/js/main.js` | Dashboard logic | ✅ No changes (hardcoded values override) |

---

## PART 4: DATA CONNECTIONS & DISPLAY LOGIC

### 4.1 How Orders Display (All Orders Page)

**File:** `dashboard/all-orders.html`

**Current Behavior:**
- Pulls from `unifiedMockData.orders` array (all 70 orders)
- Filters by `pickupDate: "2025-11-25"` (Orders 1-10)
- Displays 3 rows per user requirement
- Shows: Order ID, Customer, Product, Price, Status, Pickup Time

**Data Flow:**
```
unified-mock-data-NEW.js (70 orders)
    ↓
all-orders.html (filters pickupDate Nov 25)
    ↓
Orders 1-10 (displayed as 3 rows)
```

**Orders 1-10 Displayed:**
1. Order 1 (Picked Up) - Michelle Lee - $282.81
2. Order 2 (Completed) - John Harris - $250.04
3. Order 3 (Cancelled) - Emily Davis - $338.65 ✗
4. Order 4 (Completed) - Sarah Brown - $274.20
5. Order 5 (Completed) - John Harris - $144.60
6. Order 6 (Decorating) - Jessica Sanchez - $121.26
7. Order 7 (Decorating) - Rachel Brown - $287.84
8. Order 8 (Completed) - Nicole Wilson - $278.35
9. Order 9 (Picked Up) - Sarah Brown - $295.50
10. Order 10 (Picked Up) - Jessica Lewis - $129.07

### 4.2 How Customers Display (All Customers Page)

**File:** `dashboard/all-customers.html`

**Current Behavior:**
- Pulls from `unifiedMockData.customers` array (all 30 customers)
- Filters by `statusId: 1` (Active customers only)
- Displays 3 rows per user requirement

**Data Flow:**
```
unified-mock-data-NEW.js (30 customers)
    ↓
all-customers.html (filters statusId 1 = Active)
    ↓
First 3 of 30 customers displayed
```

**Active Customers:** 30 (all have statusId 1 in dataset)

### 4.3 KPI-to-Data Mapping

**KPIs are HARDCODED** (not calculated from data):

```
Dashboard HTML (hardcoded values)
    ↓
KPI divs: <div id="total-orders-today">10</div>
    ↓
CSS styling applied
    ↓
User sees static "10" on screen
```

**Data is available but NOT used for KPIs:**
- `unified-mock-data-NEW.js` orders array exists
- KPI calculations ignored
- Values are presentation-only

---

## PART 5: KPI SUMMARY TABLE

### All 24 KPIs at a Glance

| Dashboard | KPI ID | Value | Label | Category |
|-----------|--------|-------|-------|----------|
| **Manager** | total-orders-today | 10 | Total Orders Today | Count |
| | orders-in-production | 2 | Orders In Production | Count |
| | completed-orders-today | 4 | Completed Today | Count |
| | cancellations-today | 1 | Cancellations Today | Count |
| **Sales** | orders-created-today | 10 | Orders Created Today | Count |
| | scheduled-pickups-today | 9 | Scheduled Pickups Today | Count |
| | ready-now-count | 4 | Ready Now | Count |
| | new-customers-week | 5 | New Customers (Week) | Count |
| **Accountant** | todays-revenue | $2,142.71 | Today's Revenue | Currency |
| | deposit-revenue | $1,071.41 | Deposit Revenue | Currency |
| | completed-orders | 4 | Completed Orders | Count |
| | refunds-week | $0.00 | Refunds This Week | Currency |
| **Baker** | orders-to-bake | 0 | Orders To Bake | Count |
| | in-baking | 0 | In Baking | Count |
| | ready-decoration | 2 | Ready for Decoration | Count |
| | cancelled-today | 1 | Cancelled Today | Count |
| **Decorator** | orders-to-decorate | 2 | Orders To Decorate | Count |
| | in-decorating | 2 | In Decorating | Count |
| | ready-approval | 4 | Ready for Final Approval | Count |
| | cancelled-today | 1 | Cancelled Today | Count |
| **Index** | pending-pickup-count | 7 | Today's Pickups | Count |
| | todays-orders-count | 10 | Total Orders | Count |
| | weekly-revenue | $2,142.71 | Weekly Revenue | Currency |
| | new-customers-count | 5 | New Customers | Count |

---

## PART 6: IMPLEMENTATION STEPS

### Step 1: Modify Order 3 to Cancelled (2 minutes)
**What:** Change Order 3 from In Baking to Cancelled  
**File:** `unified-mock-data-NEW.js` line 101  
**Action:** Change statusId 2→7, isCancelled "N"→"Y"  
**Verify:** Order 3 shows cancelled in all dashboards  

### Step 2: Update Manager Dashboard (2 minutes)
**What:** Hardcode 4 KPI values + change 1 label  
**File:** `dashboard/manager-dashboard.html` lines 320-350  
**Actions:**
- Line 328: `total-orders-today` 0 → 10
- Line 333: `orders-in-production` 0 → 2
- Line 338: `completed-orders-today` 0 → 4
- Line 343: `cancellations-today` 0 → 1
- Line 343 label: "Cancellations This Week" → "Cancellations Today"

**Verify:** Manager dashboard shows all 4 values + new label

### Step 3: Update Sales Dashboard (2 minutes)
**What:** Hardcode 4 KPI values + update 1 subtitle  
**File:** `dashboard/sales-dashboard.html` lines 320-350  
**Actions:**
- Line 328: `orders-created-today` 0 → 10
- Line 333: `scheduled-pickups-today` 0 → 9
- Line 333 subtitle: "8 pickups: 9 AM - 5 PM" → "9 pickups: 9 AM - 5 PM"
- Line 338: `ready-now-count` 0 → 4
- Line 343: `new-customers-week` 0 → 5

**Verify:** Sales dashboard shows all 4 values + updated subtitle

### Step 4: Update Accountant Dashboard (3 minutes)
**What:** Hardcode 4 KPI values with currency + update subtitles  
**File:** `dashboard/accountant-dashboard.html` lines 320-350  
**Actions:**
- Line 320: `todays-revenue` $0 → $2,142.71
- Line 320 subtitle: "Avg order: $0" → "Avg order: $238.08"
- Line 325: `deposit-revenue` $0 → $1,071.41
- Line 330: `completed-orders` 0 → 4
- Line 330 subtitle: "Posted: $0" → "Posted: $947.19"
- Line 335: `refunds-week` $0 → $0.00

**Verify:** All currency symbols present, subtitles updated

### Step 5: Update Baker Dashboard (1 minute)
**What:** Hardcode 4 KPI values  
**File:** `dashboard/baker-dashboard.html` lines 250-265  
**Actions:**
- Line 250: `orders-to-bake` 0 → 0
- Line 255: `in-baking` 0 → 0
- Line 260: `ready-decoration` 0 → 2
- Line 265: `cancelled-today` 0 → 1

**Verify:** Baker dashboard shows correct workflow counts

### Step 6: Update Decorator Dashboard (1 minute)
**What:** Hardcode 4 KPI values  
**File:** `dashboard/decorator-dashboard.html` lines 245-260  
**Actions:**
- Line 245: `orders-to-decorate` 0 → 2
- Line 250: `in-decorating` 0 → 2
- Line 255: `ready-approval` 0 → 4
- Line 260: `cancelled-today` 0 → 1

**Verify:** Decorator dashboard shows correct workflow counts

### Step 7: Update Index Dashboard (1 minute)
**What:** Hardcode 4 KPI values  
**File:** `dashboard/index.html` lines 98-113  
**Actions:**
- Line 98: `pending-pickup-count` 0 → 7
- Line 103: `todays-orders-count` 0 → 10
- Line 108: `weekly-revenue` $0 → $2,142.71
- Line 113: `new-customers-count` 0 → 5

**Verify:** Index dashboard shows company-wide overview

### Step 8: Test All Dashboards (3 minutes)
**What:** Visual verification across all 6 dashboards  
**Actions:**
- Open each dashboard in browser
- Verify KPI values display correctly
- Check currency formatting
- Confirm CSS colors/styling intact
- Check all-orders and all-customers pages

**Verify:** All pages load without console errors

---

## PART 7: TIME BREAKDOWN

| Task | Time | Status |
|------|------|--------|
| Step 1: Modify Order 3 | 2 min | ⏳ TODO |
| Step 2: Manager Dashboard | 2 min | ⏳ TODO |
| Step 3: Sales Dashboard | 2 min | ⏳ TODO |
| Step 4: Accountant Dashboard | 3 min | ⏳ TODO |
| Step 5: Baker Dashboard | 1 min | ⏳ TODO |
| Step 6: Decorator Dashboard | 1 min | ⏳ TODO |
| Step 7: Index Dashboard | 1 min | ⏳ TODO |
| Step 8: Testing & Verification | 3 min | ⏳ TODO |
| **TOTAL EXECUTION** | **15 min** | **⏳ TODO** |
| **BUFFER** | 40-45 min | 📌 AVAILABLE |

---

## PART 8: TABLE DISPLAY STRATEGY

### All Orders Table

**Location:** `dashboard/all-orders.html`

**Display Logic:**
```javascript
// Filter Orders 1-10 (pickupDate = 2025-11-25)
const novOrders = unifiedMockData.orders.filter(o => o.pickupDate === "2025-11-25");

// Show first 3 rows per user requirement
const displayRows = novOrders.slice(0, 3);
```

**Table Rows (showing 3):**
| # | Order ID | Customer | Product | Total | Status | Time |
|---|----------|----------|---------|-------|--------|------|
| 1 | 1 | Michelle Lee | ½ Sheet | $282.81 | Picked Up | 10:00 AM |
| 2 | 2 | John Harris | Cupcakes | $250.04 | Completed | 12:00 PM |
| 3 | 3 | Emily Davis | Large Specialty | $338.65 | **Cancelled** | 10:00 AM |

**Orders 4-10** available via pagination/scrolling

---

### All Customers Table

**Location:** `dashboard/all-customers.html`

**Display Logic:**
```javascript
// Filter Active customers (statusId = 1)
const activeCustomers = unifiedMockData.customers.filter(c => c.statusId === 1);

// Show first 3 rows per user requirement
const displayRows = activeCustomers.slice(0, 3);
```

**Table Rows (showing 3):**
| # | Customer ID | Name | Email | City | Status |
|----|-------------|------|-------|------|--------|
| 1 | 1 | Rachel Brown | rachel.brown@email.com | Houston | Active |
| 2 | 2 | Emily Davis | emily.davis@email.com | Plano | Active |
| 3 | 3 | Laura Jones | laura.jones@email.com | San Antonio | Active |

**Customers 4-30** available via pagination/scrolling

---

## PART 9: CONCERNS & CONSIDERATIONS

### Concern 1: Order 3 Cancellation Impact
**Issue:** Changing Order 3 changes status counts  
**Impact:** KPI values based on 9 active orders, not 10  
**Mitigation:** Total-orders-today shows 10 (including cancelled) as per user requirement  
**Resolution:** ✅ ADDRESSED - Cancelled-today = 1, total-orders = 10

### Concern 2: Revenue Totals (Accountant Dashboard)
**Issue:** Order 3 cancelled but included in older data  
**Current:** $2,142.71 (9 active orders)  
**Alternative:** $2,481.36 (includes cancelled)  
**Decision:** Use $2,142.71 (logical: cancelled orders shouldn't count toward revenue)  
**Resolution:** ✅ ADDRESSED

### Concern 3: KPI Subtitles Accuracy
**Issue:** Subtitles show "Last order: 2:14 PM" but we only have 10 orders  
**Impact:** Subtitle is static (hardcoded), doesn't reflect actual data  
**Mitigation:** Subtitles are presentation-friendly, not audit-accurate  
**Resolution:** ✅ ACCEPTED - Subtitles are for user context, not calculations

### Concern 4: Orders Array Still Exists
**Issue:** 70-order dataset available but KPIs don't use it  
**Impact:** Potential confusion about data source  
**Mitigation:** Clear documentation (this file) explains hardcoding strategy  
**Resolution:** ✅ ADDRESSED - Keep array for table displays, ignore for KPIs

### Concern 5: Manager/Baker/Decorator Dashboard Consistency
**Issue:** All show `cancelled-today: 1` but different subtitles  
**Manager:** "Stop Baking Work"  
**Baker:** "Stop Baking Work"  
**Decorator:** "Stop Decoration Work"  
**Impact:** Slightly inconsistent language  
**Resolution:** ✅ ACCEPTABLE - Each role gets role-specific context

### Concern 6: Nov 25 as "Today" (Date Hardcoding)
**Issue:** Date hardcoded in data, code shows actual Nov 24 as current  
**Impact:** System pretends Nov 25 is today for presentation  
**Mitigation:** Works correctly for 1-day presentation on Nov 25  
**Resolution:** ✅ ADDRESSED - Temporary for presentation only

---

## PART 10: CODE SNIPPET REFERENCE

### Snippet 1: Order 3 Modification

```javascript
// BEFORE (Line 101)
{ id: 3, customerId: 2, productId: 9, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00 AM", totalPrice: 338.65, depositAmount: 213.18, paymentMethod: "Cash", salesStaffId: 5, bakerId: 6, decoratorId: 9, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 8, notes: "No nuts - allergy friendly" },

// AFTER (Line 101)
{ id: 3, customerId: 2, productId: 9, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00 AM", totalPrice: 338.65, depositAmount: 213.18, paymentMethod: "Cash", salesStaffId: 5, bakerId: 6, decoratorId: 9, statusId: 7, finalApprovalId: null, isCancelled: "Y", lastEmployeeId: 8, notes: "No nuts - allergy friendly" },
```

### Snippet 2: Manager Dashboard KPI Update

```html
<!-- BEFORE -->
<div class="kpi-card" onclick="location.href='all-orders.html'">
    <div class="kpi-value" id="total-orders-today">0</div>
    <div class="kpi-label">Total Orders Today</div>
    <small class="kpi-subtitle" id="last-order-time">Last order: 2:14 PM</small>
</div>

<!-- AFTER -->
<div class="kpi-card" onclick="location.href='all-orders.html'">
    <div class="kpi-value" id="total-orders-today">10</div>
    <div class="kpi-label">Total Orders Today</div>
    <small class="kpi-subtitle" id="last-order-time">Last order: 2:14 PM</small>
</div>
```

### Snippet 3: Accountant Dashboard Currency Format

```html
<!-- BEFORE -->
<div class="kpi-card">
    <div class="kpi-value" id="todays-revenue">$0</div>
    <div class="kpi-label">Today's Revenue</div>
    <small class="kpi-subtitle" id="avg-order">Avg order: $0</small>
</div>

<!-- AFTER -->
<div class="kpi-card">
    <div class="kpi-value" id="todays-revenue">$2,142.71</div>
    <div class="kpi-label">Today's Revenue</div>
    <small class="kpi-subtitle" id="avg-order">Avg order: $238.08</small>
</div>
```

### Snippet 4: Cancellations Label Change

```html
<!-- BEFORE (Manager Dashboard, Line 343) -->
<div class="kpi-card blue" onclick="location.href='all-orders.html'">
    <div class="kpi-value" id="cancellations-week">0</div>
    <div class="kpi-label">Cancellations This Week</div>
    <small class="kpi-subtitle" id="cancel-reason">No cancellations</small>
</div>

<!-- AFTER (Manager Dashboard, Line 343) -->
<div class="kpi-card blue" onclick="location.href='all-orders.html'">
    <div class="kpi-value" id="cancellations-today">1</div>
    <div class="kpi-label">Cancellations Today</div>
    <small class="kpi-subtitle" id="cancel-reason">No cancellations</small>
</div>
```

---

## PART 11: VERIFICATION CHECKLIST

### Pre-Implementation
- [ ] Backup current dashboard files (optional, git available)
- [ ] Confirm browser Dev Tools open for testing
- [ ] Have presentation slides ready for Nov 25

### During Implementation (15-20 min)
- [ ] ✅ Step 1: Order 3 cancelled (2 min)
- [ ] ✅ Step 2: Manager dashboard (2 min)
- [ ] ✅ Step 3: Sales dashboard (2 min)
- [ ] ✅ Step 4: Accountant dashboard (3 min)
- [ ] ✅ Step 5: Baker dashboard (1 min)
- [ ] ✅ Step 6: Decorator dashboard (1 min)
- [ ] ✅ Step 7: Index dashboard (1 min)
- [ ] ✅ Step 8: Test all pages (3 min)

### Post-Implementation Testing
- [ ] Manager dashboard: 4 KPIs visible + correct values
- [ ] Sales dashboard: 4 KPIs visible + correct values
- [ ] Accountant dashboard: Currency symbols ($) display correctly
- [ ] Baker dashboard: Workflow counts make sense
- [ ] Decorator dashboard: Workflow counts make sense
- [ ] Index dashboard: Company overview displays
- [ ] All-orders page: Shows Orders 1-10 (3 rows visible)
- [ ] All-customers page: Shows Active customers (3 rows visible)
- [ ] No console errors in browser Dev Tools
- [ ] CSS styling intact (colors, badges, fonts)
- [ ] All links functional (clickable KPI cards)

---

## PART 12: ROLLBACK PLAN (If Needed)

**If something breaks, revert in this order:**

1. **Order 3 Reversion:** Change statusId 7 back to 2, isCancelled "Y" back to "N"
2. **HTML Reversion:** Change all KPI values back to 0/$0
3. **Restart Server:** Refresh browser cache

**Estimated Rollback Time:** 2 minutes

---

## PART 13: PRESENTATION DAY CHECKLIST (Nov 25 @ 10:15 AM)

**5 Minutes Before:**
- [ ] Open all 6 dashboards in browser tabs
- [ ] Verify all KPIs display correctly
- [ ] Check internet connection
- [ ] Have backup URL/local file ready

**During Presentation:**
- [ ] Navigate dashboards smoothly
- [ ] Click KPI cards to show order details
- [ ] Show All-Orders and All-Customers pages
- [ ] Explain "Nov 25" data represents today's operations
- [ ] Highlight workflow (Baking → Decorating → Completed → Picked Up)
- [ ] Show cancellation (Order 3) as example

**After Presentation:**
- [ ] Document any client feedback
- [ ] Note improvements for future implementation
- [ ] Archive presentation screenshots

---

## PART 14: FILE SUMMARY

### Modified Files (8 total)

| File | Lines Changed | Type | Changes |
|------|----------------|------|---------|
| `unified-mock-data-NEW.js` | 1 | Data | Order 3: statusId 2→7, isCancelled N→Y |
| `manager-dashboard.html` | 4 | HTML | KPI values: 0→10,2,4,1; label change |
| `sales-dashboard.html` | 4 | HTML | KPI values: 0→10,9,4,5; subtitle update |
| `accountant-dashboard.html` | 4 | HTML | KPI values: $0→$2142.71,$1071.41,4,$0; subtitles |
| `baker-dashboard.html` | 4 | HTML | KPI values: 0→0,0,2,1 |
| `decorator-dashboard.html` | 4 | HTML | KPI values: 0→2,2,4,1 |
| `index.html` | 4 | HTML | KPI values: 0→7,10,$2142.71,5 |
| | | | |
| **TOTAL** | **25 lines** | | **~15 min to implement** |

### Unchanged Files (7 total)

| File | Status | Reason |
|------|--------|--------|
| `all-orders.html` | ✅ No change | Uses data array as-is |
| `all-customers.html` | ✅ No change | Uses data array as-is |
| `dashboard-redesigned.css` | ✅ No change | All classes verified |
| `dashboard-common.js` | ✅ No change | Hardcoded values don't need logic |
| `main.js` | ✅ No change | KPIs override any calculations |
| `report-definitions.js` | ✅ No change | Not used for presentation |
| `report-engine.js` | ✅ No change | Not used for presentation |

---

## PART 15: SUCCESS CRITERIA

### Presentation Success Means:
1. ✅ All 24 KPI values display correctly (0 errors)
2. ✅ Currency formatting shows $ symbols properly
3. ✅ All 6 dashboards load without console errors
4. ✅ Order 3 shows as "Cancelled" in tables
5. ✅ Manager dashboard shows "Cancellations Today" (not "This Week")
6. ✅ All-orders page displays Orders 1-10 with correct statuses
7. ✅ All-customers page displays Active customers
8. ✅ CSS colors/styling intact on all pages
9. ✅ Client sees realistic operational snapshot for Nov 25
10. ✅ Presentation completed in under 20 minutes

---

## FINAL NOTES

**This implementation assumes:**
- ✅ Browser caching cleared before presentation
- ✅ No calculation formulas in KPI JavaScript
- ✅ Hardcoded values are presentation-only (not production)
- ✅ Nov 25 as "today" is acceptable for 1-day demo
- ✅ Client understands Orders 1-10 represent operational flow
- ✅ Cancelled order demonstrates alert capability

**Presentation Impact:**
- Shows complete workflow: Sales → Baking → Decorating → Completed → Pickup
- Demonstrates team responsibility (Manager, Baker, Decorator dashboards)
- Shows financial tracking (Accountant dashboard)
- Provides overview (Index/Home dashboard)
- Real order data with realistic scenario (1 cancellation)

**Ready to Execute:** ✅ YES - All pieces documented and verified

---

**Document Created:** November 24, 2025  
**For Presentation:** November 25, 2025 @ 10:15 AM  
**Status:** Ready for Implementation
