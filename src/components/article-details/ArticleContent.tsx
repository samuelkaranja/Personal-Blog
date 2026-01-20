import CodeBlock from "./CodeBlock";
import ProTip from "./ProTip";

const ArticleContent = () => {
  return (
    <article className="space-y-10 text-gray-300 leading-relaxed">
      <p>
        CSS Grid has fundamentally changed how we design layouts on the web...
      </p>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          The Power of Subgrid
        </h2>

        <CodeBlock
          code={`.parent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.child-grid {
  grid-column: span 3;
  display: grid;
  grid-template-columns: subgrid;
}`}
        />

        <p className="mt-4">
          By using <code className="text-blue-400">subgrid</code>, the child
          container aligns perfectly with its parent.
        </p>
      </section>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400">
        “Grid is not just about columns and rows; it's about defining a
        relationship between elements.”
      </blockquote>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          Container Queries & Grid
        </h2>

        <p>
          Combining container queries with grid layouts allows truly modular
          components.
        </p>
      </section>

      <ProTip />
    </article>
  );
};

export default ArticleContent;
