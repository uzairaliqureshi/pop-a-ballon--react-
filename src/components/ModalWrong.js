import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/countSlice";
import { randomColor } from "../utilities";

const ModalWrong = () => {
    const { fuelWidth } = useSelector(state => state.ballon);
    const dispatch = useDispatch();

    if (fuelWidth) return null;
    return (
        createPortal(
            <div className="wrongHover">
                <div className="message">
                    <div className="text" style={{ backgroundColor: randomColor() }}>
                        you hover on wrong balloons😏 please<br />try again
                    </div>
                    <div className="btn-div">
                        <button onClick={() => dispatch(reset())}
                            className="btn btn--randomColor"
                            style={{ backgroundColor: randomColor() }}
                        >try Again</button>
                    </div>
                </div>
            </div>, document.querySelector("#modal"))
    );
};

export default ModalWrong;

