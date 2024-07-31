// 9.  step 1: import both files from the data set given to a collection name catalog already created.

    // step 2: 
    db.catalog.createIndex({ name: "text", genre: "text" })   
   
// output: name_text_genre_text


    // step 3:
    db.catalog.countDocuments()
    //    output:    1400

    // step 4:
    db.catalog.find({$text: {$search:"maga"}})
 
// output: 

// [
//   {
//     _id: ObjectId('66a8be7853a113af1e3db315'),
//     name: 'Jayammana Maga',
//     year: 2013,
//     duration: '139 min',
//     rating: 7.1,
//     genre: 'Drama            ',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db24c'),
//     name: 'Rajannana Maga',
//     year: 2018,
//     duration: '143 min',
//     rating: 7.8,
//     genre: 'Action            ',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db4bd'),
//     name: 'Thayige thakka maga',
//     year: 2018,
//     duration: '147 min',
//     rating: 5.4,
//     genre: 'Drama            ',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db369'),
//     name: 'Bhootayyana Maga Ayyu',
//     year: 1974,
//     duration: '155 min',
//     rating: 8.3,
//     genre: 'Drama            ',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db302'),
//     name: 'Jaga Mechida Maga',
//     year: 1972,
//     duration: '153 min',
//     rating: 8.2,
//     genre: 'Drama            ',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db2e4'),
//     name: 'Daari Tappida Maga',
//     year: 1975,
//     duration: '138 min',
//     rating: 7.6,
//     genre: 'Crime, Drama            ',
//     lang: 'kannada'
//   }
// ]
// step 5:
db.catalog.createIndex({ name: "text", description: "text" })

// step 6:
db.catalog.getIndexes()


// //output :
// [
//   { v: 2, key: { _id: 1 }, name: '_id_' },
//   {
//     v: 2,
//     key: { _fts: 'text', _ftsx: 1 },
//     name: 'name_text_genre_text',
//     weights: { genre: 1, name: 1 },
//     default_language: 'english',
//     language_override: 'language',
//     textIndexVersion: 3
//   }
// ]

// **************9b*********************
// step 7:  

db.catalog.find({$text:{$search:"crime romance -action"}, year:2021})  //to exclude action based movies


//   output: 
// [
//   {
//     _id: ObjectId('66a8be7853a113af1e3db27b'),
//     name: 'Raktha Gulabi',
//     year: 2021,
//     duration: '132 min',
//     rating: 9.4,
//     genre: 'Crime',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db356'),
//     name: 'Laddu',
//     year: 2021,
//     duration: '127 min',
//     rating: 8.6,
//     genre: 'Comedy, Romance',
//     lang: 'kannada'
//   }
// ]

// step 8:  
db.catalog.find({$text:{$search:"maga -da maga"}})
 
// output:
// [
//   {
//     _id: ObjectId('66a8be7853a113af1e3db315'),
//     name: 'Jayammana Maga',
//     year: 2013,
//     duration: '139 min',
//     rating: 7.1,
//     genre: 'Drama',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db24c'),
//     name: 'Rajannana Maga',
//     year: 2018,
//     duration: '143 min',
//     rating: 7.8,
//     genre: 'Action',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db4bd'),
//     name: 'Thayige thakka maga',
//     year: 2018,
//     duration: '147 min',
//     rating: 5.4,
//     genre: 'Drama',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db369'),
//     name: 'Bhootayyana Maga Ayyu',
//     year: 1974,
//     duration: '155 min',
//     rating: 8.3,
//     genre: 'Drama',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db302'),
//     name: 'Jaga Mechida Maga',
//     year: 1972,
//     duration: '153 min',
//     rating: 8.2,
//     genre: 'Drama ',
//     lang: 'kannada'
//   },
//   {
//     _id: ObjectId('66a8be7853a113af1e3db2e4'),
//     name: 'Daari Tappida Maga',
//     year: 1975,
//     duration: '138 min',
//     rating: 7.6,
//     genre: 'Crime, Drama',
//     lang: 'kannada'
//   }
// ]
