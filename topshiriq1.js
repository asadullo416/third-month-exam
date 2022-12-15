
let button = document.getElementById("btn-lavozim");

let natija = document.getElementById("natija")

let lavozim = document.getElementById("input")

   let form = document.querySelector("#forma")  
        form.onsubmit = function (event) {

  event.preventDefault();
};

button.addEventListener("click", () => {

  console.log(lavozim.value);
  
  if (lavozim.value === "ishchi") {
  
    natija.innerHTML = "Hello";
  
} else if (lavozim.value === "director") {

    natija.innerText = "Greetings";

} else if (lavozim.value === "") {

    natija.innerHTML = "No login";

} else {

    natija.innerHTML = "Bunday lavozim mavjud emas";

}

     }
  )

;
