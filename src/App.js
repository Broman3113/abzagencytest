import './App.scss';
import Heading from "./Components/HeadingComponent/Heading";
import Text from "./Components/TextComponent/Text";
import BG from "./Components/BGComponent/BG";
import Button from "./Components/ButtonComponent/Button";
import Textarea from "./Components/TextareaComponent/Textarea";
import Input from "./Components/InputComponent/Input";
import Card from "./Components/CardComponent/Card";
import Header from "./Components/HeaderComponent/Header";
import Preloader from "./Components/PreloaderComponent/Preloader";
import Tooltip from "./Components/TooltipComponent/Tooltip";
import Form from "./Components/FormComponent/Form";
import {createContext, useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
import {checkCheckpoint} from "./checkpoints";
import Hero from "./Sectionts/HeroSection/Hero";
import GetRequest from "./Sectionts/GetRequestSection/GetRequest";
import PostRequest from "./Sectionts/PostRequestComponent/PostRequest";

export const LayoutContext = createContext('desktop');

function App() {
    const [layoutType, setLayoutType] = useState('mobile');
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions() // Initial Dimension
    );

    function getWindowDimensions() {
        const {innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height
        };
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const wd = windowDimensions.width;
    const hd = windowDimensions.height;
    console.log(checkCheckpoint(wd));

    return (
        <LayoutContext.Provider value={checkCheckpoint(wd)}>
            <div className="App">
                <Header/>
                <Hero className="container"/>
                <GetRequest className="container"/>
                <PostRequest/>
                {/*<Heading h1 normal className="customClass">H1</Heading>*/}
                {/*<Text p1>p1</Text>*/}
                {/*<BG blue>*/}
                {/*    h1*/}
                {/*</BG>*/}
                {/*<Button type="yellow">Lul</Button>*/}
                {/*<Textarea/>*/}
                {/*<Input/>*/}
                {/*<Card title="1" description="2"/>*/}
                {/*<Preloader/>*/}
                {/*<Tooltip tooltipValue='Hiiiiiiiiiiiiiiiiii'>Hi</Tooltip>*/}
                {/*<input className="inputRadio" name='dod' type="radio"/>*/}
                {/*<input className="inputRadio" name='dod' type="radio"/>*/}
                {/*<Form/>*/}
            </div>
        </LayoutContext.Provider>
    );
}

export default App;
