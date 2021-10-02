const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(let i=0;i<PLAYERS.length;i++){
        let player={
            "name":PLAYERS[i],
            "strength":getRandomStrength(),
            "image":"images/super-"+(i+1)+".png"
        }
        if(i%2==0){
            player["type"]="hero";
        }
        else{
            player["type"]="villain";
        }
        detailedPlayers.push(player);
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.round(Math.random() * (100-0) + 0);
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    if(type=="hero"){
        for(const k of players){
            if(k['type']=="hero"){
                fragment+=`
                <div class="player">
                    <img src=${k["image"]} alt="">
                    <div class="name">${k["name"]}</div>
                    <div class="strength">${k["strength"]}</div>
                </div>`
            }
        }
    }
    else{
        for(const k of players){
            if(k['type']=="villain"){
                fragment+=`
                <div class="player">
                    <img src=${k["image"]}>
                    <div class="name">${k["name"]}</div>
                    <div class="strength">${k["strength"]}</div>
                </div>`
            }
        }
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}