const projectsArr = [
  {
    name: "Web Image Scraper",
    desc: "A tool made for getting images from a website. Originally made to speed up the process of archiving old websites. The search history shows the last 3 searches and you can go to a random URL from a list I have stored in an array. In development everything worked fine up until deploying on Vercel so I had to make use of Browserless. The project also uses Puppeteer and I hope to implement the option to filter small images and the ability to download all or a selection of images.",
    imgURL: "/WebImageScraper/Web-Image-Scraper.png",
    tags: [
      "Browserless", "HTML", "JavaScript", "Next.js", "Puppeteer", "react-icons", "Tailwind", "TypeScript"
    ],
    btnText: "Scrape images",
    btnLink: "https://web-img-scraper.vercel.app/"
  },
  {
    name: "Portfolio v2",
    desc: "This is my second Next.js app. The icons, skills, and project data are stored in variables and rendered in lists as cards. This makes adding new items easy and the code DRY. I used a frosted navbar and EmailJS for the contact form. Inspiration for the colours was taken from my VS Code theme - oh lucy. Note - there may be a few bugs and I'll be adding more functionality and projects as time passes!",
    imgURL: "/Portfoliov2/Portfoliov2.png",
    tags: [
      "EmailJS", "framer-motion", "HTML", "JavaScript", "JSX", "Next.js", "react-spring", "sonner", "Tailwind", "TypeScript"
    ],
    btnText: "View the code",
    btnLink: "https://github.com/charlieBdev/portfolio"
  },
  {
    name: "SoundWaves",
    desc: "A full stack team project made in under two weeks. SoundWaves is a more accessible Twitter experience that allows users to record 'waves', which are then transcribed. We spiked the project before commencing and made wireframes and component trees as part of our planning. We also held standups daily and tracked progress using Trello.",
    imgURL: "/SoundWaves/SoundWaves.png",
    tags: [
      "AssemblyAI",
      "Express.js",
      "Kanban",
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "Tailwind",
      "TypeScript",
      "Northcoders",
      "May 2023 Cohort",
    ],
    btnText: "Try SoundWaves",
    btnLink: "https://aa-sound-waves.vercel.app/waves",
  },
  {
    name: "NC News",
    desc: "NC News is a minimalistic Reddit clone. I'm currently working on this to improve on the current functionality and a few more features I'd like to add are user accounts, the ability to up or down vote articles and comments, and the ability to post an article. Having used Tailwind in more recent projects, I'm also now adding that as, while the styling with Vanilla CSS was great in my opinion, it was a pain having to edit or add more styling.",
    imgURL: "/NCNews/NCNews.png",
    tags: [
      "CORS",
      "Notistack",
      "PERN",
      "React",
      "RESTful API",
      "Tailwind",
      "Vanilla CSS",
      "Northcoders",
      "May 2023 Cohort",
    ],
    btnText: "Go to NC News",
    btnLink: "https://euphonious-scone-36cbae.netlify.app/",
  },
  {
    name: "NC News API",
    desc: "The backend for NC News was developed using Test-Driven Development with Jest and Supertest and the Model View Controller design pattern. There are currently nine endpoints to handle GET, POST, PATCH, and DELETE requests, but I will be adding more soon as more features are required on the frontend. The database is hosted by ElephantSQL.",
    imgURL: "/NCNews/NCNewsAPI.png",
    tags: [
      "ElephantSQL",
      "Express.js",
      "Jest",
      "MVC",
      "PERN",
      "PostgreSQL",
      "RESTful API",
      "Supertest",
      "TDD",
      "Northcoders",
      "May 2023 Cohort",
    ],
    btnText: "View the NC News API",
    btnLink: "https://nc-news-qvv1.onrender.com/api",
  },
  {
    name: "Meteorites App",
    desc: "A solo frontend project that connects to the NASA Meteorite Landings API to get data on meteorites in a given year. I hope to add a visualisation of a world map showing where each meteor hit and also a single meteor page. This was my first experience with React, connecting to an API, and using pagination. Times misspelt meteroites - 42,000,001!",
    imgURL: "/Meteorites/Meteorites.png",
    tags: [
      "Axios",
      "Express.js",
      "Jest",
      "Pagination",
      "React",
      "RESTful API",
      "TDD",
      "Northcoders",
      "May 2023 Cohort",
    ],
    btnText: "Check out space stuff",
    btnLink: "https://precious-madeleine-f3b23d.netlify.app/",
  },
  {
    name: "myDictionary",
    desc: "A tool for English language learners to help them remember vocabulary by recording it in a personalised way. The app isn't currently deployed but a demo can be viewed by clicking the button below. The app was made as part of my final CS50 Introduction to Computer Science project. The concept was my own having been an English Language Teacher in a past life.",
    imgURL: "/FillerGoodVibesSign.png",
    tags: ["Bootstrap", "Flask", "HTML", "Jinja", "Python", "SQLite3", "CS50"],
    btnText: "Watch a demo",
    btnLink: "https://www.youtube.com/embed/SKNA0gKNQ8o",
  },
  {
    name: "Sunny Surfboards",
    desc: "This was a solo project made while on my first part-time Software Development bootcamp at Sheffield College. Prior to this I hadn't used VS Code or C# but loved the opportunity to work on a simulation of a real-world project. The project was managed using Monday. The app is a calculator of sorts, which helps staff calculate the costs of surfboard and wetsuit rentals.",
    imgURL: "/FillerGoodVibesSign.png",
    tags: [
      "C#",
      "Monday",
      "VS Code",
      "WinForms",
      ".NET",
      "Sheffield College",
      "Dec 2022",
    ],
    btnText: "View the repo",
    btnLink: "https://github.com/charlieBdev/Sunny-Surfboards",
  },
]

export default projectsArr
