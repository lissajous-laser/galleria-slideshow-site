import Image from 'next/image';
import { libreBaskerville } from '../public/font';
import style from '../styles/Header.module.scss';
import logo from '../public/assets/shared/logo.svg';

export default function Header() {
  return (
    <header className={`${style.header} ${libreBaskerville.className}`}>
      <div className={style.centered}>
        <Image
          src={logo}
          alt='Logo'
        />
        <button className={style.toggleSlideshow}>START SLIDESHOW</button>
      </div>
    </header>);
}