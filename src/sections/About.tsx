import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "MongoDB",
    iconType: HTMLIcon,
  },
  {
    title: "Express.js",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node.js",
    iconType: ChromeIcon,
  },
  {
    title: "TypeScript",
    iconType: GithubIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Tailwind",
    iconType: HTMLIcon,
  },
  {
    title: "MongoDB",
    iconType: HTMLIcon,
  },
  {
    title: "Express.js",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node.js",
    iconType: ChromeIcon,
  },
  {
    title: "TypeScript",
    iconType: GithubIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Tailwind",
    iconType: HTMLIcon,
  },{
    title: "MongoDB",
    iconType: HTMLIcon,
  },
  {
    title: "Express.js",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node.js",
    iconType: ChromeIcon,
  },
];

const About = () => {
  return (
    <section className="py-20 lg:py-28">
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
              itemsWrapperClassName="animate-move-left [animation-duration:120s]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6 pb-6"
              itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:120s]"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
