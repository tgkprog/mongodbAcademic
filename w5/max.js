//use zips
db.zips.aggregate([
    {$group:
     {
	 _id: {
	     "state":"$state"
	 },
	 pop:{$max:"$_id"}
     }
    }


,
{$project : {"_id": "$_id.state", "pop" : 1  }}

 ,
    {$sort : {"_id" : -1}}
])

