import "../styles/footer.css";

export default function Footer() {
    return(
        <footer>
            <nav>
                <p>Doormat Navigation</p>
                <ul>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Menu</a>
                    <a href="/">Reservations</a>
                    <a href="/">Order Online</a>
                    <a href="/">Login</a>
                </ul>
            </nav>
            <nav>
                <p>Contact Us</p>
                <ul>
                    <a href="/">Address</a>
                    <a href="/">Phone Number</a>
                    <a href="/">email</a>
                </ul>
            </nav>
            <nav>
                <p>Social Media Links</p>
                <ul>
                    <a href="/">Facebook</a>
                    <a href="/">Instagram</a>
                    <a href="/">Pintrest</a>
                </ul>
            </nav>
        </footer>
    );
}