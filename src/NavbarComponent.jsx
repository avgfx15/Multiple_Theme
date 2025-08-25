import { useThemeContext } from './ThemeContext/ThemeContext';
import Themes from './ThemeContext/ThemeVariable';

const NavbarComponent = () => {
  const { theme, setTheme } = useThemeContext();
  console.log(theme);

  const handleChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <nav className='flex flex-col md:flex-row justify-between items-center p-3 bg-primary text-primary shadow-lg w-full'>
      <div className='mb-4 md:mb-0 text-2xl font-bold rounded-lg p-2'>
        StacoThemeApp
      </div>
      <ul className='flex flex-wrap justify-center gap-4 md:gap-8 mb-4 md:mb-0 text-lg'>
        <li className='hover:text-secondary cursor-pointer transition-colors duration-300'>
          Home
        </li>
        <li className='hover:text-secondary cursor-pointer transition-colors duration-300'>
          About
        </li>
        <li className='hover:text-secondary cursor-pointer transition-colors duration-300'>
          Services
        </li>
        <li className='hover:text-secondary cursor-pointer transition-colors duration-300'>
          Contact
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        <select
          value={theme}
          onChange={handleChange}
          className='py-2 px-8 border border-border-primary bg-secondary text-text-primary rounded-md focus:ring-2 focus:ring-text-primary focus:outline-none transition-all duration-300 appearance-none'
          style={{
            backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-6.5%200-12.3%203.2-16.1%208.1-3.8%204.9-4.7%2011.6-2.9%2017.6l128%20192c3.8%205.7%209.7%209.4%2016.1%209.4s12.3-3.7%2016.1-9.4l128-192c1.9-6-.3-12.7-4.1-17.6z%22%2F%3E%3C%2Fsvg%3E')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '0.65em auto',
          }}
        >
          {Themes.map((t) => (
            <option key={t} value={t} className='bg-primary text-text-primary'>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
        <button className='px-4 py-2 bg-secondary hover:bg-primary text-text-primary rounded-md shadow-md transition-all duration-300 border border-border-primary hover:border-text-primary'>
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
