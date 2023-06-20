const express = require('express');
const router = express.Router();
const SCategorie=require("../models/scategorie")
// chercher une sous catégorie
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
        // créer un nouvelle scatégorie
router.post('/', async (req, res) => {
    const { nomscategorie, imagescat,categorieID} = req.body;
    const newSCategorie = new SCategorie({nomscategorie:nomscategorie,
    imagescat:imagescat,categorieID:categorieID })
    
    try {
    await newSCategorie.save();
    
    res.status(200).json(newSCategorie );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    
    });
        // afficher la liste des scategories.
router.get('/', async (req, res, )=> {
    try {
    const scat = await SCategorie.find();
    
    res.status(200).json(scat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    
    });