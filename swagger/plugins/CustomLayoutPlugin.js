import CustomLayout from "../components/CustomLayout";

// Create the plugin that provides our layout component
const CustomLayoutPlugin = () => {
  return {
    components: {
      CustomLayout: CustomLayout
    }
  };
};

export default CustomLayoutPlugin;
