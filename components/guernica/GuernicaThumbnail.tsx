import Image from 'next/image';
import imgSrc from '../../public/assets/guernica/thumbnail.jpg';

export default function GuernicaThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={285}
    />
  );
}