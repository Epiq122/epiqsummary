import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center mx-auto z-0 relative py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl'>
      <div className=''>
        <div className='relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group'>
          <Badge
            variant='secondary'
            className='relative px-6 py-2 text-base font-medium rounded-full group-hover:bg-rose-200 group-hover:text-rose-900 transition-colors duration-300'
          >
            <Sparkles className='w-6 h-6 mr-2 text-rose-600 animate-pulse' />
            <p className='text-base text-rose-600 group-hover:text-rose-900'>
              Powered by AI
            </p>
          </Badge>
        </div>
      </div>

      <h1 className='font-bold py-6 text-center'>
        Transform a PDF into a concise summary for easy reading
      </h1>
      <h2 className='text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600'>
        Get a awesome summary reel in seconds
      </h2>
      <Button>Try EpiqSummar</Button>
    </section>
  );
};
export default HeroSection;
