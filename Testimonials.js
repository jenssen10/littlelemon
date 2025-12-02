export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-grid">

        <div className="test-card">
          <img src="/customer1.jpg" alt="Customer 1" />
          <h3>Sarah</h3>
          <p>"Amazing food, fast delivery! 10/10."</p>
        </div>

        <div className="test-card">
          <img src="/customer2.jpg" alt="Customer 2" />
          <h3>James</h3>
          <p>"The best Mediterranean dishes in Chicago."</p>
        </div>

        <div className="test-card">
          <img src="/customer3.jpg" alt="Customer 3" />
          <h3>Alicia</h3>
          <p>"Loved the atmosphere and the service."</p>
        </div>

        <div className="test-card">
          <img src="/customer1.jpg" alt="Customer 1 again" />
          <h3>David</h3>
          <p>"My new favorite restaurant!"</p>
        </div>

      </div>
    </section>
  );
}
