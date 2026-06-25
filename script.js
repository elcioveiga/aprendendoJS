function revelarMensagem() {
	document.getElementById("mensagem").innerText = "Olá, mundo! Aprendendo JS";
}

function mostraNome() {
	let nome = document.getElementById("nomeUsuario").value;

	document.getElementById("resultadoNome").innerText = "Bem-vindo, " + nome + "!"
}