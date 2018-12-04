<?php if($_SERVER['REQUEST_METHOD'] == 'POST' and !empty($_POST['botao_submit'])) {

	/*
		teste de post botao_submit - Primeiro realize um teste para saber se o post veio relamente do botão submit
		com este verificador !empty ele irá anular qualquer post que não seja o botao_submit
	*/

	/*
		depois que verificar se aconteceu um post e este post veio do botao_submit escolhido
		utilize PDO para se conectar ao banco de dados, tanto em sql quanto em sqli
	*/
	 	try { $conect = new PDO("mysql:host=HOST; dbname=BANCODEDADOS", "USUARIO", "SENHA");
	/*
		atribui leitura de erros
	*/
			$conect -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	/*
		ativa aceitação de caracteres em nosso idioma como acentuação
	*/
			$conect -> exec("set names utf8");
	
	/*
		verifica se  a pesquisa está em uma seção para não precisar buscar o banco de dados duas vezes ou mais
		caso o ususário tenha dedos nervoso no F5 - evita DDOS
	*/
	
			if(!$_SESSION["session_do_select"]) {
				$statement = $conect -> prepare("SELECT COLUNA FROM TABELA WHERE COLUNA = :PESQUISA");
				$statement -> bindValue(":PESQUISA", $PESQUISA);
				$statement -> execute();
	/*
		insere os dados da pesquisa no session escolhido
	*/
				$_SESSION["session_do_select"] = $statement -> fetchAll(); }

	/*
		encerra a conexão ao banco de dados para dificultar a vida dos espertalhões
		e coloca em um LOG no console para quando estiver desenvolvendo, saber qual select foi ativado
	*/

			$conect = null;
			echo "<script>console.log('connection: botao_submit');</script>"; }
			
	/*
		caso aconteça algum erro, imprime na tela
	*/
			
		catch(PDOException $error) { echo $error -> getMessage(); }

	/*
		utilize um for com foreach para exibir com um indice tudo o que veio do search
	*/

		$contagemArray = count($_SESSION["session_do_select"]);
		for($idArray = 0; $idArray < $contagemArray; $idArray++) {
			$atualArray = $_SESSION["session_do_select"][$idArray];
			$session_do_select[] = $atualArray[0]; }
		foreach($_SESSION["session_do_select"] as $index => $data_content) {

			/*
				um print aqui e mostrara tudo o que achou dentro da tabela na coluna definida
			*/
		
		} } ?>
