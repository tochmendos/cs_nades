const myList = [
    {
        id: 1,
        map: "Anubis",
        side: "T",
        description: "Flashes for Terrorists",
        link: "./maps/anubis_flashes.html"
    },
    {
        id: 2,
        map: "Dust 2",
        side: "CT",
        description: "Smokes for Counter-Terrorists",
        link: "./maps/dust2_smokes.html"
    },
    // Add more items to the list...
];

const listHTML = myList.map((item) => {
    return (
        `<li>` +
        `<a href="${item.link}">${item.map} (${item.side}) - ${item.description}</a>` +
        `</li>`
    );
}).join("");


const myListContainer = document.getElementById("myListContainer");
myListContainer.innerHTML = listHTML;