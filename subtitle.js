function getRandomGreeting() {
  var greetings = [
    "Beep boop! Are you a robot?",
    "Did you know I have a discord server?",
    "How many sides does a circle have?",
    "You can read btw",
    "Made you look!",
    "Redbull gives you wings...",
    "Since 2020!",
    "As seen on TV!",
    "doot doot",
    "Cold as ice!",
    "Made in the US!",
    "Made by 3kh0!",
    "Reload the page NOW!",
    "Downloading your passwords...",
    "Running 3kh0.exe",
    "WARNING: You may lose braincells if you proceed!",
    "Do you bite your ice cream?",
    "#Relatable",
    "Fortnite is cringe",
    "You got games on your phone?",
    "Powered by hamsters!",
    "*insert cool explosion*",
    "Got to go fast!",
    "My iPad passcode is 563543 btw",
    "Sponsered by RAID SHADOW LEGENDS!",
    "Sponsored by Honey!",
    "Sponsored by 3kh0!",
    "Piplup is cute",
    "3kh0 is a bozo",
    "Powered by 128 Gigs of RAM!",
    "Powered by 16MB of RAM!",
    "I'm Slim Shady, yes, I'm the real Shady!",
    "You're a real jerk!",
    "w h a t",
    "3kh0.net is here!",
    "what the dog doin?",
    "I'm gonna pop some tags",
    "Shoutout to 4chan!",
    "thx stackoverflow!",
    "are you a gaemer?",
    "It is time to get funky!",
    "We didn't start the fire! It was always burning, since the world's been turning!",
    "Don't ask questions if you can't handle the answers!",
    "If you are using Microsoft Edge, you need some help.",
    "Living in Spain without the S",
    "Shoutout to Piplup!",
    "Shoutout to 3kh0!",
    "Woo! /g/",
    "youtube.com/watch?v=dQw4w9WgXcQ",
    "youtube.com/@3kh0",
    "Please stop posting furry images.",
    "Is this the United Airlines costumer service center?",
    "POV that one person who's 2 braincells are fighting for second place.",
    "bottem text",
    "Why do they call it oven if you oven the cold food of out hot eat the food",
    "No fun allowed",
    "Your toes will be pulled tonight",
    "i do love buying birth certificates from the black market! - Piplup",
    "'If you are trash go play Fortnite you loser' - Sun Tzu, Art of war",
    "Echo is not a furry I swear",
    "i wanted free vbucks :(",
    "Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd",
    "reload for another message",
    "Why does the discord server exist",
    "He stomped on his fruit loops and thus became a cereal killer.",
    "Techonoblade never dies!",
    "And just to think I knew him before he was famous",
    "Trust me, I did not copy Minecraft with this",
    "It is everyday bro",
    "That proves you are unusual",
    "What's my age again?",
    "This is the 5th time this week, and it's only Monday",
    "You bum",
    "Roblox? Cringe!",
    "Toss the Turtle is pretty fun",
    "Mission failed, we will get them next time",
    "NUKE INCOMING!",
    "I spent too much time making these",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
