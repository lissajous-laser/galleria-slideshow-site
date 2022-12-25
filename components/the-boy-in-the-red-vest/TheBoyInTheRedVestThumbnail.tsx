import Image from 'next/image';
import imgSrc from '../../public/assets/the-boy-in-the-red-vest/thumbnail.jpg';

export default function TheBoyInTheRedVestArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={260}
    />
  );
}