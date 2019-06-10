import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import RecipesList from './Recipes/Components/RecipesList';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Container>
                    <RecipesList/>
                </Container>
            </div>
        );
    }
}

export default App;
