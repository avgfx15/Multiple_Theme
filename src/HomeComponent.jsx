import { useThemeContext } from './ThemeContext/ThemeContext';

const HomeComponent = () => {
  const { theme } = useThemeContext();
  console.log(theme);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-secondary text-primary transition-colors duration-500'>
      <h1 className='text-4xl font-bold mb-4 bg-secondary text-secondary'>
        Welcome to Stacodev For Theme Chnager App
      </h1>
      <div className='bg-accent p-6 rounded-lg shadow-md text-center '>
        <p className='text-lg mb-6 text-text-secondary'>
          Explore various themes using the dropdown in the navbar.
        </p>
        <button className='px-6 py-3 bg-primary text-text-primary rounded-md hover:bg-primary-dark transition-colors duration-300'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
