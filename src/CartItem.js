import React from 'react';

class CartItem extends React.Component {
    


    render() {
        // object destructering
        console.log(this.props);
        const {price, title, qty} = this.props.product; 
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} ></img>
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620300730~hmac=12e465b62db64387a66899a7a10c76d2"
                            alt="decrease"
                            onClick={() => {this.props.onDecreaseQuantity(this.props.product)}}>
                        </img>
                        <img 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620300703~hmac=b7f000a1045b76b36c090a16d15ec3e2" 
                            alt="increase"
                            onClick={() => {this.props.onIncreaseQuantity(this.props.product)}}>
                        </img>
                        <img 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1620300765~hmac=df830382d8966d51b2f60254bf539f0d" 
                            alt="delete"
                            onClick={this.deleteItem}>
                        </img>

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;