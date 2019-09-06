// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        Object.keys(response.data.articles).map(articleType => {
            response.data.articles[articleType].forEach(article => {
                document.querySelector('.cards-container').appendChild(createCard(article, articleType));
            });
        });
    })
    .catch(error => {
        console.log('Error: ', error);
    });

function createCard (data, category) {
    const divCard = document.createElement('div');
    const divHeadline = document.createElement('div');
    const divAuthor = document.createElement('div');
    const divImgContainer = document.createElement('div');
    const img = document.createElement('img');
    const spanBy = document.createElement('div');

    divCard.classList.add('card');
    divCard.classList.add(category);
    divHeadline.classList.add('headline');
    divAuthor.classList.add('author');
    divImgContainer.classList.add('img-container');

    divHeadline.textContent = data.headline;
    img.src = data.authorPhoto;
    spanBy.textContent = 'By ' + data.authorName;

    divCard.appendChild(divHeadline);
    divCard.appendChild(divAuthor);
    divAuthor.appendChild(divImgContainer);
    divImgContainer.appendChild(img);
    divAuthor.appendChild(spanBy);

    return divCard;
}