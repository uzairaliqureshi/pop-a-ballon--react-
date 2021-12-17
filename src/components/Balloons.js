import { memo } from "react";
import { useDispatch } from "react-redux";
import { decBalCount, decFuelWidth } from "../redux/countSlice";
import { randomColor, randomInt } from "../utilities";
import { ReactComponent as Balloon } from "../images/balloon.svg";
import ModalWrong from "./ModalWrong";
import ModalWright from "./ModalWright";

const Balloons = ({ even, odd, color, l }) => {
    const dispatch = useDispatch();
    const randomNum = [randomInt(3, 24), randomInt(3, 24), randomInt(3, 24), randomInt(3, 24), randomInt(3, 24), randomInt(3, 24)];

    const mouseEnterHandler = ({ target }) => {
        if (target.style.backgroundColor !== color) return dispatch(decFuelWidth());
        dispatch(decBalCount());
        randomNum.pop(-1);
        target.innerHTML = '<div class="afterPop">pop!</div>';
        setTimeout(() => {
            target.style.backgroundColor = randomColor();
            target.innerHTML = '';
        }, 1000);
    };

    return (
        <>
            <ModalWright l={l} />
            <ModalWrong />
            {[...Array(27)].map((_, i) =>
                <div key={i} className={`ballon__icon anim${i % 2 === 0 ? even : odd}`}>
                    <Balloon className="ballon__icon " />
                    <div onMouseEnter={mouseEnterHandler} className="forPop" style={{
                        backgroundColor: randomNum.filter(a => a === i)[0] && color || randomColor(),
                    }}></div>
                </div>
            )}
        </>
    );
};

export default memo(Balloons);

