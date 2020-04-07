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
    let trueAngles = 0;
    let angles = 0;
    let sector;
    for (let x = 0; x < array.length; x++) {
        let className = "sektor"
        let cont = document.getElementById("pieContainer")
        let div = document.createElement("div")
        angles = average * array[x];
        trueAngles = average * data[x];
        console.log(trueAngles)
        colors = getRandomColor()

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
        tdAngle = Math.round(trueAngles) + "°";
        pieTable.append(tbody);
        tbody.append(tr)
        tr.append(tdNumber);
        tr.append(tdAngle);
        
    }
    
}
window.addEventListener("DOMContentLoaded", init);