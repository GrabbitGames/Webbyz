document.addEventListener("DOMContentLoaded", function() {
    const gamesSection = document.getElementById("games");

    // Dummy data for game thumbnails
    const gamesData = [
        { title: "Game 1", imageUrl: "game1.jpg", link: "#" },
        { title: "Game 2", imageUrl: "game2.jpg", link: "#" },
        { title: "Game 3", imageUrl: "game3.jpg", link: "#" },
        // Add more games as needed
    ];

    // Generate game thumbnails
    gamesData.forEach(game => {
        const gameThumbnail = document.createElement("div");
        gameThumbnail.classList.add("game-thumbnail");

        const image = document.createElement("img");
        image.src = game.imageUrl;
        image.alt = game.title;

        const title = document.createElement("h3");
        title.textContent = game.title;

        const link = document.createElement("a");
        link.href = game.link;
        link.appendChild(image);
        link.appendChild(title);

        gameThumbnail.appendChild(link);
        gamesSection.appendChild(gameThumbnail);
    });
});

