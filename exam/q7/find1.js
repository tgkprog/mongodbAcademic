/* db.albums.find({"images": 120});

db.albums.createIndex( {images : 1 })

*/

print(" start  " );
try{ db.albums.createIndex( {images : 1 }) ; }catch(e){ print(" err " + e);}

print(" \n idx done  " );
var ims = db.images.find();
print(" cursor set  " );
var c = 0;
var bi = 0;
while(ims.hasNext()){
	c = c +1;
	if(c > 5000){
		bi++;
		print(" at   big " + bi );	
		c = 0;
	}
	var i1 = ims.next();
	var f = db.albums.findOne( {images: i1._id});
	if(f=== null){
		//print("orphna " + i1._id);
		db.images.remove({_id : i1._id});
	}
}