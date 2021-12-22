import cx from 'classnames'

interface CardOverviewProps {
    sosmed: 'facebook' | 'twitter' | 'instagram' | 'youtube'
    type: String
    iconUpDown: 'up' | 'down'
    statsToday: String
    statsGraph: Number
}

export default function CardOverview(props: CardOverviewProps) {
    const styleGraph = cx({
        'mb-3 text-xs': true,
        'text-limeGreen': props.iconUpDown === 'up' ? true : false,
        'text-brightRed': props.iconUpDown === 'down' ? true : false
    })
    return(
        <div className="w-52 p-6 h-36 flex justify-between m-3 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue transition duration-400 rounded">
            <div className="flex flex-col justify-between h-full">
                <h3 className="text-darkGrayishBlue text-sm font-semibold dark:text-desaturatedBlue transition duration-400">{props.type}</h3>
                <p className="text-3xl font-semibold dark:text-white transition duration-400">{props.statsToday}</p>
            </div>

            <div className="flex flex-col items-end justify-between h-full">
                <img className="inline-block w-4 mt-1" src={`/images/icon-${props.sosmed}.svg`} alt="" />
                <p className={styleGraph}>
                    <img className='inline-block mr-1' src={`/images/icon-${props.iconUpDown}.svg`} alt="salt" />    
                {props.statsGraph} %
                </p>
            </div>
        </div>
    )
}