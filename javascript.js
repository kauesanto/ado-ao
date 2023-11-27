document.getElementById("demo").style.display = "block";
<button onclick="exibirAlerta()">Clique para exibir o alerta</button>
`function verificarFormulario() {`

`if (document.getElementById("nome").value === "" || document.getElementById("email").value === "") {`

`alert("Por favor, preencha todos os campos obrigatórios.");`

`} else {`

`alert("Formulário enviado com sucesso!")
