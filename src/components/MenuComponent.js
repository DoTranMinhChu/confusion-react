import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


function RenderMenuItem({ dish, onClick }) {
    return (
        <div className="col-12 col-md-5 m-1" onClick={() => onClick(dish.id)}  >
            <Card >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}


const Menu = (props) => {

    const menu = props.dishes.map(dish => {
        return (
            <RenderMenuItem key={dish.id} dish={dish} onClick={props.onClick}></RenderMenuItem>
        )
    })
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    )
}


export default Menu;