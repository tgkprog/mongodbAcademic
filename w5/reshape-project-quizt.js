{
	"city" : "ACMAR",
	"loc" : [
		-86.51557,
		33.584132
	],
	"pop" : 6055,
	"state" : "AL",
	"_id" : "35004"
}

{
	"city" : "acmar",
	"pop" : 6055,
	"state" : "AL",
	"zip" : "35004"
}

use agg
db.zips.aggregate([
    {$project:
     {
	 _id:0,
	 'city': {$toLower:"$city"},
	 'pop': 1,
	 'state': 1,
	 'zip':'$_id'
     }
    }
])


