use agg;
db.zips.aggregate([
   {$match : {$or: [{"state" : "CA"} , {"state" : "NY"}]}
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
		  
	{$match: 	{ "popultn" : 	  	{ $gt: 25000}}}		 

	
	
	,	
	{$group : 
		{
			_id : {"a" : "a"}
			, 'avg_pop' :  ({$avg : "$popultn"})	
		}
	}
	,
	{$project : {
		"_id" : 0, "avg_pop" : {$ceil:"$avg_pop"}
		
	}}

])

