import React from 'react';
import './Home.css'
// import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import {Grid} from '@material-ui/core';
import Accordion from '../../components/Accordion/Accordion';

function Home(){
    const [helloWorld, setHelloWorld] = React.useState(true);

    const buttonCard = () => {
        setHelloWorld(!helloWorld)
    }


    return(
        <Grid container spacing={3}>
            <h1>Home Page</h1>
            <Button name="Button 1" onPress={buttonCard}/>
            <Button name="shut"/>
            <Button name="close"/>
            <Button name="open"/>
            <Grid item xs={6}>
                <Accordion accordionName ="about you" body="youre fat, got take a walk"/>
                <Accordion accordionName ="shut up" body="walk"/>
                <Accordion accordionName ="something" body="ur dead to me"/>
                <Accordion accordionName ="vacation" body="Henry's job"/>
                <Accordion accordionName ="react" body="youre fat, got take a walk"/>
            </Grid>
            <br/>
            <Grid item xs={3}>
            {helloWorld && 
                <Card
                userName="Henry Nguyen"
                date= "04/18/2021"
                pic= "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                caption="Vacation time bitches!!!!!"
                />
            }
            </Grid>
            <Grid item xs={3}>
                {helloWorld &&
                <Card
                    userName="Jason C"
                    date= "12/06/2021"
                    pic= "https://www.iphonehacks.com/wp-content/uploads/2019/11/Anamorphic-Pro-Visual-Effects-Mac-Bundle.jpg"
                    caption="Im stupid"
                />
            }
            </Grid>
        </Grid>
    )
}

export default Home;