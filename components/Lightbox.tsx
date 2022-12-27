import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { libreBaskerville } from '../lib/font';
import { PaintingData } from '../lib/types';
import style from '../styles/Lightbox.module.scss';

export default function Lightbox({
  painting,
  setIsLightboxOn
} : {
  painting: PaintingData,
  setIsLightboxOn: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div className={style.container}>
      <div className={style.imageAndCloseButton}>
        <button
          className={`${libreBaskerville.className} ${style.button}`}
          onClick={() => {setIsLightboxOn(false)}}
        >
          CLOSE
        </button>
        <Image
          className={style.image}
          src={painting.images.gallery.substring(1)}
          alt={painting.name}
          width={painting.metadata.gallery.width}
          height={painting.metadata.gallery.height}
        />
      </div>
    </div>
  );
}