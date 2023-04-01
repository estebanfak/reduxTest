import { deposit, withdraw } from "../../store/amount/actions";
import { connect } from "react-redux";
import { selectCurrentAmount } from "../../store/amount/reducer";


const mapStateToProps = (state) => {
    return {
        amount: selectCurrentAmount(state),
    }
}

const Counter = ({amount, deposit, withdraw}) => {
    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={()=> deposit()}>Deposit $10</button>
            <button onClick={()=> withdraw()}>Withdraw $10</button>
        </div>
    )
}
// el connect -> recive 2 parametros, el primero es el parametro de regreso y el segundo es el parametro de ida
// O sea, en el segundo parametro le digo que hacer, y en el primer parametro recibo un state modificado, por ejemplo...
export default connect(mapStateToProps, {deposit, withdraw})(Counter)