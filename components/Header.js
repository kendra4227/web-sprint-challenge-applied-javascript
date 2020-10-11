// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
let container = document.querySelector('.header-container');
function Header() {
    //Create Elements
    const header = document.createElement('div');
    header.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.innerHTML = "March 28, 2020";

    const title = document.createElement('h1');
    title.innerHTML = "Lambda Times";

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.innerHTML = "98&deg";

    //Append Elements
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);
    container.appendChild(header)

    return container;
}
Header();

