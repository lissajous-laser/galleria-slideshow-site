import Image from 'next/image';
import imgSrc from '../../public/assets/the-great-wave-off-kanagawa/hero-small.jpg';

export default function TheGreatWaveOffKanagawaHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}