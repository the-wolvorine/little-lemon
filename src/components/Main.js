import "../styles/main.css"
import banner from "../Assets/restauranfood.jpg";

export default function Main() {
    return(
        <main>
            <section className="hero-section">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-location">Chicago</h2>
                <p className="hero-description">We are a family owned mediterranean restaurant, focussed on traditional recipies served with modern twist.</p>
                <button className="hero-button"><p>Reserve a Table</p></button>
            </section>
            <img src={banner} alt="food" className="food-img"/>
        </main>
    );
}