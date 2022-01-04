import UseRefExample1 from "../components/UseRefExample1";
import UseRefExample2 from "../components/UseRefExample2";
import UseRefExample3 from "../components/UseRefExample3";
import UseMemoExample from "../components/UseMemoExample";


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
        </div>
    )
}

export default Home