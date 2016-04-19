/*
answer w5.3 WIP
Total people living in rural areas (where city is a number)

Add column with first letter of city
Check if its a number
Remove other entries
Total it up
 /learn/mongo/mongoDbAcademic/w5/hw5-4.js
 
 ,{$match: {first_char: {$in: ["1", "2"]}}}
*/


use agg2;
db.zips.aggregate([
	{$project : {_id:1, pop:1,first_char: {$substr : ["$city",0,1]}}	
	}	
	,{$match: {first_char: {$in: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}}}
	,{$group : {
		_id: {
	     "all" : "rural"}
		 ,totalRural  :{$sum:"$pop"}	 
	}}	
  ]);