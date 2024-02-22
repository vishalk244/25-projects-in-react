// single selection
// multiple selection

import { useState } from 'react';
import data from './data';
import './style.css';

export default function Accordion() {

    const[selected, setSelected] = useState(null);
    const[enableMultiSelection, setEnableMultiSelection] = useState(false);
    const[multiple, setMultiple] = useState([]);
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
           <div className="accordion">
             {
                data && data.length > 0 ? ( data.map((dataItem) => (
                <div className="item">
                    <div className="title" 
                    onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection
                        ? multiple.indexOf(dataItem.id) !== -1 && (
                            <div className="content ">{dataItem.answer}</div>
                          )
                        : selected === dataItem.id && (
                            <div className="content ">{dataItem.answer}</div>
                          )
                        // // selected === dataItem.id || multiple.indexOf(dataItem.id) > -1 ? (
                        //     selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                        // <div className="content">{dataItem.answer}</div>) : null
                    }
                </div>
                ) ) )  
                : (<div>No Data found</div>)
                }
           </div>
        </div>
    );
}