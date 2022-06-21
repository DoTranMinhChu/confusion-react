import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Component } from 'react';
import { DISHES } from '../shared/dish2';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Contact from './ContactComponent';
class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    HomePage = () => {
        return (
            <Home
                dish={this.state.dishes.filter(dish => dish.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                leader={this.state.leaders.filter(leader => leader.featured)[0]}
            />
        )
    }
    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route path='/home' element={<this.HomePage />} ></Route>
                    <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />}></Route>
                    <Route exact path='/contactus' element={<Contact />}></Route>
                    <Route path="*" element={<Navigate to="/menu" />} />
                </Routes>

                <Footer />
            </>

        );
    }
}

export default Main;