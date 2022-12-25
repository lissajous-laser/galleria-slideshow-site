import Image from 'next/image';
import imgSrc from '../../public/assets/van-gogh-self-portrait/artist.jpg';

export default function VanGoghSelfPortraitArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}