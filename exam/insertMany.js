

db=db.getSiblingDB("test");
db.stuff.drop();
print("DRopped")
	var aa  = Math.floor(Math.random()* 30000);
	var bb  = Math.floor(Math.random()* 25000);
	var cc  = Math.floor(Math.random()* 25000);
	var record = {_id : i,'a': aa, 'b': bb, 'c':cc}
	var i = 0;
	
for (i = 0; i < 1500; i++) {

   	  aa  = Math.floor(Math.random()* 30000);
	  bb  = Math.floor(Math.random()* 25000);
	  cc  = Math.floor(Math.random()* 25000);
	  record = {_id : i,'a': aa, 'b': bb, 'c':cc}

	record = {_id : i,'a': aa, 'b': bb, 'c':cc};
	db.stuff.insert(record);

   

}


print("made last " + record + " " + i)

db.stuff.createIndex({"a" : 1, "b" : 1})
db.stuff.createIndex({"a" : 1, "c" : 1})

db.stuff.createIndex({"c" : 1})

db.stuff.createIndex({"a" : 1, "b" : 1, "c" : -1})

/*
db.stuff.find({'a':{'$lt':10000}, 'b':{'$gt': 5000}}, {'a':1, 'c':1}).sort({'c':-1}).explain()

db.find({_id:1})
db.stuff.find({_id:1}).explain()

db.stuff.find({'_id':{'$lt':5}}).sort({'c':-1}).explain()
*/