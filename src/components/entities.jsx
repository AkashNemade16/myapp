import React from 'react';


const Entities = props => {
    const data = props.receiveData;
    console.log(data);
    return (
        <div>
            {data.data?
                <div>
                    <h1>Entities</h1>
                    <h3>Lemmas</h3>
                    {data.data.entities.map((item,id)=>
                        (<div key={id}>{item.lemma}</div>))}
                </div>

            :null}
        </div>
    );
};


export default Entities;