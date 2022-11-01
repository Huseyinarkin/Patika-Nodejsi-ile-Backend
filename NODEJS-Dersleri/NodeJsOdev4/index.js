const fs = require('fs');

//create
fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}','utf8',(err)=>{
    if(err) console.log(err);
    else console.log('file created.')
});

//read
fs.readFile('employees.json','utf8',(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
});

//update
fs.appendFile('employees.json','{"name": "Employee 2 Name", "salary": 3000}','utf8',(err)=>{
    if(err) console.log(err);
    else console.log('file updated.');
});

//remove
fs.unlink('employees.json',(err)=>{
    if (err) console.log(err);
    else console.log('file removed');
});