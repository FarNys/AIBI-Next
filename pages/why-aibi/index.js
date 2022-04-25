import ButtonEffect from "../../Util/ButtonEffect";
import Layout from "../../Components/Layout";
import WhyCards from "../../Components/Why/WhyCards";
import WhyFeatures from "../../Components/Why/WhyFeatures";
import WhyHeader from "../../Components/Why/WhyHeader";
import WhyMid from "../../Components/Why/WhyMid";
import WhySection from "../../Components/Why/WhySection";
const Why = () => {
  return (
    <Layout
      title="why Ai-Bi"
      description="Choose what u want"
      keyword="AI-BI WHY Ai Bi"
    >
      <div className="why_page_container">
        <WhyHeader />
        <WhySection />
        <WhyFeatures />
        <WhyMid />
        <WhyCards />
      </div>
    </Layout>
  );
};

export default Why;
