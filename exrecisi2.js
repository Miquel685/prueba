let resultat = [];
let resposta =[];
let conta= 1;
// antes de comensar el joc crearia la resposta 
function averiguacombinacio() {
    for (let i = 0; i = 5; i++) {
        resposta[i] = document.getElementById('num' + 1); 
    }
    for (let i = 0; i < resposta.length; i++){
        if (resposta[i] == resultat[i]){
            const posicio = [resposta[i]];
        }
         for (let j = 0; j < resultat.length; j++ ){
            if (resposta[i]== resultat[j]){
                const adivinansa = [resposta[i]];
            }
         }
    }
    for (let i = 0; i < resultat.length; i++) {
        if (resultat == adivinansa){
            conta++;
        }
    }
    if (conta == 5){
        alert("as endivinat la combinacio");
    }else{
        alert("Hi ha aquest numeros" + adivinansa)
        alert("As encertat la posicio de aquest numeros" + posicio)
    }
}