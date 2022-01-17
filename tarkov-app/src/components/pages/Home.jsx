import { useEffect, useState } from 'react';
import { fetch2api } from '../../helpers/helper';
import { Header } from '../partials/Header';
import { Footer } from '../partials/Footer';

export const Home = () => {
    const[tarkovMarket, setTarkovMarket] = useState([]);

    const getTarkovMarket = async () => {
        const url = "https://tarkov-market.com/api/v1/items/all?x-api-key=0foNOtckaDvVk4Ab";
        const result = await fetch2api(url);
        setTarkovMarket(result);
    }

    useEffect(() => {
        getTarkovMarket();
    }, [])

    console.log(tarkovMarket);

    return(
        <>
            <Header title="Tarkov" subtitle="test" />
            <main>
                <ul id="card">
                    {tarkovMarket && tarkovMarket.map((item, i) => {
                        const dollar = "127";
                        let resetPrice = 0;
                        if(item.traderPriceCur == "$"){
                            resetPrice = item.traderPrice*dollar;
                        }else{
                            resetPrice = item.traderPrice;
                        }
                        if(item.price > 0){
                            if(item.traderPrice > item.price){
                                let profit = item.traderPrice - item.price;
                                return(
                                    <li key={item.uid}>
                                        <img src={item.icon} alt={item.name}/>
                                        <div>
                                            <h3>{item.shortName}</h3>
                                            <p>buy price: {item.price}₽</p>
                                            <p>sell price: {resetPrice}₽</p>
                                            <p>profit {profit}₽</p>
                                            <p><a href={item.link} target="_blank">tarkov-market</a></p>
                                        </div>
                                    </li>
                                )
                            }
                        }    
                    })}
                </ul>
            </main>
            <Footer/>
        </>
    )
}