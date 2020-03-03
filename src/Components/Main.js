import React, {Component} from 'react'
import List from './List'
import Title from './Title'

class Main extends Component{
    render() {
        return <div>
                   <Title title= {'Tomboy'}/>
                   <List tasks ={['Mow the town', 'walk the dog']}/>
                   <List tasks ={['Srk is don', 'i love dogs']}/>
               </div>
    }
}

export default Main