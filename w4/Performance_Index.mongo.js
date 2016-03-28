db.stuff.insert({'thing':'apple'});
db.stuff.insert({'thing':'pear'});
db.stuff.insert({'thing':'apple'});

db.stuff.find( );

 db.stuff.createIndex({thing:1})
 db.stuff.find( );
 db.stuff.dropIndex({thing:1})


db.stuff.createIndex({thing:1}, {unique:1})


db.stuff.remove({'thing':'apple'},{justOne: true} )
//WriteResult({ "nRemoved" : 1 })
//now can create
db.stuff.createIndex({thing:1}, {unique:1})
/* {
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}*/

db.fav.find(
{
	$or: [
		{name:{$in : ["rfa", "sue", "radhar"]}},
		{favs :{ $in : ["apple"]} }
	]
}





date //errors but shows time
db.students.explain(true).find({student_id: 5})
date


db.students.createIndex({student_id:1})

date
 db.students.explain(true).find({student_id: 5})
 date
 //faster now

 db.students.createIndex({'scores.score':1})


 db.students.explain(true).find({ 'score.score': {'$gt':99}})


db.students.find({'scores' : {$elemMatch : {type : 'exam', score:{$gt : 89.4}} }}).count()
1058840//answer

db.students.explain(true).find({'scores' : {$elemMatch : {type : 'exam', score:{$gt : 89.4}} }})




