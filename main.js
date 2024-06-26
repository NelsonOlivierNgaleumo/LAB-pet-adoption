const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      description: "Gives sincere apologies.",
      type: "cat",
      image: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      description: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      image: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      description: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      image: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      description: "Burps minimally.",
      type: "dog",
      image: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      description: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      image: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      description: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      description: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      image: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      description: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      image: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      description: "Adept at talking self and others out of fights.",
      type: "cat",
      image: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      description: "Listens attentively to boring stories.",
      type: "cat",
      image: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      description: "Can be around food without staring creepily at it.",
      type: "dino",
      image: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      description: "Does not use excessive acronyms.",
      type: "dog",
      image: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      description: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      image: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      description: "Always up for dessert.",
      type: "cat",
      image: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      description: "Burps minimally.",
      type: "cat",
      image: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      description: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      image: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      description: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      image: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      description: "Proficient in air guitar",
      type: "dino",
      image: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      description: "Listens attentively to boring stories.",
      type: "dog",
      image: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      description: "Uses litter box at appropriate hours.",
      type: "cat",
      image: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      description: "Owns a Nintendo Power Glove.",
      type: "dino",
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      description: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      image: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      description: "Enjoys fine wine.",
      type: "dog",
      image: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      description: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      image: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      description: "Knows the words to 4 rap songs.",
      type: "cat",
      image: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      description: "Cleans himself.",
      type: "dog",
      image: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      description: "Admits he is wrong",
      type: "dino",
      image: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      description: "Dances when he has to.",
      type: "cat",
      image: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      description: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      image: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      description: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      image: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    }

  ];

  // Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// get the cards on the DOM
//empty string to pull info into

const cardsOnDom = (pets) => {
  let domString = "";
  for (const pet of pets) {
    domString += `<div class="pet-card" style="width: 18rem;">
    <img src="${pet.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${pet.name}</p>
      <p class="card-text">${pet.color}</p>
      <p class="card-text">${pet.description}</p>
      <p class="card-text">${pet.type}</p>

    </div>
  </div>`;
  }

  renderToDom("#app", domString);
};

// function to filter each pet 
  let bonjour = []
  pets.forEach((pet) => {
       bonjour.push(pet);
  })
console.log(bonjour);


// add 3 category buttons

const allBtn= document.querySelector("#allpets-btn");
const dogsBtn= document.querySelector("#dog-btn");
const catsBtn = document.querySelector("#cat-btn");

// add event listener

allBtn.addEventListener("click", () => {
  cardsOnDom(pets);
});
dogsBtn.addEventListener("click", () => {
  cardsOnDom(pets);
});
catsBtn.addEventListener("click", () => {
  cardsOnDom(pets);
});

// add click event filter
dogsBtn.addEventListener("click", () => {
  const dogmember = filter(pets, "dog");
  cardsOnDom(dogmember);
});
catsBtn.addEventListener("click", () => {
  const catmember =filter(pets, "cat");
  cardsOnDom(catmember); 
});
// add pet form

const form = document.querySelector('form');

const createPet = (e) => {
  e.preventDefault();

  const newPetObj = {
    id: pets.length +1, 
    image: document.querySelector("#image").value,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    description: document.querySelector("#description").value,
    type: document.querySelector("#type").value,
  
  };
  pets.push(newPetObj);
  cardsOnDom(pets);
  form.reset();

  };
form.addEventListener("submit", createPet);
