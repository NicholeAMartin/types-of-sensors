import React, { useState } from "react";
import {
  Thermometer,
  Smartphone,
  Settings,
  Sun,
  Wind,
  Volume2,
  Activity,
  MapPin,
  Hand,
  Camera,
} from "lucide-react";

const SensorTypes = () => {
  const [activeCategory, setActiveCategory] = useState("environmental");

  const categories = [
    {
      id: "environmental",
      title: "Environmental Sensors",
      icon: <Thermometer className="text-red-500" size={24} />,
      description: "Monitor conditions in the surrounding environment",
      color: "green",
      subcategories: [
        {
          icon: <Thermometer className="text-red-500" size={20} />,
          title: "Temperature & Humidity",
        },
        {
          icon: <Sun className="text-yellow-500" size={20} />,
          title: "Light & UV",
        },
        {
          icon: <Wind className="text-purple-300" size={20} />,
          title: "Air Quality & Gas",
        },
        {
          icon: <Volume2 className="text-gray-400" size={20} />,
          title: "Sound & Noise Level",
        },
      ],
    },
    {
      id: "motion",
      title: "Motion & Position Sensors",
      icon: <Smartphone className="text-blue-500" size={24} />,
      description: "Track movement, orientation, and location",
      color: "blue",
      subcategories: [
        {
          icon: <Activity className="text-blue-500" size={20} />,
          title: "Accelerometers & Gyroscopes",
        },
        {
          icon: <MapPin className="text-red-400" size={20} />,
          title: "GPS & Location",
        },
        {
          icon: <Hand className="text-yellow-400" size={20} />,
          title: "Proximity & Presence",
        },
        {
          icon: <Camera className="text-gray-500" size={20} />,
          title: "Image Sensors",
        },
      ],
    },
    {
      id: "industrial",
      title: "Industrial Sensors",
      icon: <Settings className="text-purple-400" size={24} />,
      description: "Monitor industrial processes and equipment",
      color: "orange",
      subcategories: [],
    },
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const getBorderColor = (color) => {
    switch (color) {
      case "green":
        return "border-green-500";
      case "blue":
        return "border-blue-500";
      case "orange":
        return "border-orange-500";
      default:
        return "border-gray-300";
    }
  };

  const getActiveBgColor = (color) => {
    switch (color) {
      case "green":
        return "bg-gray-100";
      case "blue":
        return "bg-gray-100";
      case "orange":
        return "bg-gray-100";
      default:
        return "bg-white";
    }
  };

  const getTextColor = (color) => {
    switch (color) {
      case "green":
        return "text-green-600";
      case "blue":
        return "text-blue-600";
      case "orange":
        return "text-orange-600";
      default:
        return "text-gray-800";
    }
  };

  const activeCategory_obj = categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Types of Sensors</h1>

      {/* Main Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`
              cursor-pointer border rounded-lg p-6 w-64 h-48
              flex flex-col items-center justify-center text-center
              transition-all duration-200 hover:shadow-md
              ${getBorderColor(category.color)}
              ${
                activeCategory === category.id
                  ? getActiveBgColor(category.color)
                  : "bg-white"
              }
            `}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="mb-3">{category.icon}</div>
            <h2
              className={`font-bold text-lg mb-2 ${getTextColor(
                category.color
              )}`}
            >
              {category.title}
            </h2>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Subcategories */}
      {activeCategory_obj && (
        <div>
          <h2
            className={`text-xl font-semibold mb-6 ${getTextColor(
              activeCategory_obj.color
            )}`}
          >
            {activeCategory_obj.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory_obj.subcategories.map((subcat, index) => (
              <div
                key={index}
                className={`
                  border rounded-lg p-4 flex items-center
                  ${getBorderColor(activeCategory_obj.color)}
                `}
              >
                <div className="mr-4">{subcat.icon}</div>
                <span className="font-medium">{subcat.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SensorTypes;
