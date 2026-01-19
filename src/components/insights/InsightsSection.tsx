import Container from "../layout/Container";
import InsightCard from "./InsightCard";
import Software from "../../assets/software.webp";

const InsightsSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex justify-between items-center mb-8 border-b-2 border-gray-300">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-white pb-1">
              Recent Insights
            </h2>
            <p className="text-[#94A3B8] text-sm">
              Deep dives into modern web technologies.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InsightCard
            title="Mastering CSS Grid"
            category="Development"
            date="Oct 24, 2023"
            readTime="8 min read"
            image={Software}
          />
          <InsightCard
            title="Future of React Server Components"
            category="React"
            date="Oct 20, 2023"
            readTime="12 min read"
            image={Software}
          />
          <InsightCard
            title="Advanced Debugging with DevTools"
            category="Tools"
            date="Oct 15, 2023"
            readTime="6 min read"
            image={Software}
          />
          <InsightCard
            title="Mastering CSS Grid"
            category="Development"
            date="Oct 24, 2023"
            readTime="8 min read"
            image={Software}
          />
          <InsightCard
            title="Future of React Server Components"
            category="React"
            date="Oct 20, 2023"
            readTime="12 min read"
            image={Software}
          />
          <InsightCard
            title="Advanced Debugging with DevTools"
            category="Tools"
            date="Oct 15, 2023"
            readTime="6 min read"
            image={Software}
          />
        </div>
      </Container>
    </section>
  );
};

export default InsightsSection;
