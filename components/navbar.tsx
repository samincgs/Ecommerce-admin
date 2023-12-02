import { UserButton } from '@clerk/nextjs';
import MainNav from './main-nav';

const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='h-16 flex items-center px-4'>
        <div className=''>this will be a store switcher</div>
        <MainNav className='mx-6' />
        <div className='ml-auto space-x-4 flex items-center'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
