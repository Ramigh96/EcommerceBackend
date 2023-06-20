const express = require('express');
const router = express.Router();
const Categorie=require("../models/categories")
// créer un nouvelle catégorie
router.post('/', async (req, res) => {
    const { nomcategorie, imagecategorie} = req.body;
    const newCategorie = new Categorie({nomcategorie:nomcategorie,
    imagecategorie:imagecategorie})
    try {
        await newCategorie.save();
        res.status(200).json(newCategorie );
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });
        module.exports = router;
        router.get('/:scategorieId',async(req, res)=>{
            try {
            const scat = await
            
            SCategorie.findById(req.params.scategorieId);
            
            13
            res.status(200).json(scat);
            } catch (error) {
            res.status(404).json({ message: error.message });
            }
        });
        router.delete('/:scategorieId', async (req, res)=> {
            const id = req.params.scategorieId;
            await SCategorie.findByIdAndDelete(id);
            
            res.json({ message: "sous categorie deleted successfully." });
            
            }); 
            // afficher la liste des articles.
            router.get('/', async (req, res, )=> {
                try {
                const articles = await Article.find();
                res.status(200).json(articles);
                } catch (error) {
                res.status(404).json({ message: error.message });
                }
                });
                // créer un nouvel article
router.post('/', async (req, res) => {
    const nouvarticle = new Article(req.body)
    try {
    await nouvarticle.save();
    res.status(200).json(nouvarticle );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    
    });
    // chercher un article
router.get('/:articleId',async(req, res)=>{
    try {
    const art = await Article.findById(req.params.articleId);
    res.status(200).json(art);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// modifier un article

router.put('/:articleId', async (req, res)=> {
    const { reference,
    designation,prix,marque,qtestock,imageart,scategorieID} = req.body;
    const id = req.params.articleId;
    try {
    const art1 = {
    reference:reference,designation:designation,prix:prix,marque:marque,qtestock:qtestock,imageart:imageart,scategorieID:scategorieID, _id:id };
    await Article.findByIdAndUpdate(id, art1);
    res.json(art1);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });


    