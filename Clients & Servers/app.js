const { response } = require('express');
const express = require('express');

const app = express();

//register view engine
app.set('view engine', 'ejs');


//listen for requests
app.listen(3000);
app.get('/',(req,res)=>{
    const blogs = [
        {title:"Yoshi finds eggs", snippet: "Lorem impsum dolor sit amet consectetur"},
        {title:"Mario finds stars", snippet: "Lorem impsum dolor sit amet consectetur"},
        {title:"How to defeat browser", snippet: "Lorem impsum dolor sit amet consectetur"}
    ]
   res.render('index', {title: 'Home', blogs});
})

app.get('/about',(req,res)=>{
 res.render('about', {title: 'About'})
})

app.get('/blogs/create', (req,res)=>{
    res.render('create', {title: 'Create'})
})

app.use((req,res)=>{
    res.render('404', {title: '404'})

})