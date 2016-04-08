use school
 db.plcs.insert({name:"aa", "type": "food", loc:[23,22]})

 db.plcs.insert({name:"3a", "type": "food", loc:[323,222]})

 db.plcs.createIndex({loc:"2d", type:1});

 db.plcs.insert({name:"4vb", "type": "food", loc:[44.5,12.34]})


 db.plcs.find({loc: { "$near" : [25,24] }}).limit(2)

 db.plcs.find({loc: { "$near" : [125,124] }}).limit(2)