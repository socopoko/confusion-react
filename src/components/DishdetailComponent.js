import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);

    }

    renderDish(dish){
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h4>{dish.name}</h4></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderList(comments) {  
        return comments.map(comment => (
            <ul key={comment.id} className="list-unstyled">
                <li className="mb-2">{comment.comment}</li>
                <li>
                    -- {comment.author}{" "}
                    {new Date(comment.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </li>
            </ul>
        ));       
    }

    renderComments(dish) {
        if (dish != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    {this.renderList(dish.comments)}
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">   
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail; 

