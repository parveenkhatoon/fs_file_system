
var fs = require('fs');
fs.readFile('data.json',function(_err,data){
    var mydata = JSON.parse(data)
    var i=0
    var f; 
    var a;
    while(i<mydata.length){
        f = mydata[i]["Name"]
        if (f[0] == "a"){
            a = f.replace("a","p")
            mydata[i]["Name"] = a
    }
    i++ ;
    }
    var j=0
    while(j<mydata.length){
        if(mydata[j]["Name"][0]=="p"){
        }
        j++
    
    }
    mydata.splice(3,5)
    var json = JSON.stringify(mydata);
    fs.writeFile("newFile.json",json,function(err,data){
    var num = mydata.push(json)
    })
})
fs.rename('data.json', 'student.json', function(arr,data){
})

