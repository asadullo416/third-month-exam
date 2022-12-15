function sonlar() {
    let count = document.getElementById("alpha3").value
    let ontalik = ( count - count % 10) / 10
    let count1;
    let count2;
          switch (ontalik) {
        case 0: count1 = "";
            break;

               case 1: count1 = "o'n";
        break;

              case 2: count1 = "yigirma";
          break;

               case 3: count1 = "o'ttiz";
         break;

               case 4: count1 = "qirq";
         break;

               case 5: count1 = "ellik";
         break;
   
               case 6: count1 = "oltmish";
         break;

               case 7: count1 = "yetmish";
        break;

             case 8: count1 = "sakson";
           break;

              case 9: count1 = "to'qson";
          break;
    }
    let birlik = count % 10

    switch (birlik) {
     case 0: count2 = "";
            break;
        
     case 1: count2 = "bir";
            break;
        
    case 2: count2 = "ikki";
            break;
        
    case 3: count2 = "uch";
            break;
        
    case 4: count2 = "to`rt";
            break;
        
    case 5: count2 = "besh";
            break;
        
    case 6: count2 = "olti";
            break;
        
    case 7: count2 = "yetti";
            break;
        
    case 8: count2 = "sakkiz";
            break;
        
    case 9: count2 = "to'qqiz";
           break;
    }
    document.getElementById('natija1').innerText = count1+" "+count2
    }
sonlar();