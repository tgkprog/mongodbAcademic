 use enron;
 db.messages.find().pretty();

 db.messages.find({'headers.From' : 'andrew.fastow@enron.com', 'headers.To' : 'john.lavorato@enron.com'}).pretty();

 db.messages.find({'headers.From' : 'andrew.fastow@enron.com', 'headers.To' : 'john.lavorato@enron.com'}).count()


  mongoimport --collection m1 --db enron --file "D:\learn\mongo\w6Enron\dump\enron\read1o.js"

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