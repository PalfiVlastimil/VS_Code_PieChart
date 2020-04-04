
const init = function(){
    const parameters = new URLSearchParams(window.location.search);
    const url = parameters.get("data");
    let data = url.split(";");
    let average = 0;
    
    let array = [];
    for(let a of data){
       average = data.reduce((a,b) => Number(a) + Number(b))
       array.push(Number(a))
       

    }
    average = 360 / average // 60 => průměr pro hodnoty
    console.log(average);
    console.log(array);
   
    let angles = 0;
    
    
    
    for(let x of array){
        let className = "sektor"
        let cont = document.getElementById("pieContainer")
        let div = document.createElement("div")
        angles = average * x;
        console.log(angles)
        cont.append(div);
        div.classList.add("sektor");
        sector = new Sektor(".sektor",{
            angle: angles
        })
    }
    
    

    
    
}
//function createGraph(arrayOfNumbers,)
window.addEventListener("DOMContentLoaded", init);