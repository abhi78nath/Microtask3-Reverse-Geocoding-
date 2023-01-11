const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/address', async(req,res)=>{
    const {lat, lon} = req.query;

    try{
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=18&lat=${lat}&lon=${lon}`;

        const response = await axios.get(url);
        const data = response.data.address;
        
        if(!data)
        {
            return res.status(400).json({status:"Wrong Format"});
        }

        res.json({data});
    } catch(error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

})

module.exports = router;