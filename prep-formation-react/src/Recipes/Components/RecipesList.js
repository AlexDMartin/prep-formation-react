import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { MOCK } from '../../Mock';
import RecipeDetails from './RecipesDetails'

class RecipesList extends Component {
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

export default RecipesList;
