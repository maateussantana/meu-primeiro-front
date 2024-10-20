function montarDados(users) {
	let dados = "";
	for (let i = 0; i < users.length; i++) {
		dados += 
			`<tr>
				<td>${users[i].id}</td>
				<td>${users[i].username}</td>
				<td>${users[i].password}</td>
				<td>
				<a class="waves-effect waves-light btn"><i class="material-icons left">edit</i></a>
				<a class="waves-effect red accent-4 waves-light btn"><i class="material-icons left">delete</i></a>
				</td>
			</tr>
			`
	}
	return dados;
}