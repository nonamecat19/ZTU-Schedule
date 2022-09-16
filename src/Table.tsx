import React from 'react';
import './Table.css'
import GetData from "./Data";
import Card from './Card'

const Table = (props: any) => {

    const requestURL = 'https://rozklad.ztu.edu.ua/schedule/group/%D0%92%D0%A2-21-1?new'

    return (
        <>
            <div className="Table">
                <div className="Days">
                    <div className="div">Понеділок</div>
                    <div className="div">Вівторок</div>
                    <div className="div">Середа</div>
                    <div className="div">Четвер</div>
                    <div className="div">Пятниця</div>
                </div>
                <div className="line">
                    <div className="time">8:30</div>
                </div>
                <div className="row">
                    <Card data={props.data[0]}/>
                    <Card data={props.data[1]}/>
                    <Card data={props.data[2]}/>
                    <Card data={props.data[3]}/>
                    <Card data={props.data[4]}/>
                </div>
                <div className="line">
                    <div className="time">10:00</div>
                </div>
                <div className="row">
                    <Card data={props.data[5]}/>
                    <Card data={props.data[6]}/>
                    <Card data={props.data[7]}/>
                    <Card data={props.data[8]}/>
                    <Card data={props.data[9]}/>
                </div>
                <div className="line">
                    <div className="time">11:40</div>
                </div>
                <div className="row">
                    <Card data={props.data[10]}/>
                    <Card data={props.data[11]}/>
                    <Card data={props.data[12]}/>
                    <Card data={props.data[13]}/>
                    <Card data={props.data[14]}/>
                </div>
                <div className="line">
                    <div className="time">13:30</div>
                </div>
                <div className="row">
                    <Card data={props.data[15]}/>
                    <Card data={props.data[16]}/>
                    <Card data={props.data[17]}/>
                    <Card data={props.data[18]}/>
                    <Card data={props.data[19]}/>
                </div>
                <div className="line">
                    <div className="time">15:00</div>
                </div>
                <div className="row">
                    <Card data={props.data[20]}/>
                    <Card data={props.data[21]}/>
                    <Card data={props.data[22]}/>
                    <Card data={props.data[23]}/>
                    <Card data={props.data[24]}/>
                </div>
                <div className="line">
                    <div className="time">16:30</div>
                </div>
                <div className="row">
                    <Card data={props.data[25]}/>
                    <Card data={props.data[26]}/>
                    <Card data={props.data[27]}/>
                    <Card data={props.data[28]}/>
                    <Card data={props.data[29]}/>
                </div>
                <div className="line">
                    <div className="time">18:00</div>
                </div>
                <div className="row">
                    <Card data={props.data[30]}/>
                    <Card data={props.data[31]}/>
                    <Card data={props.data[32]}/>
                    <Card data={props.data[33]}/>
                    <Card data={props.data[34]}/>
                </div>
            </div>

            <div className="Table">
                <div className="Days">
                    <div className="div">Понеділок</div>
                    <div className="div">Вівторок</div>
                    <div className="div">Середа</div>
                    <div className="div">Четвер</div>
                    <div className="div">Пятниця</div>
                </div>
                <div className="line">
                    <div className="time">8:30</div>
                </div>
                <div className="row">
                    <Card data={props.data[35]}/>
                    <Card data={props.data[36]}/>
                    <Card data={props.data[37]}/>
                    <Card data={props.data[38]}/>
                    <Card data={props.data[39]}/>
                </div>
                <div className="line">
                    <div className="time">10:00</div>
                </div>
                <div className="row">
                    <Card data={props.data[40]}/>
                    <Card data={props.data[41]}/>
                    <Card data={props.data[42]}/>
                    <Card data={props.data[43]}/>
                    <Card data={props.data[44]}/>
                </div>
                <div className="line">
                    <div className="time">11:40</div>
                </div>
                <div className="row">
                    <Card data={props.data[45]}/>
                    <Card data={props.data[46]}/>
                    <Card data={props.data[47]}/>
                    <Card data={props.data[48]}/>
                    <Card data={props.data[49]}/>
                </div>
                <div className="line">
                    <div className="time">13:30</div>
                </div>
                <div className="row">
                    <Card data={props.data[50]}/>
                    <Card data={props.data[51]}/>
                    <Card data={props.data[52]}/>
                    <Card data={props.data[53]}/>
                    <Card data={props.data[54]}/>
                </div>
                <div className="line">
                    <div className="time">15:00</div>
                </div>
                <div className="row">
                    <Card data={props.data[55]}/>
                    <Card data={props.data[56]}/>
                    <Card data={props.data[57]}/>
                    <Card data={props.data[58]}/>
                    <Card data={props.data[59]}/>
                </div>
                <div className="line">
                    <div className="time">16:30</div>
                </div>
                <div className="row">
                    <Card data={props.data[60]}/>
                    <Card data={props.data[61]}/>
                    <Card data={props.data[62]}/>
                    <Card data={props.data[63]}/>
                    <Card data={props.data[64]}/>
                </div>
                <div className="line">
                    <div className="time">18:00</div>
                </div>
                <div className="row">
                    <Card data={props.data[65]}/>
                    <Card data={props.data[66]}/>
                    <Card data={props.data[67]}/>
                    <Card data={props.data[68]}/>
                    <Card data={props.data[69]}/>
                </div>
            </div>
        </>
    );
}

export default Table;