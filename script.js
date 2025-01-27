document.getElementById('clickButton').addEventListener('click', function() {
    // Get the input value
    const inputValue = document.getElementById('inputField').value;

    // Create a new list item
    const newListItem = document.createElement('li');
    newListItem.textContent = inputValue;

    // Append the new list item to the list
    document.getElementById('myList').appendChild(newListItem);

    // Clear the input field
    document.getElementById('inputField').value = '';
});
