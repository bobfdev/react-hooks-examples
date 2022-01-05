import UseRefExample1 from "../components/UseRefExample1";
import UseRefExample2 from "../components/UseRefExample2";
import UseRefExample3 from "../components/UseRefExample3";
import UseMemoExample from "../components/UseMemoExample";
import UseCallbackExample from "../components/UseCallbackExample";
import CustomHookExample1 from "../components/CustomHookExample1";
import CustomHookExample2 from "../components/CustomHookExample2";

function Home() {
    return (
        <div>
            <UseRefExample1 />
            <br />
            <UseRefExample2 />
            <br />
            <UseRefExample3 />
            <br />
            <UseMemoExample />
            <br />
            <UseCallbackExample />
            <br />
            <CustomHookExample1 />
            <br />
            <CustomHookExample2 />
        </div>
    )
}

export default Home