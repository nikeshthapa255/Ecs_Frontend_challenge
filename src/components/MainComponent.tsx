import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HomeComponent from './HomeComponent';
import NavBarComponent from './NavBar';

export interface MainComponentProps {

}

const MainComponent: React.FC<MainComponentProps> = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl" style={{backgroundColor: "#e2f1f8"}}>
                <NavBarComponent />
                <HomeComponent />
            </Container>

        </>
    );
}

export default MainComponent;