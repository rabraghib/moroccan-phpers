import { ICommunity } from "./modals";

export const COMMUNITY: ICommunity = {
  name: "Moroccan PHPers",
  description:
    "We are a group of PHP developers and enthusiasts who aim at sharing our knowledge and encourage PHP development in Morocco. Accelerate your career and skills by participating in our meetups, workshops,talks, challenges, and more...!",
  PHPers: [
    {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/300",
      bio: "John Doe is a cool guy",
      rank: 1,
      points: 100,
      links: [
        {
          name: "Github",
          url: "https://github.com/rabraghib",
          icon: "github",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/rabraghib",
          icon: "twitter",
        },
      ],
    },
  ],
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/groups/moroccan.phpers/",
      icon: "facebook",
    },
    {
      name: "Github",
      url: "https://github.com/moroccan-phpers",
      icon: "github",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rabraghib",
      icon: "twitter",
    },
  ],
  moderators: [
    {
      name: "Demo Moderator",
      avatar: "https://picsum.photos/200?id=11",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde similique natus amet? Cum at mollitia impedit.",
      links: [
        {
          name: "Github",
          url: "https://github.com/rabraghib",
          icon: "github",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/rabraghib",
          icon: "facebook",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/rabraghib",
          icon: "twitter",
        },
        {
          name: "Instagram",
          url: "https://instagram.com/rabraghib",
          icon: "instagram",
        },
      ],
    },
    {
      name: "Demo Moderator",
      avatar: "https://picsum.photos/200?id=21",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde similique natus amet? Cum at mollitia impedit.",
      links: [],
    },
    {
      name: "Demo Moderator",
      avatar: "https://picsum.photos/200?id=31",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde similique natus amet? Cum at mollitia impedit.",
      links: [],
    },
    {
      name: "Demo Moderator",
      avatar: "https://picsum.photos/200?id=41",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde similique natus amet? Cum at mollitia impedit.",
      links: [
        {
          name: "Github",
          url: "https://github.com/rabraghib",
          icon: "github",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/rabraghib",
          icon: "twitter",
        },
      ],
    },
  ],
  challenges: [
    {
      name: "PHPers Champion",
      icon: "power-first",
      slug: "phpers-champion",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde similique natus amet? Cum at mollitia impedit. Praesentium, laboriosam quo.",
      nextEditionDate: "2022-04-01",
      editions: [],
    },
    {
      name: "File parser",
      icon: "parse-file",
      slug: "file-parser",
      summary:
        "Evaluate/review a freshmen implementation of a file parser (parse the content of a file to a php array) and re-implement it in a more efficient way",
      date: "2020-01-01",
      duration: "1 week",
      description: "",
      solutions: [],
    },
    {
      name: "PHP code tester",
      icon: "test-tube",
      slug: "php-code-tester",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam unde similique natus amet? Cum at mollitia impedit. Praesentium, laboriosam quo.",
      date: "2020-01-01",
      duration: "1 week",
      description: "",
      solutions: [],
    },
  ],
};
