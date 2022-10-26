import { SkillComponent } from "./SkillComponent";
import CssImage from "/public/skills/css.png";
import HTMLImage from "/public/skills/html.png";
import TypescriptImage from "/public/skills/typescript.png";
import FirebaseImage from "/public/skills/firebase.png";
import GithubImage from "/public/skills/github1.png";
import JSImage from "/public/skills/javascript.png";
import ReactImage from "/public/skills/react.png";
import TailwindImage from "/public/skills/tailwind.png";

export const Skills = () => {
  return (
    <div id="skills" className="w-full flex justify-center  text-center">
      <div className="max-w-[1240px]  m-auto ">
        <div>
          <h1>Skills</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 my-12 ">
          <SkillComponent
            title={"HTML"}
            image={HTMLImage}
            description={
              "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software."
            }
          />
          <SkillComponent
            title={"CSS"}
            image={CssImage}
            description={
              "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web."
            }
          />
          <SkillComponent
            title={"Javascript"}
            image={JSImage}
            description={
              "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
            }
          />
          <SkillComponent
            title={"Typescript"}
            image={TypescriptImage}
            description={
              "É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."
            }
          />
          <SkillComponent
            title={"ReactJS"}
            image={ReactImage}
            description={
              "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
            }
          />
          <SkillComponent
            title={"TailwindCSS"}
            image={TailwindImage}
            description={
              "Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas."
            }
          />
          <SkillComponent
            title={"GitHub"}
            image={GithubImage}
            description={
              "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git."
            }
          />
          <SkillComponent
            title={"Firebase"}
            image={FirebaseImage}
            description={
              "O Firebase é um conjunto de serviços de hospedagem para qualquer tipo de aplicativo."
            }
          />
        </div>
      </div>
    </div>
  );
};
