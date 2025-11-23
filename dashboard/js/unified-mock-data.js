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

    // Customers (Table 1) - 30 Customers
    customers: [
        { id: 1, companyName: "TechCorp Solutions", firstName: "Donald", lastName: "Johnson", middleInitial: "R", email: "donald.johnson@techcorpso.com", mobilePhone: "(210) 836-1166", workPhone: "(210) 555-0101", homePhone: null, addressLine1: "4521 Commerce Street", addressLine2: "Suite 300", zipCode: "78205", typeId: 2, statusId: 1, isPreferred: "N" },
        { id: 2, companyName: "Global Industries LLC", firstName: "William", lastName: "Ramirez", middleInitial: "J", email: "william.ramirez@globalindu.com", mobilePhone: "(469) 245-9792", workPhone: "(469) 555-0102", homePhone: null, addressLine1: "8765 McKinney Avenue", addressLine2: "Floor 12", zipCode: "75201", typeId: 2, statusId: 1, isPreferred: "N" },
        { id: 3, companyName: "Pinnacle Enterprises", firstName: "William", lastName: "Thompson", middleInitial: "A", email: "william.thompson@pinnacleen.com", mobilePhone: "(832) 676-5442", workPhone: "(832) 555-0103", homePhone: null, addressLine1: "1234 Westheimer Road", addressLine2: "Building B", zipCode: "77027", typeId: 2, statusId: 1, isPreferred: "N" },
        { id: 4, companyName: "Visionary Systems Inc", firstName: "Lisa", lastName: "Walker", middleInitial: "M", email: "lisa.walker@visionarys.com", mobilePhone: "(832) 952-6241", workPhone: "(832) 555-0104", homePhone: null, addressLine1: "5678 Memorial Drive", addressLine2: null, zipCode: "77024", typeId: 2, statusId: 1, isPreferred: "N" },
        { id: 5, companyName: "Horizon Business Group", firstName: "Patricia", lastName: "Rodriguez", middleInitial: "L", email: "patricia.rodriguez@horizonbus.com", mobilePhone: "(210) 591-1526", workPhone: "(210) 555-0105", homePhone: null, addressLine1: "3456 Broadway Street", addressLine2: "Suite 200", zipCode: "78209", typeId: 2, statusId: 1, isPreferred: "N" },
        { id: 6, firstName: "Jessica", lastName: "Lopez", middleInitial: "A", email: "jessica.lopez@gmail.com", mobilePhone: "(281) 988-9649", workPhone: null, homePhone: "(281) 555-1001", addressLine1: "7823 Fannin Street", addressLine2: null, zipCode: "77054", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 7, firstName: "Sandra", lastName: "Davis", middleInitial: "K", email: "sandra.davis@outlook.com", mobilePhone: "(512) 242-5336", workPhone: null, homePhone: "(512) 555-1002", addressLine1: "2145 Congress Avenue", addressLine2: "Apt 5B", zipCode: "78701", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 8, firstName: "Mary", lastName: "Taylor", middleInitial: "E", email: "mary.taylor@hotmail.com", mobilePhone: "(469) 546-7851", workPhone: null, homePhone: "(469) 555-1003", addressLine1: "9876 Greenville Avenue", addressLine2: null, zipCode: "75206", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 9, firstName: "Nancy", lastName: "Ramirez", middleInitial: "R", email: "nancy.ramirez@hotmail.com", mobilePhone: "(512) 628-4554", workPhone: null, homePhone: "(512) 555-1004", addressLine1: "3421 South Lamar Blvd", addressLine2: null, zipCode: "78704", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 10, firstName: "Linda", lastName: "Wilson", middleInitial: "S", email: "linda.wilson@hotmail.com", mobilePhone: "(713) 766-7349", workPhone: null, homePhone: "(713) 555-1005", addressLine1: "6754 Richmond Avenue", addressLine2: "Unit 12", zipCode: "77057", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 11, firstName: "Michael", lastName: "Sanchez", middleInitial: "D", email: "michael.sanchez@hotmail.com", mobilePhone: "(737) 766-9450", workPhone: null, homePhone: "(737) 555-1006", addressLine1: "4532 Burnet Road", addressLine2: null, zipCode: "78756", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 12, firstName: "Daniel", lastName: "Martinez", middleInitial: "J", email: "daniel.martinez@gmail.com", mobilePhone: "(713) 745-7151", workPhone: null, homePhone: "(713) 555-1007", addressLine1: "8901 Kirby Drive", addressLine2: null, zipCode: "77054", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 13, firstName: "Joseph", lastName: "Brown", middleInitial: "T", email: "joseph.brown@yahoo.com", mobilePhone: "(210) 626-8104", workPhone: null, homePhone: "(210) 555-1008", addressLine1: "1234 Alamo Street", addressLine2: "Apt 3A", zipCode: "78215", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 14, firstName: "Linda", lastName: "Wilson", middleInitial: "G", email: "linda.wilson@gmail.com", mobilePhone: "(817) 602-9530", workPhone: null, homePhone: "(817) 555-1009", addressLine1: "5678 Camp Bowie Blvd", addressLine2: null, zipCode: "76107", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 15, firstName: "Sandra", lastName: "Hernandez", middleInitial: "M", email: "sandra.hernandez@hotmail.com", mobilePhone: "(817) 927-6635", workPhone: null, homePhone: "(817) 555-1010", addressLine1: "9012 Magnolia Avenue", addressLine2: null, zipCode: "76104", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 16, firstName: "Betty", lastName: "Smith", middleInitial: "L", email: "betty.smith@outlook.com", mobilePhone: "(214) 669-2021", workPhone: null, homePhone: "(214) 555-1011", addressLine1: "3456 Oak Lawn Avenue", addressLine2: "Unit 8", zipCode: "75219", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 17, firstName: "Nancy", lastName: "Wilson", middleInitial: "P", email: "nancy.wilson@outlook.com", mobilePhone: "(737) 475-2176", workPhone: null, homePhone: "(737) 555-1012", addressLine1: "7890 Anderson Lane", addressLine2: null, zipCode: "78757", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 18, firstName: "David", lastName: "Martinez", middleInitial: "C", email: "david.martinez@gmail.com", mobilePhone: "(972) 759-1192", workPhone: null, homePhone: "(972) 555-1013", addressLine1: "2345 Belt Line Road", addressLine2: "Apt 15C", zipCode: "75254", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 19, firstName: "Daniel", lastName: "Miller", middleInitial: "W", email: "daniel.miller@outlook.com", mobilePhone: "(512) 891-3116", workPhone: null, homePhone: "(512) 555-1014", addressLine1: "6789 West 6th Street", addressLine2: null, zipCode: "78703", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 20, firstName: "Robert", lastName: "White", middleInitial: "H", email: "robert.white@gmail.com", mobilePhone: "(281) 554-6394", workPhone: null, homePhone: "(281) 555-1015", addressLine1: "4567 Bay Area Blvd", addressLine2: null, zipCode: "77058", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 21, firstName: "John", lastName: "Jackson", middleInitial: "B", email: "john.jackson@outlook.com", mobilePhone: "(512) 837-2113", workPhone: null, homePhone: "(512) 555-1016", addressLine1: "8901 Riverside Drive", addressLine2: "Unit 4", zipCode: "78741", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 22, firstName: "Mark", lastName: "Davis", middleInitial: "F", email: "mark.davis@outlook.com", mobilePhone: "(281) 363-5341", workPhone: null, homePhone: "(281) 555-1017", addressLine1: "1234 Bellaire Blvd", addressLine2: null, zipCode: "77036", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 23, firstName: "Sarah", lastName: "Ramirez", middleInitial: "N", email: "sarah.ramirez@gmail.com", mobilePhone: "(512) 352-2709", workPhone: null, homePhone: "(512) 555-1018", addressLine1: "5678 Cesar Chavez Street", addressLine2: null, zipCode: "78702", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 24, firstName: "William", lastName: "Ramirez", middleInitial: "V", email: "william.ramirez@yahoo.com", mobilePhone: "(214) 969-6627", workPhone: null, homePhone: "(214) 555-1019", addressLine1: "9012 Ross Avenue", addressLine2: "Apt 22", zipCode: "75202", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 25, firstName: "William", lastName: "White", middleInitial: "K", email: "william.white@hotmail.com", mobilePhone: "(737) 335-5112", workPhone: null, homePhone: "(737) 555-1020", addressLine1: "3456 Research Blvd", addressLine2: null, zipCode: "78759", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 26, firstName: "Daniel", lastName: "Ramirez", middleInitial: "O", email: "daniel.ramirez@outlook.com", mobilePhone: "(817) 510-3831", workPhone: null, homePhone: "(817) 555-1021", addressLine1: "7890 University Drive", addressLine2: null, zipCode: "76107", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 27, firstName: "Jennifer", lastName: "Robinson", middleInitial: "S", email: "jennifer.robinson@gmail.com", mobilePhone: "(469) 250-9485", workPhone: null, homePhone: "(469) 555-1022", addressLine1: "2345 Preston Road", addressLine2: "Suite 100", zipCode: "75093", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 28, firstName: "Barbara", lastName: "Davis", middleInitial: "J", email: "barbara.davis@outlook.com", mobilePhone: "(713) 574-6026", workPhone: null, homePhone: "(713) 555-1023", addressLine1: "6789 Westheimer Road", addressLine2: null, zipCode: "77057", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 29, firstName: "Sarah", lastName: "Hernandez", middleInitial: "D", email: "sarah.hernandez@gmail.com", mobilePhone: "(713) 953-6482", workPhone: null, homePhone: "(713) 555-1024", addressLine1: "4567 Main Street", addressLine2: "Apt 7B", zipCode: "77002", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 30, firstName: "Christopher", lastName: "Wilson", middleInitial: "P", email: "christopher.wilson@yahoo.com", mobilePhone: "(210) 896-5694", workPhone: null, homePhone: "(210) 555-1025", addressLine1: "8901 Fredericksburg Road", addressLine2: null, zipCode: "78229", typeId: 1, statusId: 1, isPreferred: "N" },
        // NEW CUSTOMERS FOR NEXT 10 DAYS (Nov 23 - Dec 3, 2025)
        { id: 31, firstName: "Amanda", lastName: "Chen", middleInitial: "L", email: "amanda.chen@gmail.com", mobilePhone: "(713) 234-5678", workPhone: null, homePhone: null, addressLine1: "1245 Richmond Avenue", addressLine2: "Apt 301", zipCode: "77006", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 32, firstName: "Marcus", lastName: "Taylor", middleInitial: "D", email: "marcus.taylor@outlook.com", mobilePhone: "(214) 567-8901", workPhone: null, homePhone: null, addressLine1: "3456 Cedar Springs", addressLine2: null, zipCode: "75219", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 33, firstName: "Elena", lastName: "Vasquez", middleInitial: "M", email: "elena.vasquez@yahoo.com", mobilePhone: "(512) 789-0123", workPhone: null, homePhone: null, addressLine1: "5678 South Lamar", addressLine2: "Unit B", zipCode: "78704", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 34, firstName: "Brandon", lastName: "Foster", middleInitial: "K", email: "brandon.foster@gmail.com", mobilePhone: "(817) 890-1234", workPhone: null, homePhone: null, addressLine1: "7890 Camp Bowie Blvd", addressLine2: null, zipCode: "76116", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 35, firstName: "Olivia", lastName: "Sanders", middleInitial: "R", email: "olivia.sanders@hotmail.com", mobilePhone: "(281) 901-2345", workPhone: null, homePhone: null, addressLine1: "2345 Kirby Drive", addressLine2: "Apt 15", zipCode: "77019", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 36, firstName: "Trevor", lastName: "Brooks", middleInitial: "J", email: "trevor.brooks@gmail.com", mobilePhone: "(469) 012-3456", workPhone: null, homePhone: null, addressLine1: "4567 Greenville Avenue", addressLine2: null, zipCode: "75206", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 37, firstName: "Sophia", lastName: "Kim", middleInitial: "H", email: "sophia.kim@yahoo.com", mobilePhone: "(512) 123-4567", workPhone: null, homePhone: null, addressLine1: "6789 Burnet Road", addressLine2: "Suite 200", zipCode: "78757", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 38, firstName: "Ryan", lastName: "Mitchell", middleInitial: "P", email: "ryan.mitchell@outlook.com", mobilePhone: "(210) 234-5678", workPhone: null, homePhone: null, addressLine1: "8901 Broadway", addressLine2: null, zipCode: "78217", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 39, firstName: "Isabella", lastName: "Gomez", middleInitial: "C", email: "isabella.gomez@gmail.com", mobilePhone: "(713) 345-6789", workPhone: null, homePhone: null, addressLine1: "1234 Montrose Blvd", addressLine2: "Apt 5C", zipCode: "77006", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 40, firstName: "Austin", lastName: "Rivera", middleInitial: "T", email: "austin.rivera@hotmail.com", mobilePhone: "(214) 456-7890", workPhone: null, homePhone: null, addressLine1: "3456 Henderson Avenue", addressLine2: null, zipCode: "75206", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 41, companyName: "Sterling Events LLC", firstName: "Victoria", lastName: "Hunt", middleInitial: "E", email: "victoria.hunt@sterlingevents.com", mobilePhone: "(832) 567-8901", workPhone: "(832) 555-0201", homePhone: null, addressLine1: "5678 Post Oak Blvd", addressLine2: "Floor 8", zipCode: "77027", typeId: 2, statusId: 1, isPreferred: "Y" },
        { id: 42, companyName: "Metro Catering Co", firstName: "Nathan", lastName: "Palmer", middleInitial: "W", email: "nathan.palmer@metrocatering.com", mobilePhone: "(972) 678-9012", workPhone: "(972) 555-0202", homePhone: null, addressLine1: "7890 Legacy Drive", addressLine2: "Suite 150", zipCode: "75024", typeId: 2, statusId: 1, isPreferred: "N" },
        { id: 43, firstName: "Maya", lastName: "Patel", middleInitial: "S", email: "maya.patel@gmail.com", mobilePhone: "(512) 789-0123", workPhone: null, homePhone: null, addressLine1: "9012 West 6th St", addressLine2: null, zipCode: "78703", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 44, firstName: "Jordan", lastName: "Scott", middleInitial: "M", email: "jordan.scott@yahoo.com", mobilePhone: "(817) 890-1234", workPhone: null, homePhone: null, addressLine1: "2345 Magnolia Avenue", addressLine2: "Apt 12", zipCode: "76104", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 45, firstName: "Emma", lastName: "Woods", middleInitial: "L", email: "emma.woods@outlook.com", mobilePhone: "(281) 901-2345", workPhone: null, homePhone: null, addressLine1: "4567 Westpark Drive", addressLine2: null, zipCode: "77082", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 46, firstName: "Caleb", lastName: "Hayes", middleInitial: "N", email: "caleb.hayes@gmail.com", mobilePhone: "(469) 012-3456", workPhone: null, homePhone: null, addressLine1: "6789 Preston Road", addressLine2: "Unit 8", zipCode: "75034", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 47, firstName: "Mia", lastName: "Flores", middleInitial: "D", email: "mia.flores@hotmail.com", mobilePhone: "(512) 123-4567", workPhone: null, homePhone: null, addressLine1: "8901 South Congress", addressLine2: null, zipCode: "78745", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 48, firstName: "Ethan", lastName: "Morgan", middleInitial: "B", email: "ethan.morgan@yahoo.com", mobilePhone: "(210) 234-5678", workPhone: null, homePhone: null, addressLine1: "1234 Blanco Road", addressLine2: "Apt 7", zipCode: "78212", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 49, firstName: "Ava", lastName: "Coleman", middleInitial: "G", email: "ava.coleman@gmail.com", mobilePhone: "(713) 345-6789", workPhone: null, homePhone: null, addressLine1: "3456 Shepherd Drive", addressLine2: null, zipCode: "77098", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 50, firstName: "Logan", lastName: "Barnes", middleInitial: "R", email: "logan.barnes@outlook.com", mobilePhone: "(214) 456-7890", workPhone: null, homePhone: null, addressLine1: "5678 Oak Lawn Avenue", addressLine2: "Suite 5", zipCode: "75219", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 51, companyName: "Prestige Celebrations", firstName: "Grace", lastName: "Russell", middleInitial: "K", email: "grace.russell@prestigecelebrations.com", mobilePhone: "(832) 567-8901", workPhone: "(832) 555-0203", homePhone: null, addressLine1: "7890 San Felipe", addressLine2: "Floor 3", zipCode: "77057", typeId: 2, statusId: 1, isPreferred: "Y" },
        { id: 52, firstName: "Dylan", lastName: "Jenkins", middleInitial: "F", email: "dylan.jenkins@hotmail.com", mobilePhone: "(972) 678-9012", workPhone: null, homePhone: null, addressLine1: "9012 Coit Road", addressLine2: null, zipCode: "75251", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 53, firstName: "Zoe", lastName: "Butler", middleInitial: "A", email: "zoe.butler@gmail.com", mobilePhone: "(512) 789-0123", workPhone: null, homePhone: null, addressLine1: "2345 Guadalupe Street", addressLine2: "Apt 201", zipCode: "78705", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 54, firstName: "Connor", lastName: "Powell", middleInitial: "J", email: "connor.powell@yahoo.com", mobilePhone: "(817) 890-1234", workPhone: null, homePhone: null, addressLine1: "4567 Hulen Street", addressLine2: null, zipCode: "76132", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 55, firstName: "Lily", lastName: "Long", middleInitial: "M", email: "lily.long@outlook.com", mobilePhone: "(281) 901-2345", workPhone: null, homePhone: null, addressLine1: "6789 Highway 6", addressLine2: "Suite 12", zipCode: "77478", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 56, firstName: "Mason", lastName: "Perry", middleInitial: "H", email: "mason.perry@gmail.com", mobilePhone: "(469) 012-3456", workPhone: null, homePhone: null, addressLine1: "8901 Collins Boulevard", addressLine2: null, zipCode: "75034", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 57, firstName: "Chloe", lastName: "Hughes", middleInitial: "L", email: "chloe.hughes@hotmail.com", mobilePhone: "(512) 123-4567", workPhone: null, homePhone: null, addressLine1: "1234 Manor Road", addressLine2: "Apt 9", zipCode: "78722", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 58, firstName: "Liam", lastName: "Cox", middleInitial: "T", email: "liam.cox@yahoo.com", mobilePhone: "(210) 234-5678", workPhone: null, homePhone: null, addressLine1: "3456 McCullough Avenue", addressLine2: null, zipCode: "78212", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 59, firstName: "Harper", lastName: "Reed", middleInitial: "E", email: "harper.reed@gmail.com", mobilePhone: "(713) 345-6789", workPhone: null, homePhone: null, addressLine1: "5678 Bissonnet Street", addressLine2: "Unit 3B", zipCode: "77081", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 60, firstName: "Jackson", lastName: "Bailey", middleInitial: "W", email: "jackson.bailey@outlook.com", mobilePhone: "(214) 456-7890", workPhone: null, homePhone: null, addressLine1: "7890 Skillman Street", addressLine2: null, zipCode: "75231", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 61, companyName: "Executive Functions Inc", firstName: "Aria", lastName: "Cooper", middleInitial: "S", email: "aria.cooper@execfunctions.com", mobilePhone: "(832) 567-8901", workPhone: "(832) 555-0204", homePhone: null, addressLine1: "9012 Katy Freeway", addressLine2: "Floor 15", zipCode: "77024", typeId: 2, statusId: 1, isPreferred: "N" },
        { id: 62, firstName: "Lucas", lastName: "Richardson", middleInitial: "D", email: "lucas.richardson@gmail.com", mobilePhone: "(972) 678-9012", workPhone: null, homePhone: null, addressLine1: "2345 Abrams Road", addressLine2: "Apt 4C", zipCode: "75214", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 63, firstName: "Layla", lastName: "Howard", middleInitial: "P", email: "layla.howard@yahoo.com", mobilePhone: "(512) 789-0123", workPhone: null, homePhone: null, addressLine1: "4567 Red River Street", addressLine2: null, zipCode: "78701", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 64, firstName: "Owen", lastName: "Ward", middleInitial: "C", email: "owen.ward@hotmail.com", mobilePhone: "(817) 890-1234", workPhone: null, homePhone: null, addressLine1: "6789 Bryant Irvin Road", addressLine2: "Suite 22", zipCode: "76132", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 65, firstName: "Ella", lastName: "Torres", middleInitial: "N", email: "ella.torres@outlook.com", mobilePhone: "(281) 901-2345", workPhone: null, homePhone: null, addressLine1: "8901 Westheimer Road", addressLine2: null, zipCode: "77063", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 66, firstName: "Carter", lastName: "Peterson", middleInitial: "M", email: "carter.peterson@gmail.com", mobilePhone: "(469) 012-3456", workPhone: null, homePhone: null, addressLine1: "1234 Virginia Parkway", addressLine2: "Apt 18", zipCode: "75071", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 67, firstName: "Scarlett", lastName: "Gray", middleInitial: "R", email: "scarlett.gray@yahoo.com", mobilePhone: "(512) 123-4567", workPhone: null, homePhone: null, addressLine1: "3456 Bee Cave Road", addressLine2: null, zipCode: "78746", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 68, firstName: "Grayson", lastName: "Ramirez", middleInitial: "L", email: "grayson.ramirez@hotmail.com", mobilePhone: "(210) 234-5678", workPhone: null, homePhone: null, addressLine1: "5678 Nacogdoches Road", addressLine2: "Unit 5", zipCode: "78217", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 69, firstName: "Penelope", lastName: "James", middleInitial: "K", email: "penelope.james@gmail.com", mobilePhone: "(713) 345-6789", workPhone: null, homePhone: null, addressLine1: "7890 Hillcroft Avenue", addressLine2: null, zipCode: "77081", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 70, firstName: "Wyatt", lastName: "Watson", middleInitial: "B", email: "wyatt.watson@outlook.com", mobilePhone: "(214) 456-7890", workPhone: null, homePhone: null, addressLine1: "9012 Forest Lane", addressLine2: "Apt 11", zipCode: "75243", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 71, companyName: "Grand Occasions Ltd", firstName: "Madison", lastName: "Brooks", middleInitial: "F", email: "madison.brooks@grandoccasions.com", mobilePhone: "(832) 567-8901", workPhone: "(832) 555-0205", homePhone: null, addressLine1: "2345 Westcreek Lane", addressLine2: "Floor 6", zipCode: "77027", typeId: 2, statusId: 1, isPreferred: "Y" },
        { id: 72, firstName: "Hunter", lastName: "Sanders", middleInitial: "J", email: "hunter.sanders@yahoo.com", mobilePhone: "(972) 678-9012", workPhone: null, homePhone: null, addressLine1: "4567 Parker Road", addressLine2: null, zipCode: "75023", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 73, firstName: "Addison", lastName: "Price", middleInitial: "G", email: "addison.price@gmail.com", mobilePhone: "(512) 789-0123", workPhone: null, homePhone: null, addressLine1: "6789 Lamar Boulevard", addressLine2: "Suite 300", zipCode: "78752", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 74, firstName: "Lincoln", lastName: "Bennett", middleInitial: "A", email: "lincoln.bennett@hotmail.com", mobilePhone: "(817) 890-1234", workPhone: null, homePhone: null, addressLine1: "8901 Alta Mere Drive", addressLine2: null, zipCode: "76116", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 75, firstName: "Luna", lastName: "Wood", middleInitial: "M", email: "luna.wood@outlook.com", mobilePhone: "(281) 901-2345", workPhone: null, homePhone: null, addressLine1: "1234 Dairy Ashford", addressLine2: "Apt 20", zipCode: "77079", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 76, firstName: "Leo", lastName: "Barnes", middleInitial: "H", email: "leo.barnes@gmail.com", mobilePhone: "(469) 012-3456", workPhone: null, homePhone: null, addressLine1: "3456 Josey Lane", addressLine2: null, zipCode: "75056", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 77, firstName: "Stella", lastName: "Ross", middleInitial: "E", email: "stella.ross@yahoo.com", mobilePhone: "(512) 123-4567", workPhone: null, homePhone: null, addressLine1: "5678 Airport Boulevard", addressLine2: "Unit 7", zipCode: "78751", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 78, firstName: "Henry", lastName: "Henderson", middleInitial: "W", email: "henry.henderson@hotmail.com", mobilePhone: "(210) 234-5678", workPhone: null, homePhone: null, addressLine1: "7890 Wurzbach Road", addressLine2: null, zipCode: "78230", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 79, firstName: "Violet", lastName: "Coleman", middleInitial: "S", email: "violet.coleman@gmail.com", mobilePhone: "(713) 345-6789", workPhone: null, homePhone: null, addressLine1: "9012 Gessner Road", addressLine2: "Apt 14", zipCode: "77024", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 80, firstName: "Sebastian", lastName: "Jenkins", middleInitial: "D", email: "sebastian.jenkins@outlook.com", mobilePhone: "(214) 456-7890", workPhone: null, homePhone: null, addressLine1: "2345 Live Oak Street", addressLine2: null, zipCode: "75204", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 81, companyName: "Premier Events Group", firstName: "Hazel", lastName: "Perry", middleInitial: "L", email: "hazel.perry@premierevents.com", mobilePhone: "(832) 567-8901", workPhone: "(832) 555-0206", homePhone: null, addressLine1: "4567 Voss Road", addressLine2: "Floor 10", zipCode: "77057", typeId: 2, statusId: 1, isPreferred: "Y" },
        { id: 82, firstName: "Jack", lastName: "Powell", middleInitial: "T", email: "jack.powell@yahoo.com", mobilePhone: "(972) 678-9012", workPhone: null, homePhone: null, addressLine1: "6789 Belt Line Road", addressLine2: "Suite 45", zipCode: "75254", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 83, firstName: "Aurora", lastName: "Long", middleInitial: "N", email: "aurora.long@gmail.com", mobilePhone: "(512) 789-0123", workPhone: null, homePhone: null, addressLine1: "8901 East Riverside", addressLine2: null, zipCode: "78741", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 84, firstName: "Levi", lastName: "Patterson", middleInitial: "K", email: "levi.patterson@hotmail.com", mobilePhone: "(817) 890-1234", workPhone: null, homePhone: null, addressLine1: "1234 White Settlement Road", addressLine2: "Apt 6", zipCode: "76114", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 85, firstName: "Savannah", lastName: "Hughes", middleInitial: "R", email: "savannah.hughes@outlook.com", mobilePhone: "(281) 901-2345", workPhone: null, homePhone: null, addressLine1: "3456 FM 1960", addressLine2: null, zipCode: "77090", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 86, firstName: "Mateo", lastName: "Flores", middleInitial: "P", email: "mateo.flores@gmail.com", mobilePhone: "(469) 012-3456", workPhone: null, homePhone: null, addressLine1: "5678 Central Expressway", addressLine2: "Unit 12", zipCode: "75080", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 87, firstName: "Paisley", lastName: "Washington", middleInitial: "M", email: "paisley.washington@yahoo.com", mobilePhone: "(512) 123-4567", workPhone: null, homePhone: null, addressLine1: "7890 North Loop Boulevard", addressLine2: null, zipCode: "78756", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 88, firstName: "Asher", lastName: "Butler", middleInitial: "C", email: "asher.butler@hotmail.com", mobilePhone: "(210) 234-5678", workPhone: null, homePhone: null, addressLine1: "9012 Military Drive", addressLine2: "Apt 3", zipCode: "78223", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 89, firstName: "Claire", lastName: "Simmons", middleInitial: "F", email: "claire.simmons@gmail.com", mobilePhone: "(713) 345-6789", workPhone: null, homePhone: null, addressLine1: "2345 Bellaire Boulevard", addressLine2: null, zipCode: "77072", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 90, firstName: "Eli", lastName: "Foster", middleInitial: "J", email: "eli.foster@outlook.com", mobilePhone: "(214) 456-7890", workPhone: null, homePhone: null, addressLine1: "4567 Knox Street", addressLine2: "Suite 8", zipCode: "75205", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 91, companyName: "Luxe Celebrations Co", firstName: "Nora", lastName: "Gonzales", middleInitial: "A", email: "nora.gonzales@luxecelebrations.com", mobilePhone: "(832) 567-8901", workPhone: "(832) 555-0207", homePhone: null, addressLine1: "6789 Wilcrest Drive", addressLine2: "Floor 4", zipCode: "77072", typeId: 2, statusId: 1, isPreferred: "Y" },
        { id: 92, firstName: "Miles", lastName: "Bryant", middleInitial: "L", email: "miles.bryant@yahoo.com", mobilePhone: "(972) 678-9012", workPhone: null, homePhone: null, addressLine1: "8901 Main Street", addressLine2: null, zipCode: "75074", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 93, firstName: "Hannah", lastName: "Alexander", middleInitial: "G", email: "hannah.alexander@gmail.com", mobilePhone: "(512) 789-0123", workPhone: null, homePhone: null, addressLine1: "1234 Barton Springs Road", addressLine2: "Apt 22", zipCode: "78704", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 94, firstName: "Theodore", lastName: "Russell", middleInitial: "B", email: "theodore.russell@hotmail.com", mobilePhone: "(817) 890-1234", workPhone: null, homePhone: null, addressLine1: "3456 West 7th Street", addressLine2: null, zipCode: "76107", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 95, firstName: "Lucy", lastName: "Griffin", middleInitial: "K", email: "lucy.griffin@outlook.com", mobilePhone: "(281) 901-2345", workPhone: null, homePhone: null, addressLine1: "5678 Beechnut Street", addressLine2: "Unit 9", zipCode: "77074", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 96, firstName: "Ezra", lastName: "Diaz", middleInitial: "M", email: "ezra.diaz@gmail.com", mobilePhone: "(469) 012-3456", workPhone: null, homePhone: null, addressLine1: "7890 Spring Valley Road", addressLine2: null, zipCode: "75254", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 97, firstName: "Ellie", lastName: "Hayes", middleInitial: "S", email: "ellie.hayes@yahoo.com", mobilePhone: "(512) 123-4567", workPhone: null, homePhone: null, addressLine1: "9012 Spicewood Springs", addressLine2: "Apt 16", zipCode: "78759", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 98, firstName: "Waylon", lastName: "Myers", middleInitial: "H", email: "waylon.myers@hotmail.com", mobilePhone: "(210) 234-5678", workPhone: null, homePhone: null, addressLine1: "2345 Bandera Road", addressLine2: null, zipCode: "78228", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 99, firstName: "Evelyn", lastName: "Ford", middleInitial: "D", email: "evelyn.ford@gmail.com", mobilePhone: "(713) 345-6789", workPhone: null, homePhone: null, addressLine1: "4567 Heights Boulevard", addressLine2: "Suite 2", zipCode: "77008", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 100, firstName: "Colton", lastName: "Hamilton", middleInitial: "W", email: "colton.hamilton@outlook.com", mobilePhone: "(214) 456-7890", workPhone: null, homePhone: null, addressLine1: "6789 Lovers Lane", addressLine2: null, zipCode: "75225", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 101, companyName: "Elite Functions LLC", firstName: "Isla", lastName: "Graham", middleInitial: "P", email: "isla.graham@elitefunctions.com", mobilePhone: "(832) 567-8901", workPhone: "(832) 555-0208", homePhone: null, addressLine1: "8901 Briar Forest", addressLine2: "Floor 12", zipCode: "77024", typeId: 2, statusId: 1, isPreferred: "Y" },
        { id: 102, firstName: "Axel", lastName: "Sullivan", middleInitial: "T", email: "axel.sullivan@yahoo.com", mobilePhone: "(972) 678-9012", workPhone: null, homePhone: null, addressLine1: "1234 Royal Lane", addressLine2: "Apt 25", zipCode: "75229", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 103, firstName: "Camila", lastName: "Wallace", middleInitial: "E", email: "camila.wallace@gmail.com", mobilePhone: "(512) 789-0123", workPhone: null, homePhone: null, addressLine1: "3456 Hancock Drive", addressLine2: null, zipCode: "78731", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 104, firstName: "Jaxon", lastName: "West", middleInitial: "R", email: "jaxon.west@hotmail.com", mobilePhone: "(817) 890-1234", workPhone: null, homePhone: null, addressLine1: "5678 Cleburne Highway", addressLine2: "Suite 7", zipCode: "76140", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 105, firstName: "Nova", lastName: "Cole", middleInitial: "M", email: "nova.cole@outlook.com", mobilePhone: "(281) 901-2345", workPhone: null, homePhone: null, addressLine1: "7890 Westheimer Parkway", addressLine2: null, zipCode: "77063", typeId: 1, statusId: 1, isPreferred: "Y" },
        { id: 106, firstName: "Maverick", lastName: "Reynolds", middleInitial: "C", email: "maverick.reynolds@gmail.com", mobilePhone: "(469) 012-3456", workPhone: null, homePhone: null, addressLine1: "9012 Independence Parkway", addressLine2: "Apt 19", zipCode: "75075", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 107, firstName: "Aaliyah", lastName: "Fisher", middleInitial: "L", email: "aaliyah.fisher@yahoo.com", mobilePhone: "(512) 123-4567", workPhone: null, homePhone: null, addressLine1: "2345 Mopac Expressway", addressLine2: null, zipCode: "78746", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 108, firstName: "Silas", lastName: "Garza", middleInitial: "J", email: "silas.garza@hotmail.com", mobilePhone: "(210) 234-5678", workPhone: null, homePhone: null, addressLine1: "4567 San Pedro Avenue", addressLine2: "Unit 4", zipCode: "78212", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 109, firstName: "Willow", lastName: "Crawford", middleInitial: "A", email: "willow.crawford@gmail.com", mobilePhone: "(713) 345-6789", workPhone: null, homePhone: null, addressLine1: "6789 Westpark Tollway", addressLine2: null, zipCode: "77082", typeId: 1, statusId: 1, isPreferred: "N" },
        { id: 110, firstName: "Kai", lastName: "Carroll", middleInitial: "N", email: "kai.carroll@outlook.com", mobilePhone: "(214) 456-7890", workPhone: null, homePhone: null, addressLine1: "8901 Turtle Creek Boulevard", addressLine2: "Suite 11", zipCode: "75219", typeId: 1, statusId: 1, isPreferred: "Y" }
    ],

    // Orders (Table 5) - 100 ORDERS - Full Year 2025
    orders: [
        { id: 1001, customerId: 7, productId: 1, orderDate: "2025-05-10", pickupDate: "2025-05-12", pickupTime: "10:00", totalPrice: 119.0, depositAmount: 59.5, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1002, customerId: 24, productId: 3, orderDate: "2025-01-27", pickupDate: "2025-01-31", pickupTime: "13:00", totalPrice: 122.0, depositAmount: 61.0, statusId: 5, notes: "Gluten-free base" },
        { id: 1003, customerId: 26, productId: 7, orderDate: "2025-01-29", pickupDate: "2025-02-01", pickupTime: "16:30", totalPrice: 97.0, depositAmount: 53.35, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1004, customerId: 25, productId: 2, orderDate: "2025-03-21", pickupDate: "2025-03-28", pickupTime: "14:30", totalPrice: 107.0, depositAmount: 53.5, statusId: 5, notes: "Customer requested extra flowers" },
        { id: 1005, customerId: 18, productId: 8, orderDate: "2025-02-15", pickupDate: "2025-02-18", pickupTime: "15:00", totalPrice: 147.0, depositAmount: 73.5, statusId: 5, notes: "Vintage style decoration" },
        { id: 1006, customerId: 10, productId: 5, orderDate: "2025-07-11", pickupDate: "2025-07-17", pickupTime: "09:30", totalPrice: 107.0, depositAmount: 64.2, statusId: 5, notes: "Customer requested extra flowers" },
        { id: 1007, customerId: 21, productId: 4, orderDate: "2025-01-19", pickupDate: "2025-01-21", pickupTime: "16:00", totalPrice: 112.0, depositAmount: 61.6, statusId: 5, notes: "Vintage style decoration" },
        { id: 1008, customerId: 11, productId: 7, orderDate: "2025-01-22", pickupDate: "2025-01-28", pickupTime: "13:00", totalPrice: 103.0, depositAmount: 56.65, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1009, customerId: 12, productId: 6, orderDate: "2025-09-12", pickupDate: "2025-09-14", pickupTime: "09:00", totalPrice: 132.0, depositAmount: 79.2, statusId: 5, notes: "Gluten-free base" },
        { id: 1010, customerId: 4, productId: 4, orderDate: "2025-04-25", pickupDate: "2025-04-30", pickupTime: "13:00", totalPrice: 101.0, depositAmount: 50.5, statusId: 5, notes: null },
        { id: 1011, customerId: 17, productId: 4, orderDate: "2025-03-29", pickupDate: "2025-04-03", pickupTime: "15:30", totalPrice: 110.0, depositAmount: 55.0, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1012, customerId: 10, productId: 8, orderDate: "2025-02-19", pickupDate: "2025-02-22", pickupTime: "15:30", totalPrice: 150.0, depositAmount: 75.0, statusId: 5, notes: "Corporate logo on top" },
        { id: 1013, customerId: 20, productId: 6, orderDate: "2025-10-11", pickupDate: "2025-10-16", pickupTime: "14:30", totalPrice: 140.0, depositAmount: 70.0, statusId: 5, notes: "Sugar-free icing" },
        { id: 1014, customerId: 12, productId: 2, orderDate: "2025-05-26", pickupDate: "2025-05-28", pickupTime: "12:30", totalPrice: 129.0, depositAmount: 77.4, statusId: 5, notes: "Standard decoration" },
        { id: 1015, customerId: 28, productId: 2, orderDate: "2025-01-11", pickupDate: "2025-01-14", pickupTime: "13:30", totalPrice: 137.0, depositAmount: 68.5, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1016, customerId: 20, productId: 8, orderDate: "2025-02-26", pickupDate: "2025-02-28", pickupTime: "15:30", totalPrice: 118.0, depositAmount: 70.8, statusId: 5, notes: "Add Happy Birthday message" },
        { id: 1017, customerId: 10, productId: 4, orderDate: "2025-02-20", pickupDate: "2025-02-27", pickupTime: "12:00", totalPrice: 108.0, depositAmount: 64.8, statusId: 5, notes: null },
        { id: 1018, customerId: 18, productId: 2, orderDate: "2025-02-18", pickupDate: "2025-02-24", pickupTime: "10:00", totalPrice: 120.0, depositAmount: 66.0, statusId: 5, notes: "Customer requested extra flowers" },
        { id: 1019, customerId: 18, productId: 2, orderDate: "2025-10-14", pickupDate: "2025-10-17", pickupTime: "15:00", totalPrice: 132.0, depositAmount: 79.2, statusId: 5, notes: "Add Happy Birthday message" },
        { id: 1020, customerId: 12, productId: 5, orderDate: "2025-02-09", pickupDate: "2025-02-16", pickupTime: "14:30", totalPrice: 103.0, depositAmount: 51.5, statusId: 5, notes: "Sugar-free icing" },
        { id: 1021, customerId: 1, productId: 1, orderDate: "2025-08-29", pickupDate: "2025-09-04", pickupTime: "14:30", totalPrice: 114.0, depositAmount: 62.7, statusId: 5, notes: "Standard decoration" },
        { id: 1022, customerId: 23, productId: 8, orderDate: "2025-02-09", pickupDate: "2025-02-11", pickupTime: "12:00", totalPrice: 118.0, depositAmount: 59.0, statusId: 5, notes: "Add Happy Birthday message" },
        { id: 1023, customerId: 9, productId: 8, orderDate: "2025-07-27", pickupDate: "2025-08-02", pickupTime: "14:30", totalPrice: 119.0, depositAmount: 71.4, statusId: 5, notes: "Gluten-free base" },
        { id: 1024, customerId: 2, productId: 2, orderDate: "2025-08-18", pickupDate: "2025-08-22", pickupTime: "12:30", totalPrice: 125.0, depositAmount: 75.0, statusId: 5, notes: "Add Happy Birthday message" },
        { id: 1025, customerId: 16, productId: 2, orderDate: "2025-05-31", pickupDate: "2025-06-02", pickupTime: "13:30", totalPrice: 145.0, depositAmount: 79.75, statusId: 5, notes: "Vintage style decoration" },
        { id: 1026, customerId: 20, productId: 6, orderDate: "2025-09-10", pickupDate: "2025-09-17", pickupTime: "12:30", totalPrice: 138.0, depositAmount: 69.0, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1027, customerId: 12, productId: 2, orderDate: "2025-09-12", pickupDate: "2025-09-15", pickupTime: "14:00", totalPrice: 105.0, depositAmount: 57.75, statusId: 5, notes: "Customer requested extra flowers" },
        { id: 1028, customerId: 13, productId: 2, orderDate: "2025-06-21", pickupDate: "2025-06-25", pickupTime: "09:30", totalPrice: 110.0, depositAmount: 66.0, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1029, customerId: 16, productId: 7, orderDate: "2025-09-27", pickupDate: "2025-10-04", pickupTime: "15:30", totalPrice: 117.0, depositAmount: 70.2, statusId: 5, notes: "Sugar-free icing" },
        { id: 1030, customerId: 24, productId: 5, orderDate: "2025-06-19", pickupDate: "2025-06-26", pickupTime: "10:00", totalPrice: 126.0, depositAmount: 69.3, statusId: 5, notes: null },
        { id: 1031, customerId: 21, productId: 2, orderDate: "2025-07-26", pickupDate: "2025-08-01", pickupTime: "15:00", totalPrice: 109.0, depositAmount: 65.4, statusId: 5, notes: "Add Happy Birthday message" },
        { id: 1032, customerId: 3, productId: 5, orderDate: "2025-06-13", pickupDate: "2025-06-18", pickupTime: "11:00", totalPrice: 128.0, depositAmount: 70.4, statusId: 5, notes: "Sugar-free icing" },
        { id: 1033, customerId: 9, productId: 4, orderDate: "2025-02-09", pickupDate: "2025-02-15", pickupTime: "10:30", totalPrice: 105.0, depositAmount: 52.5, statusId: 5, notes: "Sugar-free icing" },
        { id: 1034, customerId: 1, productId: 4, orderDate: "2025-02-11", pickupDate: "2025-02-16", pickupTime: "11:30", totalPrice: 107.0, depositAmount: 64.2, statusId: 5, notes: "Sugar-free icing" },
        { id: 1035, customerId: 5, productId: 7, orderDate: "2025-10-09", pickupDate: "2025-10-13", pickupTime: "09:00", totalPrice: 123.0, depositAmount: 61.5, statusId: 5, notes: "Add Happy Birthday message" },
        { id: 1036, customerId: 10, productId: 6, orderDate: "2025-03-15", pickupDate: "2025-03-22", pickupTime: "12:30", totalPrice: 116.0, depositAmount: 58.0, statusId: 5, notes: "Standard decoration" },
        { id: 1037, customerId: 8, productId: 6, orderDate: "2025-02-27", pickupDate: "2025-03-02", pickupTime: "10:00", totalPrice: 147.0, depositAmount: 73.5, statusId: 5, notes: "Sugar-free icing" },
        { id: 1038, customerId: 11, productId: 5, orderDate: "2025-05-09", pickupDate: "2025-05-15", pickupTime: "09:30", totalPrice: 129.0, depositAmount: 64.5, statusId: 5, notes: "Gluten-free base" },
        { id: 1039, customerId: 1, productId: 6, orderDate: "2025-05-28", pickupDate: "2025-06-04", pickupTime: "14:00", totalPrice: 115.0, depositAmount: 69.0, statusId: 5, notes: "Customer requested extra flowers" },
        { id: 1040, customerId: 21, productId: 1, orderDate: "2025-01-22", pickupDate: "2025-01-29", pickupTime: "11:00", totalPrice: 117.0, depositAmount: 64.35, statusId: 5, notes: "Gluten-free base" },
        { id: 1041, customerId: 14, productId: 5, orderDate: "2025-03-31", pickupDate: "2025-04-06", pickupTime: "14:30", totalPrice: 137.0, depositAmount: 68.5, statusId: 5, notes: "Vintage style decoration" },
        { id: 1042, customerId: 11, productId: 1, orderDate: "2025-02-10", pickupDate: "2025-02-12", pickupTime: "14:30", totalPrice: 116.0, depositAmount: 69.6, statusId: 5, notes: "Standard decoration" },
        { id: 1043, customerId: 1, productId: 4, orderDate: "2025-10-23", pickupDate: "2025-10-27", pickupTime: "14:00", totalPrice: 85.0, depositAmount: 51.0, statusId: 5, notes: "Customer requested extra flowers" },
        { id: 1044, customerId: 1, productId: 6, orderDate: "2025-07-06", pickupDate: "2025-07-10", pickupTime: "11:00", totalPrice: 111.0, depositAmount: 61.05, statusId: 5, notes: "Standard decoration" },
        { id: 1045, customerId: 8, productId: 1, orderDate: "2025-06-21", pickupDate: "2025-06-27", pickupTime: "16:30", totalPrice: 139.0, depositAmount: 83.4, statusId: 5, notes: null },
        { id: 1046, customerId: 15, productId: 3, orderDate: "2025-03-16", pickupDate: "2025-03-21", pickupTime: "12:00", totalPrice: 122.0, depositAmount: 73.2, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1047, customerId: 4, productId: 8, orderDate: "2025-08-26", pickupDate: "2025-09-01", pickupTime: "16:30", totalPrice: 117.0, depositAmount: 64.35, statusId: 5, notes: "Sugar-free icing" },
        { id: 1048, customerId: 10, productId: 3, orderDate: "2025-01-05", pickupDate: "2025-01-09", pickupTime: "09:00", totalPrice: 113.0, depositAmount: 67.8, statusId: 5, notes: "Gluten-free base" },
        { id: 1049, customerId: 23, productId: 3, orderDate: "2025-07-02", pickupDate: "2025-07-07", pickupTime: "09:30", totalPrice: 107.0, depositAmount: 58.85, statusId: 5, notes: "Gluten-free base" },
        { id: 1050, customerId: 3, productId: 8, orderDate: "2025-03-20", pickupDate: "2025-03-23", pickupTime: "15:30", totalPrice: 149.0, depositAmount: 89.4, statusId: 5, notes: null },
        { id: 1051, customerId: 10, productId: 8, orderDate: "2025-02-11", pickupDate: "2025-02-15", pickupTime: "11:30", totalPrice: 147.0, depositAmount: 88.2, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1052, customerId: 4, productId: 8, orderDate: "2025-02-21", pickupDate: "2025-02-27", pickupTime: "16:30", totalPrice: 137.0, depositAmount: 68.5, statusId: 5, notes: "Standard decoration" },
        { id: 1053, customerId: 24, productId: 6, orderDate: "2025-03-01", pickupDate: "2025-03-06", pickupTime: "12:00", totalPrice: 117.0, depositAmount: 64.35, statusId: 5, notes: "Sugar-free icing" },
        { id: 1054, customerId: 29, productId: 3, orderDate: "2025-05-03", pickupDate: "2025-05-06", pickupTime: "16:00", totalPrice: 118.0, depositAmount: 64.9, statusId: 5, notes: null },
        { id: 1055, customerId: 20, productId: 3, orderDate: "2025-05-07", pickupDate: "2025-05-09", pickupTime: "14:30", totalPrice: 115.0, depositAmount: 57.5, statusId: 5, notes: null },
        { id: 1056, customerId: 12, productId: 2, orderDate: "2025-03-16", pickupDate: "2025-03-22", pickupTime: "13:30", totalPrice: 119.0, depositAmount: 71.4, statusId: 5, notes: "Corporate logo on top" },
        { id: 1057, customerId: 10, productId: 6, orderDate: "2025-07-21", pickupDate: "2025-07-24", pickupTime: "10:30", totalPrice: 120.0, depositAmount: 60.0, statusId: 5, notes: "Add Happy Birthday message" },
        { id: 1058, customerId: 28, productId: 3, orderDate: "2025-05-07", pickupDate: "2025-05-12", pickupTime: "15:00", totalPrice: 96.0, depositAmount: 48.0, statusId: 5, notes: "Color scheme: pink and gold" },
        { id: 1059, customerId: 11, productId: 3, orderDate: "2025-04-21", pickupDate: "2025-04-24", pickupTime: "13:00", totalPrice: 125.0, depositAmount: 68.75, statusId: 5, notes: "Add Happy Birthday message" },
        { id: 1060, customerId: 26, productId: 8, orderDate: "2025-03-02", pickupDate: "2025-03-05", pickupTime: "12:00", totalPrice: 123.0, depositAmount: 61.5, statusId: 5, notes: null },
        { id: 1061, customerId: 8, productId: 7, orderDate: "2025-02-12", pickupDate: "2025-02-15", pickupTime: "14:30", totalPrice: 98.0, depositAmount: 49.0, statusId: 5, notes: "Sugar-free icing" },
        { id: 1062, customerId: 18, productId: 1, orderDate: "2025-05-12", pickupDate: "2025-05-19", pickupTime: "13:00", totalPrice: 116.0, depositAmount: 63.8, statusId: 5, notes: "Corporate logo on top" },
        { id: 1063, customerId: 1, productId: 6, orderDate: "2025-04-17", pickupDate: "2025-04-20", pickupTime: "13:00", totalPrice: 135.0, depositAmount: 67.5, statusId: 5, notes: "Gluten-free base" },
        { id: 1064, customerId: 11, productId: 2, orderDate: "2025-10-21", pickupDate: "2025-10-27", pickupTime: "15:00", totalPrice: 120.0, depositAmount: 60.0, statusId: 5, notes: "Customer requested extra flowers" },
        { id: 1065, customerId: 20, productId: 7, orderDate: "2025-08-27", pickupDate: "2025-09-02", pickupTime: "13:30", totalPrice: 101.0, depositAmount: 50.5, statusId: 5, notes: "Sugar-free icing" },
        { id: 1066, customerId: 1, productId: 5, orderDate: "2025-08-04", pickupDate: "2025-08-10", pickupTime: "13:30", totalPrice: 113.0, depositAmount: 62.15, statusId: 5, notes: "Add Happy Birthday message" },
        { id: 1067, customerId: 17, productId: 3, orderDate: "2025-09-15", pickupDate: "2025-09-22", pickupTime: "11:30", totalPrice: 104.0, depositAmount: 57.2, statusId: 5, notes: "Gluten-free base" },
        { id: 1068, customerId: 3, productId: 3, orderDate: "2025-10-15", pickupDate: "2025-10-20", pickupTime: "16:30", totalPrice: 110.0, depositAmount: 66.0, statusId: 5, notes: "Customer requested extra flowers" },
        { id: 1069, customerId: 26, productId: 2, orderDate: "2025-02-11", pickupDate: "2025-02-14", pickupTime: "11:30", totalPrice: 142.0, depositAmount: 78.1, statusId: 5, notes: null },
        { id: 1070, customerId: 29, productId: 2, orderDate: "2025-05-21", pickupDate: "2025-05-23", pickupTime: "15:30", totalPrice: 143.0, depositAmount: 78.65, statusId: 5, notes: "Standard decoration" },
        { id: 1071, customerId: 7, productId: 6, orderDate: "2025-10-19", pickupDate: "2025-10-21", pickupTime: "11:30", totalPrice: 138.0, depositAmount: 69.0, statusId: 4, notes: null },
        { id: 1072, customerId: 26, productId: 8, orderDate: "2025-05-03", pickupDate: "2025-05-08", pickupTime: "15:00", totalPrice: 154.0, depositAmount: 84.7, statusId: 4, notes: null },
        { id: 1073, customerId: 30, productId: 2, orderDate: "2025-10-27", pickupDate: "2025-10-31", pickupTime: "13:00", totalPrice: 140.0, depositAmount: 84.0, statusId: 4, notes: "Vintage style decoration" },
        { id: 1074, customerId: 10, productId: 6, orderDate: "2025-09-25", pickupDate: "2025-09-29", pickupTime: "12:30", totalPrice: 129.0, depositAmount: 64.5, statusId: 3, notes: "Sugar-free icing" },
        { id: 1075, customerId: 10, productId: 7, orderDate: "2025-09-21", pickupDate: "2025-09-28", pickupTime: "09:30", totalPrice: 106.0, depositAmount: 63.6, statusId: 2, notes: "Add Happy Birthday message" },
        { id: 1076, customerId: 21, productId: 5, orderDate: "2025-11-14", pickupDate: "2025-11-26", pickupTime: "09:00", totalPrice: 141.0, depositAmount: 77.55, statusId: 1, notes: "Birthday celebration" },
        { id: 1077, customerId: 23, productId: 5, orderDate: "2025-11-29", pickupDate: "2025-11-28", pickupTime: "12:30", totalPrice: 140.0, depositAmount: 77.0, statusId: 1, notes: "Birthday celebration" },
        { id: 1078, customerId: 14, productId: 4, orderDate: "2025-11-29", pickupDate: "2025-11-30", pickupTime: "10:30", totalPrice: 91.0, depositAmount: 45.5, statusId: 1, notes: "Birthday celebration" },
        { id: 1079, customerId: 13, productId: 7, orderDate: "2025-11-04", pickupDate: "2025-11-29", pickupTime: "09:30", totalPrice: 99.0, depositAmount: 54.45, statusId: 1, notes: "Thanksgiving theme" },
        { id: 1080, customerId: 27, productId: 7, orderDate: "2025-11-27", pickupDate: "2025-11-26", pickupTime: "16:00", totalPrice: 104.0, depositAmount: 52.0, statusId: 1, notes: "Standard decoration" },
        { id: 1081, customerId: 5, productId: 5, orderDate: "2025-11-06", pickupDate: "2025-11-29", pickupTime: "13:00", totalPrice: 108.0, depositAmount: 64.8, statusId: 2, notes: "Holiday colors - red and green preview" },
        { id: 1082, customerId: 20, productId: 2, orderDate: "2025-11-22", pickupDate: "2025-11-29", pickupTime: "13:30", totalPrice: 136.0, depositAmount: 81.6, statusId: 2, notes: "Corporate event cake" },
        { id: 1083, customerId: 10, productId: 1, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "09:00", totalPrice: 117.0, depositAmount: 70.2, statusId: 2, notes: "Corporate event cake" },
        { id: 1084, customerId: 29, productId: 6, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "09:30", totalPrice: 137.0, depositAmount: 68.5, statusId: 2, notes: "Thanksgiving theme" },
        { id: 1085, customerId: 19, productId: 2, orderDate: "2025-11-20", pickupDate: "2025-11-29", pickupTime: "14:00", totalPrice: 131.0, depositAmount: 78.6, statusId: 3, notes: "Thanksgiving theme" },
        { id: 1086, customerId: 25, productId: 5, orderDate: "2025-11-22", pickupDate: "2025-11-30", pickupTime: "10:30", totalPrice: 141.0, depositAmount: 77.55, statusId: 3, notes: "Holiday colors - red and green preview" },
        { id: 1087, customerId: 1, productId: 3, orderDate: "2025-11-01", pickupDate: "2025-11-30", pickupTime: "11:00", totalPrice: 98.0, depositAmount: 49.0, statusId: 3, notes: "Corporate event cake" },
        { id: 1088, customerId: 22, productId: 1, orderDate: "2025-11-07", pickupDate: "2025-11-28", pickupTime: "10:00", totalPrice: 133.0, depositAmount: 79.8, statusId: 4, notes: null },
        { id: 1089, customerId: 25, productId: 1, orderDate: "2025-11-09", pickupDate: "2025-11-29", pickupTime: "12:30", totalPrice: 115.0, depositAmount: 57.5, statusId: 4, notes: "Thanksgiving theme" },
        { id: 1090, customerId: 9, productId: 6, orderDate: "2025-11-30", pickupDate: "2025-11-28", pickupTime: "15:30", totalPrice: 118.0, depositAmount: 59.0, statusId: 4, notes: "Birthday celebration" },
        { id: 1091, customerId: 22, productId: 6, orderDate: "2025-11-29", pickupDate: "2025-11-26", pickupTime: "15:00", totalPrice: 123.0, depositAmount: 61.5, statusId: 4, notes: "Corporate event cake" },
        { id: 1092, customerId: 10, productId: 2, orderDate: "2025-11-20", pickupDate: "2025-11-27", pickupTime: "14:30", totalPrice: 141.0, depositAmount: 84.6, statusId: 4, notes: "Standard decoration" },
        { id: 1093, customerId: 30, productId: 7, orderDate: "2025-11-04", pickupDate: "2025-11-07", pickupTime: "12:30", totalPrice: 117.0, depositAmount: 70.2, statusId: 5, notes: "Standard decoration" },
        { id: 1094, customerId: 23, productId: 5, orderDate: "2025-11-11", pickupDate: "2025-11-13", pickupTime: "09:00", totalPrice: 107.0, depositAmount: 58.85, statusId: 5, notes: "Anniversary special" },
        { id: 1095, customerId: 3, productId: 4, orderDate: "2025-11-10", pickupDate: "2025-11-14", pickupTime: "11:30", totalPrice: 108.0, depositAmount: 64.8, statusId: 5, notes: null },
        { id: 1096, customerId: 23, productId: 4, orderDate: "2025-11-30", pickupDate: "2025-12-03", pickupTime: "12:00", totalPrice: 101.0, depositAmount: 50.5, statusId: 5, notes: null },
        { id: 1097, customerId: 14, productId: 1, orderDate: "2025-11-19", pickupDate: "2025-11-21", pickupTime: "10:30", totalPrice: 135.0, depositAmount: 67.5, statusId: 5, notes: "Standard decoration" },
        { id: 1098, customerId: 25, productId: 1, orderDate: "2025-11-20", pickupDate: "2025-11-23", pickupTime: "12:30", totalPrice: 139.0, depositAmount: 69.5, statusId: 5, notes: null },
        { id: 1099, customerId: 29, productId: 3, orderDate: "2025-11-03", pickupDate: "2025-11-06", pickupTime: "11:00", totalPrice: 113.0, depositAmount: 56.5, statusId: 1, notes: "Customer cancelled - Refunded $56.5", isCancelled: "Y" },
        { id: 1100, customerId: 17, productId: 2, orderDate: "2025-11-08", pickupDate: "2025-11-13", pickupTime: "10:00", totalPrice: 126.0, depositAmount: 63.0, statusId: 1, notes: "Customer cancelled - Refunded $63.0", isCancelled: "Y" },
        // NEW ORDERS - NOV 23-DEC 3, 2025 (10 orders per day)
        // NOVEMBER 23, 2025 (TODAY)
        { id: 1101, customerId: 31, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "10:00", totalPrice: 125.0, depositAmount: 62.5, statusId: 1, notes: "Birthday party - pink and white theme", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Amanda" },
        { id: 1102, customerId: 32, productId: 3, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "14:00", totalPrice: 145.0, depositAmount: 72.5, statusId: 1, notes: "Anniversary celebration", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy 25th Anniversary" },
        { id: 1103, customerId: 33, productId: 5, orderDate: "2025-11-23", pickupDate: "2025-11-27", pickupTime: "11:30", totalPrice: 135.0, depositAmount: 67.5, statusId: 1, notes: "Office party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Thank You Team" },
        { id: 1104, customerId: 34, productId: 2, orderDate: "2025-11-23", pickupDate: "2025-11-25", pickupTime: "15:00", totalPrice: 155.0, depositAmount: 77.5, statusId: 2, notes: "Wedding anniversary", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Love Always" },
        { id: 1105, customerId: 35, productId: 7, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "09:30", totalPrice: 115.0, depositAmount: 57.5, statusId: 2, notes: "Baby shower", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Welcome Baby" },
        { id: 1106, customerId: 36, productId: 4, orderDate: "2025-11-23", pickupDate: "2025-11-28", pickupTime: "16:00", totalPrice: 105.0, depositAmount: 52.5, statusId: 1, notes: "Graduation party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Congratulations Graduate" },
        { id: 1107, customerId: 37, productId: 6, orderDate: "2025-11-23", pickupDate: "2025-11-27", pickupTime: "12:00", totalPrice: 140.0, depositAmount: 70.0, statusId: 2, notes: "Corporate event", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Company logo" },
        { id: 1108, customerId: 38, productId: 8, orderDate: "2025-11-23", pickupDate: "2025-11-29", pickupTime: "13:30", totalPrice: 130.0, depositAmount: 65.0, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy 40th" },
        { id: 1109, customerId: 39, productId: 1, orderDate: "2025-11-23", pickupDate: "2025-11-26", pickupTime: "10:30", totalPrice: 120.0, depositAmount: 60.0, statusId: 2, notes: "Kids party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Isabella" },
        { id: 1110, customerId: 40, productId: 9, orderDate: "2025-11-23", pickupDate: "2025-11-28", pickupTime: "14:30", totalPrice: 138.0, depositAmount: 69.0, statusId: 1, notes: "Retirement party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy Retirement" },
        // NOVEMBER 24, 2025
        { id: 1111, customerId: 41, productId: 2, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "10:00", totalPrice: 165.0, depositAmount: 82.5, statusId: 1, notes: "Corporate gala", isCancelled: "N", cakeSize: "14\"", decorationNotes: "Sterling Events logo" },
        { id: 1112, customerId: 42, productId: 5, orderDate: "2025-11-24", pickupDate: "2025-11-28", pickupTime: "11:00", totalPrice: 142.0, depositAmount: 71.0, statusId: 1, notes: "Client appreciation", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Thank You" },
        { id: 1113, customerId: 43, productId: 3, orderDate: "2025-11-24", pickupDate: "2025-11-26", pickupTime: "15:30", totalPrice: 132.0, depositAmount: 66.0, statusId: 2, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Maya" },
        { id: 1114, customerId: 44, productId: 7, orderDate: "2025-11-24", pickupDate: "2025-11-29", pickupTime: "09:00", totalPrice: 110.0, depositAmount: 55.0, statusId: 1, notes: "Family gathering", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Family Reunion 2025" },
        { id: 1115, customerId: 45, productId: 1, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "12:30", totalPrice: 128.0, depositAmount: 64.0, statusId: 2, notes: "Engagement party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Congratulations" },
        { id: 1116, customerId: 46, productId: 4, orderDate: "2025-11-24", pickupDate: "2025-11-30", pickupTime: "14:00", totalPrice: 108.0, depositAmount: 54.0, statusId: 1, notes: "Anniversary", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Anniversary" },
        { id: 1117, customerId: 47, productId: 6, orderDate: "2025-11-24", pickupDate: "2025-11-28", pickupTime: "16:30", totalPrice: 135.0, depositAmount: 67.5, statusId: 2, notes: "Sweet 16 party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Sweet 16 Mia" },
        { id: 1118, customerId: 48, productId: 8, orderDate: "2025-11-24", pickupDate: "2025-11-29", pickupTime: "10:30", totalPrice: 125.0, depositAmount: 62.5, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Ethan" },
        { id: 1119, customerId: 49, productId: 2, orderDate: "2025-11-24", pickupDate: "2025-11-27", pickupTime: "13:00", totalPrice: 150.0, depositAmount: 75.0, statusId: 2, notes: "Housewarming party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Welcome Home" },
        { id: 1120, customerId: 50, productId: 9, orderDate: "2025-11-24", pickupDate: "2025-11-30", pickupTime: "15:00", totalPrice: 140.0, depositAmount: 70.0, statusId: 1, notes: "Graduation", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Congrats Logan" },
        // NOVEMBER 25, 2025
        { id: 1121, customerId: 51, productId: 5, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "10:00", totalPrice: 175.0, depositAmount: 87.5, statusId: 1, notes: "Charity gala event", isCancelled: "N", cakeSize: "14\"", decorationNotes: "Prestige Celebrations logo" },
        { id: 1122, customerId: 52, productId: 3, orderDate: "2025-11-25", pickupDate: "2025-11-29", pickupTime: "11:30", totalPrice: 130.0, depositAmount: 65.0, statusId: 1, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Dylan" },
        { id: 1123, customerId: 53, productId: 1, orderDate: "2025-11-25", pickupDate: "2025-11-27", pickupTime: "14:00", totalPrice: 122.0, depositAmount: 61.0, statusId: 2, notes: "College celebration", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Congratulations" },
        { id: 1124, customerId: 54, productId: 7, orderDate: "2025-11-25", pickupDate: "2025-11-30", pickupTime: "09:30", totalPrice: 112.0, depositAmount: 56.0, statusId: 1, notes: "Holiday party", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Happy Holidays" },
        { id: 1125, customerId: 55, productId: 4, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "15:30", totalPrice: 102.0, depositAmount: 51.0, statusId: 2, notes: "Office party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Thank You Team" },
        { id: 1126, customerId: 56, productId: 6, orderDate: "2025-11-25", pickupDate: "2025-12-01", pickupTime: "12:00", totalPrice: 145.0, depositAmount: 72.5, statusId: 1, notes: "Anniversary", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy 10th Anniversary" },
        { id: 1127, customerId: 57, productId: 2, orderDate: "2025-11-25", pickupDate: "2025-11-29", pickupTime: "13:30", totalPrice: 148.0, depositAmount: 74.0, statusId: 2, notes: "Birthday celebration", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy 21st Chloe" },
        { id: 1128, customerId: 58, productId: 8, orderDate: "2025-11-25", pickupDate: "2025-11-30", pickupTime: "10:30", totalPrice: 133.0, depositAmount: 66.5, statusId: 1, notes: "Family reunion", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Cox Family Reunion" },
        { id: 1129, customerId: 59, productId: 9, orderDate: "2025-11-25", pickupDate: "2025-11-28", pickupTime: "16:00", totalPrice: 137.0, depositAmount: 68.5, statusId: 2, notes: "Baby shower", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Baby Girl" },
        { id: 1130, customerId: 60, productId: 1, orderDate: "2025-11-25", pickupDate: "2025-12-01", pickupTime: "14:30", totalPrice: 127.0, depositAmount: 63.5, statusId: 1, notes: "Retirement party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Retirement Jackson" },
        // NOVEMBER 26, 2025
        { id: 1131, customerId: 61, productId: 2, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "10:00", totalPrice: 168.0, depositAmount: 84.0, statusId: 1, notes: "Executive function", isCancelled: "N", cakeSize: "14\"", decorationNotes: "Executive Functions Inc logo" },
        { id: 1132, customerId: 62, productId: 4, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "11:00", totalPrice: 106.0, depositAmount: 53.0, statusId: 1, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Lucas" },
        { id: 1133, customerId: 63, productId: 5, orderDate: "2025-11-26", pickupDate: "2025-11-28", pickupTime: "15:00", totalPrice: 138.0, depositAmount: 69.0, statusId: 2, notes: "Engagement party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "She Said Yes!" },
        { id: 1134, customerId: 64, productId: 3, orderDate: "2025-11-26", pickupDate: "2025-12-01", pickupTime: "09:30", totalPrice: 134.0, depositAmount: 67.0, statusId: 1, notes: "Anniversary", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Anniversary" },
        { id: 1135, customerId: 65, productId: 7, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "12:30", totalPrice: 114.0, depositAmount: 57.0, statusId: 2, notes: "Holiday gathering", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Season's Greetings" },
        { id: 1136, customerId: 66, productId: 1, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "14:00", totalPrice: 124.0, depositAmount: 62.0, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Carter" },
        { id: 1137, customerId: 67, productId: 6, orderDate: "2025-11-26", pickupDate: "2025-12-02", pickupTime: "16:30", totalPrice: 142.0, depositAmount: 71.0, statusId: 1, notes: "Bridal shower", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Bride To Be" },
        { id: 1138, customerId: 68, productId: 8, orderDate: "2025-11-26", pickupDate: "2025-11-29", pickupTime: "10:30", totalPrice: 129.0, depositAmount: 64.5, statusId: 2, notes: "Family party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Family Celebration" },
        { id: 1139, customerId: 69, productId: 2, orderDate: "2025-11-26", pickupDate: "2025-12-01", pickupTime: "13:00", totalPrice: 152.0, depositAmount: 76.0, statusId: 1, notes: "Graduation party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Congratulations Graduate" },
        { id: 1140, customerId: 70, productId: 9, orderDate: "2025-11-26", pickupDate: "2025-11-30", pickupTime: "15:30", totalPrice: 141.0, depositAmount: 70.5, statusId: 2, notes: "Corporate event", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Company Milestone" },
        // NOVEMBER 27, 2025
        { id: 1141, customerId: 71, productId: 5, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "10:00", totalPrice: 172.0, depositAmount: 86.0, statusId: 1, notes: "Grand occasion event", isCancelled: "N", cakeSize: "14\"", decorationNotes: "Grand Occasions Ltd logo" },
        { id: 1142, customerId: 72, productId: 3, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "11:30", totalPrice: 131.0, depositAmount: 65.5, statusId: 1, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Hunter" },
        { id: 1143, customerId: 73, productId: 1, orderDate: "2025-11-27", pickupDate: "2025-11-29", pickupTime: "14:00", totalPrice: 123.0, depositAmount: 61.5, statusId: 2, notes: "Housewarming", isCancelled: "N", cakeSize: "10\"", decorationNotes: "New Home Sweet Home" },
        { id: 1144, customerId: 74, productId: 7, orderDate: "2025-11-27", pickupDate: "2025-12-02", pickupTime: "09:00", totalPrice: 111.0, depositAmount: 55.5, statusId: 1, notes: "Office party", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Team Appreciation" },
        { id: 1145, customerId: 75, productId: 4, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "15:00", totalPrice: 104.0, depositAmount: 52.0, statusId: 2, notes: "Anniversary", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy 5th Anniversary" },
        { id: 1146, customerId: 76, productId: 6, orderDate: "2025-11-27", pickupDate: "2025-12-03", pickupTime: "12:00", totalPrice: 143.0, depositAmount: 71.5, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy 30th Leo" },
        { id: 1147, customerId: 77, productId: 2, orderDate: "2025-11-27", pickupDate: "2025-12-01", pickupTime: "13:30", totalPrice: 149.0, depositAmount: 74.5, statusId: 2, notes: "Engagement party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Engaged!" },
        { id: 1148, customerId: 78, productId: 8, orderDate: "2025-11-27", pickupDate: "2025-12-02", pickupTime: "10:30", totalPrice: 132.0, depositAmount: 66.0, statusId: 1, notes: "Retirement party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Retirement" },
        { id: 1149, customerId: 79, productId: 9, orderDate: "2025-11-27", pickupDate: "2025-11-30", pickupTime: "16:00", totalPrice: 139.0, depositAmount: 69.5, statusId: 2, notes: "Baby shower", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Baby Boy" },
        { id: 1150, customerId: 80, productId: 1, orderDate: "2025-11-27", pickupDate: "2025-12-03", pickupTime: "14:30", totalPrice: 126.0, depositAmount: 63.0, statusId: 1, notes: "Graduation", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Congratulations Sebastian" },
        // NOVEMBER 28, 2025
        { id: 1151, customerId: 81, productId: 2, orderDate: "2025-11-28", pickupDate: "2025-12-01", pickupTime: "10:00", totalPrice: 170.0, depositAmount: 85.0, statusId: 1, notes: "Premier event gala", isCancelled: "N", cakeSize: "14\"", decorationNotes: "Premier Events Group logo" },
        { id: 1152, customerId: 82, productId: 4, orderDate: "2025-11-28", pickupDate: "2025-12-02", pickupTime: "11:00", totalPrice: 107.0, depositAmount: 53.5, statusId: 1, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Jack" },
        { id: 1153, customerId: 83, productId: 5, orderDate: "2025-11-28", pickupDate: "2025-11-30", pickupTime: "15:00", totalPrice: 136.0, depositAmount: 68.0, statusId: 2, notes: "Sweet 16", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Sweet 16 Aurora" },
        { id: 1154, customerId: 84, productId: 3, orderDate: "2025-11-28", pickupDate: "2025-12-03", pickupTime: "09:30", totalPrice: 133.0, depositAmount: 66.5, statusId: 1, notes: "Anniversary", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Anniversary" },
        { id: 1155, customerId: 85, productId: 7, orderDate: "2025-11-28", pickupDate: "2025-12-01", pickupTime: "12:30", totalPrice: 113.0, depositAmount: 56.5, statusId: 2, notes: "Holiday party", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Happy Holidays" },
        { id: 1156, customerId: 86, productId: 1, orderDate: "2025-11-28", pickupDate: "2025-12-02", pickupTime: "14:00", totalPrice: 121.0, depositAmount: 60.5, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Mateo" },
        { id: 1157, customerId: 87, productId: 6, orderDate: "2025-11-28", pickupDate: "2025-12-04", pickupTime: "16:30", totalPrice: 144.0, depositAmount: 72.0, statusId: 1, notes: "Graduation party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Congratulations Graduate" },
        { id: 1158, customerId: 88, productId: 8, orderDate: "2025-11-28", pickupDate: "2025-12-01", pickupTime: "10:30", totalPrice: 128.0, depositAmount: 64.0, statusId: 2, notes: "Family gathering", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Family Reunion" },
        { id: 1159, customerId: 89, productId: 2, orderDate: "2025-11-28", pickupDate: "2025-12-03", pickupTime: "13:00", totalPrice: 151.0, depositAmount: 75.5, statusId: 1, notes: "Engagement party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Engaged 2025" },
        { id: 1160, customerId: 90, productId: 9, orderDate: "2025-11-28", pickupDate: "2025-12-02", pickupTime: "15:30", totalPrice: 143.0, depositAmount: 71.5, statusId: 2, notes: "Corporate milestone", isCancelled: "N", cakeSize: "12\"", decorationNotes: "5 Years of Success" },
        // NOVEMBER 29, 2025
        { id: 1161, customerId: 91, productId: 5, orderDate: "2025-11-29", pickupDate: "2025-12-02", pickupTime: "10:00", totalPrice: 178.0, depositAmount: 89.0, statusId: 1, notes: "Luxe celebration event", isCancelled: "N", cakeSize: "14\"", decorationNotes: "Luxe Celebrations Co logo" },
        { id: 1162, customerId: 92, productId: 3, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "11:30", totalPrice: 135.0, depositAmount: 67.5, statusId: 1, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Miles" },
        { id: 1163, customerId: 93, productId: 1, orderDate: "2025-11-29", pickupDate: "2025-12-01", pickupTime: "14:00", totalPrice: 119.0, depositAmount: 59.5, statusId: 2, notes: "College graduation", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Congratulations Hannah" },
        { id: 1164, customerId: 94, productId: 7, orderDate: "2025-11-29", pickupDate: "2025-12-04", pickupTime: "09:00", totalPrice: 109.0, depositAmount: 54.5, statusId: 1, notes: "Office party", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Team Holiday Party" },
        { id: 1165, customerId: 95, productId: 4, orderDate: "2025-11-29", pickupDate: "2025-12-02", pickupTime: "15:00", totalPrice: 103.0, depositAmount: 51.5, statusId: 2, notes: "Anniversary", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy 20th Anniversary" },
        { id: 1166, customerId: 96, productId: 6, orderDate: "2025-11-29", pickupDate: "2025-12-05", pickupTime: "12:00", totalPrice: 146.0, depositAmount: 73.0, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy 50th Ezra" },
        { id: 1167, customerId: 97, productId: 2, orderDate: "2025-11-29", pickupDate: "2025-12-03", pickupTime: "13:30", totalPrice: 153.0, depositAmount: 76.5, statusId: 2, notes: "Bridal shower", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Here Comes The Bride" },
        { id: 1168, customerId: 98, productId: 8, orderDate: "2025-11-29", pickupDate: "2025-12-04", pickupTime: "10:30", totalPrice: 131.0, depositAmount: 65.5, statusId: 1, notes: "Retirement party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Retirement Waylon" },
        { id: 1169, customerId: 99, productId: 9, orderDate: "2025-11-29", pickupDate: "2025-12-02", pickupTime: "16:00", totalPrice: 142.0, depositAmount: 71.0, statusId: 2, notes: "Baby shower", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Baby Girl on the Way" },
        { id: 1170, customerId: 100, productId: 1, orderDate: "2025-11-29", pickupDate: "2025-12-05", pickupTime: "14:30", totalPrice: 129.0, depositAmount: 64.5, statusId: 1, notes: "Housewarming", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Welcome Home Colton" },
        // NOVEMBER 30, 2025
        { id: 1171, customerId: 101, productId: 2, orderDate: "2025-11-30", pickupDate: "2025-12-03", pickupTime: "10:00", totalPrice: 174.0, depositAmount: 87.0, statusId: 1, notes: "Elite function gala", isCancelled: "N", cakeSize: "14\"", decorationNotes: "Elite Functions LLC logo" },
        { id: 1172, customerId: 102, productId: 4, orderDate: "2025-11-30", pickupDate: "2025-12-04", pickupTime: "11:00", totalPrice: 105.0, depositAmount: 52.5, statusId: 1, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Axel" },
        { id: 1173, customerId: 103, productId: 5, orderDate: "2025-11-30", pickupDate: "2025-12-02", pickupTime: "15:00", totalPrice: 139.0, depositAmount: 69.5, statusId: 2, notes: "Engagement party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "She Said Yes!" },
        { id: 1174, customerId: 104, productId: 3, orderDate: "2025-11-30", pickupDate: "2025-12-05", pickupTime: "09:30", totalPrice: 136.0, depositAmount: 68.0, statusId: 1, notes: "Anniversary", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Anniversary" },
        { id: 1175, customerId: 105, productId: 7, orderDate: "2025-11-30", pickupDate: "2025-12-03", pickupTime: "12:30", totalPrice: 116.0, depositAmount: 58.0, statusId: 2, notes: "Holiday gathering", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Season's Greetings" },
        { id: 1176, customerId: 106, productId: 1, orderDate: "2025-11-30", pickupDate: "2025-12-04", pickupTime: "14:00", totalPrice: 118.0, depositAmount: 59.0, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday Maverick" },
        { id: 1177, customerId: 107, productId: 6, orderDate: "2025-11-30", pickupDate: "2025-12-06", pickupTime: "16:30", totalPrice: 147.0, depositAmount: 73.5, statusId: 1, notes: "Graduation party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Congratulations Graduate" },
        { id: 1178, customerId: 108, productId: 8, orderDate: "2025-11-30", pickupDate: "2025-12-03", pickupTime: "10:30", totalPrice: 134.0, depositAmount: 67.0, statusId: 2, notes: "Family reunion", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Garza Family Reunion" },
        { id: 1179, customerId: 109, productId: 2, orderDate: "2025-11-30", pickupDate: "2025-12-05", pickupTime: "13:00", totalPrice: 154.0, depositAmount: 77.0, statusId: 1, notes: "Corporate event", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Company Celebration" },
        { id: 1180, customerId: 110, productId: 9, orderDate: "2025-11-30", pickupDate: "2025-12-04", pickupTime: "15:30", totalPrice: 145.0, depositAmount: 72.5, statusId: 2, notes: "Retirement party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy Retirement Kai" },
        // DECEMBER 1, 2025
        { id: 1181, customerId: 31, productId: 3, orderDate: "2025-12-01", pickupDate: "2025-12-04", pickupTime: "10:00", totalPrice: 137.0, depositAmount: 68.5, statusId: 1, notes: "Holiday party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy Holidays" },
        { id: 1182, customerId: 32, productId: 5, orderDate: "2025-12-01", pickupDate: "2025-12-05", pickupTime: "11:30", totalPrice: 141.0, depositAmount: 70.5, statusId: 1, notes: "Office celebration", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Year End Party" },
        { id: 1183, customerId: 33, productId: 1, orderDate: "2025-12-01", pickupDate: "2025-12-03", pickupTime: "14:00", totalPrice: 120.0, depositAmount: 60.0, statusId: 2, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday" },
        { id: 1184, customerId: 34, productId: 7, orderDate: "2025-12-01", pickupDate: "2025-12-06", pickupTime: "09:00", totalPrice: 117.0, depositAmount: 58.5, statusId: 1, notes: "Family gathering", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Family Holiday Party" },
        { id: 1185, customerId: 35, productId: 4, orderDate: "2025-12-01", pickupDate: "2025-12-04", pickupTime: "15:00", totalPrice: 100.0, depositAmount: 50.0, statusId: 2, notes: "Anniversary", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Anniversary" },
        { id: 1186, customerId: 36, productId: 6, orderDate: "2025-12-01", pickupDate: "2025-12-07", pickupTime: "12:00", totalPrice: 148.0, depositAmount: 74.0, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy Birthday" },
        { id: 1187, customerId: 37, productId: 2, orderDate: "2025-12-01", pickupDate: "2025-12-05", pickupTime: "13:30", totalPrice: 156.0, depositAmount: 78.0, statusId: 2, notes: "Corporate event", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Company logo" },
        { id: 1188, customerId: 38, productId: 8, orderDate: "2025-12-01", pickupDate: "2025-12-06", pickupTime: "10:30", totalPrice: 127.0, depositAmount: 63.5, statusId: 1, notes: "Graduation party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Congratulations" },
        { id: 1189, customerId: 39, productId: 9, orderDate: "2025-12-01", pickupDate: "2025-12-04", pickupTime: "16:00", totalPrice: 144.0, depositAmount: 72.0, statusId: 2, notes: "Bridal shower", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Bride To Be" },
        { id: 1190, customerId: 40, productId: 1, orderDate: "2025-12-01", pickupDate: "2025-12-07", pickupTime: "14:30", totalPrice: 115.0, depositAmount: 57.5, statusId: 1, notes: "Housewarming", isCancelled: "N", cakeSize: "10\"", decorationNotes: "New Home" },
        // DECEMBER 2, 2025
        { id: 1191, customerId: 41, productId: 2, orderDate: "2025-12-02", pickupDate: "2025-12-05", pickupTime: "10:00", totalPrice: 169.0, depositAmount: 84.5, statusId: 1, notes: "Corporate gala", isCancelled: "N", cakeSize: "14\"", decorationNotes: "Sterling Events logo" },
        { id: 1192, customerId: 42, productId: 4, orderDate: "2025-12-02", pickupDate: "2025-12-06", pickupTime: "11:00", totalPrice: 108.0, depositAmount: 54.0, statusId: 1, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday" },
        { id: 1193, customerId: 43, productId: 5, orderDate: "2025-12-02", pickupDate: "2025-12-04", pickupTime: "15:00", totalPrice: 140.0, depositAmount: 70.0, statusId: 2, notes: "Holiday celebration", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy Holidays" },
        { id: 1194, customerId: 44, productId: 3, orderDate: "2025-12-02", pickupDate: "2025-12-07", pickupTime: "09:30", totalPrice: 138.0, depositAmount: 69.0, statusId: 1, notes: "Anniversary", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Anniversary" },
        { id: 1195, customerId: 45, productId: 7, orderDate: "2025-12-02", pickupDate: "2025-12-05", pickupTime: "12:30", totalPrice: 119.0, depositAmount: 59.5, statusId: 2, notes: "Office party", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Team Celebration" },
        { id: 1196, customerId: 46, productId: 1, orderDate: "2025-12-02", pickupDate: "2025-12-06", pickupTime: "14:00", totalPrice: 116.0, depositAmount: 58.0, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday" },
        { id: 1197, customerId: 47, productId: 6, orderDate: "2025-12-02", pickupDate: "2025-12-08", pickupTime: "16:30", totalPrice: 149.0, depositAmount: 74.5, statusId: 1, notes: "Engagement party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Engaged!" },
        { id: 1198, customerId: 48, productId: 8, orderDate: "2025-12-02", pickupDate: "2025-12-05", pickupTime: "10:30", totalPrice: 135.0, depositAmount: 67.5, statusId: 2, notes: "Family gathering", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Family Party" },
        { id: 1199, customerId: 49, productId: 2, orderDate: "2025-12-02", pickupDate: "2025-12-07", pickupTime: "13:00", totalPrice: 157.0, depositAmount: 78.5, statusId: 1, notes: "Retirement party", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy Retirement" },
        { id: 1200, customerId: 50, productId: 9, orderDate: "2025-12-02", pickupDate: "2025-12-06", pickupTime: "15:30", totalPrice: 146.0, depositAmount: 73.0, statusId: 2, notes: "Corporate milestone", isCancelled: "N", cakeSize: "12\"", decorationNotes: "10 Years Strong" },
        // DECEMBER 3, 2025
        { id: 1201, customerId: 51, productId: 5, orderDate: "2025-12-03", pickupDate: "2025-12-06", pickupTime: "10:00", totalPrice: 176.0, depositAmount: 88.0, statusId: 1, notes: "Prestige event", isCancelled: "N", cakeSize: "14\"", decorationNotes: "Prestige Celebrations logo" },
        { id: 1202, customerId: 52, productId: 3, orderDate: "2025-12-03", pickupDate: "2025-12-07", pickupTime: "11:30", totalPrice: 139.0, depositAmount: 69.5, statusId: 1, notes: "Birthday party", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Birthday" },
        { id: 1203, customerId: 53, productId: 1, orderDate: "2025-12-03", pickupDate: "2025-12-05", pickupTime: "14:00", totalPrice: 121.0, depositAmount: 60.5, statusId: 2, notes: "Graduation", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Congratulations" },
        { id: 1204, customerId: 54, productId: 7, orderDate: "2025-12-03", pickupDate: "2025-12-08", pickupTime: "09:00", totalPrice: 118.0, depositAmount: 59.0, statusId: 1, notes: "Holiday party", isCancelled: "N", cakeSize: "8\"", decorationNotes: "Season's Greetings" },
        { id: 1205, customerId: 55, productId: 4, orderDate: "2025-12-03", pickupDate: "2025-12-06", pickupTime: "15:00", totalPrice: 101.0, depositAmount: 50.5, statusId: 2, notes: "Anniversary", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Happy Anniversary" },
        { id: 1206, customerId: 56, productId: 6, orderDate: "2025-12-03", pickupDate: "2025-12-09", pickupTime: "12:00", totalPrice: 150.0, depositAmount: 75.0, statusId: 1, notes: "Birthday celebration", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Happy Birthday" },
        { id: 1207, customerId: 57, productId: 2, orderDate: "2025-12-03", pickupDate: "2025-12-07", pickupTime: "13:30", totalPrice: 158.0, depositAmount: 79.0, statusId: 2, notes: "Bridal shower", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Bride To Be" },
        { id: 1208, customerId: 58, productId: 8, orderDate: "2025-12-03", pickupDate: "2025-12-08", pickupTime: "10:30", totalPrice: 136.0, depositAmount: 68.0, statusId: 1, notes: "Baby shower", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Baby on the Way" },
        { id: 1209, customerId: 59, productId: 9, orderDate: "2025-12-03", pickupDate: "2025-12-06", pickupTime: "16:00", totalPrice: 147.0, depositAmount: 73.5, statusId: 2, notes: "Corporate event", isCancelled: "N", cakeSize: "12\"", decorationNotes: "Company Party" },
        { id: 1210, customerId: 60, productId: 1, orderDate: "2025-12-03", pickupDate: "2025-12-09", pickupTime: "14:30", totalPrice: 122.0, depositAmount: 61.0, statusId: 1, notes: "Housewarming", isCancelled: "N", cakeSize: "10\"", decorationNotes: "Welcome Home" },
        // --- Mock Cancelled by Baker ---
        { id: 9998, customerId: 7, productId: 2, orderDate: "2025-11-21", pickupDate: "2025-11-23", pickupTime: "10:00", totalPrice: 88.0, depositAmount: 44.0, statusId: 1, notes: "Cancelled by baker due to kitchen issue; customer notified and refund issued.", isCancelled: "Y", cakeSize: "10\"", decorationNotes: "N/A" },
        // --- Mock Cancelled by Decorator ---
        { id: 9999, customerId: 12, productId: 3, orderDate: "2025-11-21", pickupDate: "2025-11-25", pickupTime: "12:00", totalPrice: 120.0, depositAmount: 60.0, statusId: 3, notes: "Decorator cancelled - unable to complete custom decoration; full refund processed.", isCancelled: "Y", cakeSize: "8\"", decorationNotes: "Cancelled due to decoration issue" }
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

    getCustomer: function(customerId) {
        return this.customers.find(c => c.id === customerId);
    },

    getProduct: function(productId) {
        return this.products.find(p => p.id === productId);
    },

    getProductName: function(productId) {
        const product = this.products.find(p => p.id === productId);
        return product ? product.name : "Unknown Product";
    },

    getStatusDescription: function(statusId) {
        const status = this.orderStatuses.find(s => s.id === statusId);
        return status ? status.description : "Unknown";
    },

    // CRUD Operations for Orders
    updateOrder: function(orderId, updates) {
        const orderIndex = this.orders.findIndex(o => o.id === orderId);
        if (orderIndex === -1) return false;
        
        // Update order with new data
        this.orders[orderIndex] = {
            ...this.orders[orderIndex],
            ...updates
        };
        return true;
    },

    cancelOrder: function(orderId) {
        const orderIndex = this.orders.findIndex(o => o.id === orderId);
        if (orderIndex === -1) return false;
        
        // Soft delete - mark as cancelled
        this.orders[orderIndex].isCancelled = 'Y';
        this.orders[orderIndex].statusId = 6; // You could add a "Cancelled" status
        return true;
    },

    // CRUD Operations for Customers
    updateCustomer: function(customerId, updates) {
        const customerIndex = this.customers.findIndex(c => c.id === customerId);
        if (customerIndex === -1) return false;
        
        // Update customer with new data
        this.customers[customerIndex] = {
            ...this.customers[customerIndex],
            ...updates
        };
        return true;
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
