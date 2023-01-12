const speakers = [
  {
    speakerName: 'Trevoh Noah',
    speakerImage: 'images/trevoh.jpg',
    speakerEducation: 'Host of the daily show, Trevor rose to stardom overnigth as a late night show host',
    speakerAccolades: 'Trevoh Noah rise came as a shock to very few little. This South African\'s humour and wit were evident very early on',
  },
  {
    speakerName: 'Chimamanda Adichie Ngozi',
    speakerImage: 'images/chimamandi.jpg',
    speakerEducation: 'The famous Nigerian Author of best selling books like American',
    speakerAccolades: 'American, half of a yellow sun are famous novels by the eloquent nigerian author Chimamandi Adichie',
  },
  {
    speakerName: 'Maps Mapoyane',
    speakerImage: 'images/maps.jpg',
    speakerEducation: 'Maps is a famous South African actor known for his love and collection of hats',
    speakerAccolades: 'Maps is an icon and a ladies man. Aside that, he is a great actor and his travel journal are so entertaining',
  },
  {
    speakerName: 'Nana Ama McBrown',
    speakerImage: 'images/mcbrown.jpeg',
    speakerEducation: 'A famous Ghanaian actress, know for her beauty, grace and timelessness',
    speakerAccolades: 'This beauty mogul understands branding and how to sell out a product. Her longevity in the industry is a testament',
  },
  {
    speakerName: ' Nomzamo Mbatha',
    speakerImage: 'images/grown-woman.jpg',
    speakerEducation: 'Nomzamo Mbatha play in the historic welcome to America 2 - a hit box office',
    speakerAccolades: 'South African should be proud of Nomzamo\'s perfomance in Welcome to American. It was a global box office success',
  },
  {
    speakerName: 'Zozibini Tunzi',
    speakerImage: 'images/miss-universe.jpg',
    speakerEducation: 'Won Miss Universe in the same year all title holders in America were balck women',
    speakerAccolades: 'Her historic win at the miss universe competition in 2019 and with a shaved head was an icon moment for the books',
  },
];

const speakersDiv = document.querySelector('.dynamic-speakers');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links-ul');
const navLinks = document.querySelectorAll('.nav-links');

for (let i = 0; i < speakers.length; i += 1) {
  speakersDiv.innerHTML += `
<div class="individual-speaker">
  <div class="chessboard-and-speaker-image">
      <img class="chess-board" src="images/chess-board-removebg-preview.png" alt="">
      <div class="speaker-image"><img class="" src=${speakers[i].speakerImage} alt=""></div>
  </div>
  <div class="speaker-info">
      <p class="speaker-name">${speakers[i].speakerName}</p>
      <p class="speaker-education">${speakers[i].speakerEducation}</p>
      <span class="span-black"></span>
      <p class="speaker-accolades">${speakers[i].speakerAccolades}</p>
  </div>
</div>`;
}

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));