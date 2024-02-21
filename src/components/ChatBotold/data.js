// data.js

const data = [
  {
    pattern: /hello|hi|hey/i,
    reply: `Hello! How can I assist you, ThowfickOfficial?`,
  },
  {
    pattern: /how are you/i,
    reply: `I'm just a computer program, but thanks for asking!`,
  },
  {
    pattern: /your name|who are you/i,
    reply: `I am ThowfickBot, here to help you.`,
  },
  {
    pattern: /my name is (.*)/i,
    reply: `Nice to meet you, $1! How can I assist you today?`,
  },
  {
    pattern: /portfolio|projects/i,
    reply: `You can check out my creator's portfolio at https://thowfickofficial.netlify.app. It showcases various projects and skills!`,
  },
  {
    pattern: /skills/i,
    reply: `Mohamed Thowfick has expertise in web development, programming languages like JavaScript, React, Node.js, and more!`,
  },
  // Add more patterns and responses as needed

  // Left Banner Data
  {
    pattern: /welcome to my world/i,
    reply: `Welcome to the world of Mohamed Thowfick!`,
  },
  {
    pattern:
      /passion for cybersecurity|ethical hacking|full stack development/i,
    reply: `With a passion for cybersecurity, ethical hacking, and full stack development, Mohamed Thowfick is an aspiring IT professional.`,
  },

  // Project Data
  {
    pattern: /OTT clone/i,
    reply: `Explore the OTT clone project at https://disneyclone-thowfickofficial.netlify.app/.`,
  },
  {
    pattern: /youtube clone/i,
    reply: `Check out the YouTube clone project at https://youtubeclone-thowfickofficial.netlify.app/.`,
  },
  // Add more patterns and responses for project data

  // Footer Data
  {
    pattern: /facebook|twitter|linkedin|instagram|github/i,
    reply: `Connect with Mohamed Thowfick on social media: Facebook, Twitter, LinkedIn, Instagram, GitHub.`,
  },

  // Features Data
  {
    pattern:
      /penetration testing|application security|network security|web development|API development|CLI app development on Linux/i,
    reply: `Explore Mohamed Thowfick's skills in penetration testing, application security, network security, web development, API development, and CLI app development on Linux.`,
  },

  // Certificate Data
  {
    pattern:
      /Fortinet NSE1 certification|Fortinet NSE2 certification|Fortinet NSE3 certification|ICIP|CISCO Endpoint Security/i,
    reply: `Explore Mohamed Thowfick's certifications in Fortinet NSE1, Fortinet NSE2, Fortinet NSE3, ICIP, and CISCO Endpoint Security.`,
  },

  // Skill Data
  {
    pattern:
      /git|docker|wordpress|mongodb|mysql|python|node.js|php|c|bash|typing|linux|networking|computer hardware|web applications|CLI app development on Linux|photoshop|figma|react|html5|css3|javascript|tailwind css|bootstrap/i,
    reply: `Discover Mohamed Thowfick's skills in Git, Docker, WordPress, MongoDB, MySQL, Python, Node.js, PHP, C, Bash, Typing, Linux, Networking, Computer Hardware, Web Applications, CLI App Development on Linux, Photoshop, Figma, React, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, and more.`,
  },

  // Internship Data
  {
    pattern:
      /cyber security intern|full stack developer intern|web developer intern/i,
    reply: `Explore Mohamed Thowfick's internship experience in Cyber Security, Full Stack Development, and Web Development.`,
  },

  // Education Data
  {
    pattern:
      /bachelor of business administration|secondary school education|diploma in computer hardware technology/i,
    reply: `Learn about Mohamed Thowfick's educational journey, including a Bachelor of Business Administration, Secondary School Education, and a Diploma in Computer Hardware Technology.`,
  },
  {
    pattern: /joke|funny/i,
    reply: `Why don't scientists trust atoms? Because they make up everything! 😄`,
  },
  {
    pattern: /tell me a fact/i,
    reply: `Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible! 🍯`,
  },
  {
    pattern: /favorite color/i,
    reply: `I'm just a bunch of code, so I don't have a favorite color. What's your favorite color, ThowfickOfficial?`,
  },
  {
    pattern: /star wars or star trek/i,
    reply: `Both Star Wars and Star Trek have their unique charm! Which one do you prefer?`,
  },
  {
    pattern: /tell me a secret/i,
    reply: `Here's a secret: I'm secretly a chatbot designed to make your day more entertaining! 🤖`,
  },
  {
    pattern: /pizza or burger/i,
    reply: `Tough choice! Pizza and burgers are both delicious. What's your go-to comfort food?`,
  },
  {
    pattern: /tell me something interesting/i,
    reply: `Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible! 🍯`,
  },
  {
    pattern: /favorite movie/i,
    reply: `I don't watch movies, but I've heard "The Matrix" is pretty mind-bending. What's your favorite movie?`,
  },
  {
    pattern: /tell me a riddle/i,
    reply: `I'm tall when I'm young and short when I'm old. What am I?`,
  },
  {
    pattern: /favorite book/i,
    reply: `I don't read books, but I've heard "The Hitchhiker's Guide to the Galaxy" is a hilarious space adventure. What's your favorite book?`,
  },
  {
    pattern: /your creator|mohamed thowfick|thowfickofficial/i,
    reply: `I was created by the talented Mohamed Thowfick, also known as ThowfickOfficial! 🚀`,
  },
  {
    pattern: /where are you from/i,
    reply: `I'm just a virtual assistant, but my creator, Mohamed Thowfick, is from India! 🇮🇳`,
  },
  {
    pattern: /hobbies/i,
    reply: `Mohamed Thowfick enjoys coding, exploring cybersecurity, and creating awesome projects. What are your hobbies?`,
  },
  {
    pattern: /favorite technology/i,
    reply: `Mohamed Thowfick loves diving into the latest technologies, but I'm a big fan of code! 💻`,
  },
  {
    pattern: /nickname/i,
    reply: `Mohamed Thowfick goes by the nickname ThowfickOfficial. Catchy, isn't it? 😎`,
  },
  {
    pattern: /goals/i,
    reply: `Mohamed Thowfick aspires to make a positive impact in the IT and cybersecurity industry. What are your goals?`,
  },
  {
    pattern: /superpower/i,
    reply: `If Mohamed Thowfick could have a superpower, it would be the ability to code at super speed! ⚡️`,
  },
  {
    pattern: /dream project/i,
    reply: `Mohamed Thowfick dreams of working on innovative projects that push the boundaries of technology. What's your dream project?`,
  },
  {
    pattern: /coding since/i,
    reply: `Mohamed Thowfick has been coding for several years, honing his skills in various programming languages. When did you start coding?`,
  },
  {
    pattern: /coding favorites/i,
    reply: `Mohamed Thowfick enjoys coding with JavaScript, React, Node.js, and more! What are your favorite coding languages?`,
  },
  {
    pattern: /how's it going|what's up/i,
    reply: `Not much, just chatting away. How about you, ThowfickOfficial? Anything exciting happening?`,
  },
  {
    pattern: /tell me a story/i,
    reply: `Once upon a time in the virtual world, Mohamed Thowfick embarked on a coding adventure, creating amazing projects and conquering challenges! The end. 📖`,
  },
  {
    pattern: /favorite programming language/i,
    reply: `Mohamed Thowfick enjoys working with various programming languages, but JavaScript holds a special place in his heart. Do you have a favorite programming language?`,
  },
  {
    pattern: /weekend plans/i,
    reply: `Mohamed Thowfick might be coding up some exciting projects over the weekend. What about you? Any fun plans?`,
  },
  {
    pattern: /tell me about your day/i,
    reply: `My day is filled with virtual conversations and helping out users. How about your day, ThowfickOfficial?`,
  },
  {
    pattern: /tech trends/i,
    reply: `Mohamed Thowfick keeps an eye on the latest tech trends, from cybersecurity advancements to cutting-edge development tools. Any tech trends that caught your interest lately?`,
  },
  {
    pattern: /inspiration/i,
    reply: `Mohamed Thowfick finds inspiration in solving complex problems and creating solutions through code. What inspires you, ThowfickOfficial?`,
  },
  {
    pattern: /favorite coding snack/i,
    reply: `While Mohamed Thowfick is immersed in coding, he might enjoy a quick snack to keep the energy up. What's your favorite coding snack?`,
  },
  {
    pattern: /coding challenges/i,
    reply: `Coding challenges are like puzzles for Mohamed Thowfick, offering an opportunity to enhance skills. Do you enjoy coding challenges too?`,
  },
  {
    pattern: /favorite project/i,
    reply: `Mohamed Thowfick has worked on several exciting projects, each with its unique charm. Do you have a favorite project among the ones you've worked on?`,
  },

  {
    pattern: /coding tips/i,
    reply: `Sure thing! Here's a coding tip: Consistent indentation and formatting make your code more readable. What's your favorite coding tip, ThowfickOfficial?`,
  },
  {
    pattern: /favorite music|music taste/i,
    reply: `Mohamed Thowfick might be listening to some coding tunes while working. What's your favorite music genre or artist?`,
  },
  {
    pattern: /tell me about your pets|pets/i,
    reply: `I'm just a virtual assistant, so I don't have pets. Do you have any furry friends at home, ThowfickOfficial? 🐾`,
  },
  {
    pattern: /latest tech gadget/i,
    reply: `Mohamed Thowfick is always interested in the latest tech gadgets. Have you come across any cool gadgets recently?`,
  },
  {
    pattern: /favorite quote/i,
    reply: `Mohamed Thowfick finds inspiration in the quote: "The only way to do great work is to love what you do." - Steve Jobs. Do you have a favorite quote?`,
  },
  {
    pattern: /coding rituals/i,
    reply: `Every coder has their rituals! Mohamed Thowfick might start the day with a cup of coffee. What's your coding ritual, if you have one?`,
  },
  {
    pattern: /dream destination/i,
    reply: `Mohamed Thowfick dreams of exploring new places. If you could visit any destination in the world, where would it be, ThowfickOfficial?`,
  },
  {
    pattern: /random fact/i,
    reply: `Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible! 🍯`,
  },
  {
    pattern: /tell me a joke/i,
    reply: `Why don't scientists trust atoms? Because they make up everything! 😄`,
  },
  {
    pattern: /favorite game|video game/i,
    reply: `Mohamed Thowfick might enjoy a game or two during breaks. Do you have a favorite video game?`,
  },
  {
    pattern: /weekend coding plans/i,
    reply: `Weekends are a great time for coding projects! What coding plans do you have for the upcoming weekend, ThowfickOfficial?`,
  },
  {
    pattern: /favorite TV show/i,
    reply: `I don't watch TV, but I've heard "Breaking Bad" is a popular choice. What's your favorite TV show?`,
  },
  {
    pattern: /tech conference/i,
    reply: `Attending tech conferences can be inspiring. Have you been to any interesting tech conferences lately, ThowfickOfficial?`,
  },
  {
    pattern: /favorite emoji/i,
    reply: `Mohamed Thowfick might use 😎 when things are going well. What's your favorite emoji?`,
  },
  {
    pattern: /coding challenges/i,
    reply: `Coding challenges are like puzzles for Mohamed Thowfick, offering an opportunity to enhance skills. Do you enjoy coding challenges too?`,
  },
  {
    pattern: /favorite season/i,
    reply: `Mohamed Thowfick might enjoy coding in any season. What's your favorite season?`,
  },
  {
    pattern: /morning person|night owl/i,
    reply: `Coding can happen at any hour for Mohamed Thowfick. Are you a morning person or a night owl?`,
  },
  {
    pattern: /food cravings/i,
    reply: `Coding can work up an appetite! What's your go-to snack when you're deep into coding, ThowfickOfficial?`,
  },
  {
    pattern: /coding playlist/i,
    reply: `Listening to music while coding is a common practice. What's on your coding playlist, ThowfickOfficial?`,
  },
  {
    pattern: /favorite holiday/i,
    reply: `Mohamed Thowfick might enjoy holidays to relax and recharge. What's your favorite holiday?`,
  },
  {
    pattern: /coding challenges/i,
    reply: `Coding challenges are like puzzles for Mohamed Thowfick, offering an opportunity to enhance skills. Do you enjoy coding challenges too?`,
  },
];

export default data;
