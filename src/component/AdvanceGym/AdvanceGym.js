import React from 'react';
import advanceLeftImage from '../../images/advance-gym.jpg';
import { AiFillCheckSquare } from 'react-icons/ai';
import DayDetail from './DayDetail/DayDetail';

const classDayData = [
    {
        id: 1,
        classDay: 'Monday',
        classHour: '8: 00 Am - 9.00 Am'
    },
    {
        id: 2,
        classDay: 'Tuesday',
        classHour: '10: 00 Am - 11.00 Am'
    },
    {
        id: 3,
        classDay: 'Wednesday',
        classHour: '7: 00 Am - 8.00 Am'
    },
    {
        id: 4,
        classDay: 'Thursday',
        classHour: '5: 00 Am - 6.00 Am'
    },
    {
        id: 5,
        classDay: 'Friday',
        classHour: '6: 00 Am - 7.00 Am'
    },
    {
        id: 6,
        classDay: 'Saturday',
        classHour: '7: 00 Am - 8.00 Am'
    }
]

const AdvanceGym = () => {
    return (
        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col-md-7">
                    <div className="left-image">
                        <img className="img-fluid" src={advanceLeftImage} alt="" />
                    </div>
                    <div className="left-text pt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam neque similique rem accusantium necessitatibus aspernatur labore. Reprehenderit, ullam consequuntur. Minus praesentium sapiente, ullam quis velit minima placeat iusto sequi cum ratione deserunt! Corrupti asperiores veritatis expedita reiciendis iusto facere tempore voluptates, odit nemo totam ipsam quisquam veniam consequatur, eligendi animi vitae perspiciatis voluptas officiis. Dolore nostrum adipisci accusantium explicabo, ducimus dolores placeat rerum doloremque numquam atque quia animi impedit eius enim quis dolorem sit cum nobis ea aliquam similique nihil!
                </div>
                    <div className="check-section pt-3">

                        <h6><span><AiFillCheckSquare /></span>Having Slimmer Shapely things</h6>
                        <h6><span><AiFillCheckSquare /></span>Getting Stronger Body</h6>
                        <h6><span><AiFillCheckSquare /></span>Increased Metabolism</h6>
                        <h6><span><AiFillCheckSquare /></span>Increased Muscular Endurance</h6>
                        <h6><span><AiFillCheckSquare /></span>Maximum Results in Less Time</h6>
                        <h6><span className="pr-2"><AiFillCheckSquare /></span>Firms Hips and Tummy</h6>

                    </div>
                </div>
                <div className="col-md-5">
                    <h3 className="p-2"> <span>CLASS</span> SCHEDULE </h3>
                    <div className="row">
                        {
                            classDayData.map(data => <DayDetail data={data}></DayDetail>)
                        }
                    </div>
                </div>
                <div className="ml-auto">
                    <button className="join_btn"> JOIN US </button>
                </div>
            </div>
        </div>
    );
};

export default AdvanceGym;