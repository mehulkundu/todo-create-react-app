import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
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

//CSS in JS
// const HeadingStyle = {
//     color: 'red',
//     backgroudColor: 'blue',
// }

export default Header
