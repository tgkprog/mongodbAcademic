
 db.m2.aggregate([
      {$unwind: "$headers.to"},
      {$group :
 	 		{
 	 			_id : {"to_group" : "$headers.Message-ID"}
 	 			, 'from' :  ("$from")
 	 			, 'tos' :  {$addToSet : "$to"}
 	 		}
 	},
 	{$unwind: "$tos"},
 	{$group :		 		{
 		 			_id : {"to_group" : "$headers.Message-ID", "from" : "$from", "to", "$to"}
 		 			, 'from' :  ("$from")
 		 			, 'to' :  ("$tos")
 		 			, 'tosCnt' :   { $sum: 1 }
 		 		}
 	}
      ])

