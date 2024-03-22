import Header from "./Header"
import NewProject from "./NewProject";
import Projects from "./Projects";
import "./View.css";

const Main = () => {
    return (
        <div className="Main">
            <Header />
            <h2>My Projects</h2>
            <NewProject />
            <Projects />
        </div>
    )
}

export default Main;