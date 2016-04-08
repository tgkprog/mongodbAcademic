use t

db.aq.insert({m:09,k :9990})

for(var i=1199 ; i< 45777;i++){db.aq.insert({m:(i+111) ,k:i })}
//WriteResult({ "nInserted" : 1 }) inserts many but reply is this

//now dont need to use null to stop the cursor from being consumed as soon as it is formed.
 var g=db.aq.find();
 g.next()

var e= db.aq.explain();

e.help()
 e.find({m:210});

 db.aq.createIndex ({m : 1});

 db.aq.createIndex ({m : 1,k : 1}, {unique:true});
 db.aq.createIndex ({k : 1});


 e.find({m: 210, k: 1200});

 e.find({m: 210});

 e.find({m:{"$lt" : 210}, k:{"$lt" : 1200}});
 db.aq.createIndex ({n : 1}, {sparse : true, bckground: true});


for(var i=47778 ; i< 47798;i++){db.aq.insert({m:(i) ,k:7, n:i-47778 })}


 e.find({m:{"$gt" : 47796}, k:{"$lt" : 1200}, n : 2});

  db.aq.createIndex ({m : 1, k : 1, n : 1}, {sparse : true, bckground: true});

  db.aq.dropIndex ({m : 1, k : 1, n : 1});
  db.aq.createIndex ({m : 1, k : 1, n : 1}, {sparse : true, bckground: true, unique: true});


   db.aq.insert({m:51, k:91, n:9}); db.aq.insert({m:53, k:92, n:9}); db.aq.insert({m:50, k:94, n:10})







for(var i=500 ; i< 550;i++){db.aq.insert({m:(i) ,k:9, n:i+4 })}


//wont use all 3 index
e.find({m:{"$gt" : 545}, k:{"$lt" : 1100}, n : {"$lt" : 555} } );

e.find({m:{"$gt" : 545}, k:{"$gt" : 1100}, n : {"$gt" : 8} } )


 db.aq.find({n:{"$gt":5}} )

 var e2 = db.aq.explain("executionStats")

 e2.find({m:{"$gt" : 545}, k:{"$gt" : 1100}, n : {"$gt" : 8} } )



//new collection
for(var i =0; i < 3000;i++){db.a.insert( {a:i, b : (i+4), c : (i+9)})}
var e3 = db.a.explain("executionStats");

db.a.createIndex ({a : 1, b : 1}, {sparse : true, bckground: true, unique: true});



 db.a.createIndex ({a : 1, c : 1}, {sparse : true, bckground: true, unique: true});

 e3.find ({a:4, c:13})
 //used a-b index, why?

 db.a.dropIndex({a:1,b:1})
 //now used a-c index
e3.find ({a:4, c:13})

 db.a.dropIndex({a:1,c:1})


 for(var i =3000; i < 6000;i++){db.a.insert( {a:i, b : (i+5), c : (i+8)})}

  db.a.createIndex ({c : 1}, {sparse : true, bckground: true, unique: true});
  e3.find ({a:6001, c:8})
  db.a.dropIndex({c:1})

  for(var i =6000; i < 9000;i++){db.a.insert( {a:i, b : (i+5), c : (8)})}
  //fast
  e3.find ({a:6001, c:8})

  db.a.dropIndex({a:1, c:1})

    //slow
  e3.find ({a:6001, c:8})

  //non unique on c
  db.a.createIndex ({c : 1}, {sparse : true, bckground: true});

  //quite fast now
  e3.find ({a:6001, c:8})

var e3 = db.a.explain("allPlansExecution");


//explain("executionStats").
choose which index

Index cache cleared when 1000 rows added to collection, mongod restarted, index rebuilt, index removed or added
restart
