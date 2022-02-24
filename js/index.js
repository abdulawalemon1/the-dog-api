

const loadDogs = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => displayDog(data))
}
const displayDog = dogList => {
    const main = document.getElementById('main');
    const first10Data = dogList.slice(0, 10);
    // div.classList = 'dogs';
    first10Data.forEach(dog => {
        const div = document.createElement('div');
        div.className = 'col-lg-4'
        console.log(dog);
        div.innerHTML = `
            <h2>${dog.name}</h2>
            <p>${dog.temperament}</p>
            <h4>${dog.weight.imperial}</h4>
            <img width="400px" height="250px"  src="${dog.image.url}" />
        `
        main.appendChild(div);
    });
}