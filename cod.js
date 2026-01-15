function genera(){
    let numeri = parseInt(document.getElementById("numero").value);
    if (!numeri || numeri < 1 || numeri > 20){
        document.getElementById("errore").innerHTML="Errore, inserisci un numero valido";
        return;
    }
    document.getElementById("errore").innerHTML ="";
    document.getElementById("genera").disabled=true;
    let div = document.getElementById("div");
    div.innerHTML="";
    let num =[];
    for (let i = 0; i < numeri; i++){
        let br = document.createElement("br");
        let testo = document.createTextNode("Scegli un numero");        
        let input = document.createElement("input");
        input.type = "number";
        input.id = "numero" + i;
        num.push("numero" + i);
        div.appendChild(testo);
        div.appendChild(input);
        div.appendChild(br);
    
    }
    let bottone= document.createElement("button");
    bottone.textContent = "Genera";
    div.appendChild(bottone);
    let somma = 0;
    let prodotto = 1;
    bottone.onclick = function () {
    calcola(num, somma, prodotto);
    };
}
function calcola(num, somma, prodotto){
    let nume= [];
    for (let i = 0; i < num.length; i++){
        nume.push(parseInt(document.getElementById(num[i]).value));
    }
    for (let valore of nume) {
        if (valore % 2 === 0) {
            somma += valore;
        }
    }
    for (let i in nume){
        if(i % 2 == 1)
        prodotto *= nume[i];
    }
    document.getElementById("ris").innerHTML = "La somma dei numeri in posizione pari è :" + somma
                                                + "<br>Il prodotto dei numeri in posizione dispari è :" + prodotto;
}
