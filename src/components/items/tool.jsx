


export default function Tool(props){
    return(
        props.tool.map((item, index) => <button key={index} className="p-[5px] text-[hsl(180,29%,50%)] bg-[hsl(180,52%,96%)] font-semibold rounded-[5px] mr-[17px] mt-[10px] hover:bg-[hsl(180,29%,50%)] hover:text-[hsl(180,52%,96%)]">
                                            {item}
                                        </button> )
        
    )
}