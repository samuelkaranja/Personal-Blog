import Container from "../layout/Container";

const Newsletter = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="bg-[#121A2A] rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              Stay in the loop
            </h3>
            <p className="text-[#94A3B8] text-sm sm:text-base max-w-md">
              Get technical articles, coding tips, and industry updates
              delivered straight to your inbox.
            </p>
          </div>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="janedoe@gmail.com"
              className="w-full sm:min-w-[280px] bg-[#0B1220] rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full sm:w-auto bg-[#2563EB] px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
