const quotesArr = [
  {
    characterName: "Matsumoto Rangiku",
    quote: "To know sorrow is not terryfying. What is terrifying is to know you can't go back to the happiness you could have.",
    animeTitle: "BLEACH"
  },
  {
    characterName: "Mavis Vermillon",
    quote: "Mistakes are not shackles that halt one from stepping forward. Rather, they are that which sustain and grow one's heart.",
    animeTitle: "Fairy Tail"
  },
  {
    characterName: "Himura Kenshin",
    quote: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    animeTitle: "Ruruni Kenshin"
  },
  {
    characterName: "Erza Scarlet",
    quote: "Hurt me with the truth. But never comfort me with a lie.",
    animeTitle: "Fairy Tail"
  },
  {
    characterName: "Simon",
    quote: "Reject common sense to make the impossible possible",
    animeTitle: "Gurren Lagann"
  },
  {
    characterName: "Nagato",
    quote: "If you don't share someone's pain, you can never understand them.",
    animeTitle: "Naruto Shippuden"
  },
  {
    characterName: "Satsuki Kiryuuin",
    quote: "Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will surrender to them, ...",
    animeTitle: "Kill LA Kill"
  },
  {
    characterName: "Hitsugaya Toshiro",
    quote: "We are like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let's not disappear like a firework and continue to shine forever.",
    animeTitle: "BLEACH"
  },
  {
    characterName: "Edward Elric",
    quote: "How can you move forward if you keep regretting the past?",
    animeTitle: "Fullmetal Alchemist: BROTHERHOOD"
  },
  {
    characterName: "Ymir",
    quote: "Do you always want to live behind the mask you put up for the sake of others? You are you, and there's nothing wrong with that.",
    animeTitle: "Attack on Titans"
  },
  {
    characterName: "Ymir",
    quote: "I am the hope of the universe. I am the answer to all living things that cry out for peace. I am the protector of the innocent. I am the light in the darkness. I am the truth. Ally to good! Nightmare to you!",
    animeTitle: "Attack on Titans"
  },
  {
    characterName: "Mugen",
    quote: "Don't live your life making up excuses. The one making your choices is yourself!",
    animeTitle: "Samurai Champloo"
  },
  {
    characterName: "Reiko Mikami",
    quote: "It's just pathetic to give up on something before you even give it a shot.",
    animeTitle: "Another"
  },
  {
    characterName: "Shintaro Modorima",
    quote: "There's no shame in falling down! True shame is to not stand up again.",
    animeTitle: "Kuroko's Basketball"
  },
  {
    characterName: "Alucard",
    quote: "Giving up kills people. When people reject giving up... they finally win the right to transcend humanity.",
    animeTitle: "Hellsing"
  },
  {
    characterName: "Maka Albarn",
    quote: "I refuse to let my fear control me anymore",
    animeTitle: "Soul Eater"
  },
  {
    characterName: "Gildarts Clive",
    quote: "Fear is not Evil. It tells you where your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
    animeTitle: "Fairy Tail"
  },
  {
    characterName: "Keima Katsuragi",
    quote: "Don't be upset of what you can't do. Do what you do best, live as carefree and optimistically as you can, because some people aren't able to do that.",
    animeTitle: "The World God Only knows"
  },
  {
    characterName: "Saitama",
    quote: "Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could you of tomorrow beat you today? Instead of giving in, move forward.",
    animeTitle: "One Punch Man"
  },
  {
    characterName: "Edward Elric",
    quote: "A lesson without pain is meaningless. That's because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart.",
    animeTitle: "Fullmetal Alchemist: BROTHERHOOD"
  },
  {
    characterName: "Natsu Dragneel",
    quote: "The moment you think of giving up, think of the reason why you help on so long",
    animeTitle: "Fairy Tail"
  },
  {
    characterName: "Hinata Miyake",
    quote: "When you hit the point of no return, that's the moment it truly becomes a journey. If you can still turn back, it's not really a journey.",
    animeTitle: "A Place Further Than The Universe."
  },
  {
    characterName: "Itachi uchiha",
    quote: "People's lives don't end when they die, it ends when they lose faith.",
    animeTitle: "Naruto Shippuden"
  },
  {
    characterName: "Rider",
    quote: "Whatever you do, enjoy it to the fullest. That is the secret of life.",
    animeTitle: "Fate Zero"
  },
  {
    characterName: "Karma Akabane",
    quote: "People with talent often have the wrong impression that things will go as they think.",
    animeTitle: "Assassination Classroom"
  },
  {
    characterName: "Saiga Jouji",
    quote: "Charisma has three points. The nature of a hero or prophet, the ability to simply make you feel good when you are around them, and the intelligence to eloquently talk about all sorts of things.",
    animeTitle: "Psycho pass"
  },
  {
    characterName: "Shogo Makishima",
    quote: "The opposite of boredom is not pleasure, but excitement. People will gladly seek out any kind of excitement, even pain.",
    animeTitle: "Psycho pass"
  },
  {
    characterName: "Madara Uchiha",
    quote: "When a man learns to love, he must bear the risk of hatred.",
    animeTitle: "Naruto Shippuden"
  },
  {
    characterName: "Madara Uchiha",
    quote: "People cannot show each other their true feelings. Fear, suspicion, and resentment never subside.",
    animeTitle: "Naruto Shippuden"
  },
  {
    characterName: "Jiraiya",
    quote: "A place where someone still thinks about you is a place you can call home.",
    animeTitle: "Naruto Shippuden"
  },
  {
    characterName: "Orochimaru",
    quote: "It is human nature not to realize the true meaning of something, unless they lose it.",
    animeTitle: "Boruto"
  },
  {
    characterName: "Obito Uchiha",
    quote: "No one cared who I was until I put on a mask",
    animeTitle: "Naruto Shippuden"
  },
  {
    characterName: "Itachi uchiha",
    quote: "Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.",
    animeTitle: "Naruto Shippuden"
  },
  {
    characterName: "Jet Black",
    quote: "Man always thinks about the past before he dies, as if he were frantically searching for a proof he truly lived.",
    animeTitle: "Cowboy Bebop"
  },
  {
    characterName: "Chihiro Ogino",
    quote: "I finally get a bouquet and it's a goodbye present. That's depressing.",
    animeTitle: "Spirited Away"
  },
  {
    characterName: "Hachiman Hikigaya",
    quote: "The past makes you wanna die out of regret and the future makes you depressed out of anxiety. So by elimination, the present is likely the happiest time.",
    animeTitle: "Oregairu"
  },
  {
    characterName: "Lelouch Lamperouge",
    quote: "A life that lives without doing anything is the same as a slow death",
    animeTitle: "Code Geass"
  },
  {
    characterName: "Shouya Ishida",
    quote: "Things would have been so much better back then, if we had heard each other's voices.",
    animeTitle: "A silent voice"
  },
  {
    characterName: "Okazaki Tomoya",
    quote: "You should cry while you still can. When you get bigger, sometimes, you can't cry even if you have something you wanna cry about.",
    animeTitle: "Clannad"
  },
  {
    characterName: "Tsubasa Fujiyama",
    quote: "Lights in a summer night make a false start in the evening sunset. In my seventeeth July I met you. Hey sunflower, I ask my dictionary the definition of cute. Words bubble up like soda pop. A thunderous roar, words exist for the sake of expression.",
    animeTitle: "Words Bubble Up Like Soda Pop"
  },
  {
    characterName: "Sora",
    quote: "Accept that because we were born with nothing, we can become anything!",
    animeTitle: "No game No Lige"
  },
  {
    characterName: "Monkey D. Luffy",
    quote: "Forgetting is like a wound. The wound may heal, but it has already left a scar",
    animeTitle: "One Piece"
  },
  {
    characterName: "Miyamoto Musashi",
    quote: "The true path of the warrior is to always seek improvement.",
    animeTitle: "Vagabond"
  },
  {
    characterName: "Jet Black",
    quote: "you were always there for me, and that's all I needed. Just you. For some reason, I didn't feel sad or broken up, it just didn't seem real. But slowly I realized it was real - that you were gone. And little by little, I slowly felt something inside me go numb.",
    animeTitle: "Cowboy Bebop"
  },
  {
    characterName: "Zeniba",
    quote: "Once you've met someone you never really forget them. It just takes a while for your memories to return.",
    animeTitle: "Spirited Away"
  },
  {
    characterName: "Tohru Honda",
    quote: "The scariest and the most painful thing is to be hated by someone you truly love.",
    animeTitle: "Fruits Basket"
  },
  {
    characterName: "Crona",
    quote: "I bet dead people are easier to get along with",
    animeTitle: "Soul Eater"
  },
  {
    characterName: "Maka Albarn",
    quote: "It's not that you don't know how to deal with people. It's that no one took the time to deal with you.",
    animeTitle: "Soul Eater"
  },
  {
    characterName: "Juuzou Suzuya",
    quote: "Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?",
    animeTitle: "Tokyo Ghoul"
  },
  {
    characterName: "Kaneki ken",
    quote: "If you were to write a story with me in the lead role, it would certainly be... a tragedy.",
    animeTitle: "Tokyo Ghoul"
  },
  {
    characterName: "Kaneki ken",
    quote: "human relationships are chemical ractions. If you have a reaction then you can never return back to your previous state of being.",
    animeTitle: "Tokyo Ghoul"
  }
]



function getRandomQuote() {
  return quotesArr;
}

export {
  getRandomQuote,
}