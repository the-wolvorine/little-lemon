import "../styles/main.css"
import banner from "../Assets/restauranfood.jpg";
import Button from "./Button/Button";
import Card from "./Card/Card";
import CustomerReviewCard from "./CustomerReviewCard";
import GreekSalad from "../Assets/greekSalad.jpg";
import LemonDessert from "../Assets/lemonDessert.jpg";
import Bruchetta from "../Assets/bruchetta.svg";
import Review1 from "../Assets/IQSF.png";
import Review2 from "../Assets/Mawra.png";
import Review3 from "../Assets/Sajal.png";
import Chef1 from "../Assets/MarioandAdrianA.jpg";
import Chef2 from "../Assets/MarioandAdrianb.jpg";
import {Link} from 'react-router-dom';

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

    return(
        <main>
            <div className="hero">
                <section className="hero-section">
                    <h1 className="hero-title">Little Lemon</h1>
                    <h2 className="hero-location">Chicago</h2>
                    <p className="hero-description">We are a family owned mediterranean restaurant, focussed on traditional recipies served with modern twist.</p>
                    <Button style={{textDecoration: 'none'}}><Link to='/bookings'>Reserve a Table</Link></Button>
                </section>
                <img src={banner} alt="food" className="food-img"/>
            </div>
            <section>
                <div className="specials">
                    <h1>This weeks specials!</h1>
                    <Button style={{textDecoration: 'none'}}><Link to='/menu'>Online Menu</Link></Button>
                </div>
                <div className="special-cards">
                    {menuItems.map((item) => (
                        <Card
                            key={item.id}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>
            <section>
                <div className="reviews">
                    <h1>Our Testimonials</h1>
                </div>
                <div className="review-cards">
                    <CustomerReviewCard
                        rating={5}
                        imageSrc={Review1}
                        name="Jolly Joseph"
                        reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <CustomerReviewCard
                        rating={4}
                        imageSrc={Review2}
                        name="Marwa"
                        reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <CustomerReviewCard
                        rating={4.5}
                        imageSrc={Review3}
                        name="Sajal"
                        reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </div>
            </section>
            <section className="hero-section-2">
                <div className="image-container">
                    <img src={Chef2} alt="MarioandAdrianA" />
                    <img src={Chef1} alt="MarioandAdrianB" className="overlapped-image" />
                </div>
                <div className="text-container">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                    nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
            </section>
        </main>
    );
}