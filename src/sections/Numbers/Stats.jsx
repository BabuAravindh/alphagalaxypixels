import Counter from "../../components/Counter";

 const Stats = () => {
  return (
    <section className="bg-white py-10 mb-20 text-black ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-20">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="stat-item">
            <h3 className="text-xl font-semibold">Locations</h3>
            <p className="text-2xl font-bold">All over Tamil Nadu</p>
            <p className="text-sm">Expanding Across Tamil Nadu</p>
          </div>
          <div className="stat-item">
            <h3 className="text-xl font-semibold">Employees</h3>
            <p className="text-2xl font-bold">
              <Counter target={50} duration={8} />
            </p>
            <p className="text-sm">Dedicated Team Members</p>
          </div>
          
          <div className="stat-item">
            <h3 className="text-xl font-semibold">Dreams</h3>
            <p className="text-2xl font-bold">
              <Counter target={300} duration={8} />
            </p>
            <p className="text-sm">Dreams Achieved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;