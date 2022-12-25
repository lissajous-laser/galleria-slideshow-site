import Image from 'next/image';
import imgSrc from '../../public/assets/the-great-wave-off-kanagawa/artist.jpg';

export default function TheGreatWaveOffKanagawaArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}