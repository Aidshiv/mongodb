// 9.  step 1: import both files from the data set given to a collection name catalog already created.

db.createCollection("catalog")
db.catalog.createIndex({ name: "text", genre: "text" })   
db.catalog.countDocuments()
db.catalog.find({$text: {$search:"maga"}})
db.catalog.createIndex({ name: "text", description: "text" })
db.catalog.getIndexes()

// **************9b*********************
db.catalog.find({$text:{$search:"crime romance -action"}, year:2021})  //to exclude action based movies
db.catalog.find({$text:{$search:"maga -da maga"}})
 
