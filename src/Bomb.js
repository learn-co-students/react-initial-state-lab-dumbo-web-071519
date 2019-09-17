// your Bomb code here!
import React from 'react';
export default class Bomb extends React.Component{

    state={
        secondsLeft: this.props.initialCount
    }

    textRender =() =>{
       
          if (this.state.secondsLeft == 0){
                return <div>{'Boom!'}</div>
            }
            else{
               return(
                    <div>{
                    this.state.secondsLeft} seconds left before I go boom!
                    </div>) 
            }
    }
render(){
    return (
        this.textRender() 
    )
    }



}