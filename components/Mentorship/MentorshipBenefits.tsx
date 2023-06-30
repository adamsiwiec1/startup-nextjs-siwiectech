import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// Rest of the code...
const MentorshipBenefits = () => {
  // Rest of the code...
  return (
    <section id="mentorship-benefits" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="The Benefits of Our Mentorship Program"
                paragraph="Our mentorship program aims to enrich your skills, enhance your career growth, and expand your professional network. Here are some of the benefits you can expect."
                mb="44px"
              />

              {/* Rest of the code... */}
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/mentorship/mentorship-benefits.svg"
                  alt="mentorship-benefits"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipBenefits;
