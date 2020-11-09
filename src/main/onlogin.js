import '../css/onlogin.css';
import DMCBack from './dmc.js';
import { useState } from "react";
import { findAllByDisplayValue } from '@testing-library/react';
import moment from 'moment';

function OnLogin(props) {
    let contents = null;
    const [box_visible, setbox_visible] = useState(false);
    return (
        <div className="Onlogin">
            <MainTop setbox_visible={setbox_visible} box_visible={box_visible} />
            <MainBottom box_visible={box_visible} />
        </div>
    )
}

const MainTop = (props) => {
    return (
        <div className="MainTop">
            <AddBtn />
            <DateView />
            <MemoDeleteBorder setbox_visible={props.setbox_visible} box_visible={props.box_visible} />
        </div>
    )
}

const AddBtn = () => {
    return (
        <button className="AddBtn">
            +
        </button>
    )
}
const DateView = () => {
    return (
        <div className="DateView">
            <DateViewclock />
        </div>
    )
}
const DateViewclock = () => {
    const nowTime = moment().format('YYYY-MM-DD');
    return (
        <div className="nowTime">
            <span>{nowTime}</span>
        </div>
    )
}
const MemoDeleteBorder = (props) => {
    //props.setbox_visible props.box_visible 
    return (
        <div className="MemoDeleteBorder">
            <MemoTrashCan setbox_visible={props.setbox_visible} box_visible={props.box_visible} />
            <MemoDelete setbox_visible={props.setbox_visible} box_visible={props.box_visible} />
            <NoMemoDelete setbox_visible={props.setbox_visible} box_visible={props.box_visible} />
        </div>
    )
}
const MemoTrashCan = (props) => {
    //props.setbox_visible props.box_visible}
    const TrashCanOnclick = () => {
        props.box_visible?props.setbox_visible(false):props.setbox_visible(true);
    }

    return (
        <>
        {props.box_visible ?
        null : 
        (<button className="MemoTrashCan" onClick={TrashCanOnclick}>
            TrashCan
        </button>)}
        </>

    )
}
const MemoDelete = (props) => {
    //props.setbox_visible props.box_visible}
    const MemoDeleteOnclick = () => {
        props.box_visible?props.setbox_visible(false):props.setbox_visible(true)
        // document.getElementsByClassName("클레스네임").map((each)=>{return()})
    }
    return (
        <>
        {props.box_visible ?
        (<button className="MemoDelete" onClick={MemoDeleteOnclick}>
            Delete
        </button>)
        : null
        }
        </>
    )
}
const NoMemoDelete = (props) => {
    //props.setbox_visible props.box_visible}
    const NoMemoDeleteOnclick = () => {
        props.box_visible?props.setbox_visible(false):props.setbox_visible(true);
    }
    return (
        <>
        {props.box_visible ?
        (<button className="NoMemoDelete" onClick={NoMemoDeleteOnclick}>
            Cancle
        </button>)
        : null
        }
        </>

    )
}
const MainBottom = (props) => {
    //props = box_visible 
    const [memos, setMemos] = useState(
        [
            {
                titleandbody: {
                    title: {
                        checked: false,
                        title: "제목1",
                    },
                    contents: [
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        }
                    ]
                },
                date: {
                    start: "20200114",
                    end: "20200334"
                },
                detail: {
                    alarm: {
                        //세팅부분을 배열말고 bit 처럼 표현해도 되지않을까?
                        //011010 이러면 트위터 페북 카톡 같은 방식으로
                        setting: [false, false, false, false, false, false, false, true],
                        time: ["20190205123522"]
                    },
                    sharing: [
                        {
                            email: "",
                            level: 0
                        }
                    ],
                    commented: ""
                }
            },
            {
                titleandbody: {
                    title: {
                        checked: false,
                        title: "제목2",
                    },
                    contents: [
                        {
                            level: 0,
                            name: "공부하기2"
                        },
                        {
                            level: 0,
                            name: "공부하기2"
                        },
                        {
                            level: 0,
                            name: "공부하기2"
                        }
                    ]
                },
                date: {
                    start: "",
                    end: ""
                },
                detail: {
                    alarm: {
                        //세팅부분을 배열말고 bit 처럼 표현해도 되지않을까?
                        //011010 이러면 트위터 페북 카톡 같은 방식으로
                        setting: [],
                        time: []
                    },
                    sharing: [
                    ],
                    commented: ""
                }
            },
            {
                titleandbody: {
                    title: {
                        checked: false,
                        title: "제목3",
                    },
                    contents: [
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                    ]
                },
                date: {
                    start: "19977777",
                    end: "22222222"
                },
                detail: {
                    alarm: {
                        //세팅부분을 배열말고 bit 처럼 표현해도 되지않을까?
                        //011010 이러면 트위터 페북 카톡 같은 방식으로
                        setting: [false, false, true, false, true, false, false, true],
                        time: ["20190205123522", "1331313131353515"]
                    },
                    sharing: [
                        {
                            email: "",
                            level: 0
                        }
                    ],
                    commented: ""
                }
            },
            {
                titleandbody: {
                    title: {
                        checked: false,
                        title: "제목1",
                    },
                    contents: [
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                    ]
                },
                date: {
                    start: "20200114",
                    end: "20200334"
                },
                detail: {
                    alarm: {
                        //세팅부분을 배열말고 bit 처럼 표현해도 되지않을까?
                        //011010 이러면 트위터 페북 카톡 같은 방식으로
                        setting: [true, true, false, true, false, false, false, true],
                        time: ["20190205123522"]
                    },
                    sharing: [
                        {
                            email: "",
                            level: 0
                        }
                    ],
                    commented: ""
                }
            },
            {
                titleandbody: {
                    title: {
                        checked: false,
                        title: "제목1",
                    },
                    contents: [
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                    ]
                },
                date: {
                    start: "20200114",
                    end: "20200334"
                },
                detail: {
                    alarm: {
                        //세팅부분을 배열말고 bit 처럼 표현해도 되지않을까?
                        //011010 이러면 트위터 페북 카톡 같은 방식으로
                        setting: [true, true, false, true, false, false, false, true],
                        time: ["20190205123522"]
                    },
                    sharing: [
                        {
                            email: "",
                            level: 0
                        }
                    ],
                    commented: ""
                }
            },
            {
                titleandbody: {
                    title: {
                        checked: false,
                        title: "제목1",
                    },
                    contents: [
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                        {
                            level: 0,
                            name: "공부하기1"
                        },
                    ]
                },
                date: {
                    start: "20200114",
                    end: "20200334"
                },
                detail: {
                    alarm: {
                        //세팅부분을 배열말고 bit 처럼 표현해도 되지않을까?
                        //011010 이러면 트위터 페북 카톡 같은 방식으로
                        setting: [true, true, false, true, false, false, false, true],
                        time: ["20190205123522"]
                    },
                    sharing: [
                        {
                            email: "",
                            level: 0
                        }
                    ],
                    commented: ""
                }
            },
        ]
    );
    const MemoDeleteButton = () => {
            return (
                <input type="checkbox" className="MemoDeleteButton"/>
            )
    }
    return (
        // file:///D:/Util/Git/folder/htmltest/index.html
        // https://hello-bryan.tistory.com/114
        // 이거 넣어도 이쁠듯: https://stackoverflow.com/questions/57555389/change-height-of-element-in-css-grid-without-pushing-sibling-elements
        
        <>
            <div className="MainBottom">
                {
                    memos.map((memo, num) => (
                        <div className="Memo">
                            {props.box_visible? <MemoDeleteButton/>:null}
                            <DataManagement key={num} memo={memo} />
                        </div>
                    )
                    )
                }
            </div>
            {/* <DMCBack /> */}
        </>
    )
}
const DataManagement = ({ memo }) => {
    const isdate = Boolean(memo.date.start) && Boolean(memo.date.end)
    const isdetail = Boolean(memo.detail.alarm.time.length > 0) || Boolean(memo.detail.sharing.length > 0)

    return (
        <div className="DataManagement">
            <DMTitleandBody titleandbody={memo.titleandbody} />
            {isdate ? <DMTime date={memo.date} /> : null}
            {isdetail ? <DMOption detail={memo.detail} /> : null}
        </div>
    )
}
const DMTitleandBody = ({ titleandbody }) => {
    return (
        <div className="DMTitleandBody" >
            <DMTitle title={titleandbody.title} />
            <DMBody contents={titleandbody.contents} />
        </div>
    )
}
const DMTitle = ({ title }) => {
    return (
        <div className="DMTitle" >
            <input type="checkbox" className="DMTitleCheckbox" />
            <a>{title.title}</a>
        </div>
    )
}
const DMBody = ({ contents }) => {
    return (
        <div className="DMBody" >
            {
                contents.map((name, num) => (
                    <DMname key={num} name={name} />
                )
                )
            }
        </div>
    )
}
const DMname = ({ name }) => {
    const [checkbox, setCheckbox] = useState(name.level)
    return (
        <div className="DMname" >
            <input type="checkbox" className="DMnameCheckbox" />
            <a>{name.name}</a>
        </div>
    )
}

