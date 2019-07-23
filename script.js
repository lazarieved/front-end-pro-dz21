function generateList(array){

var fragment = document.createDocumentFragment();
var li = document.createElement('li');
var ul = document.createElement('ul');

for (var i = 0; i < array.length; i++){
    if (!isNaN(array[i])){
        var cloneLi = li.cloneNode();
        cloneLi.innerText = array[i];
        ul.appendChild(cloneLi);
    } else{
        var newUl = document.createElement('ul');
        var newLi = document.createElement('li');

        for ( var j = 0; j < array[i].length; j++){
            var cloneElseLi = newLi.cloneNode();
            cloneElseLi.innerText = array[i][j];
            newUl.appendChild(cloneElseLi);
        }

        cloneLi.appendChild(newUl);
    }
}
fragment.appendChild(ul);
var body = document.querySelector('body');
body.appendChild(fragment);
}

generateList([1,2,3]);
generateList([1,2, [1.1,1.2,1.3] ,3]);