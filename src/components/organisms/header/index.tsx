import cx from 'classnames'
import useDarkMode from '../../../hooks/useDarkMode'

export default function Header() {
    const [colorTheme, setTheme] = useDarkMode()

    const styleBtnToggle = cx({
        'w-16 h-8 rounded-2xl p-0.5 inline-block': true,
        'bg-limeGreen': colorTheme === 'light' ? true : false,
        'bg-darkGrayishBlue': colorTheme === 'dark' ? true : false 
    })
    
    const styleRoundBtn = cx({
        'w-6/12 h-full inline-block bg-white rounded-full transition duration-400': true,
        '-translate-x-4': colorTheme === 'light' ? true : false,
        'translate-x-4': colorTheme === 'dark' ? true : false
    })

    return(
        <header className="flex py-8 justify-between md:flex-row flex-col">
            <div className="flex flex-col">
                <h2 className="text-2xl text-veryDarkBlue dark:text-white transition duration-400 font-bold">Social Media Dashboard</h2>
                <p className="text-sm font-semibold text-darkGrayishBlue">Total Followers: 23,004</p>
            </div>
            <div className="flex items-center md:justify-center justify-between h-full mt-8 md:mt-0">
                <span className="inline-block font-semibold text-sm mr-2 text-darkGrayishBlue">{colorTheme} Mode</span>
                <button onClick={()=> setTheme(colorTheme)} className={styleBtnToggle}>
                    <span className={styleRoundBtn}></span>
                </button>
            </div>
        </header>
    )
}