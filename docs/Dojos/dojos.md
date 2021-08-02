# Dojos
Foram realizados alguns treinamentos sobre tecnologias, linguagens de programação, técnicas e metodologias de software na primeira semana pós definição dos grupos e escolha do tema. Os treinamentos foram realizados entre os dias 27/07 e 30/07.

## Dia 28/07 - JavaScript
Javascript é uma linguagem de programação de alto nível com sintaxe baseada no Java que por sua vez é baseada do C. A linguagem C  é uma linguagem de baixo nível, isto é, é mais próxima do entendimento da máquina. Já o JavaScript facilita bastante o programador implementando diversas funções úteis, característica de uma linguagem de alto nível.

## Sintaxe
### Declaração de variáveis
* **var**: Declara uma variável, opcionalmente, inicializando-a com um valor.
* **let**: Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
* **const**: Declara uma constante de escopo de bloco, apenas de leitura.

JavaScript é uma linguagem fracamente tipada, no entanto necessita declaração. JavaScript permite redeclaração de variáveis **var** e **let** em um mesmo escopo. É possível converter o **tipo** de uma variável utilizando funções como parseInt() e parseFloat() ou ainda toString(). 


### Declarações condicionais
A sintaxe de declarações condicionais é idêntica a das linguagens C e Java.
```
if(condicao){
    //faz alguma coisa
}else if(outra_condicao){
    //faz alguma outra coisa
}else{
    //faz tudo 
}
```

```
switch(valor){
    case 'valor1':
        //faz alguma coisa
        break;
    case valor1:
        //faz alguma coisa
        break;
    default:
        //faz alguma coisa
}
```

É possível ainda utilizar operadores ternários, no entando é necessário tomar cuidado visto que pode não ser tão legível ou manutenível.

```
let valor = condicao? valor1:valor2;
```
este operador ternário corresponde a:
```
let valor;
if(condicao){
    valor = valor1;
}else{
    valor = valor2;
}
```

[Teste rápido 1](./assets/JS/teste1.md)

### Laços de repetição
A sintaxe de laços de repetição também é idêntica a das linguagens C e Java no entanto existem mais algumas possibilidades.
```
while(condicao){
    //faz alguma coisa
}
```
```
for(let value = 0; condicao; value++){
    //faz alguma coisa
}
```
```
do{
    //faz alguma coisa
}while(condicao);
```
```
for(const value of values){
    //faz alguma coisa
}
```
```
for(index in values){
    //faz alguma coisa
}
```

### Tratamento de exceções
No JavaScript é possível prever que determinado bloco de código deu erro e então tratá-lo evitando que o programa seja interrompido. É possível ainda lançar exceções caso um comportamento não esperado ocorra.
```
    try{
        if(10>20){
            throw "Algo de errado não está certo";
        }
    }catch(erro){
        //tratar erro
    }finally{
        //independentemente de erro preciso realizar isso aqui
    }
```

### Operações diferídas e assíncronas

Operações diferídas e assíncronas retornam Promises. 
Uma Promise assume um destes estados:

* pending: estado inicial, não fulfilled, ou rejected.
* fulfilled: operação bem sucedida.
* rejected: operação falha.
* settled: A Promise é fulfilled ou rejected, mas não pending.

Funções que retornam uma Promise precisam vir com uma declaração **async**.

```
async function nomeDaFuncao(){

}
```

Para que a rotina "espere" que uma função assíncrona termine é utilizado o **await**.
Logo para chamar a função declarada acima é utilizada a seguinte sintáxe:
```
const resultado = await nomeDaFuncao();
```

Caso existe uma lista de Promises, um await não é suficiente. É necessário chamar a função **await Promise.all(lista)** passando a lista de Promises. 

### Objetos

Objeto é uma coleção de dados organizada de forma idêntica a um JSON e semelhante a um dicionário, no Python. Um objeto é cercado por chaves e pode conter um Array, um outro Objeto ou um valor.

```
const objeto = {
    outro_objeto: {
        a: 'A'
    },
    valor: 10,
    array: [
        {
            valor: 'B'
        },
        {
            valor: 'Hoy, Letícia né?'
        }
    ]
}
```

### Arrays

Array é um objeto de alto nível semelhante a uma lista.

```
const lista = ['A', 'Eba', 123, '4002-8922']
```

O mais interessante na utilização de arrays se encontra na quantidade de funções/atributos possíveis de se utilizar em um array.

#### length
Retorna o tamamnho do array.

[Java Script Array Methods](https://www.javatpoint.com/javascript-array)<br/>
Arquivos utilizados no Dojo:
- [index.html](./assets/JS/index.html)
- [scripts.js](./assets/JS/scripts.js)
- [styles.css](./assets/JS/styles.css)
