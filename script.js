//search div
const search = document.getElementsByClassName('search')[0];

//search bar
const searchBar = document.createElement('input');
searchBar.setAttribute('type', 'text');
searchBar.setAttribute('placeholder', 'Enter city name...');
searchBar.classList.add('searchBar');
search.appendChild(searchBar);

//search button 
const searchButton = document.createElement('button');
searchButton.classList.add('searchButton');
searchButton.textContent = 'Search';
search.appendChild(searchButton);
searchButton.addEventListener('click', () => {
    const cityName = searchBar.value;
    console.log(cityName);
})

