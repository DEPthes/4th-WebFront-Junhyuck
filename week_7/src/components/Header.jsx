import logo from "../assets/investment-calculator-logo.png"
import "./Header.css"

export default function Header() {
    return (
    <header id="header">
        <img src= {logo} alt="Logo showing a money bag"></img>
        <h1>Invesment Calculator</h1>
    </header>
    );
}