var express= require("express");
var bodyParser=require("body-parser");
var mysql=require("mysql");
var connection=require("express-myconnection");
var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended:true
        }));

app.use(express.static(__dirname + '/'));
console.log("static files initialized...");

app.use(connection(mysql,{
    host:'localhost',
    user:'root',
    password:'passsword',
    database:'person_form'
},'request'));

app.get("/service/person",function (req,res,next){
        var ids=[];
        var query="SELECT * from person";
        req.getConnection(function(err, connection){
    if(err) return next(err);
    connection.query(query,ids,function(err,results){
        if(err){
            console.log(err);
            return next("mysql err, check your query");
        }
        res.json(results);
    });
});
});

app.get("/service/person/:personid",function (req,res,next){
        var ids=[];
    var personid=req.params.personid;
    ids.push(personid);
        var query="SELECT * from person where personid=?";
        req.getConnection(function(err, connection){
    if(err) return next(err);
    connection.query(query,ids,function(err,results){
        if(err){
            console.log(err);
            return next("mysql err, check your query");
        }
        res.json(results);
    });
});
});




//create
//SAMPLE FOR TEMPLATING SERVICE
var url="/service/person/";
var query="INSERT INTO person SET ?";
var data=["personid","firstname","lastname","address","phoneNumber","imgPath"];

//END OF POST SERVICE TEMPLATE


// this function is used to post varibales 
function postService(url,sqlquery,data){

    try{
        var reqObj=req.body;
        console.log(reqObj);
        req.getConnection(function(err,conn){
            if(err)
                {
                    console.error('SQL Connection error:', err);
                return next(err);
                }
            else
                {
                    
                    var insertSql=sqlquary;
                    var insertValue={};
                    for(var i=0; 1<data.length;i++){
                        insertvalues[data[i]]=reqObj[data[i]];
                    }
                    var query= conn.query(insertSql, insertValue,function(err, result)
                    {
                       if(err){
                           console.error('SQL error:', err);
                           return next(err);
                       } 
                        console.log(result);
                        var name_ID=result.insertId;
                        res.json({"name":name_Id});
                    });
                }
                });
        }
    
catch(ex){
    console.error("Internal error:"+ex);
    return next(ex);
        }
}


app.use(express.static(__dirname+'/'));


app.get('/views/index',function(req,res){
    res.redirect('/views/index.html');
});
app.get('/',function(req,res){
    res.redirect('/views/index.html');
})



app.listen(8080,function(){
    console.log('server loaded on port 8000');
});

