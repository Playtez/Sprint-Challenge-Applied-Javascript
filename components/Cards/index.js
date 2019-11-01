// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
/////    topicArticles.map(item => {
////   artEntry.appendChild(CardCompo(item));
////   });
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const artEntry = document.querySelector(".cards-container");

//for (const value of topicArticles) {
axios
    .get("https://lambda-times-backend.herokuapp.com/articles") //
    .then(res => {
        res.data.articles.javascript.map(item => {
            artEntry.appendChild(CardCompo(item));
        });

        axios
            .get("https://lambda-times-backend.herokuapp.com/articles") //
            .then(res => {
                res.data.articles.bootstrap.map(item => {
                    artEntry.appendChild(CardCompo(item));
                });
                axios
                    .get("https://lambda-times-backend.herokuapp.com/articles") //
                    .then(res => {
                        res.data.articles.technology.map(item => {
                            artEntry.appendChild(CardCompo(item));
                        });
                        axios
                            .get("https://lambda-times-backend.herokuapp.com/articles") //
                            .then(res => {
                                res.data.articles.jquery.map(item => {
                                    artEntry.appendChild(CardCompo(item));
                                });
                                axios
                                    .get("https://lambda-times-backend.herokuapp.com/articles") //
                                    .then(res => {
                                        res.data.articles.node.map(item => {
                                            artEntry.appendChild(CardCompo(item));
                                        });
                                    })

                                .catch(err => {
                                    console.log("Your code sucks this is why:", err);
                                });
                            })

                        .catch(err => {
                            console.log("Your code sucks this is why:", err);
                        });
                    })

                .catch(err => {
                    console.log("Your code sucks this is why:", err);
                });
            })

        .catch(err => {
            console.log("Your code sucks this is why:", err);
        });
    })

.catch(err => {
    console.log("Your code sucks this is why:", err);
});

function CardCompo(articles) {
    const newCard_D = document.createElement("div");
    newCard_D.classList.add("card");

    const headLine_D = document.createElement("div");
    headLine_D.classList.add("headline");
    headLine_D.textContent = articles.headline;
    newCard_D.appendChild(headLine_D);

    const author_D = document.createElement("div");
    author_D.classList.add("author");
    // author_D.textContent = articles.authorName
    newCard_D.appendChild(author_D);

    const imgCont_D = document.createElement("div");
    imgCont_D.classList.add("img-container");
    // imgCont_D.textContent = articles
    author_D.appendChild(imgCont_D);

    const imgSRC_I = document.createElement("img");
    imgSRC_I.src = articles.authorPhoto;
    imgCont_D.appendChild(imgSRC_I);

    const spanName_S = document.createElement("span");
    spanName_S.textContent = articles.authorName;
    author_D.appendChild(spanName_S);

    return newCard_D;
}