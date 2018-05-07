// Environment setup

var express = require('express');
var body_parser = require('body-parser');
var mongoose = require('mongoose');
var app =express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(body_parser.urlencoded({extended :true}));

mongoose.connect('mongodb://localhost/rest');

var blog_schema = new mongoose.Schema({
    title : String,
    image : String,
    body : String,
    created : {type :Date, default: Date.now}

});

var Blog = mongoose.model('Blog',blog_schema);

// Blog.create(
//     {
//         title: "Cortana",
//         image: "data:image/jpeg;base64,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",
//         body: "Taylor Alison Swift is an American singer-songwriter. One of the leading contemporary recording artists, she is known for narrative songs about her personal life, which have received widespread media coverage.",
//
//     },
//     function (err) {
//         if(!err){
//             console.log("Done");
//         }
//     }
// );

//RESTFUL ROUTES
app.get('/',function(req,res){

    res.redirect('/blogs');
});


app.get('/blogs',function (req, res) {

Blog.find({}, function (err, blogs) {
    if(err){
        console.log(err);

    }
    else {
        res.render('home',{blogs:blogs});
    }

})

});

app.get('/blogs/new',function (req, res) {

    res.render('add_blog')


});



app.post('/blogs',function (req, res) {

    console.log(req.body);
    Blog.create({title: req.body.title,
        image: req.body.imageurl,
        body: req.body.body,},function (err, newBlog) {
       if(err){
           res.render('add_blog');
       }
       else {
           res.redirect('/blogs');
       }

    });
});

//show route
app.get('/blogs/:id', function (req, res) {

    Blog.findById(req.params.id, function (err, foundBlog) {
        if(err){
            res.send("Not Found");
        }

        else {
            res.render("show",{blog: foundBlog});
        }
    });
});

//edit route

app.get('/blogs/:id/edit', function (req, res) {
    res.render('edit');
});








//listening

app.listen('3000',function () {
    console.log("The server has started");
});

