export type Project = {
  index: string;
  title: string;
  stack: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  accent: "brand" | "coral" | "violet";
};

export const projects: Project[] = [
  {
    index: "P01",
    title: "E-Commerce App",
    stack: "HTML · CSS · JavaScript · React",
    description:
      "Library e-commerce app that pulls books, ratings and prices from a public API. Includes filtering, skeleton loading states, and a live shopping cart that recalculates totals and quantities as you shop.",
    image: "/images/ecommerce.png",
    github: "https://github.com/unbeqem/E-Commerce",
    accent: "brand",
  },
  {
    index: "P02",
    title: "Frontend Simplified — Virtual Internship",
    stack: "HTML · CSS · JavaScript · React",
    description:
      "Turned a static single-page app into an interactive UI with animations, transitions and carousels. Wired Axios API requests to a cloud server with skeleton states, pagination and dynamic routing, run inside a collaborative Git workflow.",
    image: "/images/frontend-simplified.png",
    github: "https://github.com/unbeqem/unbeqem-internship",
    accent: "coral",
  },
  {
    index: "P03",
    title: "Summarizer",
    stack: "HTML · CSS · JavaScript · React",
    description:
      "Article summarizer built on OpenAI's GPT model with a modern interface, Redux Toolkit Query for data fetching, copy-to-clipboard, and persistent browser history of past summaries.",
    image: "/images/summarizer.png",
    github: "https://github.com/unbeqem/api-summarizer",
    accent: "violet",
  },
  {
    index: "P04",
    title: "Twitter Clone",
    stack: "HTML · CSS · JS · React · Next.js · Redux Toolkit · Firebase",
    description:
      "Full social app with sign-in, sign-up and guest login. Post tweets with images, like and comment on posts from other accounts — all backed by Firebase.",
    image: "/images/twitter-clone.png",
    github: "https://github.com/unbeqem/twitter-clone",
    accent: "brand",
  },
  {
    index: "P05",
    title: "Movie API",
    stack: "HTML · CSS · JavaScript · React",
    description:
      "Search-driven movie explorer fetching live results from an API, with loading states, reusable components and layered animations for a snappier feel.",
    image: "/images/movie-api.png",
    github: "https://github.com/unbeqem/Movie-api",
    accent: "coral",
  },
  {
    index: "P06",
    title: "Angular Webshop",
    stack: "HTML · Tailwind · Angular · Node.js · TypeScript · Stripe",
    description:
      "Full webshop built with Angular Material and Tailwind, connected to a store API, with a complete checkout flow and Stripe payment processing.",
    image: "/images/angular-webshop.png",
    github: "https://github.com/unbeqem/Angular-Webshop",
    accent: "violet",
  },
  {
    index: "P07",
    title: "Herzensweise",
    stack: "HTML · Tailwind · CSS · JavaScript · React",
    description:
      "Fully responsive client website with a custom design across four pages — Home, About, Services and Contact — tailored to the client's brief.",
    image: "/images/herzensweise.png",
    github: "https://github.com/unbeqem/herzensweise",
    accent: "brand",
  },
  {
    index: "P08",
    title: "Walddienst Bergmann",
    stack: "HTML · Tailwind · CSS · JavaScript · React",
    description:
      "Another fully responsive client website, custom-designed across Home, About, Services and Contact pages to match the client's requirements.",
    image: "/images/walddienst.png",
    github: "https://github.com/unbeqem/walddienst-bergmann",
    accent: "coral",
  },
];

export const skills = [
  { name: "HTML", detail: "Semantic markup" },
  { name: "CSS", detail: "Layout & motion" },
  { name: "JavaScript", detail: "Core language" },
  { name: "TypeScript", detail: "Typed at scale" },
  { name: "React", detail: "Component systems" },
  { name: "Next.js", detail: "Full-stack React" },
  { name: "Tailwind CSS", detail: "Utility styling" },
  { name: "Angular", detail: "Enterprise apps" },
  { name: "C#", detail: "Backend logic" },
  { name: ".NET", detail: "Backend framework" },
  { name: "MSSQL", detail: "Relational DB" },
  { name: "Sybase", detail: "Relational DB" },
];

export const socials = {
  github: "https://github.com/unbeqem",
  resume: "/MyResume.pdf",
  email: "tristanfrontenddev@gmail.com",
};
