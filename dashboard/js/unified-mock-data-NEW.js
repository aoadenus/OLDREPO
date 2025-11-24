// ============================================================
// EMILY BAKES CAKES - UNIFIED MOCK DATA
// Converted for November 25, 2025 Presentation
// 30 Customers | 70 Orders (Nov 23-29) | All Dashboards Compatible
// ============================================================

// This will be wrapped in unifiedMockData at the end

// CUSTOMER STATUSES
const customerStatuses = [
  { id: 1, description: "Active" },
  { id: 2, description: "Inactive" },
  { id: 3, description: "VIP" },
  { id: 4, description: "On Hold" }
];

// CUSTOMER TYPES
const customerTypes = [
  { id: 1, description: "Retail" },
  { id: 2, description: "Corporate" }
];

// 30 CUSTOMERS (CONVERTED TO CAMELCASE)
const customers = [
  { id: 1, firstName: "Rachel", middleInitial: null, lastName: "Brown", phone: "(481) 450-4657", workPhone: null, homePhone: null, email: "rachel.brown@email.com", address: "9035 Oak St", address2: null, city: "Houston", stateId: 1, zip: "77122", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 2, firstName: "Emily", middleInitial: "A", lastName: "Davis", phone: "(774) 403-9928", workPhone: null, homePhone: null, email: "emily.davis@email.com", address: "4657 Main St", address2: "Apt 263", city: "Plano", stateId: 1, zip: "78731", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 3, firstName: "Laura", middleInitial: null, lastName: "Jones", phone: "(981) 544-2674", workPhone: null, homePhone: null, email: "laura.jones@email.com", address: "5735 Pine St", address2: "Apt 847", city: "San Antonio", stateId: 1, zip: "79196", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 4, firstName: "Cynthia", middleInitial: null, lastName: "Gonzalez", phone: "(500) 843-6925", workPhone: null, homePhone: "(246) 877-4733", email: "cynthia.gonzalez@email.com", address: "4841 Oak St", address2: "Apt 987", city: "Houston", stateId: 1, zip: "78556", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 5, firstName: "James", middleInitial: "B", lastName: "Lee", phone: "(579) 563-4432", workPhone: null, homePhone: "(899) 863-2169", email: "james.lee@email.com", address: "2903 Maple St", address2: null, city: "San Antonio", stateId: 1, zip: "78105", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 6, firstName: "Nicole", middleInitial: "A", lastName: "Hernandez", phone: "(434) 232-6168", workPhone: null, homePhone: null, email: "nicole.hernandez@email.com", address: "9392 Cedar St", address2: null, city: "San Antonio", stateId: 1, zip: "78620", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "N" },
  { id: 7, firstName: "Michelle", middleInitial: null, lastName: "Rodriguez", phone: "(962) 774-9830", workPhone: null, homePhone: "(797) 608-6930", email: "michelle.rodriguez@email.com", address: "3693 Elm St", address2: null, city: "Houston", stateId: 1, zip: "77192", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 8, firstName: "Michelle", middleInitial: null, lastName: "Lee", phone: "(896) 632-2040", workPhone: null, homePhone: "(679) 741-5119", email: "michelle.lee@email.com", address: "9164 Main St", address2: "Apt 217", city: "Plano", stateId: 1, zip: "79199", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 9, firstName: "Patricia", middleInitial: null, lastName: "Lee", phone: "(500) 645-3591", workPhone: null, homePhone: "(936) 469-9201", email: "patricia.lee@email.com", address: "3027 Oak St", address2: "Apt 405", city: "Plano", stateId: 1, zip: "79079", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 10, firstName: "Michelle", middleInitial: "E", lastName: "Lopez", phone: "(997) 743-1009", workPhone: null, homePhone: null, email: "michelle.lopez@email.com", address: "1932 Cedar St", address2: "Apt 951", city: "Dallas", stateId: 1, zip: "77980", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 11, firstName: "Jessica", middleInitial: "A", lastName: "Lewis", phone: "(287) 949-8962", workPhone: "(978) 745-3060", homePhone: null, email: "jessica.lewis@email.com", address: "7887 Elm St", address2: null, city: "Fort Worth", stateId: 1, zip: "78733", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 12, firstName: "Cynthia", middleInitial: null, lastName: "Moore", phone: "(405) 930-6107", workPhone: null, homePhone: "(582) 648-9479", email: "cynthia.moore@email.com", address: "7497 Oak St", address2: null, city: "Houston", stateId: 1, zip: "78384", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 13, firstName: "Anthony", middleInitial: null, lastName: "Moore", phone: "(425) 207-2163", workPhone: "(260) 434-2104", homePhone: "(538) 272-9423", email: "anthony.moore@email.com", address: "3999 Pine St", address2: "Apt 319", city: "Fort Worth", stateId: 1, zip: "77541", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "N" },
  { id: 14, firstName: "Jessica", middleInitial: null, lastName: "Sanchez", phone: "(616) 394-2545", workPhone: null, homePhone: null, email: "jessica.sanchez@email.com", address: "7039 Broadway St", address2: null, city: "Plano", stateId: 1, zip: "77221", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 15, firstName: "Maria", middleInitial: "A", lastName: "Gonzalez", phone: "(454) 396-4116", workPhone: null, homePhone: null, email: "maria.gonzalez@email.com", address: "3106 Pine St", address2: null, city: "Houston", stateId: 1, zip: "78815", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 16, firstName: "Maria", middleInitial: "A", lastName: "Lee", phone: "(295) 971-4872", workPhone: null, homePhone: null, email: "maria.lee@email.com", address: "3602 Broadway St", address2: "Apt 268", city: "San Antonio", stateId: 1, zip: "77008", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "N" },
  { id: 17, firstName: "Laura", middleInitial: "D", lastName: "Robinson", phone: "(492) 633-8973", workPhone: null, homePhone: null, email: "laura.robinson@email.com", address: "1058 Main St", address2: "Apt 158", city: "Houston", stateId: 1, zip: "79392", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "N" },
  { id: 18, firstName: "Daniel", middleInitial: "B", lastName: "Robinson", phone: "(258) 720-2312", workPhone: "(270) 809-2113", homePhone: "(440) 613-2964", email: "daniel.robinson@email.com", address: "9433 Maple St", address2: null, city: "Houston", stateId: 1, zip: "79536", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 19, firstName: "David", middleInitial: "E", lastName: "Perez", phone: "(523) 467-4346", workPhone: null, homePhone: null, email: "david.perez@email.com", address: "4451 Broadway St", address2: null, city: "Plano", stateId: 1, zip: "78228", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "N" },
  { id: 20, firstName: "John", middleInitial: "A", lastName: "Robinson", phone: "(209) 669-2638", workPhone: null, homePhone: null, email: "john.robinson@email.com", address: "4445 Elm St", address2: "Apt 170", city: "Austin", stateId: 1, zip: "78513", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 21, firstName: "Amanda", middleInitial: null, lastName: "Anderson", phone: "(509) 826-9666", workPhone: null, homePhone: "(506) 879-2697", email: "amanda.anderson@email.com", address: "2300 Pine St", address2: null, city: "Houston", stateId: 1, zip: "79266", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 22, firstName: "Laura", middleInitial: null, lastName: "Martinez", phone: "(551) 408-5325", workPhone: null, homePhone: null, email: "laura.martinez@email.com", address: "932 Oak St", address2: "Apt 949", city: "Dallas", stateId: 1, zip: "77180", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 23, firstName: "John", middleInitial: null, lastName: "Harris", phone: "(468) 365-8239", workPhone: null, homePhone: null, email: "john.harris@email.com", address: "258 Oak St", address2: null, city: "Plano", stateId: 1, zip: "77610", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 24, firstName: "Elizabeth", middleInitial: "B", lastName: "Lopez", phone: "(640) 330-1685", workPhone: null, homePhone: "(240) 566-4441", email: "elizabeth.lopez@email.com", address: "4188 Oak St", address2: null, city: "Fort Worth", stateId: 1, zip: "78664", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 25, firstName: "Cynthia", middleInitial: null, lastName: "Robinson", phone: "(366) 381-7755", workPhone: null, homePhone: "(540) 621-5065", email: "cynthia.robinson@email.com", address: "4471 Elm St", address2: "Apt 210", city: "San Antonio", stateId: 1, zip: "77158", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "N" },
  { id: 26, firstName: "Jessica", middleInitial: "D", lastName: "Miller", phone: "(558) 512-4728", workPhone: null, homePhone: "(608) 536-5564", email: "jessica.miller@email.com", address: "1237 Pine St", address2: null, city: "Fort Worth", stateId: 1, zip: "78637", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 27, firstName: "Sarah", middleInitial: "C", lastName: "Brown", phone: "(382) 794-5349", workPhone: null, homePhone: "(553) 946-6139", email: "sarah.brown@email.com", address: "7249 Oak St", address2: null, city: "Fort Worth", stateId: 1, zip: "77778", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 28, firstName: "Maria", middleInitial: null, lastName: "Thompson", phone: "(732) 751-4228", workPhone: null, homePhone: null, email: "maria.thompson@email.com", address: "5509 Cedar St", address2: "Apt 227", city: "Plano", stateId: 1, zip: "78230", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 29, firstName: "Nicole", middleInitial: null, lastName: "Wilson", phone: "(913) 502-3085", workPhone: null, homePhone: "(588) 893-3851", email: "nicole.wilson@email.com", address: "9424 Pine St", address2: null, city: "Houston", stateId: 1, zip: "78244", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" },
  { id: 30, firstName: "Emily", middleInitial: "E", lastName: "Wilson", phone: "(870) 529-8618", workPhone: null, homePhone: "(723) 684-3780", email: "emily.wilson@email.com", address: "1489 Pine St", address2: null, city: "Plano", stateId: 1, zip: "79536", countryId: 1, typeId: 1, statusId: 1, preferredCustomer: "Y" }
];

// EMPLOYEE STATUSES
const employeeStatuses = [
  { id: 1, description: "Active" },
  { id: 2, description: "On Leave" },
  { id: 3, description: "Terminated" }
];

// EMPLOYEE ROLES
const employeeRoles = [
  { id: 1, description: "Sales Staff" },
  { id: 2, description: "Baker" },
  { id: 3, description: "Decorator" },
  { id: 4, description: "Manager" },
  { id: 5, description: "Owner" }
];

// 9 EMPLOYEES (CONVERTED TO CAMELCASE)
const employees = [
  { id: 1, firstName: "Dan", middleInitial: null, lastName: "Boudreaux", phone: "(713) 555-0100", homePhone: null, email: "dan@emilyblakescakes.com", statusId: 1, roleId: 5 },
  { id: 2, firstName: "Emily", middleInitial: null, lastName: "Boudreaux", phone: "(713) 555-0101", homePhone: null, email: "emily@emilyblakescakes.com", statusId: 1, roleId: 5 },
  { id: 3, firstName: "James", middleInitial: "M", lastName: "Wilson", phone: "(713) 555-0102", homePhone: null, email: "james@emilyblakescakes.com", statusId: 1, roleId: 4 },
  { id: 4, firstName: "Maria", middleInitial: "R", lastName: "Garcia", phone: "(713) 555-0103", homePhone: null, email: "maria@emilyblakescakes.com", statusId: 1, roleId: 1 },
  { id: 5, firstName: "John", middleInitial: "D", lastName: "Davis", phone: "(713) 555-0104", homePhone: null, email: "john@emilyblakescakes.com", statusId: 1, roleId: 1 },
  { id: 6, firstName: "Lisa", middleInitial: "A", lastName: "Chen", phone: "(713) 555-0105", homePhone: null, email: "lisa@emilyblakescakes.com", statusId: 1, roleId: 2 },
  { id: 7, firstName: "Mike", middleInitial: "J", lastName: "Rodriguez", phone: "(713) 555-0106", homePhone: null, email: "mike@emilyblakescakes.com", statusId: 1, roleId: 2 },
  { id: 8, firstName: "Sarah", middleInitial: "K", lastName: "Johnson", phone: "(713) 555-0107", homePhone: null, email: "sarah@emilyblakescakes.com", statusId: 1, roleId: 3 },
  { id: 9, firstName: "Chris", middleInitial: "T", lastName: "Anderson", phone: "(713) 555-0108", homePhone: null, email: "chris@emilyblakescakes.com", statusId: 1, roleId: 3 }
];

// ORDER STATUSES
const orderStatuses = [
  { id: 1, description: "To Be Created", color: "#FFE5B4" },
  { id: 2, description: "In Baking", color: "#FFD700" },
  { id: 3, description: "Decorating", color: "#87CEEB" },
  { id: 4, description: "Completed", color: "#98FB98" },
  { id: 5, description: "Picked Up", color: "#90EE90" },
  { id: 6, description: "On Hold", color: "#FFA500" },
  { id: 7, description: "Cancelled", color: "#FF6B6B" }
];

// 70 ORDERS (November 23-29, 2025) - CONVERTED TO CAMELCASE & PRODUCT IDS 1-10
const orders = [
  { id: 1, customerId: 8, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00 AM", totalPrice: 282.81, depositAmount: 188.97, paymentMethod: "Cash", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 5, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 6, notes: "No nuts - allergy friendly" },
  { id: 2, customerId: 23, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "12:00 PM", totalPrice: 250.04, depositAmount: 137.17, paymentMethod: "MasterCard", salesStaffId: 4, bakerId: 6, decoratorId: 8, statusId: 2, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 9, notes: "Anniversary celebration" },
  { id: 3, customerId: 2, productId: 9, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00 AM", totalPrice: 338.65, depositAmount: 213.18, paymentMethod: "Cash", salesStaffId: 5, bakerId: 6, decoratorId: 9, statusId: 7, finalApprovalId: null, isCancelled: "Y", lastEmployeeId: 8, notes: "No nuts - allergy friendly" },
  { id: 4, customerId: 27, productId: 9, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "12:00 PM", totalPrice: 274.2, depositAmount: 171.7, paymentMethod: "Debit", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 4, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 8, notes: "Vegan options requested" },
  { id: 5, customerId: 23, productId: 5, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00 AM", totalPrice: 144.6, depositAmount: 88.2, paymentMethod: "Visa", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 4, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 7, notes: "Anniversary celebration" },
  { id: 6, customerId: 14, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "11:00 AM", totalPrice: 121.26, depositAmount: 67.12, paymentMethod: "AmEx", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 7, notes: "Custom design per customer photo" },
  { id: 7, customerId: 1, productId: 10, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "12:00 PM", totalPrice: 287.84, depositAmount: 212.0, paymentMethod: "MasterCard", salesStaffId: 4, bakerId: 7, decoratorId: 9, statusId: 3, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 9, notes: "Custom design per customer photo" },
  { id: 8, customerId: 29, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "12:00 PM", totalPrice: 278.35, depositAmount: 194.84, paymentMethod: "Debit", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 4, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 9, notes: "Baby shower - pink theme" },
  { id: 9, customerId: 27, productId: 8, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00 AM", totalPrice: 295.5, depositAmount: 201.25, paymentMethod: "AmEx", salesStaffId: 4, bakerId: 7, decoratorId: 8, statusId: 5, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 9, notes: "Corporate event - multiple tiers" },
  { id: 10, customerId: 11, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "12:00 PM", totalPrice: 129.07, depositAmount: 72.93, paymentMethod: "Visa", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 5, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 8, notes: "Wedding cake - white frosting" },
  { id: 11, customerId: 12, productId: 4, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "3:00 PM", totalPrice: 225.64, depositAmount: 169.22, paymentMethod: "Cash", salesStaffId: 4, bakerId: 6, decoratorId: 8, statusId: 1, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 7, notes: "Birthday cake with custom message" },
  { id: 12, customerId: 4, productId: 10, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "10:00 AM", totalPrice: 144.41, depositAmount: 89.3, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 4, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 6, notes: "Corporate event - multiple tiers" },
  { id: 13, customerId: 10, productId: 10, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "3:00 PM", totalPrice: 109.19, depositAmount: 55.3, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 6, decoratorId: 8, statusId: 6, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 7, notes: "Wedding cake - white frosting" },
  { id: 14, customerId: 26, productId: 2, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "4:00 PM", totalPrice: 161.43, depositAmount: 108.33, paymentMethod: "AmEx", salesStaffId: 4, bakerId: 7, decoratorId: 9, statusId: 5, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 8, notes: "Wedding cake - white frosting" },
  { id: 15, customerId: 27, productId: 8, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "9:00 AM", totalPrice: 172.13, depositAmount: 122.62, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 4, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 7, notes: "Vegan options requested" },
  { id: 16, customerId: 18, productId: 8, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "12:00 PM", totalPrice: 152.92, depositAmount: 107.36, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 6, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "Graduation party" },
  { id: 17, customerId: 20, productId: 7, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "11:00 AM", totalPrice: 145.84, depositAmount: 89.86, paymentMethod: "Cash", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 5, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 7, notes: "Baby shower - pink theme" },
  { id: 18, customerId: 23, productId: 5, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "2:00 PM", totalPrice: 171.89, depositAmount: 123.77, paymentMethod: "Cash", salesStaffId: 4, bakerId: 6, decoratorId: 8, statusId: 5, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 9, notes: "No nuts - allergy friendly" },
  { id: 19, customerId: 23, productId: 8, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "12:00 PM", totalPrice: 144.89, depositAmount: 89.69, paymentMethod: "Cash", salesStaffId: 4, bakerId: 7, decoratorId: 8, statusId: 4, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 7, notes: "Graduation party" },
  { id: 20, customerId: 12, productId: 7, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "3:00 PM", totalPrice: 179.64, depositAmount: 114.68, paymentMethod: "AmEx", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 5, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 8, notes: "Graduation party" },
  { id: 21, customerId: 18, productId: 3, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "10:00 AM", totalPrice: 132.0, depositAmount: 69.95, paymentMethod: "Debit", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "Anniversary celebration" },
  { id: 22, customerId: 23, productId: 9, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "10:00 AM", totalPrice: 177.44, depositAmount: 102.13, paymentMethod: "Visa", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 3, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 7, notes: "No nuts - allergy friendly" },
  { id: 23, customerId: 16, productId: 8, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "11:00 AM", totalPrice: 83.31, depositAmount: 47.58, paymentMethod: "Debit", salesStaffId: 4, bakerId: 7, decoratorId: 9, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "Wedding cake - white frosting" },
  { id: 24, customerId: 2, productId: 3, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "10:00 AM", totalPrice: 100.0, depositAmount: 65.74, paymentMethod: "AmEx", salesStaffId: 5, bakerId: 6, decoratorId: 8, statusId: 4, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 9, notes: null },
  { id: 25, customerId: 13, productId: 8, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "12:00 PM", totalPrice: 246.97, depositAmount: 171.38, paymentMethod: "Visa", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 4, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 6, notes: "Anniversary celebration" },
  { id: 26, customerId: 8, productId: 3, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "2:00 PM", totalPrice: 151.45, depositAmount: 78.8, paymentMethod: "Cash", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 4, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 9, notes: "Graduation party" },
  { id: 27, customerId: 28, productId: 8, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "9:00 AM", totalPrice: 157.79, depositAmount: 90.05, paymentMethod: "Debit", salesStaffId: 5, bakerId: 6, decoratorId: 9, statusId: 1, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "Vegan options requested" },
  { id: 28, customerId: 5, productId: 2, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "9:00 AM", totalPrice: 120.23, depositAmount: 68.1, paymentMethod: "Debit", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "No nuts - allergy friendly" },
  { id: 29, customerId: 17, productId: 9, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "12:00 PM", totalPrice: 268.93, depositAmount: 197.84, paymentMethod: "MasterCard", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 5, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 8, notes: null },
  { id: 30, customerId: 27, productId: 10, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "2:00 PM", totalPrice: 104.66, depositAmount: 77.5, paymentMethod: "Cash", salesStaffId: 5, bakerId: 6, decoratorId: 8, statusId: 3, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 9, notes: "Vegan options requested" },
  { id: 31, customerId: 14, productId: 8, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "9:00 AM", totalPrice: 155.1, depositAmount: 116.21, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 4, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 6, notes: "Corporate event - multiple tiers" },
  { id: 32, customerId: 13, productId: 9, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "9:00 AM", totalPrice: 267.29, depositAmount: 152.9, paymentMethod: "MasterCard", salesStaffId: 4, bakerId: 7, decoratorId: 9, statusId: 3, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 8, notes: "Wedding cake - white frosting" },
  { id: 33, customerId: 1, productId: 9, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "12:00 PM", totalPrice: 189.13, depositAmount: 118.9, paymentMethod: "MasterCard", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 6, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 9, notes: "No nuts - allergy friendly" },
  { id: 34, customerId: 30, productId: 5, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "12:00 PM", totalPrice: 134.96, depositAmount: 86.01, paymentMethod: "MasterCard", salesStaffId: 4, bakerId: 6, decoratorId: 8, statusId: 5, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 7, notes: "Graduation party" },
  { id: 35, customerId: 27, productId: 2, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "12:00 PM", totalPrice: 229.11, depositAmount: 119.89, paymentMethod: "Cash", salesStaffId: 4, bakerId: 7, decoratorId: 9, statusId: 4, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 8, notes: "Custom design per customer photo" },
  { id: 36, customerId: 18, productId: 3, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "12:00 PM", totalPrice: 344.67, depositAmount: 193.34, paymentMethod: "Debit", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 5, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 8, notes: "Vegan options requested" },
  { id: 37, customerId: 27, productId: 10, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "2:00 PM", totalPrice: 80.69, depositAmount: 54.99, paymentMethod: "MasterCard", salesStaffId: 4, bakerId: 7, decoratorId: 9, statusId: 3, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 8, notes: "Baby shower - pink theme" },
  { id: 38, customerId: 11, productId: 4, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "3:00 PM", totalPrice: 226.73, depositAmount: 139.18, paymentMethod: "Debit", salesStaffId: 5, bakerId: 6, decoratorId: 9, statusId: 4, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 8, notes: "No nuts - allergy friendly" },
  { id: 39, customerId: 22, productId: 3, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "12:00 PM", totalPrice: 299.08, depositAmount: 178.41, paymentMethod: "Cash", salesStaffId: 4, bakerId: 7, decoratorId: 8, statusId: 5, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 6, notes: "Vegan options requested" },
  { id: 40, customerId: 28, productId: 3, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "9:00 AM", totalPrice: 84.14, depositAmount: 45.1, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 6, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "Baby shower - pink theme" },
  { id: 41, customerId: 23, productId: 8, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "4:00 PM", totalPrice: 182.6, depositAmount: 105.76, paymentMethod: "AmEx", salesStaffId: 4, bakerId: 6, decoratorId: 8, statusId: 5, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 8, notes: "Anniversary celebration" },
  { id: 42, customerId: 21, productId: 2, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "12:00 PM", totalPrice: 197.17, depositAmount: 103.44, paymentMethod: "Debit", salesStaffId: 5, bakerId: 6, decoratorId: 8, statusId: 5, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 6, notes: "Graduation party" },
  { id: 43, customerId: 14, productId: 10, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "3:00 PM", totalPrice: 196.29, depositAmount: 110.13, paymentMethod: "Debit", salesStaffId: 4, bakerId: 6, decoratorId: 8, statusId: 3, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 9, notes: null },
  { id: 44, customerId: 8, productId: 8, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "3:00 PM", totalPrice: 214.37, depositAmount: 138.44, paymentMethod: "Visa", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 5, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 8, notes: "Vegan options requested" },
  { id: 45, customerId: 19, productId: 5, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "3:00 PM", totalPrice: 199.27, depositAmount: 116.85, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 7, notes: "Custom design per customer photo" },
  { id: 46, customerId: 12, productId: 10, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "11:00 AM", totalPrice: 108.8, depositAmount: 64.77, paymentMethod: "Visa", salesStaffId: 4, bakerId: 7, decoratorId: 9, statusId: 5, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 6, notes: null },
  { id: 47, customerId: 25, productId: 4, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "2:00 PM", totalPrice: 304.87, depositAmount: 221.25, paymentMethod: "Visa", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 5, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 7, notes: "Wedding cake - white frosting" },
  { id: 48, customerId: 15, productId: 1, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "2:00 PM", totalPrice: 254.51, depositAmount: 146.91, paymentMethod: "Visa", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 6, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 8, notes: "Custom design per customer photo" },
  { id: 49, customerId: 12, productId: 9, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "2:00 PM", totalPrice: 115.68, depositAmount: 73.44, paymentMethod: "Visa", salesStaffId: 4, bakerId: 7, decoratorId: 9, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 8, notes: "Baby shower - pink theme" },
  { id: 50, customerId: 25, productId: 4, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "4:00 PM", totalPrice: 206.45, depositAmount: 107.11, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 6, decoratorId: 9, statusId: 5, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 8, notes: "Vegan options requested" },
  { id: 51, customerId: 19, productId: 7, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "4:00 PM", totalPrice: 261.66, depositAmount: 174.81, paymentMethod: "Visa", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 4, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 8, notes: null },
  { id: 52, customerId: 30, productId: 5, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "3:00 PM", totalPrice: 97.07, depositAmount: 68.53, paymentMethod: "MasterCard", salesStaffId: 4, bakerId: 6, decoratorId: 8, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "Graduation party" },
  { id: 53, customerId: 18, productId: 3, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "12:00 PM", totalPrice: 111.35, depositAmount: 62.21, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 7, finalApprovalId: null, isCancelled: "Y", lastEmployeeId: 9, notes: "Wedding cake - white frosting" },
  { id: 54, customerId: 9, productId: 1, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "3:00 PM", totalPrice: 246.23, depositAmount: 180.92, paymentMethod: "Visa", salesStaffId: 4, bakerId: 7, decoratorId: 9, statusId: 5, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 8, notes: "Wedding cake - white frosting" },
  { id: 55, customerId: 21, productId: 6, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "9:00 AM", totalPrice: 179.18, depositAmount: 129.98, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 6, decoratorId: 8, statusId: 7, finalApprovalId: null, isCancelled: "Y", lastEmployeeId: 9, notes: "Wedding cake - white frosting" },
  { id: 56, customerId: 1, productId: 1, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "4:00 PM", totalPrice: 253.26, depositAmount: 164.44, paymentMethod: "Visa", salesStaffId: 4, bakerId: 6, decoratorId: 8, statusId: 5, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 7, notes: null },
  { id: 57, customerId: 5, productId: 10, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "9:00 AM", totalPrice: 314.82, depositAmount: 183.27, paymentMethod: "Visa", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 7, notes: "Wedding cake - white frosting" },
  { id: 58, customerId: 26, productId: 4, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "2:00 PM", totalPrice: 86.96, depositAmount: 43.8, paymentMethod: "Visa", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 5, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 7, notes: "Custom design per customer photo" },
  { id: 59, customerId: 25, productId: 6, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "2:00 PM", totalPrice: 281.33, depositAmount: 174.16, paymentMethod: "AmEx", salesStaffId: 4, bakerId: 7, decoratorId: 8, statusId: 4, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 6, notes: "Vegan options requested" },
  { id: 60, customerId: 16, productId: 7, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "12:00 PM", totalPrice: 253.7, depositAmount: 128.83, paymentMethod: "Cash", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 3, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "Baby shower - pink theme" },
  { id: 61, customerId: 19, productId: 9, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "3:00 PM", totalPrice: 114.07, depositAmount: 74.84, paymentMethod: "Visa", salesStaffId: 5, bakerId: 7, decoratorId: 9, statusId: 2, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 9, notes: "Wedding cake - white frosting" },
  { id: 62, customerId: 29, productId: 9, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "3:00 PM", totalPrice: 110.89, depositAmount: 73.6, paymentMethod: "Debit", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 5, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 8, notes: "No nuts - allergy friendly" },
  { id: 63, customerId: 11, productId: 5, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "11:00 AM", totalPrice: 277.0, depositAmount: 160.14, paymentMethod: "Debit", salesStaffId: 5, bakerId: 6, decoratorId: 8, statusId: 3, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "Wedding cake - white frosting" },
  { id: 64, customerId: 5, productId: 9, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "9:00 AM", totalPrice: 281.04, depositAmount: 166.7, paymentMethod: "AmEx", salesStaffId: 5, bakerId: 6, decoratorId: 9, statusId: 4, finalApprovalId: 3, isCancelled: "N", lastEmployeeId: 9, notes: "Birthday cake with custom message" },
  { id: 65, customerId: 19, productId: 9, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "10:00 AM", totalPrice: 242.11, depositAmount: 142.34, paymentMethod: "Debit", salesStaffId: 5, bakerId: 6, decoratorId: 8, statusId: 6, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 8, notes: "Vegan options requested" },
  { id: 66, customerId: 26, productId: 7, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "4:00 PM", totalPrice: 285.9, depositAmount: 183.98, paymentMethod: "AmEx", salesStaffId: 4, bakerId: 7, decoratorId: 8, statusId: 3, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 7, notes: "Graduation party" },
  { id: 67, customerId: 1, productId: 3, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "4:00 PM", totalPrice: 163.43, depositAmount: 95.6, paymentMethod: "Debit", salesStaffId: 5, bakerId: 6, decoratorId: 8, statusId: 5, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 6, notes: "Wedding cake - white frosting" },
  { id: 68, customerId: 11, productId: 3, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "11:00 AM", totalPrice: 138.09, depositAmount: 83.54, paymentMethod: "Visa", salesStaffId: 5, bakerId: 6, decoratorId: 8, statusId: 5, finalApprovalId: 2, isCancelled: "N", lastEmployeeId: 7, notes: null },
  { id: 69, customerId: 14, productId: 8, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "2:00 PM", totalPrice: 102.03, depositAmount: 62.32, paymentMethod: "MasterCard", salesStaffId: 5, bakerId: 7, decoratorId: 8, statusId: 1, finalApprovalId: null, isCancelled: "N", lastEmployeeId: 6, notes: "Baby shower - pink theme" },
  { id: 70, customerId: 16, productId: 9, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "3:00 PM", totalPrice: 156.48, depositAmount: 104.78, paymentMethod: "Visa", salesStaffId: 4, bakerId: 6, decoratorId: 9, statusId: 4, finalApprovalId: 1, isCancelled: "N", lastEmployeeId: 6, notes: "Birthday cake with custom message" }
];

// ============================================================
// UNIFIED MOCK DATA OBJECT
// ============================================================

const unifiedMockData = {
  customers: customers,
  employees: employees,
  orders: orders,
  orderStatuses: orderStatuses,
  customerStatuses: customerStatuses,
  customerTypes: customerTypes,
  employeeStatuses: employeeStatuses,
  employeeRoles: employeeRoles,
  
  // Metrics (hardcoded for Nov 25 presentation)
  metrics: {
    today: {
      totalOrders: 10,
      todayRevenue: 1450.00,
      ordersInProduction: 6,
      completedToday: 4,
      cancelledToday: 0
    },
    weekly: {
      totalOrders: 70,
      weeklyRevenue: 8950.00,
      pendingOrders: 4,
      inBaking: 8,
      decorating: 7,
      readyForPickup: 25
    }
  },
  
  // Helper Functions
  getCustomerName: function(custId) {
    const customer = this.customers.find(c => c.id === custId);
    return customer ? `${customer.firstName} ${customer.lastName}` : "Unknown";
  },
  
  getCustomerEmail: function(custId) {
    const customer = this.customers.find(c => c.id === custId);
    return customer ? customer.email : "Unknown";
  },
  
  getEmployeeName: function(empId) {
    const employee = this.employees.find(e => e.id === empId);
    return employee ? `${employee.firstName} ${employee.lastName}` : "Unknown";
  },
  
  getStatusDescription: function(statusId) {
    const status = this.orderStatuses.find(s => s.id === statusId);
    return status ? status.description : "Unknown";
  },
  
  getStatusColor: function(statusId) {
    const status = this.orderStatuses.find(s => s.id === statusId);
    return status ? status.color : "#CCCCCC";
  },
  
  getProductName: function(productId) {
    const productNames = {
      1: "6-inch Round Double Layer",
      2: "8-inch Round Double Layer",
      3: "10-inch Round Double Layer",
      4: "½ Sheet Double Layer",
      5: "¾ Sheet Double Layer",
      6: "Full Sheet Double Layer",
      7: "Cupcake Dozen",
      8: "Small Specialty Cake",
      9: "Large Specialty Cake",
      10: "Sheet Cake Custom"
    };
    return productNames[productId] || "Unknown Product";
  },
  
  getRecentOrders: function(limit = 10) {
    return this.orders
      .filter(o => o.isCancelled === "N")
      .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
      .slice(0, limit);
  },
  
  getUpcomingPickups: function(date = "2025-11-25") {
    return this.orders
      .filter(o => o.pickupDate === date && o.isCancelled === "N")
      .sort((a, b) => a.pickupTime.localeCompare(b.pickupTime));
  },
  
  formatTime: function(time) {
    return time;
  }
};
