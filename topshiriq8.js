
let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56]

let kiritilgan = document.getElementById("mas");

let tasdiqlang = document.getElementById("button");

let result = document.getElementById("result");

               function kirit(arr2) {
    
                let array = new Array();
    
    let javob = document.getElementById("input8").value;
    
    for (let i = 0; i < arr2.length; i++) {

        if (arr2[i] != javob) {

            array.push(arr2[i])
     
         }
    }

console.log(array)

           result.innerHTML = array

}
               kiritilgan.innerHTML=`[${arr}]`;

    tasdiqlang.addEventListener('click', function (e) {

e.preventDefault();

               kirit(arr)

  }

)
