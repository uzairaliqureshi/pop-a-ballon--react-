import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reset } from "../redux/countSlice";
import { randomColor } from "../utilities";

const ModalWright = ({ l }) => {
    const { ballonCount } = useSelector(state => state.ballon);
    const dispatch = useDispatch();
    if (ballonCount) return null;

    return (
        createPortal(
            <div className="wrongHover">
                <div className="message">
                    <div className="text" style={{ backgroundColor: randomColor() }}>
                        congratulations🎉🎉🎉 you pass<br />this level🥳
                    </div>
                    <div className="btn-div">
                        <Link to={l} onClick={() => dispatch(reset())} className="btn btn--randomColor"
                            style={{ backgroundColor: randomColor() }}>level {l}</Link>
                    </div>
                </div>
            </div>, document.querySelector("#modal"))
    );
};

export default ModalWright;
