import { FC } from 'react';
import { Laptop, Clock, LifeBuoy, Smartphone, Puzzle, Eye } from 'lucide-react';

const features = [
  {
    icon: Laptop,
    title: 'Comprehensive ERP Solutions',
    description:
      'Whether you want to build an ERP system from scratch or need improvement in the existing one, we get all your needs covered without sacrificing business continuity.',
  },
  {
    icon: Clock,
    title: 'Faster Development Timelines',
    description:
      'Using the iterative and agile business model, our team develops the MVP version of the ERP solution usually within 2-3 months and releases a new version every 4-6 weeks.',
  },
  {
    icon: LifeBuoy,
    title: 'End-to-End Support',
    description:
      'With Appinventiv as your chosen ERP software development company, you can rest assured that we will take care of everything - from design and development to implementation and post-deployment support.',
  },
  {
    icon: Smartphone,
    title: 'Multi-Platform ERP Compatibility',
    description:
      'Our custom ERP business software solutions are accessible on different platforms, be it mobile, web, or desktop. We focus on building an intuitive UI/UX that boosts user engagement and satisfaction.',
  },
  {
    icon: Puzzle,
    title: 'Smooth Integration',
    description:
      'Our team ensures smooth integration of the ERP solution with popular platforms such as Magento and Salesforce, cutting-edge technologies such as blockchain and IoT, and other ERP modules.',
  },
  {
    icon: Eye,
    title: 'Assured Transparency',
    description:
      'We provide high transparency not only on the development process but also on pricing. We regularly report the information needed to make the right business decisions and offer fair pricing at every stage of the project.',
  },
];

const RightSectionScrollable: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen md:py-10 w-full">
      {/* Left Section: Sticky */}
      <div className="lg:block lg:w-1/2 lg:sticky lg:top-0 p-6 lg:p-8 flex flex-col justify-center h-full mb-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Why Partner with Appinventiv Your ERP System Development Partner?
        </h1>
        <p className="text-base sm:text-lg lg:text-xl">
          As a globally renowned ERP consulting company with almost a decade of
          experience in <span className="text-blue-500">enterprise software development</span>,
          Appinventiv has developed a number of custom ERP software solutions
          for clients across a broad range of industries, delivering exceptional
          and robust solutions.
        </p>
      </div>

      {/* Right Section: Scrollable */}
      <div className="w-full lg:w-1/2 p-6 lg:p-8 space-y-6 overflow-y-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="flex-shrink-0 bg-blue-500 p-2 rounded-lg">
              <feature.icon className="sm:w-6 sm:h-6 text-white " />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-sm sm:text-base">{feature.description}</p>
              <hr className="border-t border-gray-600 my-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSectionScrollable;
