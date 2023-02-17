
type ArticlesProps = {
    id:number
    title: string
    desc: string
    local: string
    man: string
    image: string
    isLike?: boolean
}

const articlesArray: ArticlesProps[] = [
    {
        id:1,
        title: "The Ultimate Hurghada Travel Guide",
        desc: "Stay focused and remember we design the best WordPress News and Magazine Themes. It’s the key to more success, why…",
        local: "Africa",
        man: " Alex Birzul   Jan 23, 2022 ",
        image: "/images/afr1.jpg",
        isLike: true
    },
    {
         id:2,
        title: "How to Find the Cheapest Flight to Indonesia",
        desc: "Stay focused and remember we design the best WordPress News and Magazine Themes. It’s the key to more success, why…",
        local: "Asia",
        man: "Tanni Drobot   Feb 14, 2022 ",
        image: "/images/asi1.jpg",
         isLike: true
    }, {
        id:3,
        title: "Why You Shouldn’t Ride Elephants In Thailand",
        desc: "Stay focused and remember we design the best WordPress News and Magazine Themes. It’s the key to more success, why…",
        local: "Asia",
        man: "Tanni Drobot   Feb 14, 2022",
        image: "/images/asi2.jpg"
    }, {
        id:4,
        title: "10 Super Fun Things To Do In Egypt",
        desc: "Stay focused and remember we design the best WordPress News and Magazine Themes. It’s the key to more success, why…",
         local: "Africa",
        man: " Alex Birzul   Jan 23, 2022 ",
        image: "/images/afr2.jpg"
    }, {
        id:5,
        title: "10 Reasons to Visit Lyon, France",
        desc: "Stay focused and remember we design the best WordPress News and Magazine Themes. It’s the key to more success, why…",
        local: "Europe",
        man: "Olha Birzul   Nov 25, 2022",
        image: "/images/eur1.jpg"
    }, {
        id:6,
        title: "Searching For Dolphins & Whales Off Spain",
        desc: "Stay focused and remember we design the best WordPress News and Magazine Themes. It’s the key to more success, why…",
        local: "Europe",
        man: "Olha Birzul   Nov 25, 2022",
        image: "/images/eur4.jpg"
    }
]



export default articlesArray