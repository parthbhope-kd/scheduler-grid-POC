import React from 'react'

const Expander = (props:any) => {
    const [collapse, setCollapse] = React.useState<boolean>(true);
    return(
        <span>
            <button>{collapse?"+":"-"}</button>
            {/* <button>"THis is </button> */}
            {   props.value}
        </span>
    )
  
}

export default Expander