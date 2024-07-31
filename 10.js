var result = db.catalog.aggregate([
{ $match: { year: 2017 } },
{ $group: { _id: "$genre", avgRating: { $avg: "$rating" } } },
{ $sort: { avgRating: -1 } },
{ $project: { _id: 0, genre: "$_id", avgRating: 1 } },
{ $limit: 5 }
]).toArray();
print("Top 5 rated movie genres with their average rating:");
printjson(result);
