import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  console.log(service);
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-60" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className=" font-bold text-2xl">{title}</h2>
          <p className="text-orange-600 text-lg font-bold">Price : {price}$</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="text-orange-600 text-xl">
                {" "}
                <BsArrowRight></BsArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
