import HeroHeading from '../components/HeroHeading';
import SearchBar from '../components/SearchBar';
import HelpPrompt from '../components/HelpPrompt';
import './LandingPage.css';

function LandingPage() {
  function handleSearch(query) {
    if (query) {
      console.log('Search:', query);
    }
  }

  function handleHelp() {
    console.log('Help clicked');
  }

  return (
    <div className="container">
      <section className="section section1 landing-section">
        <div className="landing-section__content">
          <HeroHeading />
          <SearchBar onSearch={handleSearch} />
          <HelpPrompt onHelp={handleHelp} />
        </div>
      </section>
      <div className="section section2">
        <h1>Search Section</h1>
      </div>
      <div className="section section3">
        <h1>Suggest Section</h1>
      </div>
    </div>
  );
}

export default LandingPage;
