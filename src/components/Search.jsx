import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Description = () => {
  return (
    <div>
      <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
      <p className="text-justify pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi,
        illo, officia culpa eos architecto necessitatibus nobis doloribus
        quisquam reprehenderit consequuntur esse voluptatem. Placeat molestiae,
        vero voluptates porro eaque a. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Voluptates aliquid non, est dignissimos exercitationem
        fuga vitae reprehenderit aperiam tempore voluptatum qui fugiat ducimus.
        Tenetur molestias voluptatum voluptatibus rem vel officia. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus,
        officia amet natus corporis recusandae quibusdam odit aut assumenda ab
        velit ducimus esse molestias dolor quas obcaecati consequuntur debitis
        unde!
      </p>
    </div>
  );
};

const OneService = ({ icon, header, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center text-center">
      <button className="m-1">{icon}</button>
      <div>
        <h3>{header}</h3>
        <p className="pt-1">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-8 py-4">
      <OneService
        icon={<RiCustomerService2Fill size={50} />}
        header="LEADING SERVICE"
        description="ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW"
      />
      <OneService
        icon={<MdOutlineTravelExplore size={50} />}
        header="AUTOMATED BOOKING"
        description="ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW"
      />
    </div>
  );
};

const BookingOffer = () => {
  return (
    <div className="text-center border p-2 py-4">
      <p>GET AN ADDITIONAL 10% OFF</p>
      <p className="my-4">12 HOURS LEFT</p>
      <p className="p-1 bg-gray-800 text-gray-200">BOOK NOW AND SAVE</p>
    </div>
  );
};

const DestinationSelector = () => {
  return (
    <div className="flex flex-col my-2">
      <label>Destination</label>
      <select className="w-full border rounded-md p-2 outline-none">
        <option>Grande Antigua</option>
        <option>Key West</option>
        <option>Maldives</option>
        <option>Cozumel</option>
      </select>
    </div>
  );
};

const CheckInput = ({ label }) => {
  return (
    <div className="flex flex-col my-2">
      <label>{label}</label>
      <input
        type="date"
        className="w-full border rounded-md p-2 outline-none"
      />
    </div>
  );
};

const BookingForm = () => {
  return (
    <form>
      <DestinationSelector />
      <CheckInput label={"Check-In"} />
      <CheckInput label={"Check-Out"} />
      <button className="w-full">Rates & Availabilities</button>
    </form>
  );
};

const Booking = () => {
  return (
    <div>
      <BookingOffer />
      <BookingForm />
    </div>
  );
};

const Search = () => {
  return (
    <section className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <Description />
        <Services />
      </div>
      <Booking />
    </section>
  );
};

export default Search;
