import "./main-card-component.css";

function MainCard({ children, className = "" }) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}

export default MainCard;