let newArr = new Array();

let mas1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let arr2 = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34];

let natija1 = document.getElementById('natija-solve')

for(let i = 0;i <mas1.length;i++){
        
        newArr[i]= mas1[i]+arr2[i];
        
    }
   natija1.innerHTML = newArr