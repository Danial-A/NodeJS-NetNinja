const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const BlogRoutes = require('./routes/BlogRoutes')
const { render } = require('ejs');


const app = express();

const dbURI = 'mongodb+srv://netninja:test1234@node-tuts.wv4a9.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology: true}) 
.then( (result) =>{
    app.listen(3000);
}).catch((err)=>{console.log(err)});

//register view engine
app.set('view engine', 'ejs');

//Middleware static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//mongoose and mongo routes
// app.get('/add-blog', (req,res)=>{
//     const blog = new Blog({
//         title: 'ANother blog for testing purposes',
//         snippet: 'About section of the new blog',
//         body: 'Body section of the newly created blog'
//     });
//     blog.save().then((result)=>{
//         res.send(result);
//     }).catch((error)=>{
//         console.log(error)
//     })
// });

app.get('/all-blogs', (req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((error)=>{
        console.log(error);
    })
});

// app.get('/single-blog', (req,res)=>{
//     Blog.findById('5fcf3a1cde870807acce0948').then((result)=>{
//         res.send(result);
//     }).catch((error)=>{
//         console.log(error);
//     })
// })

//routes
app.get('/',(req,res)=>{
   res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
 res.render('about', {title: 'About'})
})
//blog routes
app.use('/blogs',BlogRoutes);

app.use((req,res)=>{
    res.render('404', {title: '404'})
})