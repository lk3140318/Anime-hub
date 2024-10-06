function searchAnime() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const animeGrid = document.getElementById('animeGrid');
    const animePosts = animeGrid.getElementsByClassName('anime-post');

    for (let i = 0; i < animePosts.length; i++) {
        const title = animePosts[i].getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            animePosts[i].style.display = ""; // Show the post
        } else {
            animePosts[i].style.display = "none"; // Hide the post
        }
    }
}
