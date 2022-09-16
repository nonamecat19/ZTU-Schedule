import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {index} from "cheerio/lib/api/traversing";


const requestURL = 'https://rozklad.ztu.edu.ua/schedule/group/%D0%92%D0%A2-21-1?new'
const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL)
xhr.responseType =  "document"
xhr.onerror = () => console.log("ERROR")
let dataObj : any = []
xhr.onload = () => {





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();



    let data = xhr.response
    let tables = data.querySelectorAll('tbody')
    console.log(tables)

    let elements = [tables[0].querySelectorAll('td'), tables[1].querySelectorAll('td')]

    const GetElement = (i: any, full : number = 0 ) => {
        return {
            groups: i.querySelectorAll('div')[full].textContent,
            subject: i.querySelectorAll('.subject')[0].textContent,
            type: i.querySelectorAll('div')[2 + full].textContent.slice(0,3),
            room: i.querySelector('.room').textContent.slice(2).trim(),
            teacher: i.querySelectorAll('.teacher')[0].textContent,
            typeOfCard: 0
        }
    }

    const GetSubgroup = (el: any) => {
        let result = []
        let elems = el.querySelectorAll('.one')
        let type : number = 0
        let index : number = 0
        for (let i of elems){
            index++
            if (i.querySelectorAll('.teacher')[0]){
                result.push(GetElement(i))
                type += index
            } else {
                result.push({})
            }
        }
        return {data: result, typeOfCard: type}
    }

    for (let half of elements) {
        for (let i of half) {
            if (i.classList.contains("content")) {
                //Дві підгрупи
                if (i.querySelectorAll(".subgroups")[0]) {
                    dataObj.push(GetSubgroup(i.querySelectorAll(".subgroups")[0]))
                } else {
                    //Спільна пара
                    dataObj.push(GetElement(i, 1))
                }
                //Порожньо
            } else {
                dataObj.push({})
            }
        }
    }

    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );

    root.render(
        <React.StrictMode>
            <App data={dataObj}/>
        </React.StrictMode>
    );

    console.log(dataObj)


}
xhr.send()

