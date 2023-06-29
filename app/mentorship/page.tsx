import MentorshipBenefits from "@/components/Mentorship/MentorshipBenefits";
import MentorshipTestimonials from "@/components/Mentorship/MentorshipTestimonials";
import HowCanIHelpYou from "@/components/Mentorship/HowCanIHelpYou";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Mentorship = () => {
  return (
    <>
      <Breadcrumb
        pageName="Mentorship"
        description="Our mentorship program aims to enrich your skills, enhance your career growth, and expand your professional network."
      />
      <MentorshipBenefits />
      <MentorshipTestimonials />
      <HowCanIHelpYou />
    </>
  );
};

export default Mentorship;
