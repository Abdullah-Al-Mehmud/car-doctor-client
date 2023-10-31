import person from "../../../assets/assets/images/about_us/person.jpg";
import parts from "../../../assets/assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content gap-5 flex-col lg:flex-row">
          <div className="w-full relative">
            <img src={person} className="w-fit h-full rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-2/3 h-fit absolute lg:-right-14 right-10 lg:-bottom-14 -bottom-12 border-[7px] rounded-lg border-white"
              alt=""
            />
          </div>
          <div className="w-fit md:pl-28 space-y-7 md:pt-0 md:pb-0 pb-5 pt-20 md:text-left text-center">
            <h1 className="text-orange-500 font-bold">About Us</h1>
            <h2 className="text-4xl font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which donot look even
              slightly believable.
            </p>
            <button className="px-6 py-2 text-white bg-orange-600 rounded-lg font-bold">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
