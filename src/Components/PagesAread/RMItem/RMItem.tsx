import "./RMItem.css";


import { CharactModel, Result } from "../../../Models/RickAndMorty";

interface RMItemProps{
    res: Result;
}

function RMItem(props:RMItemProps): JSX.Element {
    
    return (
        <div className="RMItem card">
			<span>#{props.res.id}</span>
            <span>{props.res.name}</span>
            <span>{props.res.status}</span>
            <span>{props.res.species}</span>

            <img src={props.res.image} alt="res" />
            
        </div>
    );
}

export default RMItem;
