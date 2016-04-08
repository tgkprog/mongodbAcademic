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
