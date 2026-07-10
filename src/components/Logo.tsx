import React from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../assets/Main Favicon.svg';
import logoDark from '../assets/Main Favicon Dark.png'; // transparent background version

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textColorClass?: string;
  forceDarkThemeLogo?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  iconOnly = false, 
  size = 'md',
  textColorClass,
  forceDarkThemeLogo = false
}) => {
  const sizeClasses = {
    sm: {
      img: 'w-[46px] h-7',
      text: 'text-lg',
      subtext: 'text-[9px] tracking-[0.16em] -mt-0.5',
      copyright: 'text-[8px] mt-0.5',
      gap: 'gap-2',
    },
    md: {
      img: 'w-[59px] h-9',
      text: 'text-xl',
      subtext: 'text-xs tracking-[0.16em] -mt-1',
      copyright: 'text-[10px] mt-0.5',
      gap: 'gap-3',
    },
    lg: {
      img: 'w-[79px] h-12',
      text: 'text-2xl',
      subtext: 'text-sm tracking-[0.16em] -mt-1.5',
      copyright: 'text-xs mt-1',
      gap: 'gap-4',
    },
  }[size];

  const textCol = textColorClass || 'text-slate-950 dark:text-white';

  return (
    <Link to="/" className={`flex items-center ${sizeClasses.gap} group ${className}`}>

      {/* Light mode logo — visible unless dark mode or dark-theme logo is forced */}
      <img
        src={logoLight}
        alt="Momentrix logo"
        className={`${sizeClasses.img} object-contain transform group-hover:scale-105 transition-transform duration-300 ${
          forceDarkThemeLogo ? 'hidden' : 'block dark:hidden'
        }`}
      />

      {/* Dark mode logo — transparent bg, visible in dark mode or when dark-theme logo is forced */}
      <img
        src={logoDark}
        alt="Momentrix logo"
        className={`${sizeClasses.img} object-contain transform group-hover:scale-105 transition-transform duration-300 ${
          forceDarkThemeLogo ? 'block' : 'hidden dark:block'
        }`}
      />

      {/* Wordmark */}
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none select-none font-sans">
          <div className="flex items-start">
            <span
              className={`font-semibold tracking-[0.01em] lowercase ${textCol} ${sizeClasses.text}`}
            >
              momentrix
            </span>
            <sup
              className={`font-medium ml-0.6 ${textCol} ${sizeClasses.copyright}`}
            >
              ©
            </sup>
          </div>
          <span
            className={`font-semibold tracking-[0.16em] lowercase text-right w-full ${textCol} ${sizeClasses.subtext}`}
          >
            media
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;