// const Data = () => {
//     const requestURL = 'https://rozklad.ztu.edu.ua/schedule/group/%D0%92%D0%A2-21-1?new'
//     const xhr = new XMLHttpRequest()
//
//     xhr.open('GET', requestURL)
//     xhr.responseType =  "document"
//     xhr.onerror = () => console.log("ERROR")
//     let dataObj : any = []
//     xhr.onload = () => {
//         let data = xhr.response
//         let tables = data.querySelectorAll('tbody')
//         let elements = tables[0].querySelectorAll('td')
//
//         const GetElement = (i: any, fullgroup : number = 0 ) => {
//             return {
//                 groups: i.querySelectorAll('div')[fullgroup].textContent,
//                 subject: i.querySelectorAll('.subject')[0].textContent,
//                 type: i.querySelectorAll('div')[2 + fullgroup].textContent.slice(0,3),
//                 room: i.querySelector('.room').textContent.slice(2).trim(),
//                 teacher: i.querySelectorAll('.teacher')[0].textContent
//             }
//         }
//
//         const GetSubgroup = (el: any) => {
//             let result = []
//             let elems = el.querySelectorAll('.one')
//             for (let i of elems){
//                 if (i.querySelectorAll('.teacher')[0]){
//                     result.push(GetElement(i))
//                 } else {
//                     result.push({})
//                 }
//             }
//             return result
//         }
//
//         for (let i of elements){
//             if (i.classList.contains("content")) {
//                 //Дві підгрупи
//                 if (i.querySelectorAll(".subgroups")[0]){
//                     dataObj.push(GetSubgroup(i.querySelectorAll(".subgroups")[0]))
//                 } else {
//                     //Спільна пара
//                     dataObj.push(GetElement(i, 1))
//                 }
//                 //Порожньо
//             }else{
//                 dataObj.push({})
//             }
//         }
//     }
//     xhr.send()
//     //console.log(dataObj)
//     console.log(dataObj.length)
//     return dataObj
// }
//
// export default Data

const Data = () => {
    const requestURL = 'https://rozklad.ztu.edu.ua/schedule/group/%D0%92%D0%A2-21-1?new'
    const xhr = new XMLHttpRequest()

    xhr.open('GET', requestURL)
    xhr.responseType =  "document"
    xhr.onerror = () => console.log("ERROR")
    let dataObj : any = []
    xhr.onload = () => {
        let data = xhr.response
        let tables = data.querySelectorAll('tbody')
        let elements = tables[0].querySelectorAll('td')

        const GetElement = (i: any, fullgroup : number = 0 ) => {
            return {
                groups: i.querySelectorAll('div')[fullgroup].textContent,
                subject: i.querySelectorAll('.subject')[0].textContent,
                type: i.querySelectorAll('div')[2 + fullgroup].textContent.slice(0,3),
                room: i.querySelector('.room').textContent.slice(2).trim(),
                teacher: i.querySelectorAll('.teacher')[0].textContent,
                typeOfCard: fullgroup
            }
        }

        const GetSubgroup = (el: any) => {
            let result = []
            let elems = el.querySelectorAll('.one')
            let type : number = 0
            for (let i = 0; i < 2; i++){
                if (elems[i].querySelectorAll('.teacher')[0]){
                    result.push(GetElement(i))
                    type += i + 1
                } else {
                    result.push({})
                }
            }
            return
                {
                    data: {result}
                    typeOfCard: {type}
                }
        }

        for (let i of elements){
            if (i.classList.contains("content")) {
                //Дві підгрупи
                if (i.querySelectorAll(".subgroups")[0]){
                    dataObj.push(GetSubgroup(i.querySelectorAll(".subgroups")[0]))
                } else {
                    //Спільна пара
                    dataObj.push(GetElement(i, 1))
                }
                //Порожньо
            }else{
                dataObj.push({typeOfCard:"empty"})
            }
        }
    }
    xhr.send()
    console.log(dataObj)
    return dataObj
}

export default Data




