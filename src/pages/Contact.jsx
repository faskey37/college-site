
import '../styles/components/contact.css'
import '../styles/style.css'
import '../styles/global.css'

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    alert('Message sent!\n' + JSON.stringify(data, null, 2));
    e.currentTarget.reset();
  };

  return (
    <div className="contact-page"> {/* Wrapper div */}
      <Section title="Contact Us">
        <div className="grid grid-2">
          <form className="card" onSubmit={onSubmit}>
            <label className="label">Name</label>
            <input className="input" name="name" required />
            <label className="label" style={{ marginTop: '12px' }}>Email</label>
            <input className="input" name="email" type="email" required />
            <label className="label" style={{ marginTop: '12px' }}>Message</label>
            <textarea className="input" name="message" rows="5" required />
            <button className="btn" type="submit" style={{ marginTop: '14px' }}>Send</button>
          </form>
          <div className="card">
            <h4>Campus</h4>
            <p className="p">Address line, City, State, PIN</p>
            <p className="p">Phone: 01234-567890</p>
            <p className="p">Email: info@college.edu</p>
            <iframe 
              title="map" 
              src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              style={{ width: '100%', height: '220px', border: 0, borderRadius: '12px', marginTop: '12px' }}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}