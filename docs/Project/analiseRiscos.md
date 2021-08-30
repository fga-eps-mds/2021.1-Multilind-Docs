# Plano de Análise de Riscos

## Histórico de Revisão
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 27/08/2021 | 1.0 | Criação do documento | Grupo EPS |
| 28/08/2021 | 1.1 | Elicitação dos riscos, probabilidades, impactos e ações | Grupo EPS e MDS |
| 30/08/2021 | 1.2 | Adição da tabela de riscos e análise | Micaella Gouveia |

## Introdução

O objetivo deste documento é explicitar como aconteceu o plano de análise de riscos. O gerenciamento de riscos está incluso no processo de gerenciamento de projeto que inclui, além dos riscos, pessoas, custos, escopo, entre outros. O documento define como serão identificados, quantificados e qualificados, mantidos e controlados todos os riscos previstos. _Para produção deste artefato, foi usado o documento do grupo Gaia como base cujo a wiki se encontra nas referências desse documento._

## Estrutura Análitica de Riscos

![Estutura Análitica de riscos](../assets/riscos/riscos.png)

### Descrição dos Itens da Estrutura analítica de Risco

#### Gerência de projeto

- **Planejamento**: São riscos relacionados a erros de planejamento, como tarefas grandes em períodos curtos.
- **Estimativa**: São erros que dizem respeito a erros de estimativa, como por exemplo erros de pontuação de histórias de usuário.
- **Controle**: São riscos referentes à falta de ação sobre riscos identificados.

#### Organizacional

- **Recursos Humanos**: Corresponde aos riscos relacionados aos recursos humanos, bem como o comprometimento da equipe de desenvolvimento e falta de comunicação entre as partes envolvidas.
- **Priorização**: São riscos relacionados aos erros de priorização, gerando atrasos nas entregas, por existir dependências entre as tarefas.

#### Técnico

- **Requisitos**: Riscos relacionados aos requisitos levantados e ao escopo definido.
- **Tecnologia**: É relativo a riscos relacionados às tecnologias e ferramentas utilizadas no projeto.
- **Infraestrutura**: Um dos pontos mais críticos do gerenciamento de riscos em projetos de software, pois geralmente nos esquecemos de providenciar com antecedência a infraestrutura onde o software será executado. Envolve toda a questão de arquitetura, definição de tecnologia.

#### Externos
- **Mercado**: Baixa adesão dos usuários a aplicação, risco relacionado à utilização e evolução do projeto no mercado.
- **Cliente**: Diz respeito aos riscos relacionados com o cliente, como aprovação da solução, boa aceitação da aplicação.
- **Ambiente**: O ambiente pode influenciar no desempenho da equipe e no desenvolvimento do produto. No contexto de pandemia, trabalhos remotos podem acarretar vários riscos.

#### Qualidade

- **Funcionalidade**: Contempla tudo relacionado à funcionalidade do software.
- **Usabilidade**: A usabilidade engloba todos os aspectos referentes à interface com o usuário, facilidade e acessibilidade.
- **Eficiência**: Garantir que o usuário consiga ter as respostas da aplicação de forma rápida e coesa.
- **Portabilidade**: Se refere a que plataformas/sistemas operacionais o software irá rodar e como será feita a compatibilidade.

## Probabilidade

| Probabilidade | % de certeza | Peso |
|---------------|--------------|------|
| Nula | 0% | 0 |
| Muito baixa | 0 a 20% | 1 |
| Baixa | 20 a 40% | 2 |
| Média | 40 a 60% | 3 |
| Alta | 60 a 80% | 4 |
| Muito alta | 80 a 100% | 5 |

## Impacto

| Impacto | Descrição | Peso |
|:-------:|:---------:|:----:|
| Muito Baixo | Quase imperceptível para o projeto | 1 |
| Baixo | Emite pouco impacto sobre o projeto | 2 |
| Médio | Existe um impacto considerável, mas é recuperável | 3 |
| Alto | Existe grande impacto no projeto | 4 |
| Muito Alto | Impede o prosseguimento do projeto | 5 |

### O grau de risco é definido pela multiplicação entre probabilidade e impacto. Conforme tabela abaixo:

