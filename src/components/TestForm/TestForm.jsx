import { useDispatch } from "react-redux";

const TestForm = () => {
  const dispatch = useDispatch();

  return (
    <form>
      <h1>[ Testing theory_ ]</h1>
      <div>
        <p>Question 3 / 12 </p>
        <h2>What is regression testing?</h2>
        <hr />
        <label>
          <input type="radio" name="answer" />
          <span>Info</span>
        </label>
      </div>
      <button>Previous question</button>
      <button>Finish test</button>
      <button>Next question</button>
    </form>
  );
};

export default TestForm;
