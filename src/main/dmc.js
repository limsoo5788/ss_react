import {useState} from "react";
import "../css/dmc.css";
import {MenuItems} from "../header/headerbar";

function DMCBack(){
    return(
        <div className="DMCBack">
            <DMC />
        </div>
    )
}

function DMC(){
    const [memomenus, setMemoMenus] = useState(
        [
            {
                key: 0,
                img: "img_path",
                alt: "Date",
                type: 4,
            },
            {
                key: 1,
                img: "img_path",
                alt: "Alarm",
                type: 5,
            },
            {
                key: 2,
                img: "img_path",
                alt: "Sharing",
                type: 6,
            },
            {
                key: 3,
                img: "img_path",
                alt: "Color",
                type: 7,
            },
            {
                key: 4,
                img: "img_path",
                alt: "Delete",
                type: 0,
            },
        ]
    );

    const [nowText, setNowText] = useState("");
    const [saveText, setSaveText] = useState("");
    const [editText, setEditText] = useState([]);

    const eventChange = (e) => {
        // console.log(e.target.value);
        if(e.keyCode == 13){
            let editTexts = editText.slice();
            const schedules = {key : editText.length, schedule : e.target.value};
            editTexts = [...editTexts, schedules];
            setEditText(editTexts);
            e.target.value = "";
            console.log(editTexts);
        }
    }

    const eventPopSchedule = (e) => {
        console.log(e.target);
        let editTexts = editText.slice();
        console.log(editTexts);
        console.log(editTexts[e.target.dataset["itemKey"]]);
        // console.log(editTexts.slice(0, parseInt(e.target.dataset["itemKey"])));
        editTexts = editTexts.slice(0, parseInt(e.target.dataset["itemKey"])).concat(editTexts.slice(parseInt(e.target.dataset["itemKey"])+1));
        // editTexts.splice(editTexts.indexOf(parseInt(e.target.dataset["itemKey"])), 1);
        console.log(editTexts);
        setEditText(editTexts);
    }


    return(
        <div className="DMC">
            <div className="DMCInput">
                <div id="CBLabelBox">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    {/* <label htmlFor="checkbox" id="CBLabel"></label> */}
                    <input type="text" name="" id="" defaultValue={"title"} />
                </div>
                <div className="InfoContents">
                    <div className="InputInfo">
                        <label htmlFor="schedule" id="SCLabel">+</label>
                        <input type="text" id="schedule" className="schedules" onKeyDown={eventChange} />
                    </div>
                    <div className="EditInfo">
                        {
                            editText.map((item) => {
                                return(
                                    <div className="EditInfoList" key={item.key}>
                                        <input type="checkbox" name="" className="" />
                                        <input type="text" id="" className="schedules" defaultValue={item.schedule} />
                                        <span className="PopScheduleBtn" data-item-key={item.key} onClick={eventPopSchedule}>X</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="SCButtonBox">
                    <div className="FlexBox">
                        <div className="PopoverBtnBox">
                            <div className="FlexBox">
                                {
                                    memomenus.map((item) => (
                                        <MenuItems key={item.key} item={item} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="MiddleBox"></div>
                        <div className="SCBtnBox">
                            <button type="button" name="submit" className="CancleBtn">Cancle</button>
                            <button type="button" name="submit" className="SubmitBtn">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DMCBack;