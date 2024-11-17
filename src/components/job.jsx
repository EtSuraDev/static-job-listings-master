import Level from "./items/jobLevel"
import Role from "./items/dataRole"
import Language from "./items/jobLanguages"
import Tool from "./items/tool"


export default function Job(props){
    return(
        <main className={`jobs w-[90%] p-[30px] rounded-lg bg-white relative ${ props.item.featured && "border-l-[5px]"} border-[hsl(180,29%,50%)] max-w-[500px] lg:max-w-[1100px] lg:flex lg:items-center justify-between`}>
            <div className="lg:flex lg:items-center lg:space-x-[20px]">
                <div className="w-[50px] h-[50px] rounded-full absolute top-[-26px] lg:static lg:w-[90px] lg:h-[90px]">
                    <img src={ props.item.logo } alt="" />
                </div>
                <div>
                    <div className="flex space-x-[10px] mb-[10px]">
                        <h1 className=" text-[hsl(180,29%,50%)] font-bold text-[1.4rem] mr-[8px] lg:text-[1.6rem]">
                            { props.item.company }
                        </h1>
                        {
                            props.item.new &&
                            <p className="font-bold text-white bg-[hsl(180,29%,50%)] py-[3px] px-[8px] rounded-full text-[1.1rem]">
                                NEW!
                            </p>
                        }
                        {
                            props.item.featured && 
                            <button className="text-white bg-black font-bold py-[3px] px-[8px] rounded-full text-[1.1rem]">
                                FEATURED
                            </button>
                        }
                    </div>
                    <div className="text-[1.4rem]  font-bold mb-[10px]  lg:text-[1.8rem]">
                        <p> { props.item.position } </p>
                    </div>
                    <ul className="flex border-b-[1px] border-[#c5c4c4] flex-nowrap space-x-[27px]  text-[1.5rem] text-[hsl(180,8%,52%)] pb-[15px] list-inside list-disc text-lef lg:border-b-0 lg:text-[1.6rem] lg:font-bold ">
                            <li> { props.item.postedAt } </li>
                            <li> { props.item.contract } </li>
                            <li> { props.item.location } </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-wrap text-[1.6rem]">
                <Role role={ props.item.role } />
                <Level level={ props.item.level } />
                <Language language={ props.item.languages } />
                <Tool tool={ props.item.tools } />
            </div>
        </main>
    )
}