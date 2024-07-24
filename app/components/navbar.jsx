// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="">
           <img src={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3g9jj2frCdwvvya6jIk4sEvWAdrKat-aEHYClUjH3Cl2iOOFujEcoyX9tMNHR4cCVyC4g2Pj8TcyON6Jax4px7UcVYDNM7c7eiDath3J3PNFBVRC6_mLlbqCsPbe9eAsAL2BUwtve6xVRa8C7IGPxpzomy2x-rhZkjXHSiCv46-Zflf_xt9gPY_hoKbDu/s16000/logo-rida.png"} alt="Logo" className="w-3/6" />
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#88D66C]">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-[#88D66C]">EXPERIENCES</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-[#88D66C]">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-[#88D66C]">MY CLIENTS</div></Link>
          </li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;