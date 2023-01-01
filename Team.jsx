import teamData from '../faker/FakerTeam';

export default function team() {
  return (
    <div className="hover:w-full h-full bg-gray-800">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            We are the best <strong>Team</strong> kuddussa
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Check Out our awesome <strong className="text-red-500">MERN</strong> team
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamData.map((team) => (
            <div className="w-full bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center hover:bg-neutral-300 transition duration-500">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-40 w-40 border-2 border-amber-200"
                  src={team.pic}
                  alt="photo"
                />
              </div>
              <div className="text-center">
                <h3 className="text-red-500">{team.age}</h3>
                <h1 className="text-xl capitalize text-white font-bold mb-2">{team.name}</h1>
                <p className="text-base text-gray-400 font-normal">{team.skill}</p>
              </div>
              <div className="social bg-red-600 w-full mx-auto rounded-md px-2 py-1 my-4 flex justify-center">
                <a href={team.fb} className="text-white">
                  <i className="bx bxl-facebook-circle"></i>
                </a>
                <a href={team.fb} className="text-white px-3">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href={team.fb} className="text-white">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
