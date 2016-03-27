db.fav.find(
{
	$or: [
		{name:{$in : ["rfa", "sue", "radhar"]}},
		{favs :{ $in : ["apple"]} }
	]
}

).pretty()

db.fav.find(
	favs : {$all : ["apple", "palak"}
	).pretty()



db.fav.find({
	name : "sue"}
	).pretty()


db.fav.find({
$or:[
	{$and :  [{name: "radha"},{favs:{$all:["apple", "palak"]}}]},
	{name : "randomNotThere_Name"}
]
}).pretty()

db.fav.find({
$or:[
	{$and :  [{name: "radha"},{favs:{$all:["apple", "palak"]}}]},
	{name : "sue"}
]
}).pretty()




//use school;
c1 = db.students.find(); null;

while(c1.hasNext()){
	 s2 = c1.next(); null;
	 var sci =0; var sc = 9999;
	 for(i=0; i  < s2.scores.length; i++ /*not sorted so visit all*/){
		 if(s2.scores[i].score < sc && s2.scores[i].type == "homework" ){
			 sci=i;sc=s2.scores[i].score
		}
	}
	s2.scores.splice(sci,1);
	db.students.update({_id: s2._id}, s2)
}



//