let xmlns = "http://www.w3.org/2000/svg";

// De achtergrond (pixels) aan te maken waarin de cirkles getekend gaan worden:
let svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", 720);
svg.setAttribute("height", 360);
svg.setAttribute("viewbox", "0 0 720 360")

// Cirkels aanmaken:
function createcircle(x,y){
    let circle = document.createElementNS(xmlns, "circle");
    circle.setAttribute("cy", y);
    circle.setAttribute("cx", x);
    circle.setAttribute("r", 0.75);
    circle.setAttribute("fill","green");
    circle.setAttribute("stroke","green");
    return circle;

}
// Positie bepalen op basis van de coördinaten:
function plek(waarde,latitude){
    // X-waarde (latitude) bepalen:
    if (latitude){
        positie = (90 - waarde)* 2;
    }
    // Y-waarde (longitude) bepalen:
    else{
        positie = (waarde + 180)* 2;
    }
    return positie;
}

// Cirkels toevoegen op de kaart, op de juiste positie:
for (let i = 0; i < cities.length; i = i + 1){
    svg.appendChild(createcircle(plek(cities[i].longitude,false),plek(cities[i].latitude,true)))
}

document.body.appendChild(svg);

