import React from 'react';

function List(props)  {
        return( <ol>
            {props.tasks.map((task, index) => <li key = {index}> {task} </li>)}
               </ol> );
    
}

export default List