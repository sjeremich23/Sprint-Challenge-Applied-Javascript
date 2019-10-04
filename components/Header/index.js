// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const component = document.querySelector(".header-container");

function Header(date, title, temp) {
	const panel = document.createElement("div");
	panelDate = document.createElement("span");
	panelTitle = document.createElement("h1");
	panelTemp = document.createElement("span");

	panel.append(panelDate, panelTitle, panelTemp);

	panel.classList.add("header");
	panelDate.classList.add("date");
	panelTemp.classList.add("temp");

	panelDate.textContent = date;
	panelTitle.textContent = title;
	panelTemp.textContent = temp;

	return panel;
}

component.append(Header("October, 4th 2019", "Lambda Times", "98°"));
