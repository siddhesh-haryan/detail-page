"use client";

const cards = [
  {
    icon: "🎨",
    title: "Crafting a Comprehensive Design Plan",
    description:
      "The next step involves creating a comprehensive design plan for the ERP solution. This step allows us to have a detailed blueprint with even the minutest details related to data migration, infrastructure development, solution integration with existing platforms, and so on.",
  },
  {
    icon: "🛠️",
    title: "Building and Deploying the ERP Software Solution",
    description:
      "At this point, the enterprise resource planning software is built by our team of ERP implementation consultants, developers, and analysts in accordance with the specifications detailed in the design plan. Our team deploys and integrates the solution seamlessly.",
  },
  {
    icon: "🚀",
    title: "Launching and Optimizing",
    description:
      "After thorough testing and quality assurance, we launch the ERP software. We then continuously monitor its performance and make necessary optimizations to ensure it meets and exceeds your business needs.",
  },
  {
    icon: "🚀",
    title: "Launching and Optimizing",
    description:
      "After thorough testing and quality assurance, we launch the ERP software. We then continuously monitor its performance and make necessary optimizations to ensure it meets and exceeds your business needs.",
  },
  {
    icon: "🚀",
    title: "Launching and Optimizing",
    description:
      "After thorough testing and quality assurance, we launch the ERP software. We then continuously monitor its performance and make necessary optimizations to ensure it meets and exceeds your business needs.",
  },
  {
    icon: "🚀",
    title: "Launching and Optimizing",
    description:
      "After thorough testing and quality assurance, we launch the ERP software. We then continuously monitor its performance and make necessary optimizations to ensure it meets and exceeds your business needs.",
  },
  {
    icon: "🚀",
    title: "Launching and Optimizing",
    description:
      "After thorough testing and quality assurance, we launch the ERP software. We then continuously monitor its performance and make necessary optimizations to ensure it meets and exceeds your business needs.",
  },
  // Add more cards as needed...
];

export default function StackingCardsSection() {
  const cardHeight = 100;
  const numCards = cards.length + 4;
  const sectionHeight = numCards * cardHeight;

  return (
    <section
      className="stacking-section flex flex-col lg:flex-row"
      style={{ height: `${sectionHeight}vh` }}
    >
      <div className="intro flex flex-col justify-start w-full lg:w-1/2 p-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Experience Our Best-In-Class ERP Software Development Process
        </h1>
        <p className="intro-text text-lg leading-6">
          Our team is dedicated to ensuring that the final product meets the
          needs of your business, and we pride ourselves on our ability to
          communicate effectively with stakeholders throughout the{" "}
          <span className="highlight text-blue-500">agile development process</span>.
          With our expertise and attention to detail, we guarantee that your ERP
          software is delivered on time and with the desired performance and
          functionalities.
        </p>
      </div>

      <div className="cards-container w-full lg:w-1/2 p-4 relative lg:sticky lg:top-0">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={`card border border-gray-300 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-4 transition-transform duration-300 ease-out ${
              index > 0 ? "mt-[-100vh]" : "mt-0"
            }`}
            style={{
              marginTop: index > 0 ? `100vh` : "0",
            }}
          >
            <div className="flex items-center mb-2">
              <span className="text-3xl">{card.icon}</span>
              <h3 className="text-xl sm:text-2xl font-semibold ml-2">
                {card.title}
              </h3>
            </div>
            <div className="text-md">{card.description}</div>
          </div>
        ))}
      </div>

      {/* Responsive Sticky Behavior */}
      <div
        className="absolute bottom-0 left-0 w-full lg:hidden"
        style={{
          height: "100px", // Optional: adjust height as needed
        }}
      >
        <div className="sticky bottom-0 flex items-center justify-center bg-white p-4 shadow-lg">
          {cards[0].icon} {/* Sticky card sample */}
        </div>
      </div>
    </section>
  );
}
