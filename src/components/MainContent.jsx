import styles from "./MainContent.module.css"
import {useEffect, useState} from "react";
//import {getData} from "../services/api";

function MainContent(){

    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    // const [error, setError] = useState(null);

    const getSpellName =  (id) => {
        if(!data || data.length === 0 || !data[id]){
            return  "Нет соединения с сервером";
        }
        return data[id].name;
    };  

    const getSpellDescription = (id) => {
        if(!data || data.length === 0 || !data[id]){
            return  "Нет соединения с сервером";
        }
        return data[id].descriptionSpell;
    };

    const getSpellDuration = (id) => {
        if(!data || data.length === 0 || !data[id]){
            return  "Нет соединения с сервером";
        }
        return data[id].duration;
    };

    const getSpellDistance = (id) => {
        if(!data || data.length === 0 || !data[id]){
            return  "Нет соединения с сервером";
        }
        return data[id].distance;
    };

    const getSpellTimeOfApplicationSpell = (id) => {
        if(!data || data.length === 0 || !data[id]){
            return  "Нет соединения с сервером";
        }
        return data[id].timeOfApplicationSpell;
    };

    const getSpellComponents = (id) => {
        if(!data || data.length === 0 || !data[id]){
            return  "Нет соединения с сервером";
        }
        return  `${data[id].componentS}, ${data[id].componentV}, ${data[id].componentM}`;
    };

    const getSpellLevel= (id) => {
        if(!data || data.length === 0 || !data[id]){
            return "Нет соединения с сервером";
        }
        return data[id].level;
    }

    useEffect(()=>{

        fetch("http://localhost:8080/spells/allSpells").then( function(response){
            return response.json();   
        }).then( function(data){
            console.log("Ответ: ", data);
            setData(data);
        }).catch( function(error){
            console.log("Привет Error "+error);
        });
         
    },[]);

    // },[id]);
    useEffect(()=> { 
        // const fetchData = async () => {
        //     try{
        //         const result = await getData();
        //         setData(result);
        //     }catch(err){
        //         setError(err.message);
        //     }
        // }
        // fetchData();
    },[]);


    
    return(
            <main>
                
                <section className={styles.listSpell}>
                    <ul>
                        <li><button id="witchBall" onClick={() =>{
                            setId(0);
                        }}>Ведьмин снаряд</button></li>
                        <li><button id="fireBall" onClick={() =>{
                            setId(1);
                        }}>Огненный шар</button></li>

                        <li><button id="acidSplashes" onClick={() =>{
                            setId(2);
                        }}>Брызги кислоты</button></li>
                        <li><button id="FlashOfSwords" onClick={ () =>{
                            setId(3);
                        }}>Вспышка мечей</button></li>

                        <li><button id="LightningLasso" onClick={ () =>{
                            setId(4);
                        }}>Лассо молнии</button></li>
                        
                        <li><button id="puffOfSmoke" onClick={ () =>{
                            setId(5);
                        }}>Клуб дыма</button></li>

                    </ul>

                </section>
                <section id="infoSpellId" className={styles.infoSpell}>
                        <div id="levelSpell" className={styles.levelSpell}>{getSpellLevel(id)}</div>
                        <h1 id="nameSpell">{getSpellName(id)}</h1>


                    <div className={styles.visualSpell}>
                        <div className={styles.hero}> Герой</div>
                        <div className={styles.enemy}> Враг</div>
                        <div className={styles.witchBolt}></div>
                    </div>

                    <div className={styles.propertiesSpell}>
                        <h3>Свойства Заклинания</h3>
                        <table>

                            <tr>
                                <td><b>Время накладывания </b> </td>
                                <td>{getSpellDuration(id)}</td>
                            </tr>
                            <tr>
                                <td><b>Дистанция </b> </td>
                                <td>{getSpellDistance(id)}</td>
                            </tr>
                            <tr>
                                <td><b>Длительность </b> </td>
                                <td>{getSpellTimeOfApplicationSpell(id)}</td>
                            </tr>
                            <tr>
                                <td><b>Компоненты </b> </td>
                                <td>{getSpellComponents(id)}</td>
                            </tr>
                        </table>
                    </div>

                    <div className={styles.descriptionSpell}>
                        <p><b>Описание</b></p>
                        <span id="descriptionSpell">{getSpellDescription(id)}
                        </span>
                    </div>
                    
                </section>
                


            </main>
    )
    
}

export default MainContent;