mkdir D:\data\mongoes\rs2\d1
mkdir D:\data\mongoes\rs2\d2
mkdir D:\data\mongoes\rs2\d3
mkdir D:\data\mongoes\rs2\drs1D
mkdir D:\data\mongoes\rs2\drs1E
mkdir D:\data\mongoes\rs2\drs1F
d:
cd D:\data\mongoes\rs2\d
rem rmdir /s /q *



start mongod --replSet m101 --logpath 1.log --dbpath D:\data\mongoes\rs2\d1 --port 27017 --smallfiles --oplogSize 64
start mongod --replSet m101 --logpath 2.log --dbpath D:\data\mongoes\rs2\d2 --port 27018 --smallfiles --oplogSize 64
start mongod --replSet m101 --logpath 3.log --dbpath D:\data\mongoes\rs2\d3 --port 27019 --smallfiles --oplogSize 64

%windir%\system32\cmd.exe /c "cd bin && start mongoProc.exe"