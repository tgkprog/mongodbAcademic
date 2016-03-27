use t

db.az.insert({m:09,k :9990})

for(var i=99 ; i< 777;i++){db.az.insert({m:i*1.6,k:i*1.43})}
//WriteResult({ "nInserted" : 1 }) inserts many but reply is this

//now dont need to use null to stop the cursor from being consumed as soon as it is formed.
 var g=db.az.find();
 g.next()

var e=db.ax.explain();

e.help()
 e.find({m:160});

 db.az.createIndex ({m : 1});

 db.az.createIndex ({m : 1,k : 1});
 db.az.createIndex ({k : 1});