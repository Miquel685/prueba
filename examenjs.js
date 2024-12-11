let informacio = [];
function guradar() {
    const dnius = document.getElementById('dni').value;
    const nomus = document.getElementById('nom').value;
    const llin1 = document.getElementById('llin1').value;
    const llin2 = document.getElementById('llin2').value;
    const data = document.getElementById('data').value;
    let informacio = [dnius,nomus,llin1,llin2,data];
}
function sercadata(){
    const databa = document.getElementById('databa').value;
    const dataal = document.getElementById('dataal').value;
    let contado =1;
    while (databa == dataal){
        if (databa == informacio[4]){
            const pacient = document.createElement('p');
            pacient.textContent(contado + ". " + informacio)
            const pare = document.getElementById('menu');
            pare.appendChild(pacient)
            contado++;
        }
        databa++;
    }
}
function aliminardni() {
    const dnialiminat = document.getElementById('dnialiminar').value;
    for (let i=0; i <= informacio; i++){
        // aqui recorreria l'array bidimensional fins trobar el dni
        if (dnialiminat == informacio[1]){
            //aqui poseria que se esborres pero no se le metode que he de posar
        }
    }
}
