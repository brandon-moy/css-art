const $blocks = document.querySelectorAll('.block');
const $reset = document.querySelector('.reset');
const options = [
  'Under 1FT', 'Holding Item', 'Dog Pokemon', 'No Evolution', 'Baby Pokemon',
  'Scarlet Exclusive', 'Violet Exclusive', 'Fuecoco', 'Sprigatito', 'Quaxly',
  'SHINY', 'Different Tera Type', 'Has New Evolution', 'Fully Evolved (3 stages)',
  'Pika Clone', 'Paradox Pokemon', 'Magikarp', 'Lechonk', 'Middle Evolution',
  'Cat Pokemon', 'Over 300LB', 'Normal Type', 'Flying Type', 'Fire Type',
  'Psychic Type', 'Water Type', 'Bug Type', 'Grass Type', 'Rock Type',
  'Electric Type', 'Ghost Type', 'Ice Type', 'Dark Type', 'Fighting Type',
  'Dragon Type', 'Poison Type', 'Steel Type', 'Ground Type', 'Fairy Type'
];

$reset.addEventListener('click', resetCards);

function resetCards() {
  const shuffled = shuffleOptions(options);
  for (let i = 0; i < $blocks.length; i++) {
    $blocks[i].textContent = shuffled[i];
  }
}

function shuffleOptions(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
