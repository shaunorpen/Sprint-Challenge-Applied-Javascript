// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const containingDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const header1 = document.createElement('h1');
    const spanTemp = document.createElement('span');

    containingDiv.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    spanDate.textContent = 'March 28, 2019';
    header1.textContent = 'Lambda Times';
    spanTemp.textContent = '98°';

    containingDiv.appendChild(spanDate);
    containingDiv.appendChild(header1);
    containingDiv.appendChild(spanTemp);

    return containingDiv;
}

document.querySelector('.header-container').appendChild(Header());
