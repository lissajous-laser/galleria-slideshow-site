import Image from 'next/image';
import imgSrc from '../../public/assets/the-boy-in-the-red-vest/hero-small.jpg';

export default function TheBoyInTheRedVestHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}