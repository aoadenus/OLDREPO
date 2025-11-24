# EMILY BAKES CAKES - KPI INVENTORY & DATA DICTIONARY
**Generated:** November 23, 2025  
**Purpose:** Complete documentation of all KPI boxes and data requirements across all dashboard views

---

## TABLE OF CONTENTS
1. [KPI Box Inventory by Dashboard](#kpi-box-inventory-by-dashboard)
2. [Complete Data Dictionary](#complete-data-dictionary)
3. [Data Flow Architecture](#data-flow-architecture)
4. [Metrics Object Reference](#metrics-object-reference)

---

## KPI BOX INVENTORY BY DASHBOARD

### 1. BAKER DASHBOARD (`baker-dashboard.html`)
**Role:** Production tracking for baking staff  
**Total KPI Boxes:** 4

| # | KPI Box Name | Element ID | Color | Data Source | Calculation |
|---|-------------|------------|-------|-------------|-------------|
| 1 | **Orders To Bake** | `orders-to-bake` | Default (Pink) | `unifiedMockData.orders` | Count of orders where `statusId === 1` AND `isCancelled === 'N'` |
| 2 | **In Baking** | `in-baking` | Green | `unifiedMockData.orders` | Count of orders where `statusId === 2` AND `isCancelled === 'N'` |
| 3 | **Ready for Decoration** | `ready-decoration` | Orange | `unifiedMockData.orders` | Count of orders where `statusId === 3` AND `isCancelled === 'N'` |
| 4 | **Cancelled Today** | `cancelled-today` | Blue | `unifiedMockData.orders` | Count of orders where `isCancelled === 'Y'` (calculated in JS) |

**Subtitle Data:**
- Box 1: "From Sales — To Be Started"
- Box 2: "Currently Being Prepared"
- Box 3: "Finished & Cooling"
- Box 4: "Stop Work Immediately"

---

### 2. DECORATOR DASHBOARD (`decorator-dashboard.html`)
**Role:** Decoration tracking for decorating staff  
**Total KPI Boxes:** 4

| # | KPI Box Name | Element ID | Color | Data Source | Calculation |
|---|-------------|------------|-------|-------------|-------------|
| 1 | **Orders To Decorate** | `orders-to-decorate` | Default (Pink) | `unifiedMockData.orders` | Count of orders where `statusId === 3` AND `isCancelled === 'N'` |
| 2 | **In Decorating** | `in-decorating` | Green | `unifiedMockData.orders` | Count calculated in JavaScript (filtered logic) |
| 3 | **Ready for Final Approval** | `ready-approval` | Orange | `unifiedMockData.orders` | Count of orders where `statusId === 4` AND `isCancelled === 'N'` |
| 4 | **Cancelled Today** | `cancelled-today` | Blue | `unifiedMockData.orders` | Count of orders where `isCancelled === 'Y'` (calculated in JS) |

**Subtitle Data:**
- Box 1: "Ready from Bakers"
- Box 2: "Design in Progress"
- Box 3: "Awaiting Manager Sign-off"
- Box 4: "Stop Decoration Work"

---

### 3. SALES DASHBOARD (`sales-dashboard.html`)
**Role:** Customer-facing sales metrics  
**Total KPI Boxes:** 4

| # | KPI Box Name | Element ID | Color | Data Source | Calculation |
|---|-------------|------------|-------|-------------|-------------|
| 1 | **Orders Created Today** | `orders-created-today` | Default (Pink) | `unifiedMockData.orders` | Count where `orderDate === TODAY` AND `isCancelled === 'N'` |
| 2 | **Scheduled Pickups Today** | `scheduled-pickups-today` | Green | `unifiedMockData.orders` | Count where `pickupDate === TODAY` AND `isCancelled === 'N'` |
| 3 | **Ready Now** | `ready-now-count` | Orange | `unifiedMockData.orders` | Count where `statusId === 4` AND `isCancelled === 'N'` |
| 4 | **New Customers This Week** | `new-customers-week` | Blue | `unifiedMockData.customers` | Count calculated via unique customer logic |

**Subtitle Data:**
- Box 1: `unifiedMockData.metrics.today.lastOrderTime` (e.g., "Last order: 2:30 PM")
- Box 2: Pickup time range - `"{count} pickups: {firstTime} - {lastTime}"`
- Box 3: "{count} orders available"
- Box 4: Static text or calculated from customer joins this week

**Additional Data Display:**
- Revenue comparison: `unifiedMockData.metrics.weekly.percentChange`

---

### 4. MANAGER DASHBOARD (`manager-dashboard.html`)
**Role:** Comprehensive operations overview  
**Total KPI Boxes:** 4

| # | KPI Box Name | Element ID | Color | Data Source | Calculation |
|---|-------------|------------|-------|-------------|-------------|
| 1 | **Total Orders Today** | `total-orders-today` | Default (Pink) | `unifiedMockData.metrics.today.totalOrders` | Direct metric value |
| 2 | **Orders In Production** | `orders-in-production` | Green | `unifiedMockData.metrics.today.ordersInProduction` | Direct metric value |
| 3 | **Completed Orders Today** | `completed-orders-today` | Orange | `unifiedMockData.metrics.today.completedToday` | Direct metric value |
| 4 | **Cancellations This Week** | `cancellations-week` | Blue | `unifiedMockData.orders` | Count where `isCancelled === 'Y'` (calculated) |

**Subtitle Data:**
- Box 1: `unifiedMockData.metrics.today.lastOrderTime` (e.g., "Last order: 2:30 PM")
- Box 2: `unifiedMockData.metrics.today.longestInProduction` (e.g., "Longest: 3h 45m")
- Box 3: `unifiedMockData.metrics.today.avgCompletionTime` (e.g., "Avg: 2h 15m")
- Box 4: Lost revenue calculation (e.g., "Lost revenue: $XXX.XX")

**Additional Data Display:**
- Revenue comparison: `unifiedMockData.metrics.weekly.percentChange`
- Best seller: Static or calculated (e.g., "Best Seller: Lemon Doberge")

---

### 5. ACCOUNTANT DASHBOARD (`accountant-dashboard.html`)
**Role:** Financial reporting and analysis  
**Total KPI Boxes:** 4

| # | KPI Box Name | Element ID | Color | Data Source | Calculation |
|---|-------------|------------|-------|-------------|-------------|
| 1 | **Today's Revenue** | `todays-revenue` | Default (Pink) | `unifiedMockData.orders` | Sum of `totalPrice` where `orderDate === TODAY` AND `isCancelled === 'N'` |
| 2 | **Deposit Revenue** | `deposit-revenue` | Green | `unifiedMockData.orders` | Sum of `depositAmount` where `orderDate === TODAY` |
| 3 | **Completed Orders** | `completed-orders` | Blue | `unifiedMockData.orders` | Count where `statusId === 5` AND `isCancelled === 'N'` |
| 4 | **Refunds This Week** | `refunds-week` | Orange | `unifiedMockData.orders` | Calculated from cancelled orders with refund logic |

**Subtitle Data:**
- Box 1: Average order value - "Avg order: $XX.XX"
- Box 2: Static text or date range
- Box 3: Posted revenue - "Posted: $XXX.XX"
- Box 4: Total refunded amount

**Additional Financial Summary (Below KPIs):**
- `summary-total-revenue`: Weekly total revenue
- `summary-deposits`: Weekly deposits collected
- `summary-balance-payments`: Weekly balance payments
- `summary-avg-order`: Weekly average order value
- `summary-new-customers`: New customers this week

---

## COMPLETE DATA DICTIONARY

### PRIMARY DATA ENTITIES

#### **1. ORDERS ENTITY** (`unifiedMockData.orders[]`)
**Description:** Core transactional data representing all cake orders  
**Total Records:** 270 orders (27 per day × 10 days: Nov 23 - Dec 3, 2025)

| Field Name | Data Type | Constraints | Description | Example Value |
|-----------|-----------|-------------|-------------|---------------|
| `id` | Integer | PK, Unique, NOT NULL | Order identifier (1001-1297) | `1055` |
| `customerId` | Integer | FK → customers.id | References customer record | `1` |
| `productId` | Integer | FK → products.id | References product/cake type | `1` |
| `orderDate` | String (ISO Date) | NOT NULL, Format: YYYY-MM-DD | Date order was placed | `"2025-11-23"` |
| `pickupDate` | String (ISO Date) | NOT NULL, Format: YYYY-MM-DD | Scheduled pickup date | `"2025-11-25"` |
| `pickupTime` | String (Time) | NOT NULL, Format: HH:MM:SS (24hr) | Scheduled pickup time | `"08:00:00"` |
| `totalPrice` | Float | NOT NULL, ≥ 0 | Total order price (USD) | `75.0` |
| `depositAmount` | Float | NOT NULL, ≥ 0, ≤ totalPrice | Deposit paid (typically 50%) | `37.5` |
| `paymentMethod` | String | NOT NULL | Payment type | `"Cash"`, `"Visa"`, `"MasterCard"` |
| `salesStaffId` | Integer | FK → staff.id | Sales person who took order | `101` |
| `lastEmployeeId` | Integer | FK → staff.id | Last employee to handle order | `401` |
| `statusId` | Integer | FK → orderStatuses.id, 1-5 | Current order status | `4` |
| `isCancelled` | String (Char) | NOT NULL, Values: 'Y' or 'N' | Cancellation flag | `"N"` |
| `finalApprovalId` | Integer/Null | FK → staff.id, Nullable | Manager who approved completion | `402` or `null` |
| `notes` | String/Null | Nullable | Order notes/instructions | `"Ready for pickup"` |
| `cakeSize` | String | NOT NULL | Cake size specification | `"10\""`, `"9\""`, `"8\""` |
| `decorationNotes` | String/Null | Nullable | Special decoration instructions | `"Standard"`, `"Custom"`, `null` |

**Status ID Values:**
- `1` = "To Be Created" (Order placed, waiting to start baking)
- `2` = "In Baking" (Currently being baked)
- `3` = "Decorating" (Being decorated)
- `4` = "Ready for Pickup" (Completed and ready)
- `5` = "Picked Up" (Customer picked up order)

**Business Rules:**
- Every 10 orders pattern: 10 ready (status 4), 5 in baking (status 2), 5 in decorating (status 3), 5 completed (status 5), 2 cancelled
- Deposit is always 50% of total price
- Cancelled orders have `statusId = 1` and `isCancelled = 'Y'`
- Completed orders have `finalApprovalId` populated

---

#### **2. CUSTOMERS ENTITY** (`unifiedMockData.customers[]`)
**Description:** Customer master data  
**Total Records:** 30 customers

| Field Name | Data Type | Constraints | Description | Example Value |
|-----------|-----------|-------------|-------------|---------------|
| `id` | Integer | PK, Unique, NOT NULL | Customer identifier (1-30) | `1` |
| `firstName` | String | NOT NULL | Customer first name | `"Sarah"` |
| `lastName` | String | NOT NULL | Customer last name | `"Johnson"` |
| `email` | String | NOT NULL, Valid email format | Customer email address | `"sarah.j@email.com"` |
| `phone` | String | NOT NULL, Format: 555-XXXX | Customer phone number | `"555-0101"` |
| `dateJoined` | String (ISO Date) | NOT NULL, Format: YYYY-MM-DD | Date customer joined | `"2024-01-15"` |
| `statusId` | Integer | FK → customerStatuses.id | Customer account status | `1` (Active) |
| `typeId` | Integer | FK → customerTypes.id | Customer type classification | `1` (Retail) |

**Customer Status Values:**
- `1` = "Active"
- `2` = "Inactive"
- `3` = "VIP"

**Customer Type Values:**
- `1` = "Retail" (Individual customer)
- `2` = "Corporate" (Business/corporate customer)

---

#### **3. PRODUCTS ENTITY** (`unifiedMockData.products[]`)
**Description:** Product catalog (cake types)  
**Total Records:** 8 products

| Field Name | Data Type | Constraints | Description | Example Value |
|-----------|-----------|-------------|-------------|---------------|
| `id` | Integer | PK, Unique, NOT NULL | Product identifier (1-8) | `1` |
| `name` | String | NOT NULL, Unique | Product/cake name | `"Chocolate Cake"` |
| `basePrice` | Float | NOT NULL, > 0 | Base price in USD | `75.0` |

**Product Catalog:**
1. Chocolate Cake - $75.00
2. Vanilla Cake - $65.00
3. Red Velvet - $80.00
4. Carrot Cake - $70.00
5. Lemon Cake - $72.00
6. Strawberry Cake - $78.00
7. Marble Cake - $68.00
8. Tiramisu - $105.00

---

#### **4. ORDER STATUSES ENTITY** (`unifiedMockData.orderStatuses[]`)
**Description:** Order workflow states  
**Total Records:** 5 statuses

| Field Name | Data Type | Description | Example Value |
|-----------|-----------|-------------|---------------|
| `id` | Integer | Status ID (1-5) | `1` |
| `name` | String | Status name | `"To Be Created"` |
| `description` | String | Status description | `"Order placed, waiting to start baking"` |

**Complete Status List:**
1. **To Be Created** - Order placed, waiting to start baking
2. **In Baking** - Currently being baked
3. **Decorating** - Being decorated
4. **Ready for Pickup** - Completed and ready
5. **Picked Up** - Customer picked up order

---

#### **5. CUSTOMER STATUSES ENTITY** (`unifiedMockData.customerStatuses[]`)
**Description:** Customer account states  
**Total Records:** 3 statuses

| Field Name | Data Type | Description |
|-----------|-----------|-------------|
| `id` | Integer | Status ID (1-3) |
| `name` | String | Status name |
| `description` | String | Status description |

---

#### **6. CUSTOMER TYPES ENTITY** (`unifiedMockData.customerTypes[]`)
**Description:** Customer classification  
**Total Records:** 2 types

| Field Name | Data Type | Description |
|-----------|-----------|-------------|
| `id` | Integer | Type ID (1-2) |
| `name` | String | Type name |
| `description` | String | Type description |

---

### CALCULATED METRICS ENTITY

#### **7. METRICS OBJECT** (`unifiedMockData.metrics`)
**Description:** Pre-calculated KPI metrics for dashboard display  
**NOT CURRENTLY IMPLEMENTED IN DATA FILE - CALCULATED AT RUNTIME**

**Expected Structure:**
```javascript
metrics: {
    today: {
        totalOrders: Integer,           // Count of orders created today
        lastOrderTime: String,          // Time of most recent order (e.g., "2:30 PM")
        ordersInProduction: Integer,    // Count where statusId IN (2,3) (In Baking or Decorating)
        longestInProduction: String,    // Time duration (e.g., "3h 45m")
        completedToday: Integer,        // Count where statusId = 5 AND pickupDate = TODAY
        avgCompletionTime: String,      // Average duration (e.g., "2h 15m")
        cancelledToday: Integer         // Count where isCancelled = 'Y' AND orderDate = TODAY
    },
    weekly: {
        percentChange: Float,           // Revenue % change vs previous week (e.g., 12.5 = 12.5%)
        revenueByDay: Array[7],         // Revenue for each day [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
        ordersByStatus: Array[5],       // Count of orders in each status [status1, status2, ...]
        topProducts: Array[10]          // Product sales counts sorted desc
    }
}
```

---

### HELPER FUNCTIONS AVAILABLE

#### **Data Retrieval Functions**

| Function Name | Parameters | Returns | Description |
|--------------|------------|---------|-------------|
| `getCustomerName()` | `customerId: Integer` | `String` | Returns "FirstName LastName" |
| `getCustomer()` | `customerId: Integer` | `Object` | Returns full customer object |
| `getProductName()` | `productId: Integer` | `String` | Returns product name |
| `getProduct()` | `productId: Integer` | `Object` | Returns full product object |
| `getStatusDescription()` | `statusId: Integer` | `String` | Returns status name |
| `getCustomerStatusName()` | `statusId: Integer` | `String` | Returns customer status name |
| `getCustomerTypeName()` | `typeId: Integer` | `String` | Returns customer type name |

#### **Filtering Functions**

| Function Name | Parameters | Returns | Description |
|--------------|------------|---------|-------------|
| `getOrdersByStatus()` | `statusId: Integer` | `Array` | All non-cancelled orders with given status |
| `getOrdersByCustomer()` | `customerId: Integer` | `Array` | All orders for customer |
| `getActiveOrders()` | None | `Array` | All orders where `isCancelled = 'N'` |
| `getCancelledOrders()` | None | `Array` | All orders where `isCancelled = 'Y'` |
| `getActiveCustomers()` | None | `Array` | All customers where `statusId = 1` |
| `getInactiveCustomers()` | None | `Array` | All customers where `statusId = 2` |
| `getOrdersByDateRange()` | `startDate, endDate` | `Array` | Orders in date range |
| `getTodaysOrders()` | `today: String (optional)` | `Array` | Orders placed today (default: 2025-11-23) |
| `getTodaysPickups()` | `today: String (optional)` | `Array` | Pickups scheduled for today |
| `getWeekOrders()` | None | `Array` | Orders from week of Nov 21-27, 2025 |

#### **Calculation Functions**

| Function Name | Parameters | Returns | Description |
|--------------|------------|---------|-------------|
| `getTotalRevenue()` | None | `Float` | Sum of `totalPrice` for completed orders |
| `getTotalDeposits()` | None | `Float` | Sum of `depositAmount` for all active orders |
| `getOrdersByMonth()` | `year, month` | `Array` | Orders for specific month |

#### **Update Functions**

| Function Name | Parameters | Returns | Description |
|--------------|------------|---------|-------------|
| `updateOrder()` | `orderId, updates: Object` | `Boolean` | Updates order fields, returns success |
| `updateCustomer()` | `customerId, updates: Object` | `Boolean` | Updates customer fields, returns success |
| `cancelOrder()` | `orderId` | `Boolean` | Sets `isCancelled = 'Y'` |
| `deactivateCustomer()` | `customerId` | `Boolean` | Sets customer `statusId = 2` |
| `reactivateCustomer()` | `customerId` | `Boolean` | Sets customer `statusId = 1` |

#### **Display Formatting Functions**

| Function Name | Parameters | Returns | Description |
|--------------|------------|---------|-------------|
| `getRecentOrders()` | `limit: Integer` | `Array` | Returns N most recent orders sorted by orderDate DESC |
| `getUpcomingPickups()` | `date: String` | `Array` | Returns pickups for specified date with formatted time |
| `formatTime()` | `time24: String` | `String` | Converts "HH:MM:SS" to "H:MM AM/PM" |
| `formatDate()` | `dateStr: String` | `String` | Converts "YYYY-MM-DD" to "Mon DD" |

---

## DATA FLOW ARCHITECTURE

### **1. Data Loading Sequence**
```
Page Load → unified-mock-data.js loads → unifiedMockData object available globally
         ↓
Dashboard JavaScript executes → Calls unifiedMockData functions
         ↓
KPI boxes populated → getElementById().textContent = value
         ↓
Charts rendered → Uses Chart.js with data arrays from unifiedMockData.metrics
```

### **2. KPI Update Pattern**
```javascript
// Standard pattern used across all dashboards
const value = unifiedMockData.orders.filter(o => {condition}).length;
document.getElementById('kpi-element-id').textContent = value;
document.getElementById('subtitle-id').textContent = `Context: ${detail}`;
```

### **3. Data Dependencies**

**Baker Dashboard depends on:**
- `unifiedMockData.orders` (statusId 1, 2, 3)
- `getCustomerName()`, `getProductName()`, `getStatusDescription()`

**Decorator Dashboard depends on:**
- `unifiedMockData.orders` (statusId 3, 4)
- Same helper functions as Baker

**Sales Dashboard depends on:**
- `unifiedMockData.orders` (orderDate, pickupDate filtering)
- `unifiedMockData.metrics.today.lastOrderTime`
- `unifiedMockData.metrics.weekly.percentChange`
- `getUpcomingPickups()`, `getRecentOrders()`

**Manager Dashboard depends on:**
- `unifiedMockData.metrics.today.*` (all today metrics)
- `unifiedMockData.metrics.weekly.*` (all weekly metrics)
- Revenue charts, status distribution, top products

**Accountant Dashboard depends on:**
- `unifiedMockData.orders` (financial calculations)
- Sum aggregations (totalPrice, depositAmount)
- Weekly financial summaries

---

## METRICS OBJECT REFERENCE

### **CURRENT STATE: NOT IMPLEMENTED**
The `metrics` object referenced in dashboards **DOES NOT EXIST** in `unified-mock-data.js`.

### **REQUIRED IMPLEMENTATION:**

Add this to `unified-mock-data.js` after the `customerTypes` array:

```javascript
metrics: {
    today: {
        totalOrders: 27,                    // Based on 27 orders per day pattern
        lastOrderTime: "5:45 PM",           // Calculate from latest order.orderDate + time
        ordersInProduction: 10,             // statusId IN (2,3) for TODAY's pickups
        longestInProduction: "3h 45m",      // Calculate time since order moved to status 2
        completedToday: 5,                  // statusId = 5 AND pickupDate = TODAY
        avgCompletionTime: "2h 15m",        // Average (pickupTime - orderTime) for completed
        cancelledToday: 2                   // isCancelled = 'Y' for TODAY
    },
    weekly: {
        percentChange: 12.5,                // (thisWeekRevenue - lastWeekRevenue) / lastWeekRevenue * 100
        revenueByDay: [850, 920, 875, 940, 910, 895, 880],  // 7 days of revenue
        ordersByStatus: [20, 50, 50, 100, 50],  // Counts for status 1-5 this week
        topProducts: [45, 42, 38, 35, 30, 28, 25, 22, 18, 15]  // Product sales sorted desc
    }
}
```

### **ALTERNATIVE: DYNAMIC CALCULATION**

Instead of hardcoded metrics, calculate at runtime:

```javascript
// Add these dynamic getters
getMetrics: function() {
    const TODAY = '2025-11-25';
    const todaysOrders = this.orders.filter(o => o.orderDate === TODAY && o.isCancelled === 'N');
    const weekOrders = this.getWeekOrders();
    
    return {
        today: {
            totalOrders: todaysOrders.length,
            lastOrderTime: this.getLastOrderTime(TODAY),
            ordersInProduction: this.orders.filter(o => 
                (o.statusId === 2 || o.statusId === 3) && o.isCancelled === 'N'
            ).length,
            longestInProduction: this.calculateLongestProduction(),
            completedToday: this.orders.filter(o => 
                o.statusId === 5 && o.pickupDate === TODAY
            ).length,
            avgCompletionTime: this.calculateAvgCompletion(),
            cancelledToday: this.orders.filter(o => 
                o.isCancelled === 'Y' && o.orderDate === TODAY
            ).length
        },
        weekly: {
            percentChange: this.calculateWeeklyChange(),
            revenueByDay: this.calculateDailyRevenue(),
            ordersByStatus: this.getStatusDistribution(),
            topProducts: this.getTopProductCounts()
        }
    };
}
```

---

## SUMMARY

### **Total KPI Boxes Across All Dashboards: 20**
- Baker: 4 KPIs
- Decorator: 4 KPIs
- Sales: 4 KPIs
- Manager: 4 KPIs
- Accountant: 4 KPIs + 5 financial summary values

### **Data Entities: 6**
1. Orders (270 records, 15 fields)
2. Customers (30 records, 8 fields)
3. Products (8 records, 3 fields)
4. Order Statuses (5 records, 3 fields)
5. Customer Statuses (3 records, 3 fields)
6. Customer Types (2 records, 3 fields)

### **Helper Functions: 30+**
- 7 data retrieval functions
- 11 filtering functions
- 3 calculation functions
- 5 update functions
- 4 formatting functions

### **Critical Missing Implementation:**
- **`metrics` object needs to be added to `unified-mock-data.js`**
- Current dashboards reference `unifiedMockData.metrics.today.*` and `unifiedMockData.metrics.weekly.*`
- These properties **DO NOT EXIST** in current data file
- Dashboards will show `undefined` or throw errors without this object

---

**End of Documentation**  
**Last Updated:** November 23, 2025  
**File Location:** `c:\Users\adere\Desktop\EBCWIP\KPI_INVENTORY_AND_DATA_DICTIONARY.md`
