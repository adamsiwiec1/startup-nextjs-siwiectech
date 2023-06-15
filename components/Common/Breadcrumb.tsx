import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {pageName}
                </h1>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Action Item: Add some content here to make the right side of the title/description not empty */}

      </section>
    </>
  );
};

export default Breadcrumb;
