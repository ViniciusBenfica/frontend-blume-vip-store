import Image from 'next/image';
import BannerImage from '/public/banner.png';

export default function HomeBanner() {
  return <Image src={BannerImage} alt='banner' width={1920} height={400} />;
}
