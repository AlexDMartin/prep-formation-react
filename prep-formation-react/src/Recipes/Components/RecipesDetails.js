import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap';

class RecipesDetails extends Component {

    state = {
        recipe: this.props.recipe
    };

    render() {

        let { recipe } = this.state;

        return (
            <div className="recipe-details">
                <Row>
                    <Col md={ { size: 6, offset: 3 } }>
                        <Card>
                            <CardImg top width="100%" src={ recipe.picture } alt="Card image cap"/>
                            <CardBody>
                                <CardTitle>{ recipe.name }</CardTitle>
                                <CardText>{ recipe.description }</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default RecipesDetails;
