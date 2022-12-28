import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { libreBaskerville } from '../lib/font';
import { PaintingData } from '../lib/types';
import enlargeImgIcon from '../public/assets/shared/icon-view-image.svg';
import style from '../styles/SlideshowContent.module.scss';

export default function SlideshowContent({
  painting,
  setIsLightboxOn
} : {
  painting: PaintingData,
  setIsLightboxOn: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div className={style.content}>
      <Image
        src={painting.images.hero.large.substring(1)}
        alt={`${painting.name} painting`}
        width={475}
        height={560}
      />
      <button
        className={style.enlargeImgButton}
        onClick={() => {setIsLightboxOn(true)}}
      >
        <div className={style.buttonIconAndText}>
          <Image src={enlargeImgIcon} alt='enlarge painting'/>
          <p
            className={`${libreBaskerville.className}
            ${style.buttonText}`}
          >
            VIEW IMAGE
          </p>
        </div>
      </button>
      <h3 className={style.year}>{painting.year}</h3>
      <div className={style.headingBoxAndArtistPic}>
        <div className={style.headingBox}>
          <h2 className={style.h2}>{painting.name}</h2>
          <p className={style.subheading}>{painting.artist.name}</p>
        </div>
        <Image
          className={style.artistPic}
          src={painting.artist.image.substring(1)}
          alt={painting.artist.name}
          width={128}
          height={128}
        />
      </div>
      <div className={style.description}>{painting.description}</div>
      <a className={style.wikiLink} href={painting.source}>
        GO TO SOURCE
      </a>
    </div>    
  );
}