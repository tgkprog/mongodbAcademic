


config = { _id: "m101", members:[
          { _id : 0, host : "localhost:27017", priority:0,slaveDelay:8},
          { _id : 1, host : "localhost:27018"},
          { _id : 2, host : "localhost:27019"} ]
};

rs.initiate(config);
rs.status();



// mongo localhost:27019 --eval "db.adminCommand({shutdown : 1})"