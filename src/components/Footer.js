import Git from "../assets/images/github.svg"
import "../assets/styles/Footer.css"

const Footer = () => {
    return (
        <footer data-testid="footer">
            <a href="https://github.com/kalivm90?tab=repositories" target="_blank"><img src={Git} className="svg"></img></a>
            <p>Kalivm90 &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer