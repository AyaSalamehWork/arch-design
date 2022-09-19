import "../src/css/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/Banner";
const App = () => {
    return (
        <div>
            <Banner dir="ltr" />
            <Banner dir="rtl" />
        </div>
    );
};

export default App;
