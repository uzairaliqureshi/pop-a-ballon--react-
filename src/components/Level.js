import { memo } from "react";
import { useSelector } from "react-redux";
import Balloons from "./Balloons";
import { ReactComponent as Balloon } from "../images/balloon.svg";
import { randomColor } from "../utilities";

const Level = ({ l, e, o }) => {
    const emoji = ['', ' 1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'];
    const { ballonCount, fuelWidth, color: color1 } = useSelector(state => state.ballon);
    console.log(ballonCount);
    const color = color1;

    return (
        <div>
            <div className="taskDiv">
                <div className="div-heading">
                    <div className="fuel" style={{ backgroundColor: color, width: `${fuelWidth}rem` }}></div>
                    <div className="task" style={{ backgroundColor: randomColor() }}>
                        Pop <span className="count">{emoji[ballonCount]}</span> of these balloons 👉
                    </div>
                    <div className="task level" style={{ backgroundColor: randomColor() }}>
                        LEVEL {l - 1}
                    </div>
                </div>
                <div className="ballon__icon">
                    <Balloon className="ballon__icon " />
                    <div className="forPop" style={{ backgroundColor: color }}></div>
                </div>
            </div>
            <div className="ballon" id="balloonsDiv">
                <Balloons even={e} odd={o} color={color} l={l} />
            </div>
        </div>
    );
};

export default memo(Level);