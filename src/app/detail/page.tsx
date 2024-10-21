import React from 'react';
import CardSlider from '../components/CardSlider';
import { ArrowRight, BarChart, FileText, Users } from 'lucide-react';
import ChartSlider from '../components/ChartSlider';
import Button from '../components/ButtonWithArrow';
import RightSectionScrollable from '../components/RightSectionScrollable';
import StackingCards from '../components/StackingCards';
import TechnologyStack from '../components/TechStack';
import FAQ from '../components/FaqSection';
import RelatedBlogs from '../components/RelatedBlogs';
import Services from '../components/Services';
import ButtonWithArrow from '../components/ButtonWithArrow';
import Image from 'next/image';
import Banner from '../components/Banner';
import LogoSlider from '../components/LogoSlider';
import CompanyStats from '../components/CompanyStats';
import TabbedComponent from '../components/TabbedComponent';

function Page() {

  return (
    <>
        <Banner />
        <div className="max-w-7xl mx-auto">
          <LogoSlider />
        </div>
      <div className="max-w-7xl mx-auto">
        <CardSlider
          cards={[
            {
              icon: <Users className="w-8 h-8" />,
              title: 'ERP Consulting Services',
              description:
                'Our ERP consulting team analyzes your current business environment and understands your strategic business needs and desired outcomes. Our ERP implementation consultants work as your trusted advisors and help you formulate the best strategies to implement critical ERP software.',
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: 'Custom ERP Solutions',
              description:
                'We offer custom ERP software development services for businesses of all sizes and industries. We develop robust and scalable business ERP systems that offer key data insights across multiple platforms - web, mobile, and on-premise.',
            },
            {
              icon: <BarChart className="w-8 h-8" />,
              title: 'ERP Implementation Services',
              description:
                'The best ERP business software solutions count for nothing if they are not implemented properly. Our ERP implementation consulting service team is uniquely equipped to take care of the complete deployment of your custom networks, servers, and data management solutions while maintaining data integrity.',
            },
            {
              icon: <BarChart className="w-8 h-8" />,
              title: 'ERP Implementation Services',
              description:
                'The best ERP business software solutions count for nothing if they are not implemented properly. Our ERP implementation consulting service team is uniquely equipped to take care of the complete deployment of your custom networks, servers, and data management solutions while maintaining data integrity.',
            },
          ]}
        />
        <CompanyStats />
        <ChartSlider />
        <div className="h-full max-w-7xl mx-auto">
          <RightSectionScrollable />
        </div>
        <div className="h-auto flex items-center justify-center p-4">
            <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8">
                <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    We built a custom ERP solution for the world's largest furniture
                    retailer, IKEA, leading to
                </h2>
                <p className="text-lg md:text-xl my-4">
                    Solution's adoption in 
                    <span className="text-yellow-600"> 7+ stores</span>
                </p>
                <p className="text-lg md:text-xl my-4">
                    Discovery of the 
                    <span className="text-yellow-600"> Biggest source of RoI </span>
                    for the client
                </p>
                <ButtonWithArrow href="/">View Success Story</ButtonWithArrow>
                </div>
                <div className="lg:w-1/2 w-full">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                    src="/assets/images/ikea-banner.webp"
                    alt="IKEA storefront with people walking"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    />
                    <div className="absolute flex items-center justify-center"></div>
                </div>
                </div>
            </div>
        </div>
        <StackingCards />
        <Services />
        <FAQ />
        <RelatedBlogs />
        <TabbedComponent />
      </div>
    </>
  );
}

export default Page;
