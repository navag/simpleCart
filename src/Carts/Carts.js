import React, { Component } from 'react';
import './Carts.css';
import SimpleCart from './SimpleCart/SimpleCart'

class Carts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mockData: []
        }
    }
    mock = [{
        id: 1,
        imgUrl: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        heading: 'Hreable Rooms',
        details: 'this is one of the best room available in our hotel.',
        address: 'magarpatta, Pune'
    },
    {
        id: 2,
        imgUrl: 'https://images.unsplash.com/photo-1590490359854-dfba19688d70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        heading: 'Hreable Rooms',
        details: 'this is one of the best room available in our hotel.',
        address: 'Wakad, Pune'
    },
    {
        id: 3,
        imgUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        heading: 'Hreable Rooms',
        details: 'this is one of the best room available in our hotel.',
        address: 'Baner, Pune'
    },
    {
        id: 4,
        imgUrl: 'https://images.unsplash.com/photo-1611892441796-ae6af0ec2cc8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        heading: 'Hreable Rooms',
        details: 'this is one of the best room available in our hotel.',
        address: 'magarpatta, Pune'
    },
    {
        id: 5,
        imgUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        heading: 'Hreable Rooms',
        details: 'this is one of the best room available in our hotel.',
        address: 'Wakad, Pune'
    },
    {
        id: 6,
        imgUrl: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        heading: 'Hreable Rooms',
        details: 'this is one of the best room available in our hotel.',
        address: 'Baner, Pune'
    }
    ]
    componentDidMount() {
        //will consider we have made api call and data is received from Server
        this.setState({ mockData: this.mock })
    }
    showCarts = (carts) => {
        const result = carts && carts.map((cartData) => <SimpleCart retrieveCart={this.retrieveCart} {...cartData} />)
        return result;
    }

    retrieveCart = (id) => {
        console.log(id);
        //we can call retrive call api and set response in store
        window.open('https://www.dentsu.com/?global=true', '_blank')
    }

    render() {
        return (
            <div class="cartLayout">
                {this.state.mockData ? this.showCarts(this.state.mockData) : <p>Loading..</p>}
            </div>
        );
    }
}

export default Carts;
