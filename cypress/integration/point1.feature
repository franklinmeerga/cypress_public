Feature: escolher categoria

    Scenario: validar produto
        Given acesso o site DEGUNS
        When clicar no botão da categoria desejada
        Then devo visualizar a categoria procurada


    Scenario: validar produto em minicart
        Given estou no site de categoria desejada
        When clicar no boton do produto
        Then deve aparecer o produto no minicart