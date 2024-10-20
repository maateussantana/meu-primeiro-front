let URL =
	"https://e3f39421-7eb4-40e8-8da2-e15f5fa29377-00-3iddw78gvr08e.riker.repl.co:3000/users";
fetch(URL)
	.then((res) => {
		return res.json();
	})
	.then((users) => {
		console.log(users);
		document.querySelector("tbody").innerHTML = montarDados(users)
	});

function deletar() {
	console.log("Deletado com sucesso");
}