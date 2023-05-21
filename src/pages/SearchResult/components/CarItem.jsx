import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function CarItem(props) {
  return <Card>tes</Card>;
}

CarItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default CarItem;
