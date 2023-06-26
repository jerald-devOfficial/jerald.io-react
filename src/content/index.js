export default {
  nav: {
    logo: ['JERALD', 'IO'],
  },
  portfolio: {
    modal: process.env.PUBLIC_URL + '/assets/modal.jpg',
    img: process.env.PUBLIC_URL + '/assets/portfolio.png',
    text: ['Hey!', "It's me, ", 'Jerald.'],
    typical: [
      'I am a Full Stack Web Developer. 🖥️ ',
      3000,
      "I'm a Gamer. 🎮  ",
      3000,
      "I'm a C/C++ programmer. ",
      3000,
    ],
  },
  modal: {
    url: process.env.PUBLIC_URL + '/assets/resume_april2021-min.pdf',
    img: {
      img: process.env.PUBLIC_URL + '/assets/modal_profile.png',
      alt: 'Modal Profile Picture',
    },
    skills: [
      'C',
      'C++',
      'PHP',
      'JSON',
      'HTML5',
      'CSS3',
      'SASS',
      'Tailwindcss',
      'Materializecss',
      'mui',
      'Bootstrap 4+',
      'NodeJS',
      'ReactJS',
      'EJS',
      'ExpressJS',
      'VanillaJS',
      'jQuery',
      'npm',
      'PugJS',
      'RestfulAPIs',
      'Adobe Photoshop CC',
      'Postman',
      'Linux',
      'MongoDB',
      'NoSQL',
    ],
  },
  stack: {
    title: 'MERN Full Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/react.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
    ],
    desc: `I use the MERN Stack`,
    sub: `MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.`,
    list: [
      {
        text: 'MongoDB',
        caption: 'document database',
      },
      {
        text: 'Express.js',
        caption: 'Node.js web framework',
      },
      {
        text: 'React.js',
        caption: 'a client-side JavaScript framework',
      },
      {
        text: 'Node.js',
        caption: 'the premier JavaScript web server',
      },
    ],
  },
  skills: {
    title: 'My Skills',
    list: [
      {
        lang: 'HTML5',
        percent: '90%',
        barAnimation: 'html5',
      },
      {
        lang: 'CSS3',
        percent: '80%',
        barAnimation: 'css3',
      },
      {
        lang: 'Javascript',
        percent: '90%',
        barAnimation: 'javascript',
      },
      {
        lang: 'NodeJS',
        percent: '85%',
        barAnimation: 'nodejs',
      },
      {
        lang: 'ReactJS',
        percent: '88%',
        barAnimation: 'reactjs',
      },
      {
        lang: 'MongoDB',
        percent: '70%',
        barAnimation: 'mongodb',
      },
      {
        lang: 'Tailwind CSS',
        percent: '80%',
        barAnimation: 'tailwindcss',
      },
      {
        lang: 'Bootstrap 4+',
        percent: '60%',
        barAnimation: 'bootstrap',
      },
      {
        lang: 'Materialize CSS',
        percent: '60%',
        barAnimation: 'materializecss',
      },
      {
        lang: 'SASS',
        percent: '70%',
        barAnimation: 'sass',
      },
      {
        lang: 'ExpressJS',
        percent: '85%',
        barAnimation: 'expressjs',
      },
      {
        lang: 'SQL',
        percent: '50%',
        barAnimation: 'sql',
      },
      {
        lang: 'Material UI',
        percent: '60%',
        barAnimation: 'materialui',
      },
      {
        lang: 'JQUERY',
        percent: '90%',
        barAnimation: 'jquery',
      },
    ],
  },
  projects: {
    title: 'Projects I made',
    windows: {
      projectName: 'MyShoppe',
      desc: 'Point of Sale in C language with database for Windows 7|10. Download now!',
      url: process.env.PUBLIC_URL + '/assets/MyShoppe.exe',
      technologies: ['C', 'Windows 7/8/10', 'POS', 'File I/O'],
      img: {
        img: process.env.PUBLIC_URL + '/assets/MyShoppe.jpg',
        alt: 'MyShoppe',
      },
    },
    list: [
      {
        projectName: 'Emailer',
        desc: 'This is an emailing feedback app made with MERN.',
        url: 'https://jerald-emailer.herokuapp.com',
        technologies: ['MongoDB', 'Express', 'ReactJS', 'NodeJS'],
        img: {
          img: process.env.PUBLIC_URL + '/assets/emailer.jpg',
          alt: 'Emailer',
        },
      },
      {
        projectName: 'Todolist v1',
        desc: 'A todolist with plain node and express server.',
        url: 'https://jerald-todov1.herokuapp.com',
        technologies: ['MongoDB', 'Express', 'NodeJS'],
        img: {
          img: process.env.PUBLIC_URL + '/assets/todov1.jpg',
          alt: 'Todolist v1',
        },
      },
      {
        projectName: 'Notes',
        desc: "Based on Google's keeper app with react, node and express.",
        url: 'https://jerald-notes.herokuapp.com/',
        technologies: ['Express', 'ReactJS', 'NodeJS'],
        img: {
          img: process.env.PUBLIC_URL + '/assets/note-app.jpg',
          alt: 'Notes App',
        },
      },
    ],
  },
  certificates: {
    title: 'Certifications',
    list: [
      {
        certificate: 'The Complete 2020 Web Development Bootcamp',
        desc: "Udemy's best-selling web development course and one of HIGHEST RATED online courses in history of Udemy.",
        author: 'Dr. Angela Yu',
        rating: 4.7,
        hours: '55 hours',
        img: {
          img: process.env.PUBLIC_URL + '/assets/webdevbootcamp.jpg',
          alt: 'Complete 2020 Web Development Bootcamp',
        },
        link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
      },
      {
        certificate:
          'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
        desc: 'The most advanced and modern CSS course on the internet.',
        author: 'Jonas Schmedtmann',
        rating: 4.8,
        hours: '28 hours',
        img: {
          img: process.env.PUBLIC_URL + '/assets/cssandsass.jpg',
          alt: 'Advanced CSS and Sass',
        },
        link: 'https://www.udemy.com/course/advanced-css-and-sass/',
      },
      {
        certificate: 'Node with React: Fullstack Web Development',
        desc: 'Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.',
        author: 'Stephen Grider',
        rating: 4.7,
        hours: '26 hours',
        img: {
          img: process.env.PUBLIC_URL + '/assets/reactwithnode.jpg',
          alt: 'Node with React',
        },
        link: 'https://www.udemy.com/course/node-with-react-fullstack-web-development/',
      },
    ],
  },
  blog: {
    editor: process.env.PUBLIC_URL + '/blog/editor.png',
    main: {
      title: 'Getting Started',
      head: 'Blog - Getting Started',
      img: {
        img: process.env.PUBLIC_URL + '/blog/getting_started.jpg',
        alt: "Let's Get Started by David Iskander, unsplash",
      },
      category: 'Insights',
      content: [
        'Hi, welcome to my website. My name is Jerald Baroro from the Philippines. I am a full-stack web developer with MERN Stack.',
        'I learned to program when I was 15 years old in my fourth year of High School and started with Visual Basic 6. Later, I learned how HTML worked and I was inspired by the success of Facebook by Mark Zuckerberg and how he made it to become the Youngest Billionaire.',
        "Then I started coding with C and during my first year of college at UC Main Campus and was doing pretty well with the language. When I continued my college in my hometown, I made the `MyShoppe POS` app using C with a database already using C's File I/O. In that same school year, I learned C++ and Java.",
        "In my second year, I learned HTML, CSS, and PHP, and I made some decent webpages using these technologies. After that, in 2019, I worked as a BPO customer service and I was already learning Javascript with Goalkicker's",
        'In 2020, I enrolled in three different courses with Udemy. First, the 2020 Complete Web Development Bootcamp by Dr. Angela Yu where I learned all the basics to expert web developer level. This was also the course where I learned to build websites and deploy them to GitHub Pages and to Heroku. There is a ton of Javascript to learn in this course and JQuery. The best part is Database Management with MongoDB, Authentication and Security, and React JS.',
        'The next course was Advanced CSS and Sass: Flexbox, Grid, Animations, and More! by Jonas Schmedtmann where I learned to code the most advanced CSS like Flexbox and CSS Grid, and with SASS/SCSS.',
        'After that was the full stack with MERN with the course of `Node with React: Fullstack Web Development` by Stephen Grider. In this course, I learned how to do full-stack NodeJS with ReactJS and how to deploy them better to Heroku.',
        'With all these courses taken, I created my personal website. The crucial difference with my website is that it uses Tailwind CSS. Before, I mainly use Bootstrap 4+ and then Materialize CSS and Material UI, and SASS. But since started with Tailwind CSS, everything was easy. And I even think that Tailwind CSS, for now, is the easiest framework for web design, among Bootstrap, Materialize CSS, and mui.',
        'So much for that, my major goal, for now, is to start a career in web development. Wanna learn more? Visit my ',
      ],
    },
    myshoppe: {
      title: 'How to Fully Access MyShoppe POS in C',
      head: 'Blog - How to Fully Access MyShoppe POS in C',
      img: {
        img: process.env.PUBLIC_URL + '/blog/blog_myshoppe.png',
        alt: 'MyShoppe.exe',
      },
      category: 'Programming',
      content: [
        'MyShoppe was developed in C language during my college days in 2017. It is a Point-of-Sale application that functions in a Command Line Interface as it is not an Object-oriented program. The interaction between the application and the user is through keyboard strokes. The program works only in Windows environment. So, if you want to test or use this application, make sure the OS you are using is in Windows.',
        'The most special feature of this app is that it uses database on its own, the File Input / Output (File I/O) and file pointers. Another feature that you would expect is its security. It has two gateways, the Admin access and the Cashier access.',
        'In order to access these gateways, while you are in the Main page, you have three choices of characters, A, B, and C. A is for admin access, B is for Cashier access, and C is for terminate program.',
        'To go to admin access, press A, and you will be prompted to Administrator login:',
        'To go to cashier access, press B, and you will be prompted to Cashier login:',
        "You can also login to cashier once you are in the Administrator menu. There in the Administrator menu, you can manage your inventory, see Purchase logs and Net Sales. Other codes will also work for shortcut, e.g. 'cancel' and 'exit'.",
        "Get the most of this app by trying to create an inventory and explore the Cashier's section by logging in to it and enjoy selling the products.",
        "And that's it for MyShoppe POS. Thanks for reading!",
      ],
    },
    tailwindcssandreact: {
      title: 'Guide to Complete TailwindCSS and React Setup',
      head: 'Blog - Guide to Complete TailwindCSS and React Setup',
      img: {
        img: process.env.PUBLIC_URL + '/blog/react_tailwind.png',
        alt: 'React with Tailwindcss',
      },
      blogImages: [
        {
          img: process.env.PUBLIC_URL + '/blog/err_postcss8.png',
          alt: 'Error: PostCSS requires Postcss 8',
        },
        {
          img: process.env.PUBLIC_URL + '/blog/cra.svg',
          alt: 'Create React App',
        },
        {
          img: process.env.PUBLIC_URL + '/blog/err_postcss7.png',
          alt: 'Error: No matches found: postcss@^7 ',
        },
        {
          img: process.env.PUBLIC_URL + '/blog/node_modules.png',
          alt: 'Delete node_modules',
        },
      ],
      category: 'Programming',
      content: [
        'TailwindCSS 2.0 was released on November 18, 2020. I have never tried Tailwindcss before nor took on any of my online courses on Udemy. I was introduced to this framework in December 2020 when I look for help to solve a code problem with SASS on Discord. A man who helped me solve it also recommended me to try Tailwindcss, so I became curious about it.',
        'When I visited the site, I became very much fascinated by it. So, I tried it and soon enough I loved using it. So now, I just want to share how to set up a React App with TailwindCSS.',
        'Of course, you can just simply visit tailwind’s guide by just simply clicking here. But by experience, you might experience difficulty in setting up Tailwind inside your Create React App when faced with errors on your terminal by just doing so.',
        'Let’s say we follow everything from the site’s guide, and then you encounter this:',
        'Just a few of the bugs to deal with the setup. Well, to tell you their guide could be so buggy. With that said, things could really go wrong with how to set up TailwindCSS with React. So if you find some errors for tailwind with react, you are on the right page.',
        'Steps to setup React and Tailwindcss',
        'Create React App',
        "On your terminal, let's create a react app and let's name the app 'my-app':",
        "Now, you are on the my-app folder, let's then setup Tailwindcss.",
        'Install Tailwindcss 2.0',
        'The above code is from tailwind’s guide but with recent tests, this code won’t work. This is probably caused by PostCSS compatibility with Create React App. If you try you may encounter this error with PostCSS on your terminal: ',
        'In order to fix this, we need to install the latest versions of Tailwindcss, postcss, and autoprefixer: ',
        'CRACO Installation and Configuration',
        'After that, we need to install and configure craco.',
        'CRACO is needed to be able to configure Tailwind.',
        'After craco is installed, locate your package.json to update the scripts and replace react scripts with craco scripts. Red background scripts should be replaced with the green background scripts which are craco, as shown below.',
        'Next, create `craco.config.js` inside your `my-app` folder and add `tailwindcss` and `autoprefixer` as plugins for your PostCSS.',
        'TailwindCSS Configuration',
        'Generate tailwind.config.js',
        'Modify package.json, Delete node_modules, and NPM Install',
        'Since we installed the latest of tailwindcss, postcss, and autoprefixer, this config will not work as POSTCSS 8 is not yet supported by Create React App. What needs to be done is to modify the package.json:',
        'Remove the previous versions of autoprefixer, postcss, and tailwindcss, like the ones on a red background. Then replace it with the versions as shown on the green backgrounds.',
        "Next, delete the node_modules folder on your my-app folder. This is needed so that we can reinstall a clean node_modules that comes from the 'package.json'",
        'Then on your terminal, reinstall node_modules by:',
        'This setup is one the fixex on installing both Create React App and TailwindCSS 2.0. The following steps below are additional changes to tailwindcss setup. Just here, the errors are fixed already. You can now try running the react app anytime with no error just by:',
        'Setup Purge to Remove Unused Styles in Production',
        'On your tailwind.config.js, modify purge to change it to ',
        'Include Tailwindcss to CSS',
        "Now on your '/src' folder, locate 'index.css', remove all the codes in it and copy-paste the code below:",
        "Finally, make sure that index.css is being imported to './src/index.js' file. It is normally included inside 'index.js' of your React App, if so there's no need to change the 'index.js' just to import 'index.css'.",
        "And that's it for this Tailwind CSS and React Setup. Thanks for reading!",
      ],
    },
  },
};
