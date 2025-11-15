 import { Navlinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react'
import { CgClose } from 'react-icons/cg';
import { useAuth, useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav: React.FC<Props> = ({ showNav, closeNav }) => {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    closeNav();
    router.push('/sign-in');
  };

  const NavOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';
  return (
    <div>
      {/* Overlay */}
      <div className={`fixed inset-0 transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen ${NavOpen}`}></div>
      {/* Navlinks */}
      <div className={`text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[1000050] right-0 ${NavOpen}`}>
       {
         Navlinks.map((link) => (
           <Link key={link.id} href={link.url} onClick={closeNav}>
             <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white">{link.label}</p>
           </Link>
         ))
       }
       {isSignedIn && (
         <button
           onClick={handleLogout}
           className="w-fit text-xl ml-12 px-6 py-2.5 bg-gray-800/50 hover:bg-cyan-400/20 rounded-full border border-gray-700 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all duration-300"
         >
           Logout
         </button>
       )}
               {/* Cross-icon */}
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 ' />
      </div>
    </div>
  )
}

export default MobileNav;
