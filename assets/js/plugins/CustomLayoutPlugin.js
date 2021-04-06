import CustomLayout from '../components/CustomLayout';

// Create the plugin that provides our layout component
const CustomLayoutPlugin = () => ({
  components: {
    CustomLayout,
  },
});

export default CustomLayoutPlugin;
