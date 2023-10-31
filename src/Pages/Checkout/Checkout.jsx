import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  const { price, _id, title, img } = services;

  const handlePlaceORder = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;

    // console.log(name, email, date, amount);
    const order = {
      customerName: name,
      email,
      date,
      service: title,
      service_id: _id,
      price,
      img,
    };
    console.log(order);

    // send order to backend
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Successfully Ordered !", "success");
        }
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold py-5 text-center">{title}</h1>
      <form onSubmit={handlePlaceORder} className="card-body">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              name="email"
              // required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="amount"
              defaultValue={`${price} $`}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
