// step 1:
use restaurantDB

// step 2:

// Insert sample documents into the restaurants collection
db.restaurants.insertMany([
  {
    name: "Biryani House",
    cuisine: "Indian",
    location: "Downtown",
    reviews: [
      { user: "Aarav", rating: 5, comment: "Amazing biryani!" },
      { user: "Bhavana", rating: 4, comment: "Great place!" }
    ],
    contact: { phone: "1234567890", email: "contact@biryanihouse.com" }
  },
  {
    name: "Curry Palace",
    cuisine: "Indian",
    location: "Downtown",
    reviews: [
      { user: "Gaurav", rating: 4, comment: "Spicy and tasty!" },
      { user: "Harini", rating: 5, comment: "Best curry in town!" }
    ],
    contact: { phone: "0987654321", email: "contact@currypalace.com" }
  },
  {
    name: "Taco Stand",
    cuisine: "Mexican",
    location: "Downtown",
    reviews: [
      { user: "Ishaan", rating: 5, comment: "Fantastic tacos!" },
      { user: "Jaya", rating: 4, comment: "Very authentic" }
    ],
    contact: { phone: "1122334455", email: "contact@tacostand.com" }
  }
])

// step 3:

db.restaurants.createIndex({ "contact.email": 1 }, { unique: true })
// step 4:

db.restaurants.createIndex({ location: 1 }, { sparse: true })
// step 5:

db.restaurants.createIndex({ name: 1, location: 1 })
// step 6:

db.restaurants.createIndex({ reviews: 1 })
// step 7:

db.restaurants.getIndexes()

// *************************8B Stocks******************

// 8 b. import the document provided into collection named stocks created by you.
//    step 1:  
db.stocks.find({}).sort({location: -1}).limit(1).explain("executionStats").executionStats.totalDocsExamined
// output: 731290

//    step 2: 
db.stocks.find({}).sort({location: -1}).limit(1).explain("executionStats").executionStats.totalDocsExamined.executionTimeMillis
// output: 423


//    step 3: 
db.stocks.createIndex({location: 1}) 
// output : location_1

//    step 4:  
db.stocks.find({}).sort({location: -1}).limit(1).explain("executionStats").executionStats.totalDocsExamined
//    output : 1 

//    step 5:  
db.values.find({}).sort({location: -1}).limit(1).explain("executionStats").executionStats.executionTimeMillis
//   output : 0
// takes 0 ms to execute.
