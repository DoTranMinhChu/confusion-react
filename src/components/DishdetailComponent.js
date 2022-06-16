
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import dateFormat from "dateformat";


function RenderDishes({ dish }) {
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

function RenderComments({ comments }) {

    const comment = comments.map((item) => {
        return (
            <div key={item.id}>
                <p>{item.comment}</p>
                <p>-- {item.author}, {dateFormat(item.date, "fullDate")}</p>
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

const DishDetail = (props) => {

    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">

                    <RenderDishes dish={props.dish}></RenderDishes>
                    <RenderComments comments={props.dish.comments}></RenderComments>

                </div>
            </div>
        )
    }
    return <></>
}



export default DishDetail