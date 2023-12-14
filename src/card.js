var cards = [];

// duplicate button
document.querySelector("#duplicate").addEventListener("click", function (e) {
  const c = document.querySelector(".card");
  const clone = c.cloneNode(true);
  document.body.appendChild(clone);
  cards.push(c);

});
// 1. create varible and make it = card class
// 2. create varible and make clone
// 3. add clone to end of page

// ---background color button---

document.querySelector("#background").addEventListener("click", function (e) {
  const c = document.querySelector(".card");
  if (c.classList.contains("background")) {
    c.classList.remove("background");
  } else {
    c.classList.add("background");
  }
  
});

// ---title change button---

document.querySelector("#title").addEventListener("click", function (e) {
  const h = document.querySelector("#favitems");
  h.textContent = "Something Else";
});

// ---delete clone button---
  //1. create list of cards
  //2. delete last one from array
  //3. delete from doc
document.querySelector("#delete").addEventListener("click", function (e) {
  var lastCard = cards.pop(); 
  document.body.removeChild(lastCard);
});


// ---new detail button---
document.querySelector(".detail-button").addEventListener("click", function(e){
  const p = document.querySelector(".description");
  p.style.display = "none";
})

