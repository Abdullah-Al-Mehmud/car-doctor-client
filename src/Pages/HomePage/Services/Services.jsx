import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Services = () => {
  const [services, setServices] = useState([]);
  // const axiosSecure = useAxiosSecure();
  const [lowToHigh, setLowToHigh] = useState(true);
  const [search, setSearch] = useState("");

  console.log(services);
  useEffect(() => {
    fetch(
      `http://localhost:3000/services?sort=${
        lowToHigh ? "asc" : "des"
      }&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
    // axiosSecure.get("/services").then((res) => setServices(res.data));
  }, [lowToHigh, search]);

  const handleSearch = (e) => {
    e.preventDefault();

    const search = e.target.search.value;
    setSearch(search);
  };
  return (
    <div>
      <div className="text-center space-y-5">
        <h1 className="text-orange-600 font-bold">Service</h1>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which donot look even slightly
          believable.
        </p>
        <form onSubmit={handleSearch}>
          <input
            className="border-2 border-black pl-2"
            type="text"
            name="search"
          />
          <button className="px-6 py-3 bg-red-500 text-white">Search</button>
        </form>

        <button
          onClick={() => setLowToHigh(!lowToHigh)}
          className="px-6 py-3 bg-red-500 text-white">
          {lowToHigh ? "Price High to Low" : "Price Low to High"}
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
