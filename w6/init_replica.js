


config = { _id: "m101", members:[
          { _id : 0, host : "localhost:27017", priority:0,slaveDelay:8},
          { _id : 1, host : "localhost:27018"},
          { _id : 2, host : "localhost:27019"},
          { _id : 3, host : "localhost:27020"},
          { _id : 4, host : "localhost:27021"} ]
};

rs.initiate(config);
rs.status();

//
//          , { _id : 5, host : "localhost:27022"}

// mongo localhost:27019 --eval "db.adminCommand({shutdown : 1})"