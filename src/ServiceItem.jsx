export default function ServiceItem({ title, description, showIcon, price }) {
  return (
    <div className="service-item">
      <div className="service-header">
        <h3>{title}</h3>
        <span className="price-tag">{price}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}