# EVM - Earned Value Management

O EVM é uma metodologia de gerenciamento de projeto que integra cronograma, custos e escopo para medir o desempenho do projeto. Com base em valores planejados e reais, o EVM pode prever o futuro e permitir que os gerentes de projeto se ajustem de acordo. O EVM utiliza o EVA como uma de suas ferramentas, sendo EVA  a análise de valor agregado. É uma técnica quantitativa usada para avaliar o desempenho do projeto calculando o cronograma e as variações de custo.

Uma vez que você está 20% em um projeto, seu desempenho atual pode ser usado para prever o futuro do projeto com um desvio de mais ou menos 10%. Esta poderosa capacidade preditiva é possibilitada pelo EVM, tornando-o uma das melhores medidas de controle de custos de projeto disponíveis.

Para melhor entender o funcionamento do EVM, foi utilizado o artigo [*AgileEVM – Earned Value Management in Scrum Projects*](https://34slpa7u66f159hfp1fhl9aur1-wpengine.netdna-ssl.com/wp-content/uploads/2014/11/Earned-Value-Analysis-in-Scrum-Projects.pdf). Foi utilizada como base a tabela feita pelo grupo [**Ada**](https://fga-eps-mds.github.io/2019.1-ADA/#/docs/product/agile_earned_value_management).

## Histórico de Revisão
| Data | Versão | Descrição | Autor |
|------|--------|-----------|-------|
| 06/10/2021 | 1.0 | Documentação dinâmica do EVM | Micaella Gouveia |
| 28/10/2021 | 1.1 | Adição das análises da R1 e MVP | Micaella Gouveia |

## EVM - Multilind

Para o monitoramento foram consideradas as sprints de desenvolvimento, que começaram na Sprint 4, totalizando 3 meses de desenvolvimento do projeto. As análises de custos iniciais foram feitas anteriormente em [**Custos do Projeto**](Project/custos.md).

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQLyduqI-13LR_8Mrl7f4B3EwyqbJUiTDZV0blZ9_96dupWKqRyj4xOV6nMPeqMaDnNQVGLXQbGndVW/pubhtml" width="900px" height="600px"></iframe>


## Análise das Major Releases
A partir dos gráficos gerados de Valor Planejado x Valor Agregado de cada major release, foi possível fazer uma análise dos custos do projeto em seu desenvolvimento. É possível ver todos os gráficos na tabela acima na aba "Gráficos".

### Release 1

![r1](../img/evm/analiseR1.png)

A Release 1 contou apenas com 2 sprints de desenvolvimento, sendo as sprints inicias. Podemos ver que houve um grande aumento do valor planejado em comparação com as primeiras sprints, pois nela que se iniciou o desenvolvimento. 

Em relação à pontuação, como não havia um conhecimento prévio do velocity da equipe, pode-se notar que na primeira sprint foi planejado um valor acima do agregado, gerando dívidas técnicas que não foram pagas no período da Release 1.

Assim essa release teve 91 pontos planejados e 78 pontos entregues.

### MVP 

![mvp](../img/evm/analiseMVP.png)

Para a entrega do MVP contamos com 4 sprints de desenvolvimento. Pelo gráfico podemos analisar que durante as primeiras 3 sprints o time não conseguiu agregar o valor planejado, mas ficou muito proximo do valor planejado.

É possível notar também que o valor planejado sempre se mantém em crescimento constante. Isso se dá pois o projeto aplica metodologias ágeis, que enfatizam os conceitos de pequenas entregas contínuas.

Já nas últimas semanas antes da entrega do MVP, pode-se notar um grande esforço do time para entregar o que foi proposto como MVP, sanando todas as dívidas técnicas que ficaram pelo caminho, aumentando significativamente o valor agregado aquelas sprints. 

No fim, é possível entender que, o projeto até aqui, tentou se manter nesse padrão de entregas contínuas e que ao final da entrega do MVP, todas as funcinalidades propostas foram entregues.

Assim, essa entrega teve 135 pontos planejados e 148 pontos entregues, sanando assim as dívidas técnicas acumuladas na major release anterior.

### Release N
Para a entrega Final contamos com 5 sprints de desenvolvimento.

## Referências
* Earned Value Management: The Basics. Disponível em <https://www.ecosys.net/knowledge/earned-value-management-basics/>. Último acesso em 06/10/2021.
* AgileEVM – Earned Value Management in Scrum Projects. Disponível em <https://34slpa7u66f159hfp1fhl9aur1-wpengine.netdna-ssl.com/wp-content/uploads/2014/11/Earned-Value-Analysis-in-Scrum-Projects.pdf>. Último acesso em 06/10/2021.