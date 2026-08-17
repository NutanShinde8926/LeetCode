// let h2 = document.querySelector ("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " nutan college from pune learn java";



let divs = document.querySelectorAll(".box")
// console.log(divs[0]);
let idx = 1;
for ( div of divs){
    div.innerText =`new unique value${idx}`;
    idx++;
}
// divs[0].innerText = " new unique value";
// divs[1].innerText = " new unique value";
// divs[2].innerText = " new unique value";
