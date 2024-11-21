import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: 'sh1.png', // Replace with the actual path to your image
      title: 'ALL INDIA SHIPPING',
      description: 'All India Shipping is the Process of Importing',
    },
    {
      id: 2,
      icon: 'sh2.png', // Replace with the actual path to your image
      title: 'SECURED SERVICE',
      description: 'Secured Services. Heavy Commercial/Industrial',
    },
    {
      id: 3,
      icon: 'dl.png', // Replace with the actual path to your image
      title: 'SECURED SERVICE',
      description: 'Fast Deliver is a Fast Growing and Promising',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
