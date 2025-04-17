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
];

const toolboxItemsTwo = [
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

        <div className="mt-20">
          <Card>
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital
        experiences."
            />

            <ToolboxItems
              items={toolboxItems}
              itemsWrapperClassName="animate-move-left [animation-duration:60s]"
            />
            <ToolboxItems
              items={toolboxItemsTwo}
              className="mt-6 pb-6"
              itemsWrapperClassName="animate-move-right [animation-duration:60s]"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
