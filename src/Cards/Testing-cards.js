import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
function CardsTesting() {
  return (
    <div>
      <Card className="input">
        <form className="input">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="text" />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
}
export default CardsTesting;
