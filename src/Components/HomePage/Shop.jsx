import React from "react";

const ShopByCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Bracelets",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/c/q/8/na-na-1-cbniti-deora-jewellery-original-imah35phy7dqddhu.jpeg?q=20&crop=false",
    },
    {
      id: 2,
      name: "Chains",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/c/q/8/na-na-1-cbniti-deora-jewellery-original-imah35phy7dqddhu.jpeg?q=20&crop=false",
      badge: [
        { text: "Gold", emoji: "⭐" },
        { text: "Platinum", emoji: "❄️" },
      ],
    },
    {
      id: 3,
      name: "Earrings",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/c/q/8/na-na-1-cbniti-deora-jewellery-original-imah35phy7dqddhu.jpeg?q=20&crop=false",
    },
    {
      id: 4,
      name: "Neckwears",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/c/q/8/na-na-1-cbniti-deora-jewellery-original-imah35phy7dqddhu.jpeg?q=20&crop=false",
    },
    {
      id: 5,
      name: "Pendants",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/c/q/8/na-na-1-cbniti-deora-jewellery-original-imah35phy7dqddhu.jpeg?q=20&crop=false",
    },
    {
      id: 6,
      name: "Rings",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/c/q/8/na-na-1-cbniti-deora-jewellery-original-imah35phy7dqddhu.jpeg?q=20&crop=false",
    },
  ];

  return (
    <div className="py-10 bg-white">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold mb-2">Shop By Category</h2>
      <p className="text-center text-gray-600 mb-6">Our Everyday Pieces</p>

      {/* Carousel */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 max-w-screen-xl px-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition duration-300" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                {category.badge && (
                  <div className="mt-2 flex gap-2">
                    {category.badge.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/20 text-xs font-medium rounded-md flex items-center gap-1"
                      >
                        <span>{item.emoji}</span> {item.text}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination (if needed) */}
      <div className="mt-4 flex justify-center gap-2">
        {categories.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full bg-gray-400 ${
              index === 0 ? "bg-orange-500" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
