import Image from 'next/image';
import { Suspense } from 'react';
import Experience from '../experience/Experience';


const Banner = () => {

    return (
        <div className='bg-image relative' id="home-section">
            <div className='radial-banner hidden lg:block'></div>

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">

                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo'></div>
                        <div className='col-span-7 min-h-full hover:cursor-pointer'>
                            <Suspense fallback="loading...">    
                                <Experience positions={[0, 0, 0]} model="/bitcoin.glb" scales={0.01} />
                            </Suspense>
                          
                        </div>

                        <div className='col-span-5 lg:-m-48'>
                            <Image src="/images/Banner/banner.png" alt="nothing" width={1013} height={760} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
