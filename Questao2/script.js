const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {

    let meuItem = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtnD = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = meuItem;
    listItem.appendChild(listBtnD);
    listBtnD.textContent = 'Excluir';

    list.appendChild(listItem);

    listBtnD.onclick = function(e) {
        list.removeChild(listItem);
    }

    input.focus();

}