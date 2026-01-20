import Container from "../layout/Container";

const ArticlesSearch = () => {
  return (
    <section className="pb-6">
      <Container>
        <input
          type="text"
          placeholder="Search articles, tags, or topics..."
          className="w-full rounded-xl bg-[#121A2A] px-4 py-4 text-sm text-white placeholder-muted outline-none focus:ring-2 focus:ring-[#2563EB]"
        />
      </Container>
    </section>
  );
};

export default ArticlesSearch;
