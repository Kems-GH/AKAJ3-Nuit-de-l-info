import Head from 'next/head'
import Image from 'next/image'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import {useEffect, useState} from "react";
import moment from "moment"
import {server} from "../config";
import Sauvetage from "../components/cardFromDataSearch/Sauvetage";
import Sauve from "../components/cardFromDataSearch/Sauve";
import Sauveteur from "../components/cardFromDataSearch/Sauveteur";
import Bateau from "../components/cardFromDataSearch/Bateau";

export default function Home({data}) {
    const [name, setName] = useState('')
    const [prenom, setPrenom] = useState('')
    const [date, setDate] = useState(moment().format("YYYY"))
    const [type, setType] = useState('')
    const [listDatas, setListDatas] = useState([])
    const handleClick = async () => {
        let query = "?"
        name ? query += `name=${name}&` : '';
        prenom ? query += `prenom=${prenom}&` : '';
        date ? query += `date=${moment(date).format("YYYY")}&` : '';
        type ? query += `type=${type}&` : '';
        let request = `${server}/api/search${query}`
        let result = await fetch(request)
        let {data} = await result.json()

        setListDatas(listDatas => ({
            ...listDatas,
            [type]: data
        }))
        // console.log(query)
        // console.log("handleClick")
    }
    const handleTypes = (elem) => {
        switch (type) {
            case "sauvetage":
                return <Sauvetage sauvetage={elem}/>
            case "sauveteur":
                return <Sauveteur sauveteur={elem}/>
            case "sauve":
                return <Sauve sauve={elem}/>
            case "bateau":
                return <Bateau bateau={elem}/>
        }
    }
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={"searchBlock"}>
                <div className={"inputDiv"}>
                    <label htmlFor="type">Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} name="type" id="type">
                        <option value=""/>
                        <option value="sauvetage">Sauvetage</option>
                        <option value="sauveteur">Sauveteur</option>
                        <option value="sauve">Sauvé</option>
                        <option value="bateau">Bateau</option>
                    </select>
                </div>
                <div className={"inputDiv"}>
                    <label htmlFor="prenom">Prénom</label>
                    <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" name={"prenom"}
                           id={"prenom"} placeholder={"Prénom"}/>
                </div>
                <div className={"inputDiv"}>
                    <label htmlFor="date">Date</label>
                    <Datetime value={date} onChange={setDate} name={"date"} id="date" dateFormat="YYYY"
                              timeFormat={false}/>
                </div>
                <div className={"inputDiv"}>
                    <label htmlFor="nom">Nom</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name={"nom"} id={"nom"}
                           placeholder={"Nom"}/>
                </div>
                <div className={"buttonDiv"}>
                    <button type={"button"} onClick={handleClick}>Rechercher</button>
                </div>
            </div>
            {Object.keys(listDatas).length > 0 && listDatas[type]?.length > 0 && <div className={"resultBlock"}>
                {listDatas[type] ? Object.keys(listDatas[type]).map((elem, key) => (
                    <div key={key} className={""}>
                        {handleTypes(listDatas[type][elem])}
                    </div>
                )) : null}

            </div>}


        </div>
    )
}
