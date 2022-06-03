import userImg from './../assets/images/currentuser.jpg';
import victoriaImg from './../assets/images/image-victoria.jpg';
import jackImg from './../assets/images/image-jackson.jpg';
import suzaneImg from './../assets/images/image-suzanne.jpg';
import thomasImg from './../assets/images/image-thomas.jpg';
import elijahImg from './../assets/images/image-elijah.jpg';
import jamesImg from './../assets/images/image-james.jpg';
import anneImg from './../assets/images/image-anne.jpg';
import ryanImg from './../assets/images/image-ryan.jpg';
import vicImg from './../assets/images/image-victoria.jpg';
import georgeImg from './../assets/images/image-george.jpg';
import javierImg from './../assets/images/image-javier.jpg';
import roxanneImg from './../assets/images/image-roxanne.jpg';

export const categories = ['all', 'feature', 'UI', 'UX', 'enhancement', 'bug'];
export const status = ['suggestion', 'planned', 'in-progress', 'live'];

export const dropdownOptions = [
  'most upvotes',
  'least upvotes',
  'most comments',
  'least comments',
];

const data = [
  {
    title: 'More comprehensive reports',
    status: 'planned',
    category: 'feature',
    detail: 'It would be great to see a more detailed breakdown of solutions.',
    votes: 123,
    id: 1,
    comments: [
      {
        userName: 'Victoria Mejia',
        userLogin: 'arlen_the_marlin',
        img: victoriaImg,
        comment:
          'This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.',
        replies: [],
      },
      {
        userName: 'Jackson Barker',
        userLogin: 'countryspirit',
        img: jackImg,
        comment:
          "Yeah, this would be really good. I'd love to see deeper insights into my code!",
        replies: [],
      },
    ],
  },
  {
    title: 'Add tags for solutions',
    status: 'suggestion',
    category: 'enhancement',
    detail: 'Easier to search for solutions based on a specific stack',
    votes: 112,
    id: 2,
    comments: [
      {
        userName: 'Suzanne Chang',
        userLogin: 'upbeat1811',
        img: suzaneImg,
        comment:
          'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
        replies: [],
      },
      {
        userName: 'Thomas Hood',
        userLogin: 'brawnybrave',
        img: thomasImg,
        comment:
          'Please use fun, color-coded labels to easily identify them at a glance',
        replies: [],
      },
    ],
  },

  {
    title: 'Add a dark theme option',
    status: 'suggestion',
    category: 'feature',
    detail:
      'It would help people with light sensitivities and who prefer dark mode.',
    votes: 99,
    id: 3,
    comments: [
      {
        userName: 'Elijah Moss',
        userLogin: 'hexagon.bestagon',
        img: elijahImg,
        comment:
          "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device's dark mode turns on without the bright background it currently has.",
        replies: [],
      },
      {
        userName: 'James Skinner',
        userLogin: 'hummingbird1',
        img: jamesImg,
        comment:
          "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It's also quite a trend with modern apps and apparently saves battery life.",
        replies: [
          {
            userName: 'Anne Valentine',
            userLogin: 'annev1990',
            img: anneImg,
            replyTo: 'hummingbird1',
            reply:
              "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
          },
          {
            userName: 'Ryan Welles',
            userLogin: 'voyager.344',
            img: ryanImg,
            replyTo: 'annev1990',
            reply:
              "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
          },
        ],
      },
    ],
  },

  {
    title: 'Add micro-interactions',
    status: 'live',
    category: 'enhancement',
    detail: 'Small animations at specific points can add delight.',
    votes: 71,
    id: 4,
    comments: [
      {
        userName: 'Victoria Mejia',
        userLogin: 'arlen_the_marlin',
        img: vicImg,
        comment:
          "I'd love to see this! It always makes me so happy to see little details like these on websites.",
        replies: [
          {
            userName: 'Suzanne Chang',
            userLogin: 'upbeat1811',
            img: suzaneImg,
            replyTo: 'arlen_the_marlin',
            reply:
              "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
          },
        ],
      },
    ],
  },

  {
    title: 'Q&A within the challenge hubs',
    status: 'suggestion',

    category: 'feature',
    detail: 'Challenge-specific Q&A would make for easy reference.',
    votes: 65,
    id: 5,
    comments: [
      {
        userName: 'George Partridge',
        userLogin: 'soccerviewer8',
        img: georgeImg,
        comment:
          "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
        replies: [],
      },
    ],
  },
  {
    title: 'One-click portfolio generation',
    status: 'in-progress',
    category: 'feature',
    detail:
      'Add ability to create professional looking portfolio from profile.',
    votes: 62,
    id: 6,
    comments: [
      {
        userName: 'Ryan Welles',
        userLogin: 'voyager.344',
        img: ryanImg,
        comment:
          "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
        replies: [],
      },
    ],
  },

  {
    title: 'Add image/video upload to feedback',
    status: 'suggestion',

    category: 'enhancement',
    detail: 'Images and screencasts can enhance comments on solutions.',
    votes: 51,
    id: 7,
    comments: [
      {
        userName: 'Javier Pollard',
        userLogin: 'warlikeduke',
        img: javierImg,
        comment:
          "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
        replies: [],
      },

      {
        userName: 'Roxanne Travis',
        userLogin: 'peppersprime32',
        img: roxanneImg,
        comment:
          "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior.",
        replies: [],
      },
    ],
  },

  {
    title: 'Ability to follow others',
    status: 'suggestion',

    category: 'feature',
    detail: 'Stay updated on comments and solutions other people post.',
    votes: 42,
    id: 8,
    comments: [
      {
        userName: 'Victoria Mejia',
        userLogin: 'arlen_the_marlin',
        img: vicImg,
        comment:
          'I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?',
        replies: [
          {
            userName: 'Zena Kelley',
            userLogin: 'velvetround',
            img: userImg,
            replyTo: 'arlen_the_marlin',
            reply:
              "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they've done lately. I learn a lot by reading good developers' code.",
          },
        ],
      },

      {
        userName: 'Jackson Barker',
        userLogin: 'countryspirit',
        img: jackImg,
        comment:
          "I've been saving the profile URLs of a few people and I check what they've been doing from time to time. Being able to follow them solves that",
        replies: [],
      },
    ],
  },

  {
    title: 'Bookmark challenges',
    status: 'in-progress',
    category: 'feature',
    detail: 'Be able to bookmark challenges to take later on.',
    votes: 31,
    id: 9,
    comments: [
      {
        userName: 'Suzanne Chang',
        userLogin: 'upbeat1811',
        img: suzaneImg,
        comment:
          "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
        replies: [],
      },
    ],
  },

  {
    title: 'Learning paths',
    status: 'planned',
    category: 'feature',
    detail: 'Sequenced projects for different goals to help people improve.',
    votes: 28,
    id: 10,
    comments: [
      {
        userName: 'George Partridge',
        userLogin: 'soccerviewer8',
        img: georgeImg,
        comment:
          "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
        replies: [],
      },
    ],
  },

  {
    title: 'Animated solution screenshots',
    status: 'in-progress',
    category: 'bug',
    detail: "Screenshots of solutions with animations don't display correctly.",
    votes: 9,
    id: 11,
    comments: [],
  },

  {
    title: 'Preview images not loading',
    status: 'suggestion',
    category: 'bug',
    detail: 'Challenge preview images are missing when you apply a filter.',
    votes: 3,
    id: 12,
    comments: [],
  },
];

export default data;
