import { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelected(dish) {

        this.setState({
            selectedDish: dish
        });
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.desciption}</CardText>
                    </CardBody>
                </Card>
            )
        return <></>
    }
    render() {

        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelected(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        console.log(this.state.selectedDish)
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <>
                    {
                        this.state.selectedDish != null ?
                            (
                                <div className="row">
                                    <DishDetail dish={this.state.selectedDish} comments={this.state.selectedDish.comments}></DishDetail>
                                </div>
                            ) :
                            (
                                <></>
                            )
                    }
                </>

            </div>
        )
    }
}

export default Menu;