import "../styles/main.css"
import banner from "../Assets/restauranfood.jpg";
import Button from "./Button/Button";
import Card from "./Card/Card";
import Menu from "./Menu";
import GreekSalad from "../Assets/greekSalad.jpg";
import LemonDessert from "../Assets/lemonDessert.jpg";
import Bruchetta from "../Assets/bruchetta.svg";

export default function Main() {
    const menuItems = [
        {
          id: 1,
          imageUrl: GreekSalad,
          title: 'Greek Salad',
          price: 12.99,
          description: 'A mouthwatering salad with all the fixings.',
        },
        {
          id: 2,
          imageUrl: LemonDessert,
          title: 'Lemon Dessert',
          price: 14.99,
          description: 'A delicious dessert loaded with fresh fruits.',
        },
        {
            id: 3,
            imageUrl: Bruchetta,
            title: 'Bruchetta',
            price: 11.99,
            description: 'A Bruchetta loaded with fresh meat and veggies.',
        }
    ];
    const handleOrderClick = () => {
        return(
            <Menu />
        );
    }
    return(
        <main>
            <div className="hero">
                <section className="hero-section">
                    <h1 className="hero-title">Little Lemon</h1>
                    <h2 className="hero-location">Chicago</h2>
                    <p className="hero-description">We are a family owned mediterranean restaurant, focussed on traditional recipies served with modern twist.</p>
                    <Button>Reserve a Table</Button>
                </section>
                <img src={banner} alt="food" className="food-img"/>
            </div>
            <section>
                <div className="specials">
                    <h1>This weeks specials!</h1>
                    <Button>Online Menu</Button>
                </div>
                <div className="special-cards">
                    {menuItems.map((item) => (
                        <Card
                            key={item.id}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            onOrderClick={() => handleOrderClick(item.id)}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}