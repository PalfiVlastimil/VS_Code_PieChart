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

    let colors;
    for(let a of data){
       average += Number(a)
       array.push(average);

    }
    average = 360 / average // 60 => průměr pro hodnoty
    

    let tbody = document.createElement("tbody");
    let tr1 = document.createElement("tr");
    let textColor = document.createElement("td");
    let textAngle = document.createElement("td");
    textColor.innerText = "Hodnota & Barva";
    textAngle.innerText = "Úhel";
    tbody.append(tr1);
    tr1.append(textColor);
    tr1.append(textAngle);

    let trueAngles = 0;
    let angles = 0;
    let sector;
    for (let x = 0; x < array.length; x++) { //prochátí pole hodnot pro výseče a zároveň pravé hodnoty výseče
        let className = "sektor"
        let cont = document.getElementById("pieContainer")
        let div = document.createElement("div")
        angles = average * array[x]; //úhly výsečů
        trueAngles = average * data[x]; //úhly pravých hodnot
        console.log(trueAngles)
       
        colors = getRandomColor() //náhodné barvy (prochází obě pole)

        div.style.zIndex = -x;
        
        cont.append(div);
        div.classList.add(className + x, "pie");
        
        sector = new Sektor(".sektor"+ x,{
            angle: angles,
            circleColor: "none",
            sectorColor: colors
        })

        trueAngles = average * x
        let tr = document.createElement("tr"); 
        let tdNumber = document.createElement("td");
        let tdAngle = document.createElement("td");
        
        tdNumber.style.color = colors;
        tdNumber.innerText = data[x];
        tdAngle.innerText = Math.round(trueAngles) + "°";

        pieTable.append(tbody);
        
        tbody.append(tr);
        tr.append(tdNumber);
        tr.append(tdAngle);
    }
    
        
    
}
window.addEventListener("DOMContentLoaded", init);