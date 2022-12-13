const arrayOfObjects = [{ name: "Fox", link: "foxnews.com" }, { name: "Fandango", link: "fandango.com" }, { name: "CNN", link: "cnn.com" }];

let searchInput = document.querySelector('#input');

searchInput.addEventListener('input', getItems);

function getItems(e) {
    let SearchValue = e.target.value;
    let optionsContainer = document.querySelector('#datalistOptions');

    let filterItems = arrayOfObjects.filter(x => x.name.toLowerCase().includes(SearchValue.toLowerCase()));

    if (filterItems) {
        optionsContainer.innerHTML = "";
        filterItems.forEach(item => {
            let NewOption = document.createElement('option');
            NewOption.setAttribute('value', item.name);
            optionsContainer.append(NewOption);
        })
    }
}