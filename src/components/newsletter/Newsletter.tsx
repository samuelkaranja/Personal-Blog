import Container from "../layout/Container";

const Newsletter = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="bg-[#121A2A] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-semibold text-white mb-2">
              Stay in the loop
            </h3>
            <p className="text-[#94A3B8] text-sm">
              Get technical articles, coding tips, and industry updates <br />
              delivered straight to your inbox.
            </p>
          </div>

          <div className="flex w-full lg:w-auto gap-3">
            <input
              placeholder="you@email.com"
              className="flex-1 bg-[#0B1220] rounded-lg px-4 py-3 text-white outline-none"
            />
            <button className="bg-[#2563EB] px-6 rounded-lg text-white">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
