import { store } from "../redux/store";
import { storyImage } from "./image";

export const stories = [
  {
    id: 1,
    title: 'Short Stories',
    image: require('../../assets/images/short.jpg'),
      innerStoriesList: [
    {
      id: 1,
      title: 'The Enchanted Forest',
      content: 'Once upon a time, in a forest filled with magic, there lived a young and curious adventurer named Elara. She had heard legends of an enchanted forest hidden deep within the heart of the land. This forest was said to be home to mystical creatures, ancient spells, and secrets beyond imagination. Determined to uncover the truth, Elara embarked on a journey into the heart of the forest. As she ventured deeper, the trees seemed to come alive with whispers, and the air was filled with an otherworldly glow. In her quest, Elara encountered talking animals, sparkling fireflies, and magical waterfalls that danced to their own tune. Each step brought her closer to the heart of the enchantment, and the forest revealed its wonders one by one. Little did she know that the true magic of the forest was not in its spells or creatures, but in the way it opened her heart to the beauty of the world around her. Elara left the enchanted forest with a sense of wonder and a newfound appreciation for the mysteries of the natural world.',
    },
    {
      id: 2,
      title: 'The Lost Treasure',
      content: 'Legends spoke of a treasure hidden deep within the heart of a mysterious island. It was said to be a treasure so valuable that it could change the fate of kingdoms. Many had searched for it, but none had returned with more than tales of its elusiveness. A group of daring adventurers, led by the fearless Captain James, decided to embark on a perilous journey to uncover the lost treasure. They set sail on their trusty ship, the "Ocean Explorer," with a map that held clues to the treasure\'s whereabouts. Their voyage was filled with challenges—storms that tested their courage, treacherous waters that pushed them to their limits, and encounters with peculiar creatures of the deep. But Captain James and his crew were determined to press on. After weeks of searching, they reached the island marked on the map. With shovels in hand, they began to dig, guided by the faint glow of the moon. And there, beneath the sands of time, they uncovered a chest adorned with jewels and filled with riches beyond their wildest dreams. But the true treasure they discovered was not the gold and gems; it was the bond forged through their shared adventure. As they sailed back home, they knew that the real wealth was the memories they had created together.',
    },
    {
      id: 3,
      title: 'A Journey to the Stars',
      content: 'In a world not so different from our own, a team of brilliant scientists and astronauts embarked on a mission that would change the course of humanity. They were chosen for a historic expedition—to journey to the stars and explore the cosmos. Their spacecraft, the "Stellar Voyager," was equipped with state-of-the-art technology that allowed them to traverse the vastness of space. As they left Earth\'s orbit, they gazed back at their home planet with a sense of wonder and humility. The crew encountered breathtaking phenomena—a cosmic storm that painted the sky with colors unseen, distant planets with landscapes that defied imagination, and a black hole whose gravitational pull tested the limits of their understanding. But it was when they reached the edge of the known universe that they made their most profound discovery. There, they found a gateway to other dimensions, realms beyond the realm of physics. Their journey to the stars became a journey to the very fabric of reality itself. As they returned to Earth, they carried with them not only scientific knowledge but also a deeper appreciation for the mysteries of the cosmos.',
    },
    {
      id: 4,
      title: 'The Magical Garden',
      content: 'In a quaint village nestled between rolling hills, there was a garden unlike any other. This garden was known far and wide for its mystical properties. The flowers bloomed in shades unseen, and the scent in the air was a sweet melody to the senses. People said that spending a day in this garden could heal both body and soul. One sunny morning, a young girl named Lily visited the garden. As she strolled among the vibrant blooms, she felt a warmth in her heart she had never experienced before. The garden seemed to respond to her presence, and the flowers whispered secrets of love and happiness. Lily returned to the village with newfound energy and a smile that could light up the darkest of days. She shared her experience with others, and soon, the magical garden became a place of hope and healing for all who sought it.',
    },
    {
      id: 5,
      title: 'The Time Traveler\'s Diary',
      content: 'In an old attic of a dusty mansion, Sarah discovered a dusty leather-bound diary. Its pages were filled with stories of adventures that seemed impossible. It turned out that the diary belonged to her great-great-grandfather, who was a time traveler. Each entry described a different era, from ancient Egypt to the distant future. Sarah couldn\'t resist the temptation to try out the time-traveling device hidden in the attic. She embarked on a journey through time, experiencing history like no one else. Through her adventures, Sarah learned valuable lessons about the importance of cherishing the present moment and preserving the past. She decided to become the guardian of the time-traveler\'s diary, ensuring that its secrets remained safe for generations to come.',
    },
    {
      id: 6,
      title: 'The Island of Dreams',
      content: 'Far out in the vast ocean, there was an island that appeared only in dreams. Anyone who fell asleep with a wish in their heart would find themselves on this mysterious island, surrounded by breathtaking landscapes and magical creatures. One night, a young boy named Ethan closed his eyes and wished for a world where anything was possible. He found himself on the Island of Dreams, where talking animals shared wisdom, and rainbows could be touched. Ethan\'s journey on the island taught him that dreams had the power to shape reality. When he woke up, he realized that he could make his dreams come true in the waking world. With newfound confidence, he set out to turn his wildest dreams into reality.',
    },
    {
      id: 7,
      title: 'The Whispering Wind',
      content: 'In the vast desert, there was a legend of the Whispering Wind—a gentle breeze that carried messages from loved ones who had passed away. The people of the desert believed that when the wind rustled the sands, it was a sign that their ancestors were watching over them. One day, a young woman named Amina lost her grandmother, who had been her guiding light. Heartbroken, she went to the desert and waited for the wind to whisper. As the sun dipped below the horizon, a soft breeze brushed against her cheeks. Amina closed her eyes, and in that moment, she felt her grandmother\'s presence. The wind carried words of love and wisdom, reminding Amina that those we love never truly leave us. With a heart full of solace, she returned home, knowing that the Whispering Wind would always be there to comfort her.',
    },
    {
      id: 8,
      title: 'The Moonlit Sonata',
      content: 'In a small, picturesque village nestled in the mountains, there lived a young musician named Clara. She was known for her enchanting violin melodies that echoed through the valley. But Clara had a secret—her music had the power to summon the moonlight. On clear nights, she would play her violin by the river, and the moon would cast its silvery glow upon the waters. The villagers believed that Clara\'s music could heal the soul and bring dreams to life. One evening, as Clara played her violin under the full moon, a mysterious figure emerged from the shadows. It was a creature of the night, a moonlit spirit, drawn by the music\'s beauty. The spirit danced to Clara\'s melodies, its ethereal form shimmering in the moonlight. From that night on, Clara and the moonlit spirit formed a bond, creating harmonies that filled the village with wonder. The villagers would gather by the riverbank to witness the magical duet between Clara and the moonlit spirit, a testament to the enchanting power of music and friendship.',
    },
   {
  id: 9,
  title: 'The Enchanted Garden',
  content: 'In a quiet corner of a bustling city, there existed a hidden gem—an enchanted garden that defied the chaos of urban life. It was a place of tranquility and wonder, where vibrant flowers bloomed year-round and whimsical creatures frolicked among the foliage. The garden"s secret was known to only a few, including a young girl named Lily. Lily stumbled upon the garden one afternoon while chasing a wayward butterfly. As she entered, the garden seemed to embrace her with its magic. The flowers sang a soft melody, and the leaves rustled in greeting. Lily returned to the garden every day, tending to its needs and reveling in its beauty. Over time, she discovered that the garden had the power to heal and rejuvenate. Its flowers could cure ailments, and its streams held the elixir of life. Lily became the guardian of the garden, protecting it from those who sought to exploit its magic. She shared its healing gifts with the world, bringing hope and vitality to those in need. The Enchanted Garden remained a sanctuary of peace in the heart of the city, a testament to the resilience of nature"s wonders.'
}

    ,
    {
      id: 10,
      title: "The Phoenix's Flight",
      content: 'In the heart of a dense forest, a legendary creature known as the Phoenix resided. This magnificent bird was said to possess the power of rebirth, rising from its own ashes to begin anew. Its feathers glowed with the colors of the sunset, and its song could heal the deepest wounds. Many sought the Phoenix, hoping to witness its flight and receive its blessings. One day, a young girl named Lina ventured into the forest, guided by whispers of the Phoenix\'s presence. She approached the majestic bird with humility and awe. As the Phoenix took flight, its wings created a brilliant display of colors that painted the sky. Lina felt a surge of warmth and hope wash over her. In that moment, she understood the true meaning of rebirth—not just as a physical transformation but as a renewal of the spirit. She returned to her village, sharing the tale of the Phoenix and the wisdom she had gained. The legend of the Phoenix continued to inspire generations, reminding them that even in the darkest of times, there was always the possibility of a new beginning.',
    },
    {
  id: 11,
  title: 'The Symphony of Nature',
  content: 'Deep within the heart of a lush rainforest, there lived a young musician named Anaya. She had spent her entire life among the towering trees and vibrant flora, and her connection to nature ran deep. Anaya believed that every element of the forest—the rustling leaves, the babbling brooks, and the chirping birds—had a voice of its own. She decided to compose a symphony that would capture the essence of the rainforest. Anaya spent days and nights listening to the melodies of the forest, letting them guide her compositions. She played her flute by the riverbanks, and the water responded with gentle harmonies. She strummed her guitar beneath the ancient canopy, and the trees whispered their approval. And as she sang to the stars, the nocturnal creatures joined in a celestial chorus. Anaya\'s symphony became a masterpiece that celebrated the beauty and harmony of nature. It was a reminder that every living being had a part to play in the grand symphony of life.',
},
{
  id: 12,
  title: 'The Painter\'s Dream',
  content: 'In a quaint village, there lived a painter named Elena. She had a special gift—the ability to bring her paintings to life. Each stroke of her brush was infused with magic, and her canvases were gateways to fantastical realms. One day, while painting a serene meadow, Elena felt a gust of wind that carried her into the very landscape she was creating. She found herself in a world of vibrant colors and talking animals. It was a place where imagination and reality intertwined. Elena spent her days exploring her painted worlds, making friends with the creatures she had brought to life. But she also knew that her gift came with responsibility. She used her paintings to inspire others, to transport them to places beyond their wildest dreams. Her art became a source of wonder and joy for the entire village. Elena\'s paintings were a testament to the boundless power of creativity, reminding everyone that with a touch of magic and a dash of imagination, the ordinary could become extraordinary.'
}
    ,
    {
      id: 13,
      title: 'The Guardians of Light',
      content: 'In a land shrouded in eternal darkness, a group of courageous individuals known as the Guardians of Light stood as beacons of hope. They possessed ancient artifacts that could harness the power of the sun, bringing light to the darkest corners of their world. Each Guardian had a unique ability—the ability to control fire, to illuminate the night, or to heal with the warmth of the sun\'s rays. Together, they protected their land from the encroaching darkness and kept the hope of dawn alive. One day, a powerful eclipse threatened to plunge their world into permanent shadow. The Guardians embarked on a perilous quest to unlock the ultimate power of their artifacts. Along their journey, they encountered trials and faced their deepest fears. But they also discovered the strength that came from their unity and their unwavering belief in the light. When the eclipse came, the Guardians of Light stood together, and their combined power shattered the darkness, revealing a sunrise more glorious than any they had ever seen. Their world was bathed in sunlight once more, and the Guardians continued to protect the light that had saved them all.',
    },



{
  id: 14,
  title: 'The Forgotten Kingdom',
  content: 'Deep in the heart of a dense forest, there lay a hidden kingdom that time had forgotten. The kingdom was filled with magic, and its inhabitants were creatures of legend—dragons, unicorns, and fairies. Protected by a powerful enchantment, the kingdom remained concealed from the outside world. One day, a curious traveler named Alaric stumbled upon the kingdom\'s entrance. He was drawn to its mystical aura and ventured inside, where he discovered a realm of wonder and enchantment. Alaric befriended the creatures of the kingdom and learned their ancient ways. He listened to the stories of the elders, who spoke of a time when humans and magical beings lived in harmony. Alaric realized that the kingdom held the key to restoring that balance in the world. With the blessings of the kingdom\'s inhabitants, he returned to the outside world, determined to spread the message of coexistence between humans and the magical realm. The Forgotten Kingdom became a symbol of hope, a place where the past met the present, and where legends came to life once more.'
},
{
  id: 15,
  title: 'The Dreamcatcher\'s Promise',
  content: 'In a Native American village, there was a tradition of making dreamcatchers. These intricate designs were believed to capture bad dreams, allowing only good dreams to pass through. One day, a young girl named Aiyana was given the task of creating a dreamcatcher for her grandmother. As she weaved the delicate threads, her grandmother shared stories of their ancestors and the importance of protecting their heritage. Aiyana took her grandmother\'s teachings to heart and poured her love and creativity into the dreamcatcher. That night, as she hung it above her bed, Aiyana had a vivid dream. In her dream, she met a wise old owl who spoke of the interconnectedness of all living beings and the responsibility of passing down traditions. When she awoke, Aiyana knew that her purpose was to preserve her culture and share its wisdom with future generations. She became a storyteller, using her gift to weave tales of the past into the tapestry of the present. Her dreamcatcher served as a reminder that dreams had the power to shape destinies.'
},



  ]
  },
  {
    id: 2,
    title: 'Mystery Stories',
    image: require('../../assets/images/kids.jpg'),
    innerStoriesList:[{
  id: 16,
  title: 'The Vanishing Heiress',
  content: 'In the heart of a bustling city, a wealthy heiress disappeared without a trace. The police were baffled, and the case remained unsolved for years. But a determined detective, John Smith, took on the challenge. As he delved into the mysterious disappearance, he uncovered a web of secrets, lies, and betrayals. The truth was more shocking than anyone could have imagined—the heiress had faked her own death to escape a life of privilege. John"s relentless pursuit led him to a hidden world of underground societies and international conspiracies. The Vanishing Heiress was a tale of deception and intrigue that kept readers on the edge of their seats.',
},
{
  id: 17,
  title: 'The Haunted Manor',
  content: 'On a stormy night, a group of friends decided to spend the night in a supposedly haunted manor. They were skeptical of the ghostly tales surrounding the place. However, as the night wore on, strange things began to happen. Objects moved on their own, eerie voices echoed through the halls, and shadows danced in the moonlight. The friends soon realized that the stories were true—the manor was indeed haunted. They had to work together to uncover the dark secrets of the house and find a way to free the trapped spirits. The Haunted Manor was a spine-tingling tale of paranormal encounters and the power of friendship.',
},
{
  id: 18,
  title: 'The Enigma of the Missing Key',
  content: 'A renowned archaeologist, Dr. Amelia Brooks, discovered an ancient artifact—an ornate key that held the promise of unlocking hidden treasures. But when the key was stolen from her, she embarked on a thrilling quest to recover it. The journey took her to remote jungles, forgotten temples, and perilous tombs. Along the way, she encountered rival treasure hunters, cunning traps, and cryptic puzzles. The Enigma of the Missing Key was a high-stakes adventure that blended history, mystery, and danger.',
},
{
  id: 19,
  title: 'The Midnight Whispers',
  content: 'In a small town, residents began to hear mysterious whispers in the dead of night. The whispers were faint, almost like the murmur of ghosts. They spoke of secrets long buried and sins unconfessed. A curious journalist named Sarah decided to investigate. As she delved deeper into the town"s history, she uncovered a tragic tale of betrayal and revenge. The Midnight Whispers revealed a dark chapter in the town"s past and the restless spirits that sought justice.',
},
{
  id: 20,
  title: 'The Cryptic Cipher',
  content: 'A brilliant cryptographer, David, received an encrypted message that held the key to a government conspiracy. The message was filled with complex codes and symbols, and decoding it became an obsession. David"s pursuit of the truth led him into a dangerous game of cat and mouse with powerful forces. He had to decipher the cryptic cipher before it was too late. The Cryptic Cipher was a pulse-pounding thriller that explored the world of espionage and espionage.',
},
{
  id: 21,
  title: 'The Secret Society',
  content: 'A series of bizarre events led a young journalist, Emily, to uncover the existence of a secret society that controlled the fate of nations. The society operated in the shadows, pulling the strings of governments and manipulating world events. Emily"s investigation took her from hidden meetings in underground chambers to ancient rituals in far-flung locations. The Secret Society was a gripping tale of conspiracy and the battle for control.',
},
{
  id: 22,
  title: 'The Disappearing Act',
  content: 'Famous magician Victor Vortex performed his greatest trick yet—a vanishing act that left the audience in awe. But the trick took an unexpected turn when Victor actually disappeared. His loyal assistant, Isabella, was determined to uncover the truth behind the illusion. She followed a trail of clues that led her into a world of rival magicians, magical artifacts, and a centuries-old mystery. The Disappearing Act was a spellbinding story of magic and deception.',
},
{
  id: 23,
  title: 'The Phantom Detective',
  content: 'In the city"s darkest alleys, a vigilante known as the Phantom Detective fought crime with an unyielding determination. But the detective"s true identity remained a mystery to all. A relentless police officer, Inspector Roberts, was determined to unmask the vigilante and bring justice to the city. Their cat-and-mouse chase took them to the edge of danger and revealed shocking secrets. The Phantom Detective was a thrilling tale of justice and the blurred lines between hero and antihero.',
},
{
  id: 24,
  title: 'The Cursed Painting',
  content: 'A cursed painting, known as "The Portrait of Despair," brought misfortune to all who possessed it. A series of tragic events followed the painting wherever it went. Art historian Sophia was determined to break the curse and restore the painting"s reputation. Her journey led her through the art world"s dark underbelly and into the lives of those touched by the curse. The Cursed Painting was a chilling story of art, superstition, and the battle against malevolent forces.',
},
{
  id: 25,
  title: 'The Puzzling Heist',
  content: 'A famous art gallery was robbed of its most prized possession—a priceless diamond. The heist was executed with precision, and the thief left behind a cryptic puzzle as a taunt to the authorities. Detective Alex took on the challenge of solving the puzzle and recovering the stolen gem. His investigation took him to the world of master thieves, intricate riddles, and high-stakes heists. The Puzzling Heist was a mind-bending thriller that tested the limits of Alex"s intellect.',
},
{
  id: 26,
  title: 'The Whispering Woods',
  content: 'Deep within a dense forest lay the Whispering Woods, a place where the trees seemed to speak. Visitors heard faint whispers and eerie laughter among the trees. A group of friends decided to spend a night in the woods to uncover the source of the whispers. As they ventured deeper, they encountered strange phenomena and surreal visions. The Whispering Woods was a spine-chilling tale of nature"s mysteries and the boundaries between reality and the supernatural.',
},
{
  id: 27,
  title: 'The Unsolved Murders',
  content: 'A series of unsolved murders haunted a small town for decades. The victims all had one thing in common—they were connected to a mysterious cult. Journalist Sarah returned to her hometown to investigate the cold cases and unravel the secrets of the cult. Her journey led her to confront her own past and the dark forces that lurked in the shadows. The Unsolved Murders was a harrowing story of redemption and the pursuit of justice.',
},
{
  id: 28,
  title: 'The Vanishing Ship',
  content: 'In the heart of the Bermuda Triangle, a ship disappeared without a trace. A team of explorers set out to uncover the truth behind the legend of the vanishing ship. As they delved deeper into the treacherous waters, they encountered strange phenomena and unexplained phenomena. The Vanishing Ship was a thrilling adventure that tested the limits of human courage and the mysteries of the deep.',
},
{
  id: 29,
  title: 'The Illusionist\'s Legacy',
  content: 'A legendary illusionist, Marcus the Magnificent, passed away, leaving behind a legacy of enigmatic tricks. His greatest illusion, "The Vanishing City," was never revealed. A group of aspiring magicians and researchers sought to uncover the secret behind the illusion. Their journey led them through a world of magic, illusion, and the blurred line between reality and deception. The Illusionist\'s Legacy was a captivating story of wonder and the pursuit of the impossible.',
},
{
  id: 30,
  title: 'The Midnight Express',
  content: 'A passenger train, known as the Midnight Express, traveled through desolate landscapes and mysterious tunnels. Those who boarded the train at midnight found themselves on a journey through time and space. The train"s conductor, a cryptic figure known as the Timekeeper, guided passengers through the realms of the past, present, and future. The Midnight Express was a mind-bending tale of time travel and the choices that shaped destinies.',
},
]

  },
  {
    id: 3,
    title: 'Fantasy Tales',
    image: require('../../assets/images/fantasy.jpg'),
    innerStoriesList: [],
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
