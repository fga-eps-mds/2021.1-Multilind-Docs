# Diagrama Entidade Relacionamento
O Modelo Entidade Relacionamento tem por finalidade modelar todo o banco de dados do sistema com suas respectivas tabelas e relacionamentos. Esse documento é composto por um MER (Modelo Entidade Relacionamento), DER (Diagrama Entidade Relacionamento), DL (Diagrama Lógico) e o seu respectivo Dicionário de Dados.

## Histórico de Revisões
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 04/09/2021 | 1.0 | Adição do MER | Pedro Igor |

## Modelo Entidade Relacionamento (MER)

### Entidades
- USUARIO
- CONTEUDO
- PALAVRA
- ANEXO
- TRONCO
- LINGUA
- ETNIA
- LOCALIDADE

### Tabelas
- pertence
- habita

### Relacionamentos
USUARIO - **submete** - CONTEUDO<br>
Um USUARIO **submete** um ou mais CONTEUDOS (N).<br>
Um CONTEUDO é **submetido** por um e somente um USUARIO (1).<br>
Cardinalidade: 1xN<br>

USUARIO - **avalia** - CONTEUDO<br>
Um USUARIO **avalia** um ou mais CONTEUDOS (N).<br>
Um CONTEUDO é **avaliado** por um e somente um USUARIO (1).<br>
Cardinalidade: 1xN<br>

ANEXO - **complementa** - PALAVRA<br>
Um ANEXO **complementa** uma e somente um PALAVRA (1).<br>
Uma PALAVRA é **complementada** por um ou mais ANEXOS (N).<br>
Cardinalidade: Nx1<br>

PALAVRA - **pertence** - LINGUA<br>
Uma PALAVRA **pertence** a uma e somente uma LINGUA (1).<br>
Uma PALAVRA **possui** uma ou mais PALAVRAS (N).<br>
Cardinalidade: 1xN<br>

TRONCO - **origina** - LINGUA<br>
Um TRONCO **origina** uma ou mais LINGUAS (N).<br>
Uma LINGUA é **originada** por um e somente um TRONCO (1).<br>
Cardinalidade: 1xN

LINGUA - **pertence** - ETNIA<br>
Uma LINGUA **pertence** a uma ou mais ETNIAS (N).<br>
Uma ETNIA **possui** uma oua mais LINGUAS(M).<br>
Cardinalidade: NxM<br>

ETNIA - **habita** - LOCALIDADE<br>
Uma ETNIA **habita** em uma ou mais LOCALIDADES (M).<br>
Uma LOCALIDADE pode **habitar** zero ou mais ETNIAS(N).<br>
Cardinalidade: NxM<br>

## Diagrama Entidade Relacionamento (DER)

## Diagrama Lógico

## Dicionário de Dados

## Referências 
- Software para Diagramação do Modelo Entidade Relacionamento - brModelo <http://www.sis4.com/brModelo/>. Último acesso em 25/09/2020 