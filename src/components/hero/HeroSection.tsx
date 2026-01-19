import Container from "../layout/Container";
import Software from "../../assets/software.webp";

const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#121A2A] px-4 py-1.5 rounded-full text-sm font-medium text-[#2563EB]">
              <span>●</span> AVAILABLE FOR PROJECTS
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Building the web, <br />
              <span className="text-[#2563EB] italic">one bug</span> at a time.
            </h1>

            <p className="mt-6 text-muted max-w-xl">
              Front-End Engineer specializing in React, UI/UX, and performance
              optimization. Currently engineering with intent and documenting
              the journey through code.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-[#2563EB] px-6 py-3 rounded-lg text-white">
                Read Articles →
              </button>
              <button className="bg-[#121A2A] px-6 py-3 rounded-lg text-white">
                My Portfolio
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={Software}
              alt="Work Environment"
              className="rounded-2xl w-full h-90 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm">
              <p className="font-semibold">Work Environment</p>
              <p className="text-xs text-muted">Where the magic happens.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
