import React  from "react";

function Myfood({name, origin, nickname}) {
    return(
        <div>
            <h1>
                The name of my food is {name}.
                It is originated from {origin}.
                It is popularly known as {nickname}.
                </h1> 


        </div>
    );



} export default Myfood;