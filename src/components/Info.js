import { useState} from "react";
import artero from "../assets/artero.jpg"
const Info = () => {
  const [currentView, setCurrentView] = useState(0);
  const handleOnClick = (e) => {
    switch (e.target.value) {
      case 0:
        setCurrentView(0);
        break;
      case 1:
        setCurrentView(1);
        break;
      case 2:
        setCurrentView(2);
        break;
      default:
        setCurrentView(0);
    }
  };

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
      <div className="flex flex-col py-10">
        {currentView == 0 && 
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <img className="w-full" src={artero} alt="Artero logo" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Artero <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">9 months</span></div>
            <ul className="text-black text-base">
              <li style = {{listStyleType: "disc"}}>Created a study platform for the Artero Academy.</li>
              <li style = {{listStyleType: "disc"}}>Developed new features such as scissor finder, a bulletin board for lost dogs, etc.</li>
              <li style = {{listStyleType: "disc"}}>Installed Magento for the spanish site and migrated all the data from the old site.</li>
              <li style = {{listStyleType: "disc"}}>Synchronized stocks and orders sent from SAP with Magento.</li>
              <li style = {{listStyleType: "disc"}}>Automated the availability status of the products according to the last date and the notification to all the people in charge.</li>
            </ul>

          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Php</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">jQuery</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Laravel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Magento</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Git</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Docker</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Linux</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Magento</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Jira</span>
          </div>
        </div>
        }
        {currentView == 1 && 
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <img className="w-full" src={artero} alt="Squirdle clon logo" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Squirdle</div>
            <ul className="text-black text-base">
              <li>Created a game based on Squirdle. The main objective is to find the Pokémon based on the clues the App gives you.</li>
            </ul>

          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PokeAPIv2</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
          </div>
        </div>
        }
        {currentView == 2 && 
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <img className="w-full" src={artero} alt="Picture of Javier Redondo" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Hi, I am Javier Redondo</div>
            <ul className="text-black text-base">
              <li>I am a full-stack web developer who focuses on writting clean, elegant and efficient code.</li>
            </ul>

          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PokeAPIv2</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
          </div>
        </div>
        }
      </div>
    </section>
  );
};
export default Info;
