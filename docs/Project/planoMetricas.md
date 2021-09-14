# Plano de Métricas

<p>O Plano de Métricas tem como objetivo descrever todas as ferramentas e métodos utilizados para coletar as métricas e indicadores do projeto. As métricas e indicadores levantados serão levados para todo o time e as decisões serão tomadas em conjunto, levando para a equipe, a importância e o valor de coletar métricas.</p>
<p>É muito importante lembrar que os indicadores permitem  um aspecto muito importante do <b>Manifesto de Desenvolvimento Ágil</b>:<b> Melhoria Contínua</b>, ou seja, avaliando a produtividade do time e percebendo algum problema por meio da coleta de dados, será possível então procurar melhorar</p>

## Burndown
O Burndown é uma ferramenta que permite a visualização das tarefas completadas por dia, mostrando ao final um gráfico em que é possível ver a produtividade da equipe na Sprint. O Burndown nos permite, como time, ter uma boa noção de como está o projeto ao longo da Sprint e consequentemente tomar decisões para que a equipe alcance o seu nível ótimo de produtividade. 

## Velocity
O Velocity é um indicador utilizado para definir a quantidade média entre os pontos do Backlog do produto e o incremento do produto durante a sprint, ou seja, o Velocity indica uma média entre o planejado e o entregue. 

## Health Check

O objetivo do Health Check é uma ferramenta para analisar o panorama geral da situação do time, visando entender aspectos como trabalho em equipe, respeito e até saúde do código. A equipe irá votar entre 1 a 5 para todos os aspectos, podendo ter uma relação das sprints passadas com a saúde do time.

## Quadro de conhecimento
O quadro de conhecimento tem como objetivo servir de monitoramento do conhecimento da equipe e ele deve ser modificado toda Sprint para que seja possível ver o progresso do time.

## Cumulative Flow
O Cumulative Flow é um gráfico que mostra como está o andamento das issues ao longo dos dias. Por exemplo, é possível avaliar em qual época da sprint mais issues estão em progresso, ou quando em que época o time costuma finalizar mais issues. A partir disso é possível tomar decisões para que a entrega contínua melhore.

## Métricas Sonar Cloud

Algumas métricas serão retiradas da integração feita com o SonarCloud. São elas:

* functions
* complexity
* comment_lines_density
* duplicated_lines_density
* coverage
* ncloc
* security_rating
* tests
* test_success_density
* test_execution_time
* reliability_rating

Elas serão geradas pela extensão do sonarCloud, segue abaixo a rota para geração dessas métricas para cada repositório do projeto

* [**2021.1-Multilind-content-server**](https://sonarcloud.io/api/measures/component_tree?component=fga-eps-mds_2021.1-Multilind-content-server&metricKeys=files,functions,complexity,comment_lines_density,duplicated_lines_density,security_rating,tests,test_success_density,test_execution_time,reliability_rating,coverage,ncloc&ps=500)
* [**2021.1-Multilind-files-server**](https://sonarcloud.io/api/measures/component_tree?component=fga-eps-mds_2021.1-Multilind-files-server&metricKeys=files,functions,complexity,comment_lines_density,duplicated_lines_density,security_rating,tests,test_success_density,test_execution_time,reliability_rating,coverage,ncloc&ps=500)
* [**2021.1-Multilind-user-server**](https://sonarcloud.io/api/measures/component_tree?component=fga-eps-mds_2021.1-Multilind-user-server&metricKeys=files,functions,complexity,comment_lines_density,duplicated_lines_density,security_rating,tests,test_success_density,test_execution_time,reliability_rating,coverage,ncloc&ps=500)
* [**2021.1-Multilind-Mobile-App**](https://sonarcloud.io/api/measures/component_tree?component=fga-eps-mds_2021.1-Multilind-Mobile-App&metricKeys=files,functions,complexity,comment_lines_density,duplicated_lines_density,security_rating,tests,test_success_density,test_execution_time,reliability_rating,coverage,ncloc&ps=500)

## Referências
* Agile Project Management Best Practices & Guides: <https://blog.zenhub.com/how-the-zenhub-team-uses-zenhub-boards-on-github/>. Último acesso em 31/07/2021.
* Desenvolvimento Ágil Srum: <http://www.desenvolvimentoagil.com.br/scrum/>. Último acesso em 31/07/2021.
* Desenvolvimento Ágil XP: <http://www.desenvolvimentoagil.com.br/xp/>. Último acesso em 01/08/2021.
* Cultura Ágil: <https://www.culturaagil.com.br/kanban-do-inicio-ao-fim/>. Último acesso em 01/08/2021.
* Kanban: O que é, como funciona e como implantar esse método: <https://blog.egestor.com.br/kanban/>. Último acesso em 01/08/2021.
