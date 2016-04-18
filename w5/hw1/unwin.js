use blog;

{$group:
     {
	 _id: {
	     "maker":"$manufacturer"
	 },
	 sum_prices:{$sum:"$price"}
     }
    }


db.posts.aggregate([
    {$unwind: "$comments"},

    {$group:
     {
	_id: "$comments.author"
	 , "commentCnt":{$sum:1}
     }
    }
    ,
    {"$sort" : {"commentCnt" : -1}}
    ,
    {"$limit" : 1}
])


,
    {"$sort", {"commentCnt" : -1}}

db.posts.aggregate([
    {$unwind: "$comments"}


    ]);

db.posts.aggregate([
    {$unwind: "$comments"}
    , {$limit: 1}

    ]);