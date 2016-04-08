use school
 db.plcs.insert({name:"aa", "type": "food", loc:[23,22]})

 db.plcs.insert({name:"3a", "type": "food", loc:[323,222]})

 db.plcs.createIndex({loc:"2d", type:1});

 db.plcs.insert({name:"4vb", "type": "food", loc:[44.5,12.34]})


 db.plcs.find({loc: { "$near" : [25,24] }}).limit(2)

 db.plcs.find({loc: { "$near" : [125,124] }}).limit(2)




 	db.places.find(
	   {
	     location:
	       { $near :
	          {
	            $geometry: { type: "Point",  coordinates: [ -73.9667, 40.78 ] },
	            $minDistance: 1000,
	            $maxDistance: 5000
	          }
	       }
	   }
)



db.stores.find(
   {
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ 130, 39 ] },

            $maxDistance: 1000000
          }
       }
   }
)

---
full text search
---


db.students.find({student_id:{$gt:500000}, class_id:54}).sort({student_id:1}).hint({class_id:1}).explain("executionstats")

--

right index

Equality fields, sort fields, range fields