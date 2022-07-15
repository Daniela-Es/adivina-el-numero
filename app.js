let x = Math.round(Math.random() * 50);
let gamer = {
    intentos: 0
}

function compare() {
    let guessNumber = document.getElementsByName("guessNumber")[0].value;
    let min = document.getElementsByName("guessNumber")[0].min;
    let max = document.getElementsByName("guessNumber")[0].max;
    gamer.intentos += 1;
    document.getElementById("yourTries").innerHTML =  ` Llevas ${gamer.intentos} intento(s)`;
    if (guessNumber === '') {
        alert('introduce un numero para adivinar')
    } else if (guessNumber < x) {
            if (guessNumber < min ) {
                alert('Elige un numero mayor a cero')
            } else {
                document.getElementById("yourNumber").innerHTML = ' Tu numero es menor que el numero generado';
            }
    } else if (guessNumber > x) {
        if (guessNumber > max) {
            alert('Elige un numero menor a 50')
        } else {
            document.getElementById("yourNumber").innerHTML = 'Tu numero es mayor que el numero generado';
        }
    } else {
        function interna() {
            document.getElementById("yourNumber").innerHTML = 'Felicidades!!!!';
            document.getElementById("hiddenNumber").innerHTML = x;
            document.getElementsByName("guessNumber")[0].disabled = true;
            document.getElementById("yourTries").innerHTML =  ` Intentos finales: ${gamer.intentos}`
            document.getElementsByClassName("guessBtn")[0].style.display = 'none';
            document.getElementsByClassName("reloadBtn")[0].style.display = 'block';
        }
        interna();
        
        // document.getElementsByClassName("guessBtn")[0].onclick = location.reload();
    }
    
}

function reload() {
    document.getElementsByClassName("reloadBtn")[0].onclick = location.reload();
    
}

function doSomething(evt) {
    var val = evt.target.value;

    var output = document.querySelector('#numberValue');

    output.innerHTML = "Value selected: " + val;
    console.log(val);
}


















