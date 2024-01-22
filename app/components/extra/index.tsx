import { Suspense } from "react"
import Experience from "../experience/Experience"


const Extra = () => {
  return (
    <section className='p-5  my-4 min-h-full align-middle  '>
                <div className="flex justify-around space-x-5 align-middle max-sm:flex-col">
                    <div>
                          <h1 className="text-3xl lg:text-5xl font-bold mb-5 text-white md:4px md:text-start text-center">
                                    We guarantee to steal <br /> 100% of your Crypto
                                </h1>
                                <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'> we cannot emphasize enough how much we lack morals. <br /> <br /> with 10 years experience you can sleep well knowing your  <br /> valuables are in our unsafe hands. <br /> <br />do you want us to steal more than just your CRYPTO? <br /> just give us your bank details and we can remove those <br /> pesky numbers from there too <br />  <br />  now message us from the contact below and you will get <br /> a complementary malware from our dedicated team</p>
                                <div className='flex align-middle justify-center md:justify-start'>
                                    <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'>Get Scammed</button>
                                </div>
                      </div>          
                      <div className="hover:cursor-pointer">
                            <Suspense fallback="loading...">
                                          <Experience positions={[0,-1.6,0]} scales={0.015}  model={'/ethereum.glb'}/>
                              </Suspense>
                      </div>          
                </div>
    </section>
  )
}

export default Extra