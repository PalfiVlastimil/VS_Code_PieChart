function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
const init = function(){
    const parameters = new URLSearchParams(window.location.search);
    const url = parameters.get("data");
    let data = url.split(";");
    let average = 0;
    let array = [];
    let value;
    for(let a of data){
       average += Number(a)
       value = a;
       console.log(value)
       array.push(average);
    }
    
    average = 360 / average // 60 => průměr pro hodnoty
    
    console.log(average);
    console.log(array);
   
    let angles = 0;
    let trueAngles = 0;
    let sector;
    let tbody = document.createElement("tbody");
    for(let x of array){
        let className = "sektor"
        let cont = document.getElementById("pieContainer")
        let div = document.createElement("div")
        angles = average * x;
        trueAngles = average * value;
        console.log(trueAngles)
        

        div.style.zIndex = -x;
        
        cont.append(div);

        let colors = getRandomColor();
        
        div.classList.add(className + x, "pie");
        
        sector = new Sektor(".sektor"+ x,{
            angle: angles,
            circleColor: "none",
            sectorColor: colors
        })
        console.log(value)
        let pieTable = document.getElementById("pieTable")
        //let thead = document.createElement("thead"); //Dal je mimo tbody, protože se kopírovalo
        
        let tr = document.createElement("tr");
        let tdNumber = document.createElement("td");
        
        let tdAngle = document.createElement("td");
        tdNumber.style.color = colors;
        tdNumber.innerText = value;
        tdAngle = trueAngles + "°";
        pieTable.append(tbody);
        tbody.append(tr)
        tr.append(tdNumber);
        tr.append(tdAngle);
        

    }   
}
window.addEventListener("DOMContentLoaded", init);