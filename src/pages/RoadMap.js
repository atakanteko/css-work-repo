import React, {useState, useEffect} from 'react';

import style from '../styles/roadmap.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faHourglass} from "@fortawesome/free-solid-svg-icons";

const dates = [
    {
        id: 0,
        year: '2020'
    },
    {
        id: 1,
        year: '2021'
    },
    {
        id: 2,
        year: '2022'
    },
    {
        id: 3,
        year: '2023'
    },
]

const states = [
    {
        id:0,
        status:0,
        year:2021,
        quarter:'Q1',
        description: ["Product Ideation: Transforming Web2 shopping experience to metaverse", "R&D for AR Technology", "PoC with Sample Content"]
    },
    {
        id:1,
        status:0,
        year:2021,
        quarter:'Q2',
        description: ["Poc for MVP", "R&D for location based AR Tech", "PoC for mining while traveling in time"]
    },
    {
        id:2,
        status:0,
        year:2021,
        quarter:'Q3',
        description: ["Product Specs", "Team Setup & Roadmap", "Pre-Alpha release for pilot Artifact"]
    },
    {
        id:3,
        status:0,
        year:2021,
        quarter:'Q4',
        description: ["Expand as Metaverse", "Avatar System Integration", "Alpha release for second Artifactsssss"]
    },
    {
        id:4,
        status: 0,
        year:2022,
        quarter: "Current State Q1",
        description: ["MTE Points Collection System", "Gamification Design"]
    },
    {
        id:5,
        status: 1,
        year:2022,
        quarter: "Q2",
        description: ["MTE Community Launch", "MTE Public Launch", "Event B2B BETA", "Swap System to Crypto Currencies", "Internal Litepaper"]
    },
    {
        id:6,
        status:1,
        year:2022,
        quarter: "Q3",
        description:["NFT Marketplace Launch","Closing Investment round","Event B2B Platform Launch","GoArt Token Public Launch"]
    },
    {
        id:7,
        status:1,
        year:2022,
        quarter: "Q4",
        description:["In-App Wallet System","Meta Shopping BETA","Land Public Sales for Brands","MTE campaigns with brands","Content Creation with brands and organisations"]
    },
    {
        id:8,
        status: 0,
        year: 2020,
        quarter: "Q4",
        description: ["GoArt Inc. founded in Austin,USA", "Brand registration", "IPRO patent office exposure", "AR/VR Solutions department started GoArt", "Team building up to 50 people", "Game experience"]
    },
]

const Roadmap = () => {
    const [whichDateToBeBlue, setWhichDateToBeBlue] = useState(1)
    const [year, setYear] = useState(2022)
    const [currentState, setCurrentState] = useState([])

    useEffect(()=> {
        getStateBasedOnDate(year)
    },[year])


    const handleYear = (id) => {
        const yearText = dates.find(m => m.id ===id);
        setYear(Number(yearText.year))
        setWhichDateToBeBlue(id)
    }

    const getStateBasedOnDate = (date) => {

        let tempArr = []
        states.forEach((item) => {
            if (item.year === date) {
                tempArr.push(item)
            }
        })
        setCurrentState(tempArr)
    }



    return (
        <div className={style.container}>
            <div className={style.roadmap}>
                <div className={style.dates}>
                    <ul>
                        {
                            dates.map((item, index) => {
                                return (
                                    <li key={item.id}>
                                        <span className={`${whichDateToBeBlue === index ? style.blueDate : ''}`} onClick={() => handleYear(item.id)}>{item.year}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={style.states}>
                    <ul>
                        {
                            currentState.map((item,index) => {
                                return (
                                    <li key={item.id} className={style.stateHolder}>
                                        <div className={`${item.quarter.includes('Current State') ? style.filledBlue : ''} ${style.item}`}>
                                            {
                                                item.description.map((el, idx) => {
                                                    return (
                                                        <div key={idx} className={style.iconAndText}>
                                                            <div className={`${style.icon} ${item.status===0 ? style.check : style.hourGlass}`}>
                                                                {
                                                                    item.status === 0 ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faHourglass} />
                                                                }
                                                            </div>
                                                            <span className={`${style.text} ${item.status===1 ? style.hasGrayText : ''}`}>{el}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={`${style.stateName} ${item.quarter.includes('Current State') ? style.currentState : ''}`}>
                                            <span>{item.quarter}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
