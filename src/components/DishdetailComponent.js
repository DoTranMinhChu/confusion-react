
import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import dateFormat from "dateformat";
class DishDetail extends Component {


    renderDishes({ dish }) {
        return (
            <div className="col-12 col-sm-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments({ comments }) {
        const comment = comments.map((item) => {
            return (
                <div>
                    <p>{item.comment}</p>
                    <p>-- {item.author}, {dateFormat(item.date,"fullDate")}</p>
                </div>
            )
        })
        return (
            <div className="col-12 col-sm-5  text-left">
                <h2>Comments</h2>
                {comment}
            </div>
        )
    }
    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <this.renderDishes dish={this.props.dish}></this.renderDishes>
                        <this.renderComments comments={this.props.comments}></this.renderComments>
                    </div>
                </div>
            )
        }
        return <></>
    }
}

export default DishDetail