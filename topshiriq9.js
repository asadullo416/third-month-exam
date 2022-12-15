      let one__by__one=document.getElementById("one__by__one")

      let  javob9 = document.getElementById("natija9")

              one__by__one.addEventListener('change' , function (e) {
 
 e.preventDefault();

              let p = document.createElement('p')

      p.innerHTML=`${e.target.value}`;

          javob9.append(p)

     e.target.value=''


     }


 )
