Experiment 1:
a. Illustration of Where Clause, AND, OR operations in MongoDB:
b. Execute the Commands of MongoDB and operations in MongoDB:

//step 1 (a)
use experiment1

db.createCollection("people")

//step2
show dbs
// Show collections
show collections

//step 3 
db.people.insertMany([
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 28, gender: "female" },
  { name: "Bob", age: 40, gender: "male" },
  { name: "Alice", age: 32, gender: "female" }
])

//step 4
db.people.find({ $and: [{ age: { $gt: 25 } }, { gender: "male" }] })

db.people.find({ $or: [{ age: { $gt: 30 } }, { gender: "female" }] })


//step 5 (b)
db.people.insertOne({ name: "Michael", age: 35, gender: "male" })

db.people.find({ age: { $gt: 30 } })

db.people.updateOne({ name: "John" }, { $set: { age: 40 } })

db.people.deleteOne({ name: "John" })

db.people.find({}, { name: 1, age: 1 })
