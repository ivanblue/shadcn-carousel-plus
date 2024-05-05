import Image from 'next/image';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import CarouselImg1 from '@/public/images/carousel/carousel-1.jpg';
import CarouselImg2 from '@/public/images/carousel/carousel-2.jpg';
import CarouselImg3 from '@/public/images/carousel/carousel-3.jpg';
import CarouselImg4 from '@/public/images/carousel/carousel-4.jpg';
import CarouselImg5 from '@/public/images/carousel/carousel-5.jpg';

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto pt-20">
      <Card className="w-[300px] rounded-md overflow-hidden mx-auto border border-slate-300 hover:shadow-xl transition-shadow">
        <CardHeader className="p-0">
          <Carousel className="w-full max-w-xs relative">
            <CarouselContent className="-ml-0">
              <CarouselItem className="pl-0">
                <Image src={CarouselImg1} width={300} height={300} alt="Carousel 1" />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <Image src={CarouselImg2} width={300} height={300} alt="Carousel 2" />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <Image src={CarouselImg3} width={300} height={300} alt="Carousel 3" />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <Image src={CarouselImg4} width={300} height={300} alt="Carousel 4" />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <Image src={CarouselImg5} width={300} height={300} alt="Carousel 5" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute top-[150px] left-1" />
            <CarouselNext className="absolute top-[150px] right-1" />
          </Carousel>
        </CardHeader>
        <CardContent className="px-3">
          <CardTitle className="text-lg font-normal py-2">Lorem ipsum dolor sit amet</CardTitle>
          <CardDescription>
            Duis tincidunt odio vel tristique rhoncus. Praesent id erat arcu. Vestibulum volutpat velit vel metus
            suscipit tempus.
          </CardDescription>
        </CardContent>
      </Card>
    </main>
  );
}
