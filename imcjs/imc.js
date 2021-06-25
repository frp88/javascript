/* Desenvolvido por Fernando Roberto Proença */
function Limpar() {
	document.getElementById("imc").innerHTML = "";
	document.getElementById("pesoideal").innerHTML = "";
	document.getElementById("divresultado").style.background = "#efefef";		
	document.getElementById("divresultado").style.border = "none";
	document.getElementById("altura").focus(); 
}

function CalculaIMC() {	
	if (document.getElementById("altura").value == "" || 
		document.getElementById("peso").value == "") {
		alert("Digite a altura e o peso.");
	}
	else {		
		var alturaDigitada = document.getElementById("altura").value;
		var novaaltura = alturaDigitada.replace(",", ".");
		var altura = parseFloat(novaaltura);
		
		var pesoDigitado = document.getElementById("peso").value;
		var novopeso = pesoDigitado.replace(",", ".");
		var peso = parseFloat(novopeso);
		
		var quadrado = (altura * altura);		
		var imc = (peso / quadrado).toFixed(1);	
		document.getElementById("divresultado").style.border = "solid 1px #ccc";
		document.getElementById("divresultado").style.display = "block";
 		var resposta = "";
		var cor = "";
		var corFonte = "Black"
		if (imc < 18.5) {
			resposta = "Abaixo do peso.";
			cor = "Orange";
		} else if ((imc >= 18.5) && (imc < 25)) {
			resposta = "Peso ideal (parabéns)!";
			cor = "#47c847";
		} else if ((imc >= 25) && (imc < 30)) {  
			resposta = "Levemente acima do peso.";
			cor = "yellow";
		} else if ((imc >= 30) && (imc < 35)) {
			resposta = "Obesidade grau I.";
			cor = "DarkOrange";
		} else if ((imc >= 35) && (imc < 40)) {
			resposta = "Obesidade grau II (severa).";
			cor = "OrangeRed";
			corFonte = "White";
		} else if (imc >= 40) {
			resposta = "Obesidade grau III (mórbida).";
			cor = "Red";
			corFonte = "White";
		}
		else{
			resposta = "Valores inválidos.";
			cor = "#efefef";		
			document.getElementById("divresultado").style.border = "none";
		}

		document.getElementById("imc").innerHTML = 
			"Seu IMC é: " + imc + " ==> " + resposta;
		document.getElementById("divresultado").style.background = cor;
		document.getElementById("divresultado").style.color = corFonte;
		
		// Cálculo do Peso Ideal de Acordo com a Idade
		var pesoMimino = ((altura * altura ) * 18.5).toFixed(0);
		var pesoMaximo = ((altura * altura ) * 25).toFixed(0);
		document.getElementById("pesoideal").innerHTML = 
		"Para sua altura o peso ideal é entre: " + pesoMimino + 
		" Kg e " + pesoMaximo + " Kg.";
	}
}