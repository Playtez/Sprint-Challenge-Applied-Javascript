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

const headCont = document.querySelector(" .header-container ");
headCont.appendChild(Header());

function Header() {
    const header_D = document.createElement("div");
    header_D.classList.add("header");

    const date_S = document.createElement("span");
    date_S.classList.add("date");
    date_S.textContent = "MARCH 28, 2019";
    header_D.appendChild(date_S);

    const headline_h1 = document.createElement("h1");
    headline_h1.textContent = " Lambda Times";
    header_D.appendChild(headline_h1);

    const temp_S = document.createElement("span");
    temp_S.classList.add("temp");
    temp_S.textContent = " 98°";
    header_D.appendChild(temp_S);

    return header_D;
}