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

const newCard = document.querySelector(".cards-container");
// console.log(newCard);

function articleContent(obj) {
	let card = document.createElement("div");
	cardHeadline = document.createElement("div");
	cardAuthor = document.createElement("div");
	cardImgContainer = document.createElement("div");
	cardImg = document.createElement("img");
	cardSpan = document.createElement("span");

	card.append(cardHeadline, cardAuthor);
	cardAuthor.append(cardImgContainer, cardSpan);
	cardImgContainer.append(cardImg);

	card.classList.add("card");
	cardHeadline.classList.add("headline");
	cardAuthor.classList.add("author");
	cardImgContainer.classList.add("img-container");

	// <div class="headline">{Headline of article}</div>
	cardHeadline.textContent = obj.headline;
	// <img src={url of authors image} />
	cardImg.src = obj.authorPhoto;
	// <span>By {authors name}</span>
	cardSpan.textContent = `By ${obj.authorName}`;

	return card;
}

axios
	.get("https://lambda-times-backend.herokuapp.com/articles")
	.then(response => {
		console.log(response.data.articles);
		let bootstrapArticle = response.data.articles.bootstrap;
		javascriptArticle = response.data.articles.javascript;
		jqueryArticle = response.data.articles.jquery;
		nodeArticle = response.data.articles.node;
		technologyArticle = response.data.articles.technology;

		bootstrapArticle.forEach(i => {
			let card = articleContent(i);
			newCard.append(card);
			// console.log(article);
		});
		javascriptArticle.forEach(i => {
			let card = articleContent(i);
			newCard.append(card);
		});
		jqueryArticle.forEach(i => {
			let card = articleContent(i);
			newCard.append(card);
		});
		nodeArticle.forEach(i => {
			let card = articleContent(i);
			newCard.append(card);
		});
		technologyArticle.forEach(i => {
			let card = articleContent(i);
			newCard.append(card);
		});
	})
	.catch(err => {
		console.log(err);
		// deal with the error in here
	});
