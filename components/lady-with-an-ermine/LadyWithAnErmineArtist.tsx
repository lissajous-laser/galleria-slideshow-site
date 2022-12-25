import Image from 'next/image';
import imgSrc from '../../public/assets/lady-with-an-ermine/artist.jpg';

export default function LadyWithAnErmineArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}