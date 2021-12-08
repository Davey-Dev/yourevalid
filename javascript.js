var tweetQuote;
function genQuote() {
  var randNum = randomNumber(0,valid.length-1)
  tweetQuote = valid[randNum];
  document.getElementById('quote').innerHTML = tweetQuote;
  
  //$('.twitter-share-button').attr('href', tweetQuote);
}

function tweetLink() {
    window.open("https://twitter.com/intent/tweet?text=" + tweetQuote);
}

//quote array
var valid = ["Take a deep breath and remind yourself that you are in complete control of your thoughts and emotions.",
             "Remember to do everything with an abundance of love, so that one day you will remember the beauty of every moment lived.",
             "Sometimes things fall apart so they can be put back together, better than before.",
             "Stay strong, be brave, love hard and true, and you will have nothing to lose.",
             "Overthinking ruins you. It ruins the situation. And it twists things around. It makes you worry. Plus it just makes everything worst than it actually is. Take a breather and get yourself together, I believe in you.",
             "It's okay to feel unstable. It's okay to disassociate. It's okay to hide from the world. It's okay to need help. It's okay not to be okay. Your mental illness is not a personal failure.",
             "We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop.",
             "Going in one more round when you don't think you can, that's what makes all the difference in your life.",
             "The world is a highly deceptive world, one that constantly asks you to comment but doesn't really care what you have to say. But your friends and I will care, I’m here to listen.",
             "You are not defected. You are not weird. You are not a lost cause. You are resilient.",
             "When you know that everything that is happening is only appearing on the screen of consciousness, and that you yourself are the screen on which it all appears, nothing can touch you, harm you or make you afraid.",
             "You are loved. You are capable. You are not weak.",
             "Happiness tip: Don't be bothered by anyone who thinks they know more about you than you do.",
             "First we form habits, then they form us. Conquer your bad habits, or they'll eventually conquer you.",
             "Positive thoughts are not enough. There have to be positive feelings and positive actions.",
             "Nothing is ever as it seems. What looks bad today, can be a blessing tomorrow.",
             "Patience is the master key to every situation. One must have sympathy for everything, surrender to everything, but at the same time remain patient and forbearing.",
             "You're gonna be ok, I promise"
            ]

function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}