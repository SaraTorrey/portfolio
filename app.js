const   express         = require("express"),
        app             = express(),
        bodyParser      = require("body-parser"),
        mongoose        = require("mongoose");

//const indexRoutes     = require("./routes/index");

mongoose.connect("mongodb://localhost:27017/restful_portfolio", {
    useNewUrlParser: true,
    useCreateIndex: true,
    }).then(() => {
    console.log("Connected to DB");
    }).catch(err => {
    console.log("Error", err.message);
    });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/about", (req,res) => {
    res.render("about");
});

app.get("/contact", (req, res)=>{
    res.render("contact");
});

app.get("/portfolio", (req, res)=>{
    res.render("portfolio");
});

app.get("/blog", (req, res)=>{
    res.render("blog");
});

app.listen(3000, process.env.IP, function (  ) {
    console.log("Portfolio has started")
});
