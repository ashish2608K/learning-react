import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrekCard from "./components/TrekCard";
import CardImage from "./assets/images/card-img-one.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="trek_cards_section">
        <TrekCard
          image={CardImage}
          name="Rupin Pass"
          description="A high-altitude crossover trek connecting Himachal Pradesh and Uttarakhand."
          rating={4.8}
          level="Hard"
          distance={25}
        />
        {/* CARD 2 */}
        <TrekCard
          image={CardImage}
          name="Triund"
          description="A short, beautiful weekend trek near Dharamshala."
          rating={4.6}
          level="Easy"
          distance={9}
        />
      </section>
    </div>
  )
}

export default App;