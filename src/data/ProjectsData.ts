import TravelImage from "/public/assets/TravelImage.png";
import PearsonHardmanImage from "/public/assets/pearsonHardam.png";
import NLWeSportsImage from "/public/assets/nlwsEsports.png";
import IgniteLabImage from "/public/assets/ignite-lab.png";
import GitHubProfileImage from "/public/assets/github-profile.png";
import AuthGoogleImage from "/public/assets/autenticacao-google.png";
import MovieListImage from "/public/assets/movieList.png";
import CadastroFirebaseImage from "/public/assets/cadastro-usuario.png";
import CurrencyConverterImage from "/public/assets/currency-converter.png";
import MoveItImage from "/public/assets/moveit.png";
import PokedexImage from "/public/assets/pokedex.png";
import PrimeCarImage from "/public/assets/primecar.png";
import RocketNotesImage from "/public/assets/rocket-notes.png";
import BlogAxiosImage from "/public/assets/blog-axios.png";
import ClimaImage from "/public/assets/clima.png";
import SimuladorInvestImage from "/public/assets/simulador-invest.png";
import FormMultiImage from "/public/assets/form-multistep.png";
import FormDarkLightImage from "/public/assets/form-dark-light.png";
import CountDownImage from "/public/assets/countdown-d.png";
import GeradorNumeros from "/public/assets/gerador-numeros.png";
import IgniteFeedImage from "/public/assets/ignite-feed.png";
import TaskListImage from "/public/assets/tasklistcapa.png";
import ShoppingCartImage from "/public/assets/home-shopping.png";

import { v4 as uuid } from "uuid";

export const ProjectsData = [
  {
    id: uuid(),
    title: "Pearson Hardman LandingPage",
    image: PearsonHardmanImage,
    technologies: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/sergiowinkelstroter/FrontWeek-PearsonHardman",
    demo: "https://pearson-hardman-winkelstrotersergio.vercel.app/",
  },
  {
    id: uuid(),
    title: "Travel LandingPage",
    image: TravelImage,
    technologies: ["Next", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/travel-page",
    demo: "https://travel-page-flame.vercel.app/",
  },

  {
    id: uuid(),
    title: "Previsão do tempo",
    image: ClimaImage,
    technologies: ["ReactJS", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/prev-tempo",
    demo: "https://prev-tempo-sage.vercel.app/",
  },
  {
    id: uuid(),
    title: "Ignite Lab",
    image: IgniteLabImage,
    technologies: ["ReactJS", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/ignite-lab",
    demo: "https://ignite-lab-tan.vercel.app/",
  },

  {
    id: uuid(),
    title: "NLW eSports",
    image: NLWeSportsImage,
    technologies: ["ReactJS", "TailwindCSS", "Prisma", "NodeJS"],
    repo: "https://github.com/sergiowinkelstroter/NLWeSports-Ignite-web",

    demo: "https://nlw-e-sports-ignite-web.vercel.app/",
  },
  {
    id: uuid(),
    title: "Gerador de numeros",
    image: GeradorNumeros,
    technologies: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/sergiowinkelstroter/number-generator",
    demo: "https://number-generator-phi.vercel.app/",
  },
  {
    id: uuid(),
    title: "Simulador de investimentos",
    image: SimuladorInvestImage,
    technologies: ["ReactJS", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/simulador-investimento",
    demo: "https://simulador-investimento-one.vercel.app/",
  },
  {
    id: uuid(),
    title: "PrimeCar Landing Page",
    image: PrimeCarImage,
    technologies: ["ReactJS", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/primeCar-landingpage",
    demo: "https://primecar.vercel.app/",
  },
  {
    id: uuid(),
    title: "GitHub Profile",
    image: GitHubProfileImage,
    technologies: ["ReactJS", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/github-profile",
    demo: "https://github-profile-eight.vercel.app/",
  },
  {
    id: uuid(),
    title: "Autenticação social Google",
    image: AuthGoogleImage,
    technologies: ["React", "CSS", "TypeScript", "Firebase"],
    repo: "https://github.com/sergiowinkelstroter/auth-google",
    demo: "https://auth-google-jn3ha6wyj-winkelstrotersergio.vercel.app/",
  },
  {
    id: uuid(),
    title: "Formulario Dark/Light",
    image: FormDarkLightImage,
    technologies: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/sergiowinkelstroter/dark-light-form",
    demo: "https://dark-light-form-delta.vercel.app/",
  },
  {
    id: uuid(),
    title: "Dynamic CountDown",
    image: CountDownImage,
    technologies: ["ReactJS", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/dynamic-countdown",
    demo: "https://dynamic-countdown.vercel.app/",
  },
  {
    id: uuid(),
    title: "Movie List",
    image: MovieListImage,
    technologies: ["ReactJS", "TailwindCSS"],
    repo: "https://github.com/sergiowinkelstroter/Movie-List",
    demo: "https://movie-list-vert.vercel.app/",
  },
  {
    id: uuid(),
    title: "Rocket Notes",
    image: RocketNotesImage,
    technologies: ["ReactJS", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/rocket-notes",
    demo: "https://rocket-notes-winkelstrotersergio.vercel.app/",
  },
  {
    id: uuid(),
    title: "Cadastro - Firebase",
    image: CadastroFirebaseImage,
    technologies: ["ReactJS", "TailwindCSS", "TypeScript", "Firebase"],
    repo: "https://github.com/sergiowinkelstroter/cadastro-firebase",
    demo: "https://cadastro-firebase.vercel.app/",
  },
  {
    id: uuid(),
    title: "Blog",
    image: BlogAxiosImage,
    technologies: ["ReactJS", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/blog-axios",
    demo: "https://blog-axios.vercel.app/",
  },
  {
    id: uuid(),
    title: "Conversor de moedas",
    image: CurrencyConverterImage,
    technologies: ["ReactJS", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/currency-converter",
    demo: "https://currency-converter-drab.vercel.app/",
  },
  {
    id: uuid(),
    title: "Move It",
    image: MoveItImage,
    technologies: ["Next", "Firebase", "CSS"],
    repo: "https://github.com/sergiowinkelstroter/move-It",
    demo: "https://mymoveit-tau.vercel.app/",
  },
  {
    id: uuid(),
    title: "Pokedex",
    image: PokedexImage,
    technologies: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/sergiowinkelstroter/pokedex",
    demo: "https://pokedex-liard-delta.vercel.app/",
  },
  {
    id: uuid(),
    title: "Shopping Cart",
    image: ShoppingCartImage,
    technologies: ["ReactJS", "TailwindCSS", "Radix"],
    repo: "https://github.com/sergiowinkelstroter/shopping-cart",
    demo: "https://shopping-cart-winkelstrotersergio.vercel.app/",
  },
  {
    id: uuid(),
    title: "Form MultiStep",
    image: FormMultiImage,
    technologies: ["ReactJS", "TypeScript"],
    repo: "https://github.com/sergiowinkelstroter/Form-MultiStep",
    demo: "https://form-multi-step.vercel.app/",
  },
  {
    id: uuid(),
    title: "Ignite Feed",
    image: IgniteFeedImage,
    technologies: ["ReactJS", "CSS", "TypeScript"],
    repo: "https://github.com/sergiowinkelstroter/ignitee-feed",
    demo: "https://ignitee-feed.vercel.app/",
  },
];
