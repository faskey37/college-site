// src/components/Section.jsx
export default function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {subtitle && (
          <p className="muted" style={{ textTransform: 'uppercase', letterSpacing: 2 }}>
            {subtitle}
          </p>
        )}
        {title && (
          <h2 className="h2" style={{ marginTop: 6 }}>
            {title}
          </h2>
        )}
        <div style={{ marginTop: 16 }}>{children}</div>
      </div>
    </section>
  );
}
