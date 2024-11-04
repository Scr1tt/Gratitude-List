function addGratitude() {
    const input = document.getElementById('gratitudeInput');
    const gratitudeText = input.value.trim();
    
    if (gratitudeText === '') return;
    
    const listItem = document.createElement('li');
    
    const textNode = document.createTextNode(gratitudeText);
    listItem.appendChild(textNode);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        listItem.remove();
    };
    
    listItem.appendChild(deleteButton);
    document.getElementById('gratitudeList').appendChild(listItem);
    
    input.value = '';
}