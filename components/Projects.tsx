import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css";
import { ProjectItem } from "./ProjectItem";

import TravelImage from "/public/assets/TravelImage.png";
import GaleriaImage from "/public/assets/galeria.png";
import NLWeSportsImage from "/public/assets/nlwsEsports.png";
import IgniteLabImage from "/public/assets/ignite-lab.png";
import GitHubProfileImage from "/public/assets/github-profile.png";
import AuthGoogleImage from "/public/assets/autenticacao-google.png";
import MovieListImage from "/public/assets/movieList.png";
import CadastroFirebaseImage from "/public/assets/cadastro-usuario.png";
import CurrencyConverterImage from "/public/assets/currency-converter.png";
import MoveItImage from "/public/assets/moveit.png";
import PokedexImage from "/public/assets/pokedex.png";
import ShoppingCartImage from "/public/assets/home-shopping.png";

export const Projects = () => {
  return (
    <div className="w-full flex justify-center md:h-screen text-center">
      <Swiper
        modules={[Navigation]}
        className="max-w-[1240px] m-auto mySwiper"
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <ProjectItem
            title="Shopping Cart"
            image={ShoppingCartImage}
            description="Projeto desenvolvido em ReactJS, com o objetivo de aprimorar meus conhecimentos em ContextAPI e useReducer "
            repo={"https://github.com/sergiowinkelstroter/shopping-cart"}
            demo={"https://shopping-cart-winkelstrotersergio.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="Landing Page"
            image={TravelImage}
            description="LandingPage desenvolvida em NextJS, com TailwindCSS."
            repo={"https://github.com/sergiowinkelstroter/travel-page"}
            demo={"https://travel-page-flame.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="Galeria de fotos"
            image={GaleriaImage}
            description="Projeto desenvolvido em ReactJS, utlizando typescript e firebase."
            repo={"https://github.com/sergiowinkelstroter/gallery"}
            demo={"https://gallery-tan-nu.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="Ignite Lab"
            image={IgniteLabImage}
            description="Projeto desenvolvido no evento Ignite-Lab da Rocketseat,
            utilizando ReactJS, Vite, TailwindCSS, GraphCMS e outras
            tecnologias."
            repo={"https://github.com/sergiowinkelstroter/ignite-lab"}
            demo={"https://ignite-lab-tan.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="NLW eSports"
            image={NLWeSportsImage}
            description="Projeto desenvolvido durante o evento NLW eSports, utilizando
            ReactJS, TailwindCSS, NodeJS, Express, Prisma, e outras
            tecnologias."
            repo={
              "https://github.com/sergiowinkelstroter/NLWeSports-Ignite-web"
            }
            demo={"https://nlw-e-sports-ignite-web.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="GitHub Profile"
            image={GitHubProfileImage}
            description=" Pesquise pelo seu perfil do GitHub!!
            Projeto desenvolvido em React e TailwindCSS."
            repo={"https://github.com/sergiowinkelstroter/github-profile"}
            demo={"https://github-profile-eight.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="Autenticação social Google"
            image={AuthGoogleImage}
            description="Projeto desenvolvido em ReactJS, utlizando typescript e
            firebase."
            repo={"https://github.com/sergiowinkelstroter/auth-google"}
            demo={
              "https://auth-google-jn3ha6wyj-winkelstrotersergio.vercel.app/"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="Movie List"
            image={MovieListImage}
            description="Lista de Filmes mais populares do momento, consumindo dados da
            Api do The Movie DB. Desenvolvido em ReactJS."
            repo={"https://github.com/sergiowinkelstroter/Movie-List"}
            demo={"https://movie-list-vert.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="Cadastro - Firebase"
            image={CadastroFirebaseImage}
            description="Projeto desenvolvido em ReacJS com Typescript, TailwindCSS, e
            conexão com banco de dados Cloud Firestore do Firebase!"
            repo={"https://github.com/sergiowinkelstroter/cadastro-firebase"}
            demo={"https://cadastro-firebase.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="Coversor de moedas"
            image={CurrencyConverterImage}
            description="Projeto desenvolvido em ReactJS, utilizando dados da api
            Fixer.io"
            repo={"https://github.com/sergiowinkelstroter/currency-converter"}
            demo={"https://currency-converter-drab.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="Move It"
            image={MoveItImage}
            description=" Projeto desenvolvido no evento NLW 4 da Rocketseat, utilizando
            NextJS e outras tecnologias."
            repo={"https://github.com/sergiowinkelstroter/move-It"}
            demo={"https://mymoveit-tau.vercel.app/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItem
            title="Pokedex"
            image={PokedexImage}
            description="Projeto desenvolvido em HTML, CSS e Javascript, consumindo a
            API do PokéAPI."
            repo={"https://github.com/sergiowinkelstroter/pokedex"}
            demo={"https://pokedex-liard-delta.vercel.app/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
