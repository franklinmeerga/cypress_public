Feature: escolher categoria

    Scenario: Adicionar produto no carrinho
        Given acesso o site DEGUNS
        When clicar no botão da categoria desejada
        When clicar no boton do produto
        Then deve aparecer o produto no minicart


    Scenario: validar produto em minicart
        Given acesso o site DEGUNS
        When clicar no botão da categoria desejada
        When clicar no boton do produto
        Then deve aparecer o produto no minicart