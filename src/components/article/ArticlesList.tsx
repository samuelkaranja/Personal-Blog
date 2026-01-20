import Container from "../layout/Container";
import ArticleCard from "./ArticleCard";
import CategoryFilter from "./CategoryFilter";
import Software from "../../assets/software.webp";

const ArticlesList = () => {
  return (
    <section className="py-8">
      <Container>
        <CategoryFilter />

        <div className="mt-6 space-y-6">
          <ArticleCard
            title="Mastering React Server Components: A Practical Guide"
            excerpt="Deep dive into the mechanics of RSC, how they differ from Client Components, and best practices for data fetching in Next.js..."
            category="React · Architecture"
            date="Oct 24, 2023"
            readTime="8 min read"
            image={Software}
          />

          <ArticleCard
            title="Advanced Type Patterns for Robust APIs"
            excerpt="Moving beyond the basics. Learn how to use Generics, Template Literal Types, and Discriminated Unions..."
            category="TypeScript"
            date="Oct 12, 2023"
            readTime="12 min read"
            image={Software}
          />

          <ArticleCard
            title="Design Systems for Solo Developers"
            excerpt="You don't need a huge team to build a design system. Here's how I standardized my workflow..."
            category="UX Design"
            date="Sep 28, 2023"
            readTime="6 min read"
            image={Software}
          />
        </div>
      </Container>
    </section>
  );
};

export default ArticlesList;
