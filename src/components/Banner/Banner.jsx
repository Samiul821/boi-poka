import React from 'react';
import Button from '../Ui/Button';
import bannerimg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center py-5 px-[30px] md:py-[40px] md:px-[45px] lg:py-[80px] lg:px-[120px] bg-gray-200 rounded-xl gap-y-6 md:rounded-3xl mb-[20px] md:mb-[50px]'>
            <div>
               <h1 className='md:text-[48px] lg:text-[56px] text-[36px] font-bold playfair mb-6 md:mb-8 lg:mb-12'>Books to freshen up <br className='hidden md:hidden lg:block' /> your bookshelf</h1>
               <Button lebel={'View The List'}></Button>
            </div>
            <div>
                <img src={bannerimg} alt="banner" className='w-[100%] h-[100%] rounded-2xl' />
            </div>
        </div>
    );
};

export default Banner;