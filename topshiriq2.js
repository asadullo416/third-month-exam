 













function calculateDays(){
    let day1 = document.getElementById("d1").value;

    let day2 = document.getElementById("d2").value;
    
    const dateOne = new Date(day1);
    
    const dateTwo = new Date(day2);
    
    const time = Math.abs(dateTwo - dateOne);
    
    const kunlar = Math.ceil(time / (1000 * 60 * 60 * 24))
    
    document.getElementById("output").innerHTML=kunlar + " kun";
}


