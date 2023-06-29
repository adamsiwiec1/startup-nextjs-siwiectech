import Contact from "@/components/Contact";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
