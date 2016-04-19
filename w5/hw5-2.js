use agg;
db.zips.aggregate([
   {$match : {$or: [{"state" : "CT"} , {"state" : "NJ"}]}
   }
,
  {$group:
     {
	 _id: {
	     "state" : "$state", "city" : "$city"
	 },
	 popultn:{$sum:"$pop"}
     }
    },	  
		  
	{$match: 	{ "popultn" : 	  	{ $gt: 2500}}}		  
])




db.zips.aggregate([
   {$match : {$or: [{"state" : "CT"} , {"state" : "NJ"}]}
   }
,
  {$group:
     {
	 _id: {
	     "state" : "$state", "city" : "$city"
	 },
	 popultn:{$sum:"$pop"}
     }
    }
	
	,{$match:{"popultn": 11674}} 
])




db.zips.aggregate([
  {$match:
  {pop:
	  
  { $gt: {"$pop" : 999250}}}}
])


db.zips.aggregate([
  {$match:
  {pop:
	  
  { $gt: 250}}}
])


db.abc1.aggregate([   {$match:   { c:      { "$gt": {"$c" : 22}}}} ])




db.zips.aggregate([
   {$group: {
	   _id : {
	   "state", "city"},
	   pops : {$sum : "$pop"}
	   }}
])


db.zips.aggregate([
    {$group:
     {
	 _id: {
	     "state" : "$state", "city" : "$city"
	 },
	 popultn:{$sum:"$pop"}
     }
    }
])

db.zips.aggregate([
   {$match : {"state" : {$or: [{$eq: ["$state", "CT"]}, {$eq: ["$state", "NJ"}]]}}}
])


db.zips.aggregate([
   {$match : {"state" : "CT"}}
])


db.zips.aggregate([
   {$match : {$or: [{"state" : "CT"} , {"state" : "NJ"}]}
   }
])



   {$unwind: "$sizes"},
    {$unwind: "$colors"},
    /* create the color array */
    {$group:
     {
	'_id': {name:"$name",size:"$sizes"},
	 'colors': {$push: "$colors"},
     }
    },
    /* create the size array */
    {$group:
     {
	'_id': {'name':"$_id.name",
		'colors' : "$colors"},
	 'sizes': {$push: "$_id.size"}
     }
    },
    /* reshape for beauty */
    {$project:
     {
	 _id:0,
	 "name":"$_id.name",
	 "sizes":1,
	 "colors": "$_id.colors"
     }
    }
])

*/