import { HiOutlineMoon } from "react-icons/hi2";

function Header({isDarkMode, setMode}) {

  const handleClick = (mode) => {
    setMode(!mode)
  }

	return (
		<>
			<div className={`${isDarkMode ? " bg-dark-blue-dark-mode-elements" : "bg-white-dark-mode-text-light-mode-elements"} w-full h-[5rem] flex justify-between items-center px-4 lg:py-6 lg:px-[5.6rem] shadow-md`}>
				<h1 className={`${isDarkMode ? " text-white-dark-mode-text-light-mode-elements" : " text-dark-blue-dark-mode-elements"} text-sm lg:text-2xl font-semibold `}>
					Where in the world?
				</h1>
				<div onClick={()=> handleClick(isDarkMode)}  className="text-dark-blue-dark-mode-elements flex items-center gap-2  cursor-pointer">
					<HiOutlineMoon className={`${isDarkMode && " fill-white-dark-mode-text-light-mode-elements text-white" } text-base `}/>
					<h6 className={`${isDarkMode && " text-white" } text-[0.75rem] lg:text-base`}>Dark Mode</h6>
				</div>
			</div>
		</>
	);
}

export default Header;
