var express = require('express');
const app = express();

const meta = {
    "description":"Bonus card for collecting an item from at least one of each set. ",
    "external_url":"https://dev.terravirtua.io:3004",
    "image":"https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/paramount/thegodfather/images/large/large_image_IL%20Padrino1574763898297.png",
    "name":"IL Padrino",
    "background_color":"#000000",
    "attributes":[
        {"trait_type":"code","value":"GFILPAD100001"},
        {"trait_type":"collection","value":"The Godfather"},
        {"trait_type":"category","value":"Legendary"},
        {"trait_type":"type","value":"Poster"},
        {"trait_type":"brand","value":"Paramount"},
        {"trait_type":"set","value":"Bonus"},
        {"trait_type":"condition","value":"New"},
        {"trait_type":"series","value":"2019 Premiere Series"},
        {"trait_type":"number minted","value":1},
        {"trait_type":"https://www.facebook.com","value":"/OfficialTerraVirtua"}
    ]
};

app.get('/', (req,res) => {
    return res.send(meta);
});

app.listen(process.env.PORT || 3000 , () => {
    console.log(`App is listening on port 3000`);
})