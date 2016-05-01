print("Sg34");
print("a");
 	

db = db.getSiblingDB('enron')


var t = db.messages.aggregate([      {$unwind: "$headers.To"}      
 , {$group :
 	 		{
			_id : {"msg_id" : "$headers.Message-ID", "from" : "$headers.From" }
 	 			, 'tos' :  {$addToSet : "$headers.To"}
 	 		}
 	}
	
	,{$unwind: "$tos"}      
	
	, {$group :
 	 		{
			_id : {"from" : "$_id.from", "to" : "$tos" }
 	 			, 'cnt' :  {$sum : 1}
 	 		}
 	}
	
	, {$sort : {"cnt" : -1}}
	
	, {$limit : 3}

 ]);
 
 
while ( t.hasNext() ) {
	 printjson( t.next() );
}

t = db.messages.find().count();
printjson("messages c " + t );
print("bh " +  db);

/*

, "from" : {"$from"}*/