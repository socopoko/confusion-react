import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';


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

    function RenderComments({comments}) {
        const mycomments = comments.map((comment) => {
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
                { mycomments }
                <CommentForm />
            </div>
        )
    }

    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        else { return (<div> </div>); }        
    }

export default DishDetail; 

