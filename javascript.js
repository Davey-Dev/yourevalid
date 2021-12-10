var tweetQuote;
function genQuote() {
  var randNum = randomNumber(0,valid.length-1)
  tweetQuote = valid[randNum];
  document.getElementById('quote').innerHTML = tweetQuote;
  
  //$('.twitter-share-button').attr('href', tweetQuote);
}

function rawQuote() {
    document.getElementById('quoteonly').innerHTML = valid[randomNumber(0,valid.length-1)];
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
             "The world is a highly deceptive world, one that constantly asks you to comment but doesn't really care what you have to say. But your friends and I will care, I'm here to listen.",
             "You are not defected. You are not weird. You are not a lost cause. You are resilient.",
             "When you know that everything that is happening is only appearing on the screen of consciousness, and that you yourself are the screen on which it all appears, nothing can touch you, harm you or make you afraid.",
             "You are loved. You are capable. You are not weak.",
             "Happiness tip: Don't be bothered by anyone who thinks they know more about you than you do.",
             "First we form habits, then they form us. Conquer your bad habits, or they'll eventually conquer you.",
             "Positive thoughts are not enough. There have to be positive feelings and positive actions.",
             "Nothing is ever as it seems. What looks bad today, can be a blessing tomorrow.",
             "Patience is the master key to every situation. One must have sympathy for everything, surrender to everything, but at the same time remain patient and forbearing.",
             "You're gonna be ok, I promise.",
             "You're valid <3",
             "There may be people that have more talent than you, but there's no excuse for anyone to work harder than you do.",
             "You have to accept whatever comes and the only important thing is that you meet it with courage and with the best that you have to give.",
             "Get one good habit down consistently and congratulate yourself before adding another good habit.",
             "You look pretty today <3",
             "The place between your comfort zone and your dream is where life takes place.",
             "Don't worry about achieving. Don't worry about perfection. Just be there each moment as best you can.",
             "Stop asking yourself why you weren't good enough and start reminding yourself that you've always been amazing.",
             "When it all goes dark find within yourself just one better feeling thought and hold tight.",
             "Position yourself to succeed by doing the other things in your life that rejuvenate you. Exhaustion affects your quality and productivity.",
             "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
             "The simplest aspect of self-enquiry is to just hold onto the sense I AM, the sense of Being. Keep the sense of 'I' or 'I AM' by itself. Everyone can do this exercise - it brings immediate results.",
             "In order to be open to creativity, one must have the capacity for constructive use of solitude. One must overcome the fear of being alone.",
             "You never fail to amaze me. Everyday there is something new that makes me love you even more than the day before.",
             "The basic root of happiness lies in our minds; outer circumstances are nothing more than adverse or favorable.",
             "You begin by letting thoughts flow and watching them. The very observation slows down the mind till it stops altogether. Once the mind is quiet, keep it.",
             "If you would stop looking in the mirror and only look at yourself the way I look at you, you would know that you are not only precious but also the most beautiful person ever.",
             "Opportunities are like sunrises. If you wait too long, you miss them.",
             "If you can resist the impulse to claim each and every thought as your own, you will come to a startling conclusion: you will discover that you are the consciousness in which the thoughts appear and disappear.",
             "Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come.",
             "Do one thing at a time, and while doing it put your whole soul into it to the exclusion of all else.",
             "Be positive. Your mind is more powerful than you think. What is down in the well comes up in the bucket. Fill yourself with positive things.",
             "Avoid focusing on what you cannot do. Instead, focus on what you can do and accomplish without expecting approval and recognition from others.",
             "Overthinking ruins friendships and relationships. Overthinking creates problems you never had. Don't overthink, just overflow with good vibes.",
             "Your present circumstances don't determine where you can go; they merely determine where you start.",
             "Depending on what they are, our habits will either make us or break us. We become what we repeatedly do.",
             "YOU are valid and I support you!",
             "Music is my favorite part of life but when you are around life becomes even more melodious. You are a sweet tune in someone's heart and they hope to play it all their life.",
             "Begin the week with momentum and you'll look back with great satisfaction on all you achieved.",
             "You decide every moment of every day who you are and what you believe in. You get a second chance every second.",
             "Love is a fire. But whether it is going to warm your heart or burn down your house, you can never tell.",
             "Being mindful of our energy and the energy of others can help us to lead a happier, more productive life.",
             "Don't waste your energy trying to change opinions. Do your thing, and don't care if they like it.",
             "You did good today, im proud. <3",
             "Just believe in yourself. Even if you don't, pretend that you do and, at some point, you will.",
             "Be gentle with yourself, learn to love yourself, to forgive yourself, for only as we have the right attitude toward ourselves can we have the right attitude toward others.",
             "If you doubt you can accomplish something, then you can't accomplish it. You have to have confidence in your ability, and then be tough enough to follow through.",
             "Walk away from anyone who's busy finding your faults while you're busy overlooking theirs.",
             "There are so many people out there who will tell you that you can't. What you've got to do is to turn around and say - watch me.",
             "Negativity is a virus, don't let it get you sick.",
             "The fact that someone else loves you doesn't rescue you from the project of loving yourself.",
             "Start where you are. Use what you have. Do what you can.",
             "If you find yourself mentally exhausted: change your environment. Unclutter your desk. Take a shower. Go for a walk. Refresh your mental state.",
             "Lost time is never found again, make it count.",
             "Holding onto something that is good for you now, may be the very reason why you don't have something better.",
             "Don't be afraid to start over. This time you're not starting from scratch. You're starting from experience.",
             "On your good days, run hard. On your bad days, run as long as you need.",
             "Failure is so important. We speak about success all the time. It is the ability to resist failure or use failure that often leads to greater success. I've met people who don't want to try for fear of failing."
            ]

function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
