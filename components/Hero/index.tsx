import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Personalized Freelancing At Your Fingertips
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Startup is free Next.js template for startups and SaaS
                  business websites comes with all the essential pages,
                  components, and sections you need to launch a complete
                  business website, built-with Next 13.x and Tailwind CSS.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link href="https://nextjstemplates.com/templates/saas-starter-startup" passHref>
                    <button className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                      🔥 Get Pro
                    </button>
                  </Link>
                  <Link href="https://github.com/NextJSTemplates/startup-nextjs" passHref>
                    <button className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30">
                      Star on GitHub
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo on the left start */}
        <div className="absolute bottom-0 left-0 z-[-1] w-1/2 max-w-[300px] opacity-30 lg:opacity-100">
          <svg
            viewBox="0 0 2000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            className="w-full"
          >
            {/* <!-- Sun (as a semi-circle) --> */}
            <path
              d="M 250, 900 A 250, 250, 0, 0, 1, 750, 900"
              fill="black"
              stroke="black"
              strokeWidth="5"
            />

            {/* <!-- Sun rays --> */}
            <path
              d="M 600, 700 Q 600, 600, 700, 600 T 800, 550"
              fill="none"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M 400, 700 Q 400, 600, 300, 600 T 200, 550"
              fill="none"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M 620, 850 Q 700, 800, 780, 850 T 860, 875"
              fill="none"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M 380, 850 Q 300, 800, 220, 850 T 140, 875"
              fill="none"
              stroke="black"
              strokeWidth="5"
            />

            {/* <!-- Ocean --> */}
            <rect x="0" y="900" width="2000" height="2" fill="black" />
          </svg>
        </div>
        {/* Logo on the left end */}
      </section>
    </>
  );
};

export default Hero;
