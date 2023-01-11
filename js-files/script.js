const speakers = [
  {
  speakerName: 'Trevoh Noah',
  speakerImage: 'images/trevoh.jpg',
  speakerEducation: 'Berkham Professor of Enterpreneurial Legal Studies at Harvard Law',
  speakerAccolades: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {speakerName: 'Chimamanda Adichie Ngozi',
  speakerImage: 'images/chimamandi.jpg',
  speakerEducation: 'Berkham Professor of Enterpreneurial Legal Studies at Harvard Law',
  speakerAccolades: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {speakerName: 'Maps Mapoyane',
  speakerImage: 'images/maps.jpg',
  speakerEducation: 'Berkham Professor of Enterpreneurial Legal Studies at Harvard Law',
  speakerAccolades: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {speakerName: 'Nana Ama McBrown',
  speakerImage: 'images/mcbrown.jpeg',
  speakerEducation: 'Berkham Professor of Enterpreneurial Legal Studies at Harvard Law',
  speakerAccolades: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {speakerName: ' Nomzamo Mbatha',
  speakerImage: 'images/grown-woman.jpg',
  speakerEducation: 'Berkham Professor of Enterpreneurial Legal Studies at Harvard Law',
  speakerAccolades: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  },
  {speakerName: 'Miss Universe',
  speakerImage: 'images/miss-universe.jpg',
  speakerEducation: 'Berkham Professor of Enterpreneurial Legal Studies at Harvard Law',
  speakerAccolades: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006'
  }, 
];


const speakersDiv = document.querySelector('.dynamic-speakers');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links-ul');
const navLinks = document.querySelectorAll('.nav-links');

for (let i = 0; i < speakers.length; i++) {
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
	</div>`
}


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
})


navLinks.forEach(link => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
	navMenu.classList.remove('active');
}))