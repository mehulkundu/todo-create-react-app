import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const onClick = () => {
        console.log("Click")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={onClick}/>
        </header>
    )
}

//Object create method of passing props
// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

Header.defaultProps = {
    title: 'Task Tracker',
}

//Defining propTypes
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS inline JS
// const HeadingStyle = {
//     color: 'red',
//     backgroudColor: 'blue',
// }

export default Header
