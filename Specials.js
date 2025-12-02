export default function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week’s Specials!</h2>
        <button className="specials-btn">Online Menu</button>
      </div>

      <div className="specials-grid">

        {/* Card 1 */}
        <div className="special-card">
          <img src="/greek-salad.jpg" alt="Greek Salad" />
          <div className="special-content">
            <h3>Greek Salad</h3>
            <p>
              The famous Greek salad with crispy lettuce, peppers, olives
              and our Chicago-style feta cheese.
            </p>
            <a href="#" className="order-link">Order a Delivery</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="special-card">
          <img src="/bruchetta.svg" alt="Bruchetta" />
          <div className="special-content">
            <h3>Bruchetta</h3>
            <p>
              Our Bruchetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <a href="#" className="order-link">Order a Delivery</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="special-card">
          <img src="/lemon-dessert.jpg" alt="Lemon Dessert" />
          <div className="special-content">
            <h3>Lemon Dessert</h3>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is authentic.
            </p>
            <a href="#" className="order-link">Order a Delivery</a>
          </div>
        </div>

      </div>
    </section>
  );
}
