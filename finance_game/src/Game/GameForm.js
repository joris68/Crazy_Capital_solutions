import { useState } from 'react';


function GameTimer({ time }) {
    const styles = {
      color: time <= 5 ? 'red' : 'inherit',
    };
  
    return (
      <div style={styles}>
        {time}
      </div>
    );
  }

// dieser Timer soll einfach von 3 runter zählen bis das spiel beginnt
function StartTimer(){

}

export function GameForm (){
    const [seconds, setSeconds] = useState(60);
    const timeNow = Date.now();

    let gameJson = fetch("http//:localhost:9000/game").then((response) => {
        if(response.ok) {
            return JSON.parse(response.body)
        }else{
            return undefined;
        }
    }).catch(err => {
        console.log(err);
    })

    const timeIsOver = () => {
        return seconds === 0;
    }


    return(

        <div>
            <p>`It's the ${convertDateToString(gameJson.StartDate)} in ${gameJson.location}.`</p>
        </div>
    );

}

function convertDateToString(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${day} of ${month}, ${year}`; 
}   