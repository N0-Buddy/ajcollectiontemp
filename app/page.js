import Footer from "./components/Footer/footer";
import HomeComp from "./components/Home/home";
import LatestDrops from "./components/Home/latestdrops";
import Suggestions from "./components/Home/suggestions";
import Navigation from "./components/Navgation/navigation";

// TEMPORARY URL "https://ajcollection.netlify.app"
export default function Home() {
  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <main>
        <div className="home_show">
          <HomeComp />
        </div>
        <div className="home_sugesstions">
          <Suggestions />
        </div>
        <div className="home_latest_drops">
          <LatestDrops/>
        </div>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </>
  );
}
