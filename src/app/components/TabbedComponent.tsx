"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const TabbedComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: "Backend Programming Languages",
      content: <p>This is the content for Backend Programming Languages</p>,
    },
    {
      title: "Frontend Programming Languages",
      content: (
        <div className="flex">
          <div className="text">
            <p>HTML, CSS, JavaScript</p>
          </div>
          <div className="images">
            <img src="/assets/images/kfc-logo.webp" alt="HTML" />
            <img src="/assets/images/kfc-logo.webp" alt="CSS" />
            <img src="/assets/images/kfc-logo.webp" alt="JavaScript" />
          </div>
        </div>
      ),
    },
    {
      title: "Mobile",
      content: <p>This is the content for Mobile</p>,
    },
    {
      title: "Big Data",
      content: <p>This is the content for Big Data</p>,
    },
    {
      title: "Databases / Data Storages",
      content: <p>This is the content for Databases / Data Storages</p>,
    },
    {
      title: "Cloud Data",
      content: <p>This is the content for Cloud Data</p>,
    },
  ];

  return (
    <div className="h-screen">
      {/* Swiper for sliding tabs */}
      <Swiper spaceBetween={10} slidesPerView={3} freeMode={true}>
        {tabContent.map((tab, index) => (
          <SwiperSlide key={index}>
            <button
              className={`p-2 m-2 ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Display selected tab content */}
      <div className="tab-content mt-4 p-4 border-t-2">
        {tabContent[activeTab].content}
      </div>
    </div>
  );
};

export default TabbedComponent;
