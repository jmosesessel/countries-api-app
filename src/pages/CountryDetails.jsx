import { LiaArrowLeftSolid } from "react-icons/lia";
import GermanyFlag from '../assets/images/germany-flag.png'

function CountryDetails() {
  return (
    <>
        <div className="mx-7 mt-5">
            <button className='w-[6.5rem] shadow-md h-8 flex justify-center mb-16 text-sm items-center gap-2 bg-white-dark-mode-text-light-mode-elements'>
                <LiaArrowLeftSolid />
                <span> Back </span>
            </button>

            <div>

                <img className="w-full rounded-lg" src={GermanyFlag} alt="flag" />
            </div>

            <div className="text-sm mb-[2.2rem]">
                <h1 className="mt-10 text-[1.375rem] font-semibold mb-4">Belgium</h1>

                <div className="flex flex-col gap-8 mb-[2.12rem]">
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

                <div className="flex flex-col gap-4 mb-20">
                    <h2 className="text-base font-bold">Border Countries:</h2>
                    <div className="flex gap-[0.62rem] ">
                        <div className="flex justify-center items-center w-24 h-7 text-[0.75rem] bg-white shadow-md rounded-sm">France</div>
                        <div className="flex justify-center items-center w-24 h-7 text-[0.75rem] bg-white shadow-md rounded-sm">Germany</div>
                        <div className="flex justify-center items-center w-24 h-7 text-[0.75rem] bg-white shadow-md rounded-sm">Netherlands</div>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default CountryDetails