const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv');
const categorieRouter = require('./routes/categorie.route');
const scategorieRouter = require('./routes/scategorie.route');
const articleRouter = require('./routes/article.route');

dotenv.config()
const app = express();
//BodyParser Middleware
app.use(express.json());
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.get("/",(req,res)=>{
res.send("Bienvenue dans notre sitee");
});
app.use("/api/categorie",categorieRouter)//na3tih route 5atr awel 7aja ychoufha wn3ml constnt fiha url
app.use("/api/scategorie",scategorieRouter)//na3tih route 5atr awel 7aja ychoufha wn3ml constnt fiha url
app.use("/api/article",articleRouter)//na3tih route 5atr awel 7aja ychoufha wn3ml constnt fiha url

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`); });
module.exports = app;