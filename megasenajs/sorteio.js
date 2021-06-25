function sortear(){
	// Recebe a quantidade de jogos digitados pelo usuário
	var qtd_jogos = parseInt(document.getElementById("txtQtd").value);
	var result = '';
	if (qtd_jogos > 0){
		result += '<h2 class="my3">Quantidade de jogos: ' + qtd_jogos + '</h2>' ;
		result += '<h2 class="my3">Jogos sorteados:</h2>';
		var jogos = []; // Inicia a lista de jogos
		// Laço para montar a quantidade de jogos desejado
		for (var j=0; j<qtd_jogos; j++){
		    // Inicia a lista dos números sorteados para cada jogo
		    var nros_sorteados = []; 
		    // Laço para sortear os 6 números
		    var n = 1;
	        while (n <= 6){
	        	// Sortei a um número
		       var numero_sorteado = Math.floor((Math.random() * 60) + 1);
		        var nro_ja_sorteado = false;
		        // Laço para percorrer a lista de números já sorteados e já armazenados e verificar se o número sorteado já está na lista
		        for (var i=0; i<nros_sorteados.length; i++){
		        	// Se o número sorteado já estiver na lista altera a variável de controle e sai do laço
		 			if (nros_sorteados[i] == numero_sorteado){
		 				nro_ja_sorteado = true;
		 				break;
		 			}
		 		}
		 		// Se o número sorteado não estiver na lista, adiciona-o na lista
		 		if (nro_ja_sorteado == false){
	           	   nros_sorteados.push(numero_sorteado);
	           	    n++;
	    	    }
			}
			// Ordena os números em ordem crescente
			nros_sorteados.sort(function(a, b){return a - b});
			// Adiciona a lista de números sorteados na lista de Jogos (lista dentro de lista (array dentro de array))
			jogos.push(nros_sorteados);
		}
		var msg = "";
		// Laço que percorre e imprime a lista de jogos e a lista de números sorteados para cada jogo         
		for (var j=0; j<qtd_jogos; j++){
			result += '<h2><i class="fas fa-chevron-right"></i> Jogo ' + (j+1) + ": ";
			for (var n=0; n<6; n++){
		 	   result += '<span class="bola">' + jogos[j][n] + "</span>";
		 	}
			result += "</h2>";		
		}
		// Adiciona o resultado na DIV do HTML
		document.getElementById("resultado").innerHTML = result;
	}
	else{
		alert("Quantidade de Jogos Inválida!");
	}
}