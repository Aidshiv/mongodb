
result = db.catalog.aggregate([
{$match:{year :2017}}, 
{$group:{_id: "$genre", avgRating:{$avg: "$rating"}}}, 
{$sort: {avgRating:-1}},
{$project:{year:"$year", avgRating:1, genre:1} }, 
{$limit:5} ]).toArray()
print("Top 5 rated movie genres with their average rating")
printjson(result)


//Adding another stage using $skip

result2 = db.catalog.aggregate([
{$match:{year :2017}}, 
{$group:{_id: "$genre", avgRating:{$avg: "$rating"}}}, 
{$sort: {avgRating:-1}},
{$project:{year:"$year", avgRating:1, genre:1} }, 
{$limit:7},
{$skip:2} ]).toArray()
print("Top 7 rated movie genres with their average rating with he firsttwo skipped")
printjson(result2)
