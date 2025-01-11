import React, {useEffect, useState} from "react";


export default function TableComponent() {
    const [currencyCAD, setCurrencyCAD] = useState ()
    const [currencyEUR, setCurrencyEUR] = useState ()
    const [currencyIDR, setCurrencyIDR] = useState ()
    const [currencyJPY, setCurrencyJPY] = useState ()
    const [isloading, setisloading] = useState (true)

  useEffect(()=> {
getdataAPI()
},[])

async function getdataAPI () {
    try {
        let result = await fetch ('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0f2e1472a5cc457390765666390e3167')
        let dataresult = await result.json()
        console.log(dataresult.rates.CAD);
        setCurrencyCAD(dataresult.rates.CAD)
        console.log(dataresult.rates.EUR);
        setCurrencyEUR(dataresult.rates.EUR) 
        console.log(dataresult.rates.IDR);
        setCurrencyIDR(dataresult.rates.IDR) 
        console.log(dataresult.rates.JPY);
        setCurrencyJPY(dataresult.rates.JPY)
        setisloading(false)

    } catch (error) {
        console.log(error);
        
    }
}
function handleBuy(currencynow) {
    let buyvalue = Number(currencynow) * 0.05
    let Buy = buyvalue + Number(currencynow)
    return Buy
}

function handleSell(currencynow) {
    let Sellvalue = Number(currencynow) * 0.05
    let Sell = Number(currencynow) - Sellvalue
    return Sell
}

    return(
        <>
         {
            isloading ? (
                <h1>loading ...</h1>
            ) : (
                <table class="table">
            <thead>
                <tr>
                <th scope="col">Currency</th>
                <th scope="col">We Buy</th>
                <th scope="col">Exchange Rate</th>
                <th scope="col">We Sell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">CAD</th>
                <td>{handleBuy(currencyCAD)}</td>
                <td>{currencyCAD}</td>
                <td>{handleSell(currencyCAD)}</td>
                </tr>
                <tr>
                <th scope="row">EUR</th>
                <td>{handleBuy(currencyEUR)}</td>
                <td>{currencyEUR}</td>
                <td>{handleSell(currencyEUR)}</td>
                </tr>
                <tr>
                <th scope="row">IDR</th>
                <td>{handleBuy(currencyIDR)}</td>
                <td>{currencyIDR}</td>
                <td>{handleSell(currencyIDR)}</td>
                </tr>
                <tr>
                <th scope="row">JPY</th>
                <td>{handleBuy(currencyJPY)}</td>
                <td>{currencyJPY}</td>
                <td>{handleSell(currencyJPY)}</td>
                </tr>
            </tbody>
        </table>

            )
        }
        </>
       
        
    )

}