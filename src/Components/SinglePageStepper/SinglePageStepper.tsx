import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import { StepConnector, StepIcon, Zoom } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import './SinglePageStepper.css';

let pageSize: number;

export default class SinglePageStepper extends React.Component<{}, { stepIndex: number; visible: boolean }> {
    state = {
        stepIndex: 0,
        // visible: false
        visible: true
    };

    steps = [
        { name: 'Home', scrollPosMin: 0, scrollPosMax: 0.15, icon: HomeIcon },
        { name: 'Experience', scrollPosMin: 0.265, scrollPosMax: 0.92, icon: SportsEsportsIcon },
        { name: 'Contact', scrollPosMin: 0.93, scrollPosMax: 1, icon: ContactMailIcon }
    ];
    zoomStyles = {
        defaultStyle: {
            transform: "scale(1.05)", visibility: "visible", margin: "5px 0",
            transition: "transform 0.5s", cursor: "pointer"
        } as React.CSSProperties,
        activeStyle: {
            transform: "scale(1.35)"
        } as React.CSSProperties
    };

    render() {
        return (
            /* <div className="stepper-container" style={!this.state.visible ? { opacity: "0" } : {}}></div> */
            <div className="stepper-container">
            <Stepper activeStep={this.state.stepIndex} orientation="vertical"
                style={{ backgroundColor: "transparent" }}
                connector={<StepConnector classes={{ root: "step-connector", lineVertical: "vertical-line" }} />}
            >
                {
                    this.steps.map((step, index) => {
                        const isActive = index == this.state.stepIndex;
                        
                        return (
                            <Zoom key={step.name} in={isActive}>
                                <Step completed={false}
                                    style={isActive ? {...this.zoomStyles.defaultStyle , ...this.zoomStyles.activeStyle} : {...this.zoomStyles.defaultStyle}}
                                    onClick={() => this.scrollTo(step.scrollPosMin)}
                                >
                                    <StepIcon title={step.name} active={isActive} icon={
                                        <step.icon classes={{ root: "step-icon" }} color={isActive ? "secondary" : "inherit"}
                                            fontSize="large"
                                        />}
                                    />
                                </Step>
                            </Zoom>
                        );
                    })
                }
            </Stepper>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        pageSize = parseInt(document.documentElement.getBoundingClientRect().height.toFixed());

        this.listenToScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
    }

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPos = winScroll / height;

        // if (winScroll > window.screen.height / 4 && !this.state.visible || 
        //     winScroll < window.screen.height / 4 && this.state.visible) {
            
        //     this.setState({ visible: !this.state.visible });
        // }
        this.steps.forEach((currStep, index) => {
            if (index !== this.state.stepIndex && scrollPos > currStep.scrollPosMin && scrollPos <= currStep.scrollPosMax) {
                this.setState({
                    stepIndex: index,
                });

                return;
            }
        });
    }

    scrollTo = (scrollPos: number) => {
        scrollTo({
            behavior: "smooth",
            top: scrollPos * pageSize
        });
    }
}