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
    user:'ui',
    password:'ui1234',
    database:'shopping_cart'
},'request'));

app.get("/service/inventory",function (req,res,next){
        var ids=[];
        var query="SELECT * from inventory";
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

app.get("/service/inventory/:INVENTORYTYPEID",function (req,res,next){
        var ids=[];
    var INVENTORYTYPEID=req.params.INVENTORYTYPEID;
    ids.push(INVENTORYTYPEID);
        var query="SELECT * from inventory  where INVENTORYTYPEID=?";
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
app.get( "/service/inventorytype",function(req, res, next){
    //arrays to store dynamic parameters
    var ids =[];

    var query = "SELECT * FROM inventorytype";
    req.getConnection(function(err, connection){
        if(err) return next(err);

        connection.query(query, ids, function(err, results){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);

        });


    });


});

app.get( "/service/inventorytype/:ID",function(req, res, next){
    //arrays to store dynamic parameters
    var ids =[];
    var id=req.params.id;
    ids.push(id);

    var query = "SELECT * FROM inventorytype WHERE Id = ?";
    req.getConnection(function(err, connection){
        if(err) return next(err);

        connection.query(query, ids, function(err, results){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);

        });


    });

});



//create
//SAMPLE FOR TEMPLATING SERVICE
var url="/service/customer/";
var query="INSERT INTO customer SET ?";
var data=["customerId","firstname","lastname","address","city","zip","email","phone"];

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

