/*Experiment 3:
a. Execute query selectors (comparison selectors, logical selectors):
b. Execute query selectors (Geospatial selectors, Bitwise selectors):*/

***************comparison selectors*********************
create a databse or use any already created database

db.createCollection("companyDB")

show collections

use companyDB



db.companyDB.insertMany([
  { name: "Alice", age: 30, department: "HR", salary: 50000, joinDate: new Date("2015-01-15") },
  { name: "Bob", age: 24, department: "Engineering", salary: 70000, joinDate: new Date("2019-03-10") },
  { name: "Charlie", age: 29, department: "Engineering", salary: 75000, joinDate: new Date("2017-06-23") },
  { name: "David", age: 35, department: "Marketing", salary: 60000, joinDate: new Date("2014-11-01") },
  { name: "Eve", age: 28, department: "Finance", salary: 80000, joinDate: new Date("2018-08-19") }
])

//$eq (Equal)
db.Employees.find({ department: { $eq: "Engineering" } }).pretty()
//$ne (Not Equal)
db.Employees.find({ department: { $ne: "HR" } }).pretty()
//$gt (Greater Than)
db.Employees.find({ age: { $gt: 30 } }).pretty()
$lt (Less Than)
db.Employees.find({ salary: { $lt: 70000 } }).pretty()
//$gte (Greater Than or Equal)
db.Employees.find({ joinDate: { $gte: new Date("2018-01-01") } }).pretty()
//$lte (Less Than or Equal)
db.Employees.find({ age: { $lte: 28 } }).pretty()


************logical selectors*****************
//$and (Logical AND)
db.Employees.find({ 
  $and: [
    { department: "Engineering" },
    { salary: { $gt: 70000 } }
  ] 
}).pretty()


//$or (Logical OR)
db.Employees.find({ 
  $or: [
    { department: "HR" },
    { salary: { $lt: 60000 } }
  ] 
}).pretty()


//$not (Logical NOT)
db.Employees.find({ 
  department: { 
    $not: { $eq: "Engineering" } 
  } 
}).pretty()


//$nor (Logical NOR)
db.Employees.find({ 
  $nor: [
    { department: "HR" },
    { salary: { $gt: 75000 } }
  ] 
}).pretty()


****************3B********Geospatial selectors**********************
db.createCollection("Places")


db.Places.insertMany([
  { name: "Central Park", location: { type: "Point", coordinates: [-73.9654, 40.7829] } },
  { name: "Times Square", location: { type: "Point", coordinates: [-73.9851, 40.7580] } },
  { name: "Brooklyn Bridge", location: { type: "Point", coordinates: [-73.9969, 40.7061] } },
  { name: "Empire State Building", location: { type: "Point", coordinates: [-73.9857, 40.7488] } },
  { name: "Statue of Liberty", location: { type: "Point", coordinates: [-74.0445, 40.6892] } }
])



db.Places.createIndex({ location: "2dsphere" })


//$near (Find places near a certain point)
db.Places.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.9851, 40.7580]
      },
      $maxDistance: 5000 // distance in meters
    }
  }
}).pretty()


//$geoWithin (Find places within a specific area)
db.Places.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-70.016, 35.715],
            [-74.014, 40.717],
            [-73.990, 40.730],
            [-73.990, 40.715],
            [-70.016, 35.715]
          ]
        ]
      }
    }
  }
}).pretty()


***********3B***** bitwise ***************
db.createCollection("Devices")

db.Devices.insertMany([{ name: "Device A", status: 5 },{ name: "Device B", status: 3 },{ name: "Device C", status: 12 },{ name: "Device E", status: 7 }])

//$bitsAnySet (Find documents where any of the bits are set)
db.Devices.find({status: { $bitsAllSet: [0, 2] }}).pretty()

//$bitsAllClear (Find documents where all bits are clear)
db.Devices.find({status: { $bitsAnySet: [1] }}).pretty()

//$bitsAllClear (Find documents where all bits are clear)
db.Devices.find({status: { $bitsAllClear: [1, 3] }}).pretty()

//$bitsAnyClear (Find documents where any of the bits are clear)
db.Devices.find({status: { $bitsAnyClear: [0] }}).pretty()