const DMTime = ({ date }) => {
    return (
        <div className="DMTime">
            <a>{date.start}~{date.end}</a>
        </div>
    )
}
const DMOption = ({ detail }) => {
    // detail: {
    //     alarm: {
    //         //세팅부분을 배열말고 bit 처럼 표현해도 되지않을까?
    //         //011010 이러면 트위터 페북 카톡 같은 방식으로
    //          페북, 카톡, 트위터, 인스타
    //          1   0   0   0
    //          8
    // setting: {
    //     email: false,
    //     kakao: false,
    //     line: false,
    //     f_message: false,
    //     instar_dm: false,
    //     twitter_dm: false,
    //     sms: false,
    //     default: false,
    // },
    //         time: []
    //     },
    //     sharing:[
    //     ],
    //     commented: ""
    // }

    // {
    //     contents.map((name, num) => (
    //         <DMname key={num} name={name} />
    //     )
    //     )
    // }
    const getAlarmimg = (num) => {
        if (num === 0) {
            //email
            return (
                {/* 해당 아이콘 이미지 */ }
            )
        } else if (num === 1) {
            //kakao
            return (
                {/* 해당 아이콘 이미지 */ }
            )
        } else if (num === 2) {
            //line
            return (
                {/* 해당 아이콘 이미지 */ }
            )
        } else if (num === 3) {
            //f_message
            return (
                {/* 해당 아이콘 이미지 */ }
            )
        } else if (num === 4) {
            //instar_dm
            return (
                {/* 해당 아이콘 이미지 */ }
            )
        } else if (num === 5) {
            //twitter_dm
            return (
                {/* 해당 아이콘 이미지 */ }
            )
        } else if (num === 6) {
            //sms
            return (
                {/* 해당 아이콘 이미지 */ }
            )
        } else if (num === 7) {
            //default
            return (
                {/* 해당 아이콘 이미지 */ }
            )
        } else {
            //error
        }
    }
    const alarmOnclick = () => {

    }
    const alarms = Boolean(detail.alarm.time.length > 0) ?
        detail.alarm.setting.map((name, num) => (
            Boolean(name) ? <div key={num} className="alarmbutton" onClick={alarmOnclick}>img</div> : null
        ))
        : null
    return (
        <div className="DMOption">
            {alarms}
        </div>
    )
}
export default OnLogin;