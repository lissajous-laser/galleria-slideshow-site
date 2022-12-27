import Image from 'next/image';
import { libreBaskerville } from '../lib/font';
import style from '../styles/Header.module.scss';
import logo from '../public/assets/shared/logo.svg';
import Link from 'next/link';

export default function Header({isSlideshowOn} : {isSlideshowOn: boolean}) {
  return (
    <div className={style.centered}>
      <h1 className={style.dummyH1}>
        <Image
          src={logo}
          alt='galleria'
        />
      </h1>
      <Link 
        className={style.toggleSlideshow}
        href={isSlideshowOn ? '/' : 'starry-night'}
      >
        <p>{`${isSlideshowOn ? 'STOP' : 'START'} SLIDESHOW`}</p>
      </Link>
    </div>
  );
}