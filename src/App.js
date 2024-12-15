import "./App.css";
import { AIResumeBenefits } from "./components/AIResumeBenefits";
import { CommonMistakes } from "./components/CommonMistakes";
import FAQ from "./components/FAQ";
import { HowItWorks } from "./components/HowItWorks";
import { KeyFeatures } from "./components/KeyFeatures";
import OtherTools from "./components/OtherTools";
import { ResumeRewriterSection } from "./components/ResumeRewriterSection";
import Testimonials from "./components/Testimonials";
import UploadSection from "./components/UploadSection";

function App() {
  return (
    <div>
      <UploadSection />
      <ResumeRewriterSection />
      <AIResumeBenefits />
      <KeyFeatures />
      <HowItWorks />
      <CommonMistakes />
      <Testimonials />
      <OtherTools />
      <FAQ />
    </div>
  );
}

export default App;
