const express = require("express");

const port = 5000;
const app = express();

app.use(express.json());

app.use('/', require('./routes/revLocation'));
app.get("/", (req, res)=>{
    res.send(`<h2>Welcome to microtask 3 of reverse geolocation</h2><br><h3>Here user can obtain address of a certain place using its latitude and longitude<br><h3>Endpoint "/address?lat={latitude}&lon={longitude}"`);
});


app.listen(port, (req,res)=>{
    console.log(`App Started at port http://127.0.0.1:${port}`);
})

module.exports = app;