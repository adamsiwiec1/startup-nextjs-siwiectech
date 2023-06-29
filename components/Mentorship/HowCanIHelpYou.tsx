import Image from "next/image";
import React, { useRef } from 'react' 

const HowCanIHelpYou = () => {
  const steps = [
    {
      title: "How Can I Help You",
      description: "",
      img: "/images/logo/logo.svg",
    },
    {
      title: "Don’t Know Where to Go?",
      description: "Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis.",
      img: "/path/to/your/image2.png",
    },
    {
      title: "We’ll Sit and Talk",
      description: "Suspendisse eget semper justo, a laoreet sapien. Ut a est vitae.",
      img: "/path/to/your/image3.png",
    },
    {
      title: "And Find The Solution",
      description: "In non turpis convallis nunc fermentum porttitor sed quis sapien. Etiam et neque.",
      img: "/path/to/your/image4.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">How Can I Help You?</h2>
          <p className="mt-2 text-lg text-gray-600">We can discuss your problems</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={200}  // set the dimensions as per your requirement
                  height={200} // set the dimensions as per your requirement
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{step.title}</h3>
              <p className="mt-2 text-base text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowCanIHelpYou;
