import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center">
            <Link href="/">
            <Image
            src="/R.png" 
            alt="Dragon Ball Z Logo"
            width={150}
            height={50}
          /></Link>
          
        </div>
        <div className="flex space-x-8">
         
          <Link href="/characters">
            <p className="text-white hover:text-red-500 font-semibold text-3xl font-sans">Characters</p>
          </Link>
          <Link href="/planets">
            <p className="text-white hover:text-red-500 font-semibold text-3xl font-sans">Planets</p>
          </Link>
          <Link href="/transformations">
            <p className="text-white hover:text-red-500 font-semibold text-3xl font-sans">Transformations</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
