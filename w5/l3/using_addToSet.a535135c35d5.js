use agg
db.products.aggregate([
    {$group:
     {
	 _id: {
	     "maker":"$manufacturer"
	 },
	 categories:{$addToSet:"$category"}
     }
    }
])


db.zips.aggregate([
{"$group":{
	"_id":"$city", "postal_codes":{"$addToSet":"$_id"}}}])

db.zips.aggregate([
    {$group:
     {
	 _id: {
	     "$city"
	 },
	 "postal_codes":{$addToSet:"$_id"}
     }
    }
])

db.zips.aggregate([{"$group":{"_id":"$city", "postal_codes":{"$addToSet":"$_id"}}}])