

function RenderDate(props){
    const moths = props.date.toLocaleString('en-US',{month: 'long'})
    const day = props.date.toLocaleString('en-US',{day: '2-digit'})
    const year = props.date.getFullYear()

        return(
            <div className="render-date" >
                <div>{moths}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
        )
}

export default RenderDate