>mongo
#connected to secondary
rs.slaveOk()

db.f.insert({"SD":232})

db.f.find()