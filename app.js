let tentativa;
let quantTentativas = 1;

limite = prompt("Fale qual será o número mais alto que podera ser gerado");

let numeroSecreto = parseInt(Math.random() * limite + 1);

while (tentativa != numeroSecreto) {

    tentativa = prompt(`Escolha um numero entre 1 e ${limite}`);

    if (tentativa == numeroSecreto) {
        alert(`Certa resposta! O número era mesmo ${numeroSecreto}`);
        
        let palavraTentativa = quantTentativas > 1 ? "tentativas" : "tentativa";
        
        alert(`Você acertou em ${quantTentativas} ${palavraTentativa}, parabéns!`)
        
        break;
    } else {
        if (tentativa > numeroSecreto) {
            alert(`O número é menor que ${tentativa}`);
        } else {
            alert(`O número secreto é maior que ${tentativa}`);
        }

        quantTentativas++;
    }
}