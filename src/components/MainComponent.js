import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Contact from './ContactComponent';
const Main = (props) => {

    const mapStateToProps = state => {
        return {
            dishes: state.dishes,
            comments: state.comments,
            promotions: state.promotions,
            leaders: state.leaders
        }
    }
    const state = useSelector(mapStateToProps)

    const HomePage = () => {
        return (
            <Home
                dish={state.dishes.filter((dish) => dish.featured)[0]}
                promotion={state.promotions.filter((promo) => promo.featured)[0]}
                leader={state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

    const DishWithId = () => {
        let { dishId } = useParams();
        return (
            <DishDetail dish={state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
                comments={state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))} />
        );
    };

    return (

        <>
            <Header />
            <Routes>
                <Route path='/home' element={<HomePage />} ></Route>
                <Route exact path='/menu' element={<Menu dishes={state.dishes} />}></Route>
                <Route exact path='/menu/:dishId' element={<DishWithId />}></Route>
                <Route exact path='/contactus' element={<Contact />}></Route>
                <Route exact path='/aboutus' element={<About leaders={state.leaders} />}></Route>
                <Route path="*" element={<Navigate to="/menu" />} />
            </Routes>

            <Footer />
        </>

    );
}



export default Main;