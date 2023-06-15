import CareersSectionOne from "@/components/Careers/CareersSectionOne";
import CareersSectionTwo from "@/components/Careers/CareersSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Mentorship = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />      <CareersSectionOne />
      <CareersSectionTwo />
    </>
  );
};

export default Mentorship;
