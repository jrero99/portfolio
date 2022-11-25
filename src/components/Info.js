import { useState, useEffect } from "react";
import Aboutme from './Aboutme'
import Experiences from './Experiences'
import Portfolio from './Portfolio'
const Info = () => {
  const [currentView, setCurrentView] = useState(0);
  const handleOnClick = (e) => {
    switch (e.target.value) {
      case 0:
        setCurrentView(0)
        break;
      case 1:
        setCurrentView(1)
        break;
      case 2:
        setCurrentView(2)
        break;
      default:
        setCurrentView(0)
    }
    
  };
  const experience = [
    {
      id: 1,
      job: "Junior web dev",
      name: "Artero",
      logo: "",
      duration: "9 months",
      contract: "full-time",
      responsabilities: [
        "Created a study platform for the Artero Academy.",
        "Developed new features such as scissor finder, a bulletin board for lost dogs, etc.",
        "Installed Magento for the spanish site and migrated all the data from the old site.",
        "Synchronized stocks and orders sent from SAP with Magento.",
        "Automated the availability status of the products according to the last date and the notification to all the people in charge.",
      ],
      technologies: [
        "Php",
        "jQuery",
        "Laravel",
        "Bootstrap",
        "Magento",
        "Git",
        "Docker",
        "Linux",
        "MySQL",
        "Magento",
        "Jira",
      ],
    },
  ];

  const portfolio = [
    {
      id: 1,
      name: "Squirdle clon",
      logo: "",
      url: "",
      repository: "",
      description: "",
      technologies: ["React", "Tailwind", "PokeAPIv2"],
    },
  ];
  return (
    <section className="bg-green-900 mt-20 min-h-screen pb-10">
      <ul className="flex justify-center">
        <li
          className="cursor-pointer text-sm font-bold tracking-widest uppercase hover:text-white text-gray-600 p-4 md:py-6 md:px-8 transition duration-150 ease-in-out text-blue"
          onClick={handleOnClick}
          value="0"
        >
          Experiences
        </li>
        <li
          className="cursor-pointer text-sm font-bold tracking-widest uppercase hover:text-white text-gray-600 p-4 md:py-6 md:px-8 transition duration-150 ease-in-out"
          onClick={handleOnClick}
          value="1"
        >
          Portfolio
        </li>
        <li
          className="cursor-pointer text-sm font-bold tracking-widest uppercase hover:text-white text-gray-600 p-4 md:py-6 md:px-8 transition duration-150 ease-in-out"
          onClick={handleOnClick}
          value="2"
        >
          About me
        </li>
      </ul>
      {currentView ==  0 &&
        <Experiences />
      }
      {currentView ==  1 &&
        <Portfolio />
      }
      {currentView ==  2 &&
        <Aboutme />
      }
    </section>
  );
};
export default Info;
