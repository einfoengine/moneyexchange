import React from "react";
import Section from "@/components/section";
import TitleBuilder from "@/components/TitleBuilder";
import Client from "../client-template";

const servicesData = [
  {
    title: "Service 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Service 2",
    description: "Nulla facilisi. In hac habitasse platea dictumst.",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Service 3",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  // Add more services as needed
];
  
const ServicePage = () => {
  return (
    <Client>
      <main className="nt-main p-2">
        <Section sectionName="services" span={[12, 12]} className="pt-28">
          <div key="nt-services-1" className="nt-services">
            <TitleBuilder type="section" title="Our Services" message="Get our services, you will get bla bla bla. We are one of the best in Malaysia." className="text-center" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {servicesData.map((service, index) => (
              <div key={index} className="text-center">
                <img src={service.image} className="mx-auto"/>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>

              </div>
            ))}
          </div>
        </Section>
      </main>
    </Client>
  );
};

export default ServicePage;
