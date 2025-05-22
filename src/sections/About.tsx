import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import ToolboxItems from "@/components/ToolboxItems";
import CardHeader from "@/components/CardHeader";

import MongoDBIcon from "@/assets/icons/mongodb.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NodeJSIcon from "@/assets/icons/nodejs.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import DjangoIcon from "@/assets/icons/django.svg";
import FlaskIcon from "@/assets/icons/flask.svg";
import PythonIcon from "@/assets/icons/python.svg";
import MySQLIcon from "@/assets/icons/mysql.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import BootstrapIcon from "@/assets/icons/bootstrap.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GitIcon from "@/assets/icons/git.svg";
import GithubIcon from "@/assets/icons/github.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";

const toolboxItems = [
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "Express.js",
    iconType: ExpressIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node.js",
    iconType: NodeJSIcon,
  },
  {
    title: "Next.js",
    iconType: NextJSIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Django",
    iconType: DjangoIcon,
  },
  {
    title: "Flask",
    iconType: FlaskIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "MySQL",
    iconType: MySQLIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "Bootstrap",
    iconType: BootstrapIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
];

const About = () => {
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <Card>
              <CardHeader
                title="Get to Know Me"
                description="&nbsp;&nbsp;&nbsp;&nbsp;I'm a web developer with a passion for crafting clean, responsive websites that not only look great but offer intuitive user experiences. With a strong foundation in front-end development and a keen eye for UI/UX design, I bring ideas to life through thoughtful code and user-centered design. Whether it's building from scratch or optimizing existing interfaces, I focus on creating seamless digital experiences that engage and inspire."
              />
            </Card>
          </div>

          <div className="w-full">
            <Card className="h-full">
              <CardHeader
                title="Résumé"
                description="View or download my resume to see what I bring to the table."
              />

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-6 pt-0 md:pb-8 md:px-10">
                <a
                  href="https://drive.google.com/file/d/1GMO4y1LiAoIYpkfnPktksLpBqCFcuS2m/view?usp=sharing"
                  target="_blank"
                  className="inline-flex justify-center items-center gap-2 border border-white/15 h-12 rounded-xl w-full"
                >
                  <span className="font-semibold">View</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital
        experiences."
            />

            <ToolboxItems items={toolboxItems} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
