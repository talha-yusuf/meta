var express = require('express');
const app = express();

const meta = {
    "description":"Bonus card for collecting an item from at least one of each set. ",
    "external_url":"https://dev.terravirtua.io:3004",
    "image":"https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/legendary/models/thumbnail_video/Loop_360_Black.mp4",
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
        {"display_type":"number","trait_type":"number minted","value":1},
        {"trait_type":"twitter","value":"@terra_virtua"}
    ]
};

app.get('/', (req,res) => {
    return res.send(meta);
});

app.listen(process.env.PORT || 3000 , () => {
    console.log(`App is listening on port 3000`);
})
