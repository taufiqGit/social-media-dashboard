import cx from 'classnames'

interface CardFollowersProps {
    type: 'facebook' | 'twitter' | 'instagram' | 'youtube',
    totalFollow: String,
    typeFollow: String,
    statFollower: Number, 
    iconUpDown: 'up' | 'down',
}



export default function CardFollowers(props: CardFollowersProps) {
    const styleStatFollower = cx({
        'mt-3 text-xsmt-3 text-xs': true,
        'text-limeGreen': props.iconUpDown === 'up' ? true : false,
        'text-brightRed': props.iconUpDown === 'down' ? true : false
    })
   
    const styleTopCard = cx({
        'absolute t-0 w-full h-1 inline-block': true,
        'bg-facebook': props.type === 'facebook' ? true : false,
        'bg-gradient-to-r from-instagramFrom to-instagramTo': props.type === 'instagram' ? true : false,
        'bg-twitter': props.type === 'twitter' ? true : false,
        'bg-youtube': props.type === 'youtube' ? true : false
    })

    return(
        <div className="relative w-52 m-3 overflow-hidden h-52 bg-lightGrayishBlue dark:bg-darkDesaturatedBlue transition duration-400 rounded">
            <span className={styleTopCard}></span>
            <div className='h-full w-full flex flex-col items-center justify-center'>
                <p>
                    <img className='inline-block w-4' src={`/images/icon-${props.type}.svg`} alt="test" />
                    <span className='ml-1 text-sm text-darkGreyishBlue dark:text-desaturatedBlue transition duration-400'>@taufiq_gg</span>
                </p>
                <p className='text-5xl mt-5 font-semibold text-darkGreyishBlue dark:text-white transition duration-400'>{props.totalFollow}</p>
                <p className='font-semibold text-sm mt-3 uppercase text-darkGrayishBlue dark:text-desaturatedBlue transition duration-400'>{props.typeFollow}</p>
                <p className={styleStatFollower}>
                    <img className='inline-block mr-1' src={`/images/icon-${props.iconUpDown}.svg`} alt="salt" />    
                {props.statFollower} Today
                </p>
            </div>
        </div>
    )
}