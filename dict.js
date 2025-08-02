const apiKey = 'c3b2f782-1a08-4155-bf3a-e9c287327043';
const apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/`;
const searchForm = document.getElementById('search-form');
const wordInput = document.getElementById('word-input');
const definitionContainer = document.getElementById('definition-container');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const word = wordInput.value.trim();
  if (word) {
    try {
      const response = await fetch(`${apiUrl}${word}?key=${apiKey}`);
      const data = await response.json();
      const definition = data[0].shortdef[0];
      const definitionHtml = `
        <h2>Definition of ${word}</h2>
        <p class="definition">${definition}</p>
      `;
      definitionContainer.innerHTML = definitionHtml;
    } catch (error) {
      console.error(`Error defining ${word}: ${error}`);
      definitionContainer.innerHTML = `<p>Error defining ${word}</p>`;
    }
  }
});
