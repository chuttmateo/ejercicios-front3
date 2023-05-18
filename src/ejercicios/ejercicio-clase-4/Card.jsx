function Card(prop) {
  return (
    <div className="card">
      {prop.title ? <h1>{prop.title}</h1> : undefined}
      <h3>{prop.children}</h3>
      {prop.footer ? <h2>{prop.footer}</h2> : undefined}
    </div>
  );
}
export default Card;
