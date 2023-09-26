import { store } from "../redux/store";
import { storyImage } from "./image";

export const stories = [
  {
    id: 1,
    title: 'Short Stories',
    image: require('../../assets/images/short.jpg'),
        innerStoriesList:[
      {
        id:1,
        title:"The Magical Key",
        content:`
In a small village, there was a girl named Mia. Mia had a special key, and she kept it safe because it was the key to her secret treasure chest. This chest held her most treasured possessions, like her grandmother's locket and her favorite childhood toy.       \n     One day, while Mia was playing in the garden, she realized that her key was missing. She searched everywhere, but it was nowhere to be found. Mia felt worried and sad because she didn't want anyone else to find her treasure chest.  \n    Mia decided to ask her friends for help. They all gathered in the garden and started searching. They looked under the bushes, in the flower beds, and even up in the trees. Mia's friends were determined to find the lost key.
After some time, one of Mia's friends spotted something shiny hidden under a pile of leaves. It was the lost key! Mia was overjoyed. She thanked her friends for their help and hurried inside to open her treasure chest.
As Mia opened the chest, she realized that her real treasure wasn't the items inside but the friends who had helped her find the key. They all shared a big hug and promised to help each other whenever they needed it.
From that day on, Mia knew that friendship was the most precious treasure of all, and she cherished it more than anything else in the world.`


      },
      {
        id:2,
        title:"The Magical Coin",
        content:`**Title: The Magical Coin**

In a small town, there was a young boy named Max. Max loved collecting coins. He had a special collection of shiny coins from all around the world. But there was one coin that was different from all the others. It was an old and dusty coin he found in his grandfather's attic. \n One day, as Max was cleaning his grandfather's attic, he discovered the old coin hidden in a dusty box. It had strange symbols on it that he couldn't understand. Max decided to keep it with his other coins, thinking it was just an ordinary coin. \n That night, as Max was about to go to bed, he held the coin in his hand and made a wish. He wished for a big bowl of his favorite ice cream. To his amazement, when he woke up the next morning, there was a big bowl of ice cream on his bedside table. \n Max couldn't believe his eyes! He realized that the old coin was magical. It granted wishes! Excited, Max made more wishes. He wished for a toy robot, a sunny day for playing, and even a puppy.\n Every morning, Max's wishes came true. His room was filled with toys, and he had a new furry friend. But as time passed, Max started to feel lonely. He missed playing with his friends because he spent all his time making wishes. \n One day, Max made a special wish. He wished for his friends to come over and play with him. The magical coin granted his wish, and his friends arrived, laughing and playing together. \n Max realized that having friends and making memories with them was the best treasure of all. He decided not to use the magical coin for wishes anymore. Instead, he kept it as a reminder that real happiness comes from sharing moments with the people you care about.

From that day on, Max and his friends had wonderful adventures together, and they all knew that the most magical thing of all was their friendship.`


      },
      {
        id:3,
        title:"The Tale of Two Wishes",
        content:`**Title: The Tale of Two Wishes**

Once upon a time in a small village, there lived a kind-hearted boy named Sam. Sam was known for his good deeds and his generous heart. One sunny morning, as he was walking in the forest, he stumbled upon a mysterious object: a shiny golden lamp.\n Curiosity got the best of Sam, and he gave the lamp a little rub. To his amazement, a friendly genie appeared in a puff of smoke. The genie told Sam that he could grant him two wishes.\n
Sam thought carefully about his wishes. He didn't want anything for himself; instead, he wanted to make the village a better place. For his first wish, he asked the genie to make sure everyone in the village had enough food to eat every day. The genie granted his wish, and suddenly, the village had overflowing fields of fruits and vegetables.\n For his second wish, Sam wished for a school to be built in the village so that all the children could learn and have a brighter future. The genie smiled and made it happen. The school was built, and soon, children from the village were going to school, learning new things every day.\n Sam's kindness and selflessness inspired others in the village. They began helping each other, and the village became a happier and more prosperous place. Sam's two wishes had made a big difference, and he was very happy.\n One day, as he walked in the forest again, he found the golden lamp once more. The genie appeared and told Sam that because of his pure heart and unselfish wishes, he had earned a third wish.\n Sam thought for a moment and then asked the genie to set him free. The genie granted his wish and disappeared, leaving Sam with a heart full of joy and gratitude. \n Sam continued to help his village, and his story of kindness and the tale of his two wishes became a legend that was told for generations, reminding everyone that even the simplest acts of kindness could make the world a better place.`
      }
     
      
    ]

  },
  {
    id: 2,
    title: 'Mystery Stories',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList:[
     
      
    ]


  },
  {
    id: 3,
    title: 'Fantasy Tales',
    image: require('../../assets/images/fantasy.jpg'),
     innerStoriesList: [
  {
    id: 31,
    title: "The Enchanted Forest",
    content:
      "Once upon a time, in a land far away, there was an enchanted forest. This magical forest was home to talking animals, glowing fireflies, and trees that whispered secrets. Anyone who entered this forest felt a sense of wonder and curiosity. It was a place where dreams came alive, and adventures awaited those who dared to explore its depths."
  },
  {
    id: 32,
    title: "The Dragon's Lair",
    content:
      "In the heart of a towering mountain, there was a hidden cave that held a great secret. Deep inside that cave, a fearsome dragon guarded a treasure beyond imagination. Many brave souls had attempted to claim the dragon's treasure, but none had succeeded. The dragon's fiery breath and sharp claws made it an invincible guardian. Yet, legends persisted, and adventurers continued to seek the dragon's lair in hopes of untold riches and glory."
  },
  {
    id: 33,
    title: "The Quest for the Lost Amulet",
    content:
      "A young and determined adventurer set out on a perilous quest. Their mission was to find the lost amulet of power, a legendary artifact said to grant its bearer the ability to control the elements. Along the way, they faced treacherous paths, encountered mythical creatures, and solved riddles left by ancient guardians. With each challenge, they grew stronger and wiser, inching closer to their destiny and the coveted amulet."
  },
  {
    id: 34,
    title: "The Faerie's Gift",
    content:
      "In a secluded glen of an ancient forest, a kind-hearted traveler stumbled upon a wounded faerie. Moved by compassion, the traveler tended to the faerie's injuries and offered them shelter. In gratitude, the faerie granted the traveler a single wish. The traveler's heart was pure, and their wish was selfless. Little did they know that the faerie's gift would forever change the course of their life and the fate of the enchanted forest."
  },
  {
    id: 35,
    title: "The Sorcerer's Apprentice",
    content:
      "In a quaint village, a young and curious apprentice lived with a powerful sorcerer. One day, while the sorcerer was away, the apprentice couldn't resist the temptation to explore the forbidden chamber. Inside, they discovered the sorcerer's spellbook, filled with incantations of great power. The apprentice attempted to cast one of the spells, unknowingly setting off a chain of magical mishaps that would test their wit and courage in the face of chaos."
  },
  {
    id: 36,
    title: "The Mirror of Truth",
    content:
      "In a kingdom torn by deception and intrigue, a powerful artifact known as the 'Mirror of Truth' came into the hands of a humble servant. This mirror had the power to reveal the true nature of anyone who gazed into it. As its secrets were unveiled, it ignited a series of events that would reshape the fate of the kingdom and its rulers."
  },
  {
    id: 37,
    title: "The Forgotten Kingdom",
    content:
      "Deep within the heart of a dense and ancient forest, a forgotten kingdom lay hidden from the world. Its existence had faded into obscurity, and few knew of its existence. But within its hidden walls, untold treasures and mysteries awaited those who dared to venture within. The rediscovery of this kingdom would change the lives of those who stumbled upon its ancient ruins."
  },
  {
    id: 38,
    title: "The Mysterious Elixir",
    content:
      "Rumors spread far and wide about a reclusive alchemist who had achieved the impossible – the creation of an elixir of immortality. Desperate to gain eternal life, adventurers embarked on a perilous journey to locate the alchemist's hidden laboratory. Along the way, they encountered mystical challenges, faced moral dilemmas, and discovered the true price of immortality."
  },
  {
    id: 39,
    title: "The Cursed Ring",
    content:
      "A cursed ring, once worn by a powerful sorcerer, found its way into the hands of an unsuspecting traveler. This seemingly ordinary traveler soon realized that the ring bestowed both blessings and curses upon its wearer. As they navigated the intricacies of the ring's magic, they embarked on a transformative journey of self-discovery and moral choices."
  },
  {
    id: 40,
    title: "The Isle of Shadows",
    content:
      "Legends spoke of an island veiled in perpetual darkness, where time stood still. This mysterious place, known as the 'Isle of Shadows,' was shrouded in myths and fears. Those who dared to set foot on its shores were said to confront their deepest fears and desires, as they ventured into the heart of darkness itself."
  },
  {
    id: 41,
    title: "The Weaver's Tale",
    content:
      "In a bustling kingdom, a gifted weaver created intricate tapestries that foretold the future. The ruler of the land sought the weaver's services to predict battles, alliances, and the fate of the realm. As the weaver wove the threads of destiny, they unraveled a web of intrigue and power struggles that would change the course of the kingdom forever."
  },
  {
    id: 42,
    title: "The Phantom Ship",
    content:
      "Sailors whispered in hushed tones about a phantom ship that appeared during fierce storms, its crew seeking lost souls to join them on their eternal voyage across the turbulent seas. Those who encountered the ship faced the choice of joining the ghostly crew or finding a way to break the ship's cursed cycle. Each decision carried profound consequences that echoed through eternity."
  },
  {
    id: 43,
    title: "The Enchanted Harp",
    content:
      "In a world where music held extraordinary power, a magical harp lay hidden, waiting for the right hands to pluck its strings. When a gifted musician discovered the harp's existence, they set off on a quest to master its melodies. Little did they know that the enchanting music they created would bring harmony to the world and attract both admiration and envy."
  },
  {
    id: 44,
    title: "The Moonlit Garden",
    content:
      "Within the confines of a secluded garden, an enchanting phenomenon occurred under the light of the full moon. This 'Moonlit Garden' was said to be blessed with flowers possessing unique properties. Some blossoms had the power to heal, while others harbored the potential for great harm. Those who tended to the garden faced choices that would test their wisdom and empathy."
  },
  {
    id: 45,
    title: "The Oracle's Prophecy",
    content:
      "In a time of uncertainty, a mysterious oracle emerged, gifted with the ability to foretell the future. A prophecy of great calamity cast a shadow over the land, and heroes from distant realms gathered to decipher its cryptic messages. Their journey was fraught with challenges, alliances, and revelations as they raced against time to prevent disaster from engulfing the world."
  },
]

  },
  {
    id: 4,
    title: 'Science Fiction Adventures',
    image: require('../../assets/images/sciene.jpg'),
    innerStoriesList: [],
  },
  {
    id: 5,
    title: 'Historical Dramas',
    image: require('../../assets/images/historical.jpg'),
    innerStoriesList: [],
  },
  {
    id: 6,
    title: 'Fairy Tales and Folklore',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 7,
    title: 'Romance Novels',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 8,
    title: 'Thrilling Suspense',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 9,
    title: 'Humorous Stories',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 10,
    title: 'Inspirational Tales',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 11,
    title: 'Detective Mysteries',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 12,
    title: 'Space Adventures',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 13,
    title: 'Mythological Legends',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 14,
    title: 'Superhero Adventures',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 15,
    title: 'Animal Adventures',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 16,
    title: 'Magical Realism',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 17,
    title: 'Travel and Exploration',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 18,
    title: 'Dystopian Worlds',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 19,
    title: 'Time Travel Adventures',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 20,
    title: 'Biographical Stories',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 21,
    title: 'Coming-of-Age Tales',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 22,
    title: 'Family Adventures',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 23,
    title: 'Friendship Stories',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 24,
    title: 'Environmental Themes',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 25,
    title: 'Cultural Diversity',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 26,
    title: 'Educational Stories',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 27,
    title: 'Moral and Ethical Lessons',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 28,
    title: 'Sports and Athletics',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
  {
    id: 29,
    title: 'Survival Stories',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList: [],
  },
];



export default stories;
