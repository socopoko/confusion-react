import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderDish({dish}){
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h4>{dish.name}</h4></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )   
    }

    function RenderComments({dish}) {
        const comments = dish.comments.map((comment) => {
            return(
                <ul key={comment.id} className="list-unstyled">
                    <li className="mb-2">{comment.comment}</li>
                    <li>
                        -- {comment.author}{" "}
                        {new Date(comment.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </li>
                </ul>
            )});

        return (
            <div className="col-12 col-md-5 m-1"> 
                <h4>Comments</h4>
                { comments }
            </div>
        )
    }

    const Dishdetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments dish={props.dish} />
                    </div>
                </div>
            );
        }
        else { return (<div> </div>); }        
    }

export default Dishdetail; 

