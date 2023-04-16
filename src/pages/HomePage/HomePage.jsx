// import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTechTest, getTheoryTest } from "../../redux/test/testOperation";
import { testingType } from "../../redux/test/testSlice";



const HomePage = () => {

    const dispatch = useDispatch();
   const getQuestions = async (e) => {
    const btnValue = e.target.innerText;
    dispatch(testingType(btnValue));
    try {
      if (btnValue === "QA technical training") {
        await dispatch(getTechTest());
      } else if (btnValue === "Testing theory") {
        await dispatch(getTheoryTest());
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                        onClick={getQuestions}
                        to="/test"
                    >
                        QA technical training
                    </Link>
                    <Link
                        onClick={getQuestions}
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