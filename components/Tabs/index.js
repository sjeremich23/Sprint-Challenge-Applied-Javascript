// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
	.get("https://lambda-times-backend.herokuapp.com/topics")
	.then(response => {
		// deal with the response data in here
		console.log(response);
		const trendingTopics = document.querySelector(".topics");
		response.data.topics.forEach(item => {
			let topics = tabContent(item);
			trendingTopics.append(topics);
		});
	})
	.catch(err => {
		// deal with the error in here
		console.log(err);
	});

function tabContent(dataresponse) {
	let newDiv = document.createElement("div");
	newDiv.textContent = dataresponse;
	newDiv.classList.add("tab");
	return newDiv;
}
