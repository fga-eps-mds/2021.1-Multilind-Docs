function funcao(){
    var elements = document.getElementsByClassName('box');
    var text = document.getElementsByClassName('text')[0];
    var array = Array.prototype.slice.call(elements);
    var sizes = array.map((element)=>{
        return getRandomNumber();
    });
    console.log(sizes.keys())
    text.innerHTML = sizes.join();
    var find = sizes.find((size)=>size==80);
    console.log(sizes);
    array.forEach((element, index)=>{
        let size = sizes[index];
        element.style.width = size+"px";
        element.style.height = size+"px";
        if(find != size){
            element.style.background = 'black';
        }
    });
};

function getRandomNumber(){
    return parseInt((Math.random()*1000)%200);
}