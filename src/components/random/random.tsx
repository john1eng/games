import React from 'react';
import { isPropertySignature } from 'typescript';

export const Random: React.FunctionComponent<any> = (props) => {

    const random = Math.floor(Math.random()*2);

    // if(random===0){
    // return (props.render())
    // }else
    //     return (props.render2())
    
    return (
        <div>
            {(random===0) ? props.render() : props.render2()}
        </div>
 
    )
}


