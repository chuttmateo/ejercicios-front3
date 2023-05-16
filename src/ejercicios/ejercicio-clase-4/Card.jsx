function Card(prop) {
  return (
    <div>
      {prop.title ? <h2>{prop.title}</h2> : undefined}
      <h3>{prop.children}</h3>
      {prop.footer ? <h2>{prop.footer}</h2> : undefined}
    </div>
  );
}
export default Card;
