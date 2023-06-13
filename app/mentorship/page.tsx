import MentorshipSectionTwo from "@/components/Mentorship/MentorshipSectionOne";
import MentorshipSectionOne from "@/components/Mentorship/MentorshipSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Mentorship = () => {
  return (
    <>
      <Breadcrumb
        pageName="Mentorship"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <MentorshipSectionOne />
      <MentorshipSectionTwo />
    </>
  );
};

export default Mentorship;
