import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrekCard from "./components/TrekCard";
import ImgOne from "./assets/images/card-img-one.jpg";
import ImgTwo from "./assets/images/card-img-two.jpg";
import ImgThree from "./assets/images/card-img-three.jpg";
import ImgFour from "./assets/images/card-img-four.jpg";

const treks = [
  {
    id: 1,
    image: ImgOne,
    name: "Rupin Pass",
    description: "A high-altitude crossover trek connecting Himachal Pradesh and Uttarakhand.",
    rating: 4.8,
    level: "Hard",
    distance: 25,
  },
  {
    id: 2,
    image: ImgTwo,
    name: "Hampta Pass",
    description: "A scenic crossover from the green Kullu valley to the dry Lahaul desert.",
    rating: 4.6,
    level: "Easy",
    distance: 9,
  },
  {
    id: 3,
    image: ImgThree,
    name: "Valley of Flower",
    description: "Valley of Flowers National Park is an Indian national park which was established in 1982. It is located in Chamoli in the state of Uttarakhand and is known for its meadows of endemic alpine flowers and the variety of flora. ",
    rating: 4.7,
    level: "Moderate",
    distance: 26,
  },
  {
    id: 4,
    image: ImgFour,
    name: "Kedarkantha",
    description: "A popular winter summit trek in Uttarakhand with snow and pine forests.",
    rating: 4.9,
    level: "Easy",
    distance: 20,
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="trek_cards_section">
        {treks.map((trek) => (
          <TrekCard
            key={trek.id}
            image={trek.image}
            name={trek.name}
            description={trek.description}
            rating={trek.rating}
            level={trek.level}
            distance={trek.distance}
          />
        ))}
      </section>
    </div>
  )
}

export default App;