import CardOverview from "../../molecules/cardOverview";


export default function Overview() {
    return(
        <div className="mt-8 mb-4">
            <h2 className="text-darkGrayishBlue dark:text-white font-bold text-2xl transition duration-400">Overview - Today</h2>
            <div className="flex flex-wrap justify-center mt-3">
                <CardOverview sosmed="facebook" statsToday="87" iconUpDown="up" type="Page Views" statsGraph={3}/>
                <CardOverview sosmed="facebook" statsToday="52" iconUpDown="down" type="Likes" statsGraph={2}/>
                <CardOverview sosmed="instagram" statsToday="5462" iconUpDown="up" type="Likes" statsGraph={2257}/>
                <CardOverview sosmed="instagram" statsToday="52K" iconUpDown="up" type="Profile Views" statsGraph={1375}/>
                <CardOverview sosmed="twitter" statsToday="117" iconUpDown="up" type="Retweets" statsGraph={303}/>
                <CardOverview sosmed="twitter" statsToday="507" iconUpDown="up" type="Likes" statsGraph={553}/>
                <CardOverview sosmed="youtube" statsToday="107" iconUpDown="down" type="Likes" statsGraph={19}/>
                <CardOverview sosmed="youtube" statsToday="1407" iconUpDown="down" type="Total Views" statsGraph={12}/>
            </div>
        </div>
    )
}