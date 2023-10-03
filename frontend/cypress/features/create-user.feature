Feature: Criar Usuário

    Scenario: Usuário criado com sucesso
        Given estou na página de cadastro
        When preencho os campos username "hbp", email "hbp@cin.ufpe.br" e senha "123"
        And seleciono a opção "Cadastrar"
        Then sou direcionado para a página de login

    Scenario: Usuário autenticado com sucesso
        Given estou na página de login
        When preencho os campos username "hbp", email "hbp@cin.ufpe.br" e senha "123"
        And seleciono a opção "Entrar"
        Then sou direcionado para a página a home