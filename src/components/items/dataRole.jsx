


export default function Role(props){
    return(

        <button className="p-[5px]  text-[hsl(180,29%,50%)] bg-[hsl(180,52%,96%)] hover:bg-[hsl(180,29%,50%)] hover:text-[hsl(180,52%,96%)] font-semibold rounded-[5px] mr-[17px] mt-[10px]">
            {
                props.role
            }
        </button>
    )
}