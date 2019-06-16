var express=require("express");
var app=express();
var bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

 var campgrounds=[
       {name:"Mahendra Hill",image:"https://igx.4sqi.net/img/general/200x200/276672_PgIyof1P54iKfjFwN7mu0PqTBs4WvPFprBit89zJ2_E.jpg"},
       {name:"Granite Hill",image:"https://igx.4sqi.net/img/general/200x200/1400_bnvm129qWg9BA_OF0H83hHs3i5nKP_w7rzyhdCjecFU.jpg"},
       {name:"Hello Hill",image:"https://igx.4sqi.net/img/general/200x200/1476307_yZgjVW0Yk78VgFI9wTMPKmLLZJCUc9XwA2j9KXIADKc.jpg"},
       {name:"Mahendra Hill",image:"https://igx.4sqi.net/img/general/200x200/276672_PgIyof1P54iKfjFwN7mu0PqTBs4WvPFprBit89zJ2_E.jpg"},
       {name:"Granite Hill",image:"https://igx.4sqi.net/img/general/200x200/1400_bnvm129qWg9BA_OF0H83hHs3i5nKP_w7rzyhdCjecFU.jpg"},
       {name:"Hello Hill",image:"https://igx.4sqi.net/img/general/200x200/1476307_yZgjVW0Yk78VgFI9wTMPKmLLZJCUc9XwA2j9KXIADKc.jpg"},
       {name:"Mahendra Hill",image:"https://igx.4sqi.net/img/general/200x200/276672_PgIyof1P54iKfjFwN7mu0PqTBs4WvPFprBit89zJ2_E.jpg"},
       {name:"Granite Hill",image:"https://igx.4sqi.net/img/general/200x200/1400_bnvm129qWg9BA_OF0H83hHs3i5nKP_w7rzyhdCjecFU.jpg"},
       {name:"Hello Hill",image:"https://igx.4sqi.net/img/general/200x200/1476307_yZgjVW0Yk78VgFI9wTMPKmLLZJCUc9XwA2j9KXIADKc.jpg"}
       ];

//route
app.get("/",function(req,res){
    res.render("landing");
    
    
});

app.get("/campgrounds",function(req,res){
   // res.send("This is the campground");
       res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res)
{
    //res.send("You hit the post route");
   //get data from form and add to campground array
    var name=req.body.name;
    var image=req.body.image;
    var newCampground={name:name,image:image};
    campgrounds.push(newCampground);
    
   //redirect back to campground page
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("YelpCamp Server has started..");
});



