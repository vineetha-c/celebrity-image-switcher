function changeCelebrity(celebrity) {

    const image = document.getElementById("celebrityImage");
    const name = document.getElementById("celebrityName");
    const box = document.getElementById("celebrityBox");

    if (celebrity === "virat") {

        image.src = "https://media.gettyimages.com/id/2186592795/photo/perth-australia-virat-kohli-of-india-celebrates-scoring-a-century-during-day-three-of-the.jpg?s=612x612&w=gi&k=20&c=X-KlrGevMjbt0mqtmVvIZ4QZw2H1GwYz0kRX8sFiY_4=";
        name.textContent = "Virat Kohli";

        box.style.border = "5px solid #2563eb";

    }

    else if (celebrity === "taylor") {

        image.src = "https://www.shutterstock.com/editorial/image-editorial/M3T9Mf5bNcj0Y5z6OTM4NTg=/taylor-swift-440nw-13842775bb.jpg";
        name.textContent = "Taylor Swift";

        box.style.border = "5px dashed #9c27b0";

    }

    else if (celebrity === "ronaldo") {

        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfh711WF92F9APtV9xPcZ1ShT1RQ8b_8hm7o_8L3kAzA7HeJJLaELFs0&s=10";
        name.textContent = "Cristiano Ronaldo";

        box.style.border = "5px double #e53935";

    }
}