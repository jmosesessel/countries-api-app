import { LiaArrowLeftSolid } from "react-icons/lia";
import {Link} from 'react-router-dom'
import GermanyFlag from '../assets/images/germany-flag.png'

function CountryDetails() {
  return (
    <>
        <div className="mx-7 lg:mx-20 mt-5">
            <Link to="/">
                <button className='w-[6.5rem] lg:w-[8.5rem] shadow-md h-8 lg:h-10 flex justify-center mb-16 lg:mb-20 text-sm lg:text-base items-center gap-2 bg-white-dark-mode-text-light-mode-elements'>
                    <LiaArrowLeftSolid />
                    <span> Back </span>
                </button>
            </Link>
            <div className="flex flex-col lg:flex-row lg:gap-[7.5rem] text-sm mb-[2.2rem]">
                <div>
                    <img className="w-full rounded-lg lg:w-[34.98219rem]" src={GermanyFlag} alt="flag" />
                </div>

                <div className="flex flex-col ">
                    <h1 className="mt-10 text-[1.375rem] font-semibold mb-4">Belgium</h1>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[8.81rem] mb-[2.12rem]">
                        <div className="flex flex-col gap-3">
                            <div>
                                <span className="font-bold">Native Name:</span> <span>Belgie</span>
                            </div>
                            <div>
                                <span className="font-bold">Population:</span> <span>11,319,511</span>
                            </div>
                            <div>
                                <span className="font-bold">Region:</span> <span>Europe</span>
                            </div>
                            <div>
                                <span className="font-bold">Sub Region:</span> <span>Western Europe</span>
                            </div>
                            <div>
                                <span className="font-bold">Capital:</span> <span>Brussels</span>
                            </div>
                            
                        </div>

                        <div className="flex flex-col gap-3">
                            <div>
                                <span className="font-bold">Top Level Domain:</span> <span>be</span>
                            </div>
                            <div>
                                <span className="font-bold">Currencies:</span> <span>Euro</span>
                            </div>
                            <div>
                                <span className="font-bold">Languages:</span> <span>Dutch, French, German</span>
                            </div>
                                
                        </div>

                        
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 mb-20">
                        <h2 className="text-base font-bold">Border Countries:</h2>
                        <div className="flex gap-[0.62rem] ">
                            <button className="flex justify-center items-center w-24 h-7 text-[0.75rem] bg-white-dark-mode-text-light-mode-elements shadow-md rounded-sm">France</button>
                            <button className="flex justify-center items-center w-24 h-7 text-[0.75rem] bg-white-dark-mode-text-light-mode-elements shadow-md rounded-sm">Germany</button>
                            <button className="flex justify-center items-center w-24 h-7 text-[0.75rem] bg-white-dark-mode-text-light-mode-elements shadow-md rounded-sm">Netherlands</button>
                        </div>
                    </div>
                </div>

                

                

            </div>

        </div>
    </>
  )
}

export default CountryDetails