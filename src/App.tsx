import "./App.css";
import "./scss/custom.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import background from "/src/assets/home-bg.png";
import bootstrapIcon from "/src/assets/bootstrap-circle.svg";
import AppListItem from "./components/AppListItem";

const rotate = {};

const mainStyle = {
  background: `no-repeat url(${background})`,
  backgroundSize: "cover",
};

function App() {
  return (
    <div className="bg-dark min-vw-100 min-vh-100 text-light" style={mainStyle}>
      <header className="border-bottom border-dark-subtle py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="text-light">Bootstrap exercises</span>
          <a
            href="https://github.com/aliciaboyd/bootstrap-exercises"
            target="_blank"
            className="btn btn-outline-light"
          >
            Github
          </a>
        </div>
      </header>
      <main className="container">
        <div className="py-5 d-flex flex-column text-center text-light">
          <img src={bootstrapIcon} height="100" />
          <h1 className="display-1">
            Bootstrap interface
            <br /> exercises
          </h1>
          <p>UI elements and pages using Bootstrap, Typescript and React.</p>
        </div>

        <div className="row">
          <section className="col-8 container">
            <h2 className="h3">All exercises</h2>
            <div>
              <ul className="list-unstyled">
                <AppListItem title="Landing Page" link="" />
              </ul>
            </div>
          </section>
          <article className="col">
            <h2 className="h3">About</h2>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
