let express=require("express")
let app=express()

app.set("view engine","ejs")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/service",(req,res)=>{
    res.render("service")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})




let PORT=process.env.PORT || 4300

app.listen(4300,()=>{
    console.log(`server is listening on port ${PORT}`)
})