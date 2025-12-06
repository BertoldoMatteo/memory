var array=[];
var arrayc=["Agordi","Ammendola","Andreella1","Bertoldo","Cordone","Digiaro","FochesatoA","FochesatoM","Franceschetto","Grauso","Klymkiv","Kumar","Montagna","Prenga","Rosa","Sgaggero","Signorin","Singh","Terraneo","Tognetti","Xu","Zaluska"];
var ind=-1;
var ind1;
var pos1;
var pos=-1;

function creaForm(mod){
    let count=0;
    array=creaArray(mod);
    console.log(array.join(","));
    const output=document.getElementById("cont");
    document.getElementById("b1").disabled=true;
    let table=document.createElement("table");
    for(let i=0;i<mod;i++){
        let tr=document.createElement("tr");
        for(let j=0;j<mod;j++){
            let td=document.createElement("td");
            let button=document.createElement("button");
            button.type="button";
            button.style.backgroundColor="#FFFFFF";
            button.style.width = "50px";
            button.style.height = "100px";
            button.style.border="2px solid black";
            button.id=array[count];            
            let pos=array[count];
            button.onclick=() => indovina(pos);
            td.appendChild(button);
            tr.appendChild(td);
            count++;
        }
        table.appendChild(tr);
    }
    let p=document.createElement("p");
    p.id="risp";
    output.appendChild(table);
    output.appendChild(p);
}

function creaArray(mod){
    let num=0;
    for(let i=0;i<mod*mod;i++){
        num=Math.floor(Math.random()*mod*mod);
        while(array.includes(num)){
            num=Math.floor(Math.random()*mod*mod);
        }
        array[i]=num;
    }
    return array;
}

function indovina(pos){
    pos1 = document.getElementById(pos);
    let n = Math.floor(pos/2);
    pos1.style.backgroundImage = "url('Img/"+arrayc[n]+".jpg')";
    pos1.style.backgroundRepeat = "no-repeat";
    pos1.style.backgroundSize = "cover";
    pos1.style.backgroundPosition = "center";
    pos1.disabled = true;
    if(ind == -1){
        ind = pos;
    } else {
        let v = (pos % 2 == 0) ? 1 : -1;
        ind1 = document.getElementById(ind);
        if(pos + v == ind){
            setTimeout(() => {
                correct(pos1, ind1);
            }, 2000);
            document.getElementById("risp").innerHTML = "hai indovinato";
        } else {
            document.getElementById("risp").innerHTML = "hai sbagliato";
            const buttons = document.querySelectorAll("button");
            buttons.forEach(btn => btn.disabled = true);
            setTimeout(() => {
                stop(pos1, ind1);
                buttons.forEach(btn => btn.disabled = false);
            }, 2000);
        }
        ind = -1;
    }
}

function stop(pos1,ind1){
    pos1.style.backgroundImage="url('Img/white.jpeg')";
    ind1.style.backgroundImage="url('Img/white.jpeg')";
    pos1.disabled=false;
    ind1.disabled=false;
}

function correct(pos1,ind1){
    pos1.style.backgroundImage="url('Img/correct.png')";
    ind1.style.backgroundImage="url('Img/correct.png')";
    pos1.disabled=true;
    ind1.disabled=true;
}
