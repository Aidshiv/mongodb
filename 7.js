// step 1:

use vacationRentals
db.createCollection("listingsAndReviews")

// step 2:

db.listingsAndReviews.insertMany([
  {
    listing_url: "http://www.example.com/listing/123456",
    name: "Beautiful Apartment",
    address: {
      street: "123 Main Street",
      suburb: "Central",
      city: "Metropolis",
      country: "Wonderland"
    },
    host: {
      name: "Alice",
      picture_url: "http://www.example.com/images/host/host123.jpg"
    }
  },
  {
    listing_url: "http://www.example.com/listing/654321",
    name: "Cozy Cottage",
    address: {
      street: "456 Another St",
      suburb: "North",
      city: "Smallville",
      country: "Wonderland"
    },
    host: {
      name: "Bob",
      picture_url: ""
    }
  },
  {
    listing_url: "http://www.example.com/listing/789012",
    name: "Modern Condo",
    address: {
      street: "789 Side Road",
      suburb: "East",
      city: "Gotham",
      country: "Wonderland"
    },
    host: {
      name: "Charlie",
      picture_url: "http://www.example.com/images/host/host789.jpg"
    }
  }
])

// step 3:

db.listingsAndReviews.find(
  {
    "host.picture_url": { $exists: true, $ne: "" }
  },
  {
    listing_url: 1,
    name: 1,
    address: 1,
    "host.picture_url": 1
  }
).pretty()

// ********************7b*****************

// step 1:
use ecommerce
db.createCollection("products")

// step 2 :

db.products.insertMany([
  {
    product_id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    reviews: [
      { user: "Alice", rating: 5, comment: "Excellent!" },
      { user: "Bob", rating: 4, comment: "Very good" },
      { user: "Charlie", rating: 3, comment: "Average" }
    ]
  },
  {
    product_id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 800,
    reviews: [
      { user: "Dave", rating: 4, comment: "Good phone" },
      { user: "Eve", rating: 2, comment: "Not satisfied" },
      { user: "Frank", rating: 5, comment: "Amazing!" }
    ]
  },
  {
    product_id: 3,
    name: "Headphones",
    category: "Accessories",
    price: 150,
    reviews: [
      { user: "Grace", rating: 5, comment: "Great sound" },
      { user: "Heidi", rating: 3, comment: "Okay" }
    ]
  }
])

// step 3:

db.products.aggregate([
  {
    $unwind: "$reviews"
  },
  {
    $group: {
      _id: "$name",
      totalReviews: { $sum: 1 },
      averageRating: { $avg: "$reviews.rating" },
      comments: { $push: "$reviews.comment" }
    }
  },
  {
    $project: {
      _id: 0,
      product: "$_id",
      totalReviews: 1,
      averageRating: 1,
      comments: 1
    }
  }
]).pretty()

