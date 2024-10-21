"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { IconType } from "react-icons";
import {
  FaIndustry,
  FaTruck,
  FaUsers,
  FaClipboardList,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

interface ModuleData {
  icon: IconType;
  title: string;
  description: string;
}

const modules: ModuleData[] = [
  {
    icon: FaIndustry,
    title: "Manufacturing",
    description:
      "The manufacturing module aids in the management and simplification of numerous aspects of the manufacturing process, including bill management, production planning and scheduling, quality control, and cost management.",
  },
  {
    icon: FaTruck,
    title: "Supply Chain Management",
    description:
      "The supply chain management module assists in the optimization of a number of supply chain components, including logistics, inventory management, demand planning, and procurement.",
  },
  {
    icon: FaUsers,
    title: "Customer Relationship Management",
    description:
      "The customer relationship management module lets organizations track customer interactions, manage customer information, and automate marketing and sales activities. It offers a consolidated platform to boost sales and streamline customer-related processes.",
  },
  {
    icon: FaClipboardList,
    title: "Inventory",
    description:
      "The inventory module enables firms to manage inventory across various locations, automate transactions, and analyze expenses. It offers a single platform to decrease stockouts and overstocking, enhance accuracy, and streamline inventory-related procedures.",
  },
  {
    icon: FaShoppingCart,
    title: "Distribution",
    description:
      "The distribution module offers an intuitive platform to increase visibility and collaboration across the whole distribution process by enabling organizations to track shipments, handle client orders, and automate billing procedures.",
  },
  {
    icon: FaChartLine,
    title: "Business Intelligence",
    description:
      "ERP software's business intelligence module assists in real-time reporting, data analysis and informed decision-making. Businesses can analyze data from numerous sources through BI platforms, create reports and dashboards, and base their decisions on data-driven insights.",
  },
  {
    icon: FaChartLine,
    title: "Business Intelligence",
    description:
      "ERP software's business intelligence module assists in real-time reporting, data analysis and informed decision-making. Businesses can analyze data from numerous sources through BI platforms, create reports and dashboards, and base their decisions on data-driven insights.",
  },
  {
    icon: FaChartLine,
    title: "Business Intelligence",
    description:
      "ERP software's business intelligence module assists in real-time reporting, data analysis and informed decision-making. Businesses can analyze data from numerous sources through BI platforms, create reports and dashboards, and base their decisions on data-driven insights.",
  },
  {
    icon: FaChartLine,
    title: "Business Intelligence",
    description:
      "ERP software's business intelligence module assists in real-time reporting, data analysis and informed decision-making. Businesses can analyze data from numerous sources through BI platforms, create reports and dashboards, and base their decisions on data-driven insights.",
  },
  {
    icon: FaChartLine,
    title: "Business Intelligence",
    description:
      "ERP software's business intelligence module assists in real-time reporting, data analysis and informed decision-making. Businesses can analyze data from numerous sources through BI platforms, create reports and dashboards, and base their decisions on data-driven insights.",
  },
];

export default function ChartSlider() {
  const [activePage, setActivePage] = useState(0);
  const swiperRef = useRef<any>(null);

  const itemsPerPage = 6; // 3x2 grid
  const totalItems = modules.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePaginationClick = (pageIndex: number) => {
    setActivePage(pageIndex);
    if (swiperRef.current) {
      swiperRef.current.slideTo(pageIndex); // Navigate to the selected page
    }
  };
  const handleTouchStart = () => {
    if (swiperRef.current) {
      swiperRef.current.el.style.cursor = "grabbing";
    }
  };

  const handleTouchEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.el.style.cursor = "default";
    }
  };

  return (
    <div className="w-full p-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-800 font-bold leading-tight text-left mb-2 mt-0 relative z-2">
            <div>Equipped with Capabilities</div>
            <div>to Develop Premium ERP</div>
            <div>Software Modules</div>
        </h2>
        <div className="text-lg md:text-xl font-normal leading-6 text-left pt-2">
            <div>Depending on your business needs, we cover the development of the following ERP</div>
            <div>software modules to raise the efficiency of your workflows.</div>
        </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Get the Swiper instance
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Enable loop for infinite scrolling
        onSlideChange={(swiper) => {
          const newIndex = swiper.realIndex; // Get the real index of the slide
          setActivePage(newIndex); // Update the active page
        }}
        className="mySwiper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleTouchStart}
        onMouseLeave={handleTouchEnd}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
              {modules
                .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                .map((module, index) => (
                  <div
                    key={index}
                    className="bg-white border-[1.5px] border-slate-400 rounded-xl p-6 h-full flex flex-col"
                  >
                    <module.icon className="text-4xl mb-4" />
                    <h2 className="text-3xl font-semibold mb-2 py-2">{module.title}</h2>
                    <p className="text-md flex-grow font-base font-sans">
                      {module.description}
                    </p>
                  </div>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className={`${
              pageIndex === activePage ? "w-6 h-3 rounded-lg" : "w-3 h-3 rounded-full"
            } ${pageIndex === activePage ? "bg-zinc-700" : "bg-zinc-500"} cursor-pointer transition-all duration-300`}
            onClick={() => handlePaginationClick(pageIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
}
