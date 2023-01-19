const $text = document.querySelectorAll('.text');
const $reset = document.querySelector('.reset');
const $cardBody = document.querySelector('.card-body');
const $blocks = document.querySelectorAll('.block');
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
$cardBody.addEventListener('click', toggleAcquired);

function resetCards(e) {
  const shuffled = shuffleOptions(options);
  for (let i = 0; i < $text.length; i++) {
    $text[i].textContent = shuffled[i];
    $blocks[i].classList.remove('acquired');
  }
}

function shuffleOptions(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function toggleAcquired(e) {
  const block = e.target.closest('div');
  block.classList.toggle('acquired');
}
