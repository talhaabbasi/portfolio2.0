export const courses = [
  {
    issued_by: "Udemy",
    title: "Blockchain A-Z™: Learn How To Build Your First Blockchain",
    description:
      "An intuitive course starting from the basic building blocks of a Blockchain to more advanced topics. Course content consists of Blockchain Intuition, Cryptocurrency Intuition, Smart Contracts and Alt Coins. Also has a couple of code-along tutorials where students are taught to build a Blockchain from scratch, build a Cryptocurrency and also, write Smart Contracts.",
    GH_LINK: process.env.NEXT_PUBLIC_GH_COURSE_BLOCKCHAIN,
    CERT_LINK: process.env.NEXT_PUBLIC_UDEMY_CERTIFICATE_BLOCKCHAIN,
    id: 0,
  },
  {
    issued_by: "Coursera",
    title: "Blockchain Basics",
    description:
      "Basics of the Blockchain Network. Learned about the decentralized peer-to-peer network, an immutable distributed ledger and the trust model that defines a blockchain",
    CERT_LINK: process.env.NEXT_PUBLIC_COURSERA_CERTIFICATE_BLOCKCHAIN,
    id: 1,
  },
  {
    issued_by: "Coursera",
    title: "AI For Everyone",
    description:
      "Introduction to common AI-terminology including neural networks, machine learning, deep learning, and data science.",
    CERT_LINK: process.env.NEXT_PUBLIC_COURSERA_CERTIFICATE_AI,
    id: 2,
  },
  {
    issued_by: "Coursera",
    title: "Introduction to Git and GitHub",
    description:
      "Introduction to the common Version Control System with it's basic as well advanced features.",
    CERT_LINK: process.env.NEXT_PUBLIC_COURSERA_CERTIFICATE_GIT,
    id: 3,
  },
]

export const projects = [
  {
    title: "Scheduler",
    description:
      "An application to assist in scheduling timetables for our university that will effectively reduce the time, cost, effort and human errors involved in manual scheduling",
    image: "/images/Scheduler.gif",
    tags: ["Microsoft ASP.Net", "Entity Framework", "MSSQL"],
    id: 0,
  },
  {
    title: "MedEase",
    description:
      "A platform that helps reduce the spread of Covid-19 by providing testing facility to patients at the comfort of their homes. The platform helps connect patients with relevant paramedic staff and hospitals hence reducing the load on hospitals for testing.",
    image: "/images/MedEase.gif",
    tags: ["React", "React Native", "Node.js", "Express", "MongoDB"],
    id: 1,
  },
  {
    title: "Share A Meal",
    description:
      "A website built to reduce the wastage of left-over food by connecting places where there is leftover food with the places which accommodate the less privileged.",
    image: "/images/ShareAMeal.gif",
    tags: ["Microsoft ASP.Net", "Entity Framework", "MSSQL"],
    id: 2,
  },
  {
    title: "Le Gavroche",
    description:
      "A website for a restaurant which helps connect potential customers with the restaurant. The customer can order food using the website. Payments can be made using Stripe's API which has been integrated within the website that enables the customer to do easy and secure transactions.",
    image: "/images/LeGavroche.gif",
    tags: ["Node.js", "Express", "MongoDB", "Stripe"],
    id: 3,
  },
]

export const TimeLineData = [
  {
    company: "Maqsad",
    roles: [
      {
        position: "Senior Software Engineer",
        startDate: new Date(2022, 9),
        responsibilities: [
          "Created a Payments service that was made scalable by using AWS ECS and an Application Load Balancer, enabling automatic scaling based on traffic. It remained fault-tolerant, supported Google Pay, Apple Pay, and Credit Cards, and had fallback mechanisms for transaction failures.",
          "Onboarded three new Software Engineers by bringing them up to speed with our current services, explaining how the application functions, and familiarizing them with the practices we follow.",
        ],
      },
      {
        position: "Software Engineer",
        startDate: new Date(2022, 0),
        endDate: new Date(2022, 9),
        responsibilities: [
          "Built an internal tool from scratch which helped the team in managing the questions, solve them and send them back to the user. This service was built on NestJS, MySQL, and GraphQL and improved the productivity and response time of our team by up to 50%",
          "Setup an IaC (Infrastructure as Code) template with AWS CDK which was adapted throughout all the back-end services. This template had features like creating a service on AWS ECS, attaching it to a load balancer, setup a DynamoDB table for the service, without any manual effort.",
          "Led the efforts in modernizing legacy codebase with migration from JavaScript to TypeScript.",
          "Worked on Frontend tasks involving NextJS. Achieved test coverage of 90% for the projects unit tests by utilizing Jest and additionally created end-to-end test cases using Cypress",
        ],
      },
    ],
  },
  {
    company: "Foretheta",
    roles: [
      {
        position: "Software Engineer - II",
        startDate: new Date(2021, 6),
        endDate: new Date(2021, 11),
        responsibilities: [
          "Designed and developed a web application from scratch to analyze stocks for the US stock market.",
          "Deployed backend services following the server-less architecture on AWS Lambda functions connected with AWS API Gateway",
        ],
      },
      {
        position: "Software Engineer - I",
        startDate: new Date(2020, 6),
        endDate: new Date(2021, 6),
        responsibilities: [
          "Worked on front-end related feature requests and debugged design issues of our projects made on React JS.",
          "Maintained blogs for multiple projects powered by Gatsby framework.",
          "Created various API routes and consumed them in our React components.",
          "Wrote Cron Jobs and used GitHub Actions to automate our workflows.",
          "Wrote multiple test cases for our application's frontend and backend. Increased the backend coverage for our Credit Card API from 21% to to 89%",
        ],
      },
    ],
  },
  {
    company: "Raawee K12 Solutions Inc.",
    roles: [
      {
        position: "Intern",
        startDate: new Date(2020, 0),
        endDate: new Date(2020, 2),
        responsibilities: [
          "Created ReactJS Components including a Data Grid which helped visualize a large amount of data. The Data Grid was tested on a data set of 5000 rows and brought down the load-time significantly which was taken by the previously built Table.",
        ],
      },
    ],
  },
  {
    company: "Systems Limited",
    roles: [
      {
        position: "Intern",
        startDate: new Date(2019, 5),
        endDate: new Date(2019, 6),
        responsibilities: [
          "Worked on PHP and the Laravel Framework as well as the use of Design Patterns in Enterprise software.",
          "Implement Cart, Blog and multiple functionalities.",
        ],
      },
    ],
  },
  {
    company: "Raawee K12 Solutions Inc.",
    roles: [
      {
        position: "Intern",
        startDate: new Date(2018, 5),
        endDate: new Date(2018, 7),
        responsibilities: [
          "Learned the working of MVC architecture.",
          "Implemented a School Management System under the supervision of a Senior Developer.",
        ],
      },
    ],
  },
]
