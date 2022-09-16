import React from 'react';
import './Card.css'
import {ReactComponent as RoomIcon} from './img/room.svg'
import {ReactComponent as TeacherIcon} from './img/teacher.svg'

const Type = (prop: any, double: boolean = false) => {
    if(double)
        return (<div className="type" style={{background: "#F6B382"}}>Лаб</div>)
    switch (prop.data.type) {
        case "Лек":
            return (<div className="type" style={{background: "#949DFF"}}>Лек</div>)
        case "Лаб":
            return (<div className="type" style={{background: "#F6B382"}}>Лаб</div>)
        case "Пра":
            return (<div className="type" style={{background: "#FF7F96"}}>Прак</div>)
        default:
            return (<div></div>)
    }
}

const Half = (props: any) => {
    if(props.props.data.typeOfCard != 2)
        return(
            <>
                <tr>
                    <td colSpan={2}><div className="subject first">{props.props.data.data[0].subject}</div></td>
                </tr>
                <tr>
                    <td><TeacherIcon className="dark_theme" width="20px" height="30px"/></td>
                    <td><span>{props.props.data.data[0].teacher}</span></td>
                </tr>
                <tr>
                    <td><RoomIcon className="dark_theme" width="20px" height="30px"/></td>
                    <td><span>{props.props.data.data[0].room}</span></td>
                </tr>
                <tr>
                    <td colSpan={2}>{Type(props.props)}</td>
                </tr>
            </>
        )
    else
        return (<></>)
}

const Half2 = (props: any) => {
    if(props.props.data.typeOfCard != 1)
        return(
            <>
                <tr>
                    <td colSpan={2}><div className="subject second">{props.props.data.data[1].subject}</div></td>
                </tr>
                <tr>
                    <td><TeacherIcon className="dark_theme" width="20px" height="30px"/></td>
                    <td><span>{props.props.data.data[1].teacher}</span></td>
                </tr>
                <tr>
                    <td><RoomIcon className="dark_theme" width="20px" height="30px"/></td>
                    <td><span>{props.props.data.data[1].room}</span></td>
                </tr>
                <tr>
                    <td colSpan={2}>{Type(props.props)}</td>
                </tr>
            </>
        )
    else
        return (<></>)
}


const Card = (props: any) => {
    if(props.data.typeOfCard > 0){
        return (
            <div className="Card DoubleCard">
                <table>
                    <tbody>
                        <tr><td colSpan={2}>{Type(props, true)}</td></tr>

                        <Half  props={props}/>
                        <Half2 props={props}/>

                    </tbody>
                </table>
            </div>
        )
    }


    if (props.data.groups){
        return (
            <div className="Card">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2}>{Type(props)}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}><div className="subject">{props.data.subject}</div></td>
                        </tr>
                        <tr>
                            <td><TeacherIcon className="dark_theme" width="20px" height="30px"/></td>
                            <td><span>{props.data.teacher}</span></td>
                        </tr>
                        <tr>
                            <td><RoomIcon className="dark_theme" width="20px" height="30px"/></td>
                            <td><span>{props.data.room}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }

    return (
        <div></div>
    )


}

export default Card;