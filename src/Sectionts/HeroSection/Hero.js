import React, {useContext} from 'react';
import classes from './Hero.module.scss'
import Heading from "../../Components/HeadingComponent/Heading";
import Text from "../../Components/TextComponent/Text";
import Button from "../../Components/ButtonComponent/Button";
import {LayoutContext} from "../../App";

const Hero = (props) => {
    const layoutType = useContext(LayoutContext);
    return (
        <section className={[classes.Hero, props.className, classes[layoutType]].join(' ')}>
            <div className={classes.HeroWrapper}>
                <Heading h1>Test assignment for front-end developer</Heading>
                <Text className={classes.HeroDescription} p1>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
                    understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                    They should also be excited to learn, as the world of Front-End Development keeps evolving.</Text>
                <Button type="yellow">Sign up</Button>
            </div>
        </section>
    );
};

export default Hero;