![ear](https://i.imgur.com/UgqOw1k.png)

Sendo que:

1. Risco >= 15: **Elevado**
2. 5 < Risco < 15: **Médio**
3. Risco =< 5: **Baixo**

## Riscos organizacionais

| ID | Risco | Probabilidade | Impacto | Grau de Risco |
|----|-------|---------------|---------|---------------|
| 1 | Falha de comunicação         | 1 | 5 | **5**|
| 2 | Descomprometimento da Equipe | 2 | 5 | **10** |
| 3 | Erro de Priorização          | 2 | 3 | **6**|
| 4 | Desistência de Membros       | 1 | 4 | **4**|
| 5 | Desavenças entre os membros  | 2 | 3 | **6**|
| 6 | Tensão de fim de semestre    | 4 | 3 | **12** |
| 7 | Falta de motivação           | 3 | 4 | **12** |
| 8 | Atraso nas entregas          | 3 | 3 | **9**|

## Riscos técnicos

|ID | Risco | Probabilidade | Impacto | Grau de Risco |
| - | -  -  |       -       |  -      |    -          |
| 9 | Dificuldade com as tecnologias     | 3 | 4 | **12** |
|10 | Dificuldade em criar backlog       | 2 | 4 | **8**|
|11 | Má escolha das tecnologias         | 2 | 3 | **6**|
|12 | Dificuldade de ambientação         | 2 | 3 | **6**| 
|13 | Arquitetura mal definida           | 3 | 3 | **9**| 
|14 | Dificuldade de deploy da aplicação | 3 | 2 | **6**| 
|15 | Dificuldade em hospedar a aplicação| 2 | 2 | **4**|
|16 | Documentação que induz ao erro     | 1 | 4 | **4**| 

## Riscos de Qualidade
|ID | Risco | Probabilidade | Impacto | Grau de Risco |
| - | -  -  |       -       |  -      |    -          |
|17 | Ausência de testes	                        | 3 | 4 | **12** | 
|18 | Falhas e bugs                                 | 3 | 2 | **6**| 
|19 | Má implementação de UX                        | 3 | 2 | **6**| 
|20 | Má implementação de UI                        | 2 | 2 | **4**| 
|21 | Má prática do processo de desenvolvimento     | 1 | 3 | **3**| 
|22 | Aplicação não atender expectativas do usuário | 2 | 4 | **8**| 
|23 | Não cumprimento dos requisitos elicitados     | 2 | 4 | **8**|  
|24 | Falta de validação com o stakeholder          | 2 | 5 | **10** |


## Riscos de Gerência de projeto

| ID | Risco | Probabilidade | Impacto | Grau de Risco |
|----|-------|---------------|---------|---------------|
| 25 | Escopo mal definido                     | 3 | 4 | **12** |
| 26 | Mudança Arquitetural                    | 4 | 4 | **16** |
| 27 | Má gestão do tempo                      | 3 | 4 | **12** |
| 28 | Cronograma inviável                     | 5 | 4 | **20** |
| 29 | Má pontuação das US                     | 3 | 2 | **6** |
| 30 | Problema no gerenciamento da equipe     | 3 | 2 | **6** |
| 31 | Sobrecarga de tarefas                   | 2 | 4 | **8** |
| 32 | Mudanças de tecnologias                 | 2 | 4 | **8** |
| 33 | Horários divergentes dos integrantes    | 1 | 3 | **3** |

## Riscos Externos

| ID | Risco | Probabilidade | Impacto | Grau de Risco |
|----|-------|---------------|---------|---------------|
| 34 | Suspensão das aulas                                                  | 1 | 5 | **5** |
| 35 | Baixa adesão da aplicação                                            | 2 | 2 | **4** |
| 36 | Imprevistos com infraestrutura(internet, energia, computador)        | 2 | 2 | **4** |
| 37 | Afastamento de integrante (enfermidade, luto, assistência familiar)  | 3 | 3 | **9** |
| 38 | Atualizações drásticas das tecnologias escolhidas                    | 1 | 3 | **3** |

<br/>

# Planejamento de respostas aos riscos

<table>
    <thead>
        <tr>
            <th scope="col">Grau</td>
            <th scope="col">#</td>
            <th scope="col">Risco</td>
            <th scope="col">Ação</td>
            <th scope="col">Solução</td>
        </tr>
    </thead>
    <tbody>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>3</th>
            <td>21</td>
            <td>Má prática do processo de desenvolvimento</td>
            <td>Prevenir</td>
            <td>Estudar boas práticas de programação</td>
        </tr>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>3</th>
            <td>33</td>
            <td>Horários divergentes dos integrantes</td>
            <td>Mitigar</td>
            <td>Ser flexível com em relação ao horário e às tarefas que serão realizadas</td>
        </tr>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>3</th>
            <td>38</td>
            <td>Atualizações drásticas das tecnologias escolhidas</td>
            <td>Aceitar</td>
            <td>Se necessário, adaptar-se à nova atualização</td>
        </tr>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>4</th>
            <td>15</td>
            <td>Dificuldade em hospedar a aplicação</td>
            <td>Mitigar</td>
            <td>Estudar sobre as tecnologias utilizadas</td>
        </tr>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>4</th>
            <td>36</td>
            <td>Imprevistos com infraestrutura(internet, energia, computador)</td>
            <td>Aceitar</td>
            <td>Tentar realocar as tarefas de acordo com o que aconteceu</td>
        </tr>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>4</th>
            <td>16</td>
            <td>Documentação que induz ao erro</td>
            <td>Prevenir</td>
            <td>Valorizar a fase de documentação e mantê-la atualizada, além de todos os membros estarem alinhados com os documentos produzidos </td>
        </tr>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>4</th>
            <td>20</td>
            <td>Má implementação de UI</td>
            <td>Prevenir</td>
            <td>Estudar sobre UI e testar todas as fases com as clientes</td>
        </tr>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>4</th>
            <td>35</td>
            <td>Baixa adesão da aplicação</td>
            <td>Mitigar</td>
            <td>Fazer publicidade do aplicativo para o nosso público alvo</td>
        </tr>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>5</th>
            <td>34</td>
            <td>Suspensão das aulas</td>
            <td>Aceitar</td>
            <td>Aguardar o retorno das aulas</td>
        </tr>-
        <tr class="risco baixo" style="background:#FFFF66">
            <th>5</th>
            <td>1</td>
            <td>Falha de comunicação </td>
            <td>Mitigar</td>
            <td>Incentivar dailys, comentários em PRs e no grupo do telegram.</td>
        </tr>
        <tr class="risco baixo" style="background:#FFFF66">
            <th>4</th>
            <td>4</td>
            <td>Desistência de Membros</td>
            <td>Aceitar </td>
            <td>Realocar tarefas para os membros restantes</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>6</th>
            <td>11</td>
            <td>Má escolha das tecnologias</td>
            <td>Prevenir</td>
            <td>Estudar sobre as tecnologias de acordo com a arquitetura definida</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>6</th>
            <td>18</td>
            <td>Falhas e bugs</td>
            <td>Mitigar</td>
            <td>Dedicar issues de bugs e refatoração</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>6</th>
            <td>19</td>
            <td>Má implementação de UX</td>
            <td>Prevenir</td>
            <td>Testar todas as fases com as clientes</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>6</th>
            <td>12</td>
            <td>Dificuldade de ambientação</td>
            <td>Mitigar</td>
            <td>Estudar sobre as tecnologias utilizadas</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>6</th>
            <td>14</td>
            <td>Dificuldade de deploy da aplicação</td>
            <td>Mitigar</td>
            <td>Estudar sobre as tecnologias utilizadas</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>6</th>
            <td>3</td>
            <td>Erro de Priorização</td>
            <td>Prevenir </td>
            <td>Definir a prioridade e seguir a documentação</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>6</th> 
            <td>5</td>
            <td>Desavenças entre os membros</td>
            <td>Prevenir</td>
            <td>Respeitar tempo, opinião e limitações dos membros, ser empático</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>6</th>
            <td>29</td>
            <td>Má pontuação das US</td>
            <td>Prevenir</td>
            <td>Definir com todos os membros a pontuação, fazer quadros de distribuição de pontos</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>6</th>
            <td>30</td>
            <td>Problema no gerenciamento da equipe</td>
            <td>Prevenir</td>
            <td>Ter bem definido dias e horários de reunião, pareamentos e entregas</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>8</th>
            <td>10</td>
            <td>Dificuldade em criar backlog</td>           
            <td>Prevenir</td>
            <td>Valorizar fase de modelagem e definir backlog com todos os membros e clientes</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>8</th>
            <td>22</td>
            <td>Aplicação não atender expectativas do usuário</td>
            <td>Prevenir</td>
            <td>Testar todas as fases com as clientes, recebendo feedbacks e respondendo-os</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>8</th>
            <td>23</td>
            <td>Não cumprimento dos requisitos elicitados</td>
            <td>Prevenir</td>
            <td>Estar alinhado com a documentação</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>8</th>
            <td>31</td>
            <td>Sobrecarga de tarefas</td>
            <td>Prevenir</td>
            <td>Alertar sobre semanas mais corridas, dias de prova, entre outros</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>8</th>
            <td>32</td>
            <td>Mudanças de tecnologias</td>
            <td>Prevenir</td>
            <td>Estudar sobre as tecnologias utilizadas</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>9</th>
            <td>8</td>
            <td>Atraso nas entregas</td>
            <td>Prevenir </td>
            <td>Dar prioridade às tarefas, saber dividir o cronograma das sprints</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>9</th>
            <td>13</td>
            <td>Arquitetura mal definida</td>
            <td>Prevenir</td>
            <td>Estudar sobre arquitetura, validar com a professor</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>9</th>
            <td>37</td>
            <td>Afastamento de integrante (enfermidade, luto, assistência familiar)</td>
            <td>Aceitar</td>
            <td>Tentar realocar as tarefas de acordo com o que aconteceu</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>10</th>
            <td>2</td>
            <td>Descomprometimento da Equipe</td>
            <td>Mitigar</td>
            <td>Incentivar dailys, comentários em PRs e no grupo do telegram.</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>10</th>
            <td>24</td>
            <td>Falta de validação com o stakeholder</td>
            <td>Prevenir</td>
            <td>Manter contato com o stakeholder</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>12</th>
            <td>6</td>
            <td>Tensão de fim de semestre</td>
            <td>Mitigar</td>
            <td>Não acumular tarefas para o fim de semestre, manter clima empático</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>12</th>
            <td>7</td>
            <td>Falta de motivação</td>
            <td>Prevenir</td>
            <td> Incentivar dailys, comentários em PRs e no grupo do telegram, mostrar propósito e impacto das suas ações e suas responsabilidades, dar feedbacks tanto construtivos quanto positivos</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>12</th>
            <td>9</td>
            <td>Dificuldade com as tecnologias</td>
            <td>Mitigar</td>
            <td>Estudar previamente e fazer pareamentos conforme o  quadro de conhecimento</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>12</th>
            <td>17</td>
            <td>Ausência de testes</td>
            <td>Mitigar</td>
            <td>Colocar testes unitários como critério de aceitação</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>12</th>
            <td>25</td>
            <td>Escopo mal definido</td>
            <td>Prevenir</td>
            <td> Ter as principais funcionalidades bem definidas e se basear nelas</td>
        </tr>
        <tr class="risco médio" style="background:#FFB366">
            <th>12</th>
            <td>27</td>
            <td>Má gestão do tempo</td>
            <td>Prevenir</td>
            <td>Definir entregas e atividades</td>
        </tr>
        <tr class="risco alto" style="background:#FF6666">
            <th>16</th>
            <td>26</td>
            <td>Mudança Arquitetural</td>
            <td>Prevenir</td>
            <td>Estudar sobre arquitetura, validar com a professor</td>
        </tr>
        <tr class="risco alto" style="background:#FF6666">
            <th>20</th>
            <td>28</td>
            <td>Cronograma inviável</td>
            <td>Mitigar</td>
            <td>Fazer planejamento conforme as entregas definidas</td>
        </tr>
    </tbody>
</table>

## Análise

- Com a definição de todos os riscos, percebemos que esse semestre é atípico, e questões que não temos controle podem acontecer, gerando a interrupção do projeto.
- Riscos gerenciais e de infraestrutura são muito relevantes, mas com a experiência do time de EPS eles aparentam estar sobre controle.
- Riscos de entrosamento e motivação da equipe aparenta ser um dos problemas principais, pois o time de MDS não se conhece, mas possuem muita dedicação.
- O prazo curto do semestre será um dos riscos mais significativos, necessitando um bom planejamento e gerenciamento de projeto.

## Referências
* Wiki Gaia <https://fga-eps-mds.github.io/2019.1-Gaia/#/projeto/planoRisco>. Último acesso em 28/08/2021.
* Wiki A Monitoria <https://2019-2-arquitetura-desenho.github.io/wiki/dinamica_seminario_II/controle_riscos>. Último acesso em 28/08/2021.
* Vídeo <https://youtu.be/HDMS7ftQJb0>. Último acesso em 28/08/2021. (Disponibilizado pela professora Milene).