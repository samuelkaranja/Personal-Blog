import Container from "../layout/Container";

const ArticlesHeader = () => {
  return (
    <section className="pt-16 pb-10">
      <Container>
        <h1 className="text-4xl sm:text-4xl font-bold text-white">Writing</h1>
        <p className="mt-3 font-medium max-w-2xl text-[#94A3B8]">
          Exploring the intersections of code, design, and engineering. Weekly
          insights on React, system design, and building modern web
          applications.
        </p>
      </Container>
    </section>
  );
};

export default ArticlesHeader;
