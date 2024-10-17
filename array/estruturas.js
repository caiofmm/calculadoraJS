
var jogador1 = 0;
var jogador2 = 0;

// Verifica se os jogadores são válidos
if (jogador1 !== 1 && jogador2 !== 1) {
  console.log('Os jogadores são válidos');

  // Bloco de pontuação
  if (jogador1 > 0) {
    jogador1++;
    console.log('Jogador 1 marcou um ponto!');
  } else if (jogador2 > 0) {
    jogador2++;
    console.log('Jogador 2 marcou um ponto!');
  } else {
    console.log('Ninguém marcou ponto!');
  }

  // Determina o vencedor
  switch (true) {
    case jogador1 > jogador2:
      console.log('Jogador 1 ganhou!');
      break;
    case jogador2 > jogador1:
      console.log('Jogador 2 ganhou!');
      break;
    default:
      console.log('Empate!');   

  }
} else {
  console.log('Jogadores inválidos');
}