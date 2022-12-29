import { PaintingData } from '../lib/types';
import style from '../styles/SlideshowNav.module.scss'
import prevIcon from '../public/assets/shared/icon-back-button.svg';
import nextIcon from '../public/assets/shared/icon-next-button.svg';
import prevIconGray from '../public/assets/shared/icon-back-button-gray.svg';
import nextIconGray from '../public/assets/shared/icon-next-button-gray.svg';
import Link from 'next/link';
import Image from 'next/image';

export default function SlideshowNav({
  painting,
  urlPathPrev,
  urlPathNext
} : {
  painting: PaintingData,
  urlPathPrev: string,
  urlPathNext: string
}) {
  return (
    <div className={style.container}>
      <div className={style.progressBar}>
        <div
          className={style.completed}
          style={{width: `${(painting.metadata.index + 1)*100/15}%`}}
        />
      </div>
      <div className={style.headingAndNavLinks}>
        <div>
          <p className={style.heading}>{painting.name}</p>
          <p className={style.subheading}>{painting.artist.name}</p>
        </div>
        <div className={style.links}>
          {
            urlPathPrev.length === 0
            ? (<div className={style.navLink}>
                <Image src={prevIconGray} alt='previous disabled'/>
              </div>)
            : (<Link
                className={style.navLink}
                href={`/${urlPathPrev}`}
              >
                <Image
                  className={style.navIcon}
                  src={prevIcon}
                  alt='previous'
                />
              </Link>)
          } 
          {
            urlPathNext.length === 0
            ? (<div className={style.navLink}>
                <Image src={nextIconGray} alt='next disabled'/>
              </div>)
            : (<Link
                className={style.navLink}
                href={`/${urlPathNext}`}
              >
                <Image
                  className={style.navIcon}
                  src={nextIcon}
                  alt='next'
                />
              </Link>)
          }
        </div>
      </div>
    </div>
  );
}