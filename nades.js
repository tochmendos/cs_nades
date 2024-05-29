const myList = [
    {
        map: "Ancient",
        side: "T",
        description: "Smokes for Terrorists",
        link: "./maps/ancient_smokes.html"
    },
    {
        map: "Ancient",
        side: "CT",
        description: "Smokes for Counter-Terrorists",
        link: "./maps/ancient_smokes.html"
    },
    {
        map: "Mirage",
        side: "CT",
        description: "Smokes for Counter-Terrorists",
        link: "./maps/mirage_smokes.html"
    },
    // Add more items to the list...
];

const generateListHTML = (list, mapName) => {
    return list
        .filter((item) => item.map === mapName)
        .map((item) => {
            return (
                `<li>` +
                `<a href="${item.link}">${item.map} (${item.side}) - ${item.description}</a>` +
                `</li>`
            );
        })
        .join("");
};

const AncientListContainer = document.getElementById("AncientListContainer");
AncientListContainer.innerHTML = generateListHTML(myList, "Ancient");

const MirageListContainer = document.getElementById("MirageListContainer");
MirageListContainer.innerHTML = generateListHTML(myList, "Mirage");