const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
        {
        name: "Frida Kahlo",
        username: "fridita1907",
        location: "Coyoacán, Mexico",
        avatar: "images/avatar-kahlo.jpg",
        post: "images/post-kahlo.jpg",
        comment: "me, myself, and my eyebrow",
        likes: 313
    },
    {
        name: "Rembrandt van Rijn",
        username: "rembo1606",
        location: "Leiden, Netherlands",
        avatar: "images/avatar-rembrandt.jpg",
        post: "images/post-rembrandt.jpg",
        comment: "mood: chiaroscuro & chill",
        likes: 87
    },
    {
        name: "Élisabeth Vigée Le Brun",
        username: "liz1785",
        location: "Paris, France",
        avatar: "images/avatar-lebrun.jpg",
        post: "images/post-lebrun.jpg",
        comment: "painted this while dodging the revolution 😅",
        likes: 129
    },
    {
        name: "Andy Warhol",
        username: "andy1928",
        location: "Pittsburgh, USA",
        avatar: "images/avatar-warhol.jpg",
        post: "images/post-warhol.jpg",
        comment: "same selfie, different filter 🖼️",
        likes: 198
    },
    {
        name: "Albrecht Dürer",
        username: "alb1490",
        location: "Nuremberg, Germany",
        avatar: "images/avatar-duerer.jpg",
        post: "images/post-duerer.jpg",
        comment: "they said i looked like Jesus, so I leaned in ✝️",
        likes: 65
    },
    {
        name: "Egon Schiele",
        username: "eggy1890",
        location: "Tulln, Austria",
        avatar: "images/avatar-schiele.jpg",
        post: "images/post-schiele.jpg",
        comment: "feeling cute, might contort dramatically later",
        likes: 104
    },
    {
        name: "Lucian Freud",
        username: "freud1922",
        location: "Berlin, Germany",
        avatar: "images/avatar-freud.jpg",
        post: "images/post-freud.webp",
        comment: "no filter. ever.",
        likes: 59
    }
]

const feedEl = document.getElementById("oldagram-feed")

function appendToFeed(post) {
    const post_html = `                <article>
                    <!-- name and picture of the poster -->
                    <header class="posting-header">
                        <img class="poster-avatar" src="${post.avatar}">
                        <div class="poster-info-container">
                            <span class="poster-name">${post.name}</span>
                            <address class="poster-location">${post.location}</address>
                        </div>
                    </header>
                    <img class="post-img" src="${post.post}">
                    <!-- Social interaction buttons and comments -->
                    <footer class="posting-footer">
                        <div class="iconsbar">
                            <img id="${post.username}-like-btn" class="hover-transparency" src="images/icon-heart.png">
                            <img class="hover-transparency" src="images/icon-comment.png">
                            <img class="hover-transparency" src="images/icon-dm.png">
                        </div>
                        <p id="${post.username}-likes-counter" class="likes-count">${post.likes} likes</p>
                        <p class="comment"><span class="comment-name">${post.username}</span> ${post.comment}</p>
                    </footer>
                </article>`
    feedEl.innerHTML += post_html
}

function addEventListenerToPost(post) {
    const likeBtnEl = document.getElementById(`${post.username}-like-btn`)
    likeBtnEl.addEventListener("click", function() {
        post.likes++;
        const likesCtnEl = document.getElementById(`${post.username}-likes-counter`)
        likesCtnEl.textContent = `${post.likes} likes`;
    })
}

for(let i=0;i<posts.length;i++)
    appendToFeed(posts[i])

for(let i=0;i<posts.length;i++)
    addEventListenerToPost(posts[i])
