/*unwind scores per class, stu
remove quiz

avg of each student per class (total / no-of-marks-for-that-student-class

avg of each class = total of avg of that class/number-student-that-class
 answer w5.3 Done
*/


use agg;
db.grades.aggregate([

	{$unwind : "$scores"}
	,{$match : {"scores.type" : {$ne : "quiz"}}}
	,{$group : {
		_id: {
	     "class" : "$class_id", "student" : "$student_id"}
		 ,studentAvgMark  :{$avg:"$scores.score"}
	 
	}}
	
	,{$group : {
		_id: {
	     "class" : "$_id.class"
		 }
		 ,avgMark  :{$avg:"$studentAvgMark"}
	 
	}}	
	,{$sort : {"avgMark": -1}}
	,{$limit : 10}
  ])
  
  /**
  Limit 1 would work too, kept 10 to see more results
  
  { "_id" : { "$oid" : "50b59cd75bed76f46522c34e" }, "student_id" : 0, "class_id" : 2, "scores" : [ { "type" : "exam", "score" : 57.92947112575566 }, { "type" : "quiz", "score" : 21.24542588206755 }, {
	  
	  
   {$match : {$or: [{"state" : "CA"} , {"state" : "NY"}]}
   },
  {$group:
     {
	 _id: {
	     "state" : "$state", "city" : "$city"
	 },
	 popultn:{$sum:"$pop"}
     }
    },	  
		  
	{$match: 	{ "popultn" : 	  	{ $gt: 25000}}},	
	{$group : 
		{
			_id : {"Of_2_states" : "CA_NY"}
			, 'avg_pop' :  ({$avg : "$popultn"})	
		}
	},
	{$project : {
		"_id" : 0, "avg_pop" : {$ceil:"$avg_pop"}
		
	}}

  */
