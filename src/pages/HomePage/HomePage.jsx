// import { useCallback } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const HomePage = () => {

    // const dispatch = useDispatch();
    // const getType = useCallback( 
    //     (type) => {
    //         dispatch((type))
    //     },[dispatch]
    // )
    return (
        <section>
            <div>
                <h2>
                    “Regression testing. What is it? <br />
                    If the system compiles, that's good, if it boots, that's great!”
                </h2>
                <p>
                    Linus Torvalds
                </p>
                <p>
                    Linux kernel creator, hacker, 1969
                </p>
                <div>
                    <Link
                        // onClick={() => getType({})}
                        to="/test"
                    >
                        QA technical training
                    </Link>
                    <Link
                        // onClick={() =>getType ({})}
                    to="/test"
                    >
                    Testing theory
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default HomePage;