// import iconFacebook from '../../../images/icon-facebook.svg'
// import iconUp from '../../../images/icon-up.svg'
import CardFollowers from '../../molecules/cardFollowers'
export default function TotalFollowers() {
    return(
        <div className='flex flex-wrap justify-center'>
            <CardFollowers 
                type = "facebook"
                totalFollow = '1987'
                typeFollow = "followers"
                statFollower = {12} 
                iconUpDown = 'up'
            />
            <CardFollowers 
                type = "twitter"
                totalFollow = '1044'
                typeFollow = "followers"
                statFollower = {99} 
                iconUpDown = 'up'
            />
            <CardFollowers 
                type = "instagram"
                totalFollow = '11K'
                typeFollow = "followers"
                statFollower = {1099} 
                iconUpDown = 'up'
            />
            <CardFollowers 
                type = "youtube"
                totalFollow = '8239'
                typeFollow = "subscribers"
                statFollower = {144} 
                iconUpDown = 'down'
            />
        </div>
    )
}