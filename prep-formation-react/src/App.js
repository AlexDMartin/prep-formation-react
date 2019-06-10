import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import { MOCK } from './Mock';
import RecipeDetails from './RecipeDetails'

class App extends Component {
    state = {
        recipe: MOCK
    };

    render() {
        return (MOCK.map(recipe => {
            return (
                <div className="app">
                    <Container>
                        <RecipeDetails recipe={ recipe }/>
                    </Container>
                </div>
            )
        }))
    }
}

export default App;
