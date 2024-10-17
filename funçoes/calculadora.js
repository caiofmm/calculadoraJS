function calculadora() {
    const operacao = Number(prompt ('Escolha uma operação:\n 1 - Soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**) '));

    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida');
        calculadora()
    } else {
        
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos!!')
            calculadora()
        } else{
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperação();
        }
        function subtração() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperação();
        }
        function multiplicação() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperação();
        }
        function divisãoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperação();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            novaOperação();
        }
        function potenciação() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual ${resultado}`)
            novaOperação();
        }
        
        function novaOperação() {
            let opção = prompt('Dseja realizar outra operação?\n 1 - SIM\n 2 - NÃO');
            if (opção == 1) {
                calculadora()
            } else if (opção == 2) {
                alert('Até mais!!')
            } else {
                alert('Digite uma opção válida!')
                novaOperação();
            }
        }
    

        }
    
        
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtração();
        } else if (operacao == 3) {
            multiplicação();
        }else if (operacao == 4){
            divisãoReal();
        }else if (operacao == 5){
            divisaoInteira();
        }else if (operacao == 6) {
            potenciação();
        }}
    

    

}
calculadora();