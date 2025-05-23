import FreshlyPicked from "@/assets/images/FreshlyPicked.png";
import QnAI from "@/assets/images/QnAI.png";
import PricePal from "@/assets/images/PricePal.png";
import QuicKeys from "@/assets/images/QuicKeys.png";
import JettManalo from "@/assets/images/JettManalo.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "FreshlyPicked",
    title: "Online Grocery Store",
    results: [
      { title: "MERN Stack, JavaScript" },
      { title: "HTML/CSS, Tailwind" },
      { title: "Stripe" },
    ],
    link: "https://github.com/jettmanalo/freshly-picked",
    image: FreshlyPicked,
  },
  {
    company: "QnAI",
    title: "AI Mock Job Interviewer",
    results: [
      { title: "Next.js, React, TypeScript" },
      { title: "Tailwind, HTML/CSS" },
      { title: "Firebase, Vapi" },
    ],
    link: "https://github.com/jettmanalo/QnAI",
    image: QnAI,
  },
  {
    company: "PricePal",
    title: "Barcode Price Checker",
    results: [
      { title: "Swift" },
      { title: "SwiftUI" },
      { title: "Firebase" },
    ],
    link: "https://github.com/jettmanalo/PricePal",
    image: PricePal,
  },
  {
    company: "QuicKeys",
    title: "Car Rental Website",
    results: [
      { title: "C#, Blazor" },
      { title: "Tailwind" },
      { title: "HTML/CSS" },
    ],
    link: "https://github.com/jettmanalo/quickeys-car-rental-website",
    image: QuicKeys,
  },
  {
    company: "Jett Manalo",
    title: "Portfolio Website",
    results: [
      { title: "Next.js, React, TypeScript" },
      { title: "Tailwind, HTML/CSS" },
      { title: "Web3Forms" },
    ],
    link: "https://jettmanalo.vercel.app/",
    image: JettManalo,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              className="p-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>{projectIndex === 4 ? "Visit Live Site" : "Visit GitHub"}</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
