import "./App.css"
import DescriptionComp from "./components/DescriptionComp"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"
import ironhackLogo from "./images/ironhack-logo-xs.png"
import menuTop from "./images/menu-top-xs.png"

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <div className="top-header">
          <img className="logo" src={ironhackLogo} alt="no logo" />
          <img  className="menu-img" src={menuTop} alt="no menu" />
        </div>
        <div className="bottom-header">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn to use the most popular frontend librry, and become a super Ninja
            developer.
          </p>
          <button> Awesome! </button>
        </div>
      </section>
      <section className="description-list">
        <DescriptionComp
          imageURL={icon1}
          title="Declarative"
          text="React makes it painless to create interactive UIs."
        />
        <DescriptionComp
          imageURL={icon2}
          title="Components"
          text="Build encapsulated components that manage their state"
        />
        <DescriptionComp
          imageURL={icon3}
          title="Single-Way"
          text="A set of immutable values are passed to the component's"
        />
        <DescriptionComp
          imageURL={icon4}
          title="JSX"
          text="Statically-typed, designed to run on modern browsers"
        />
      </section>
    </div>
  )
}

export default App
