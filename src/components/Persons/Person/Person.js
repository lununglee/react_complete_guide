import React, { Component } from 'react'
import styles from './Person.module.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'

class Person extends Component {
	constructor (props) {
		super(props)
		this.inputElementRef = React.createRef()
	}

	componentDidMount = () => {
		// this.inputElement.focus()
		this.inputElementRef.current.focus()
	}

	render () {
		console.log("[Person.js] rendering...")
		return (
			<Aux>
				{this.props.isAuth ? <p>Authenticated</p> : <p>Please login</p>}
				<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
				<p>{this.props.children}</p>
				<input
					// ref={(inputEl) => {this.inputElement = inputEl}}
					ref={this.inputElementRef}
					type="text"
					onChange={this.props.change}
					value={this.props.name}/>
			</Aux>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	change: PropTypes.func
}

export default withClass(Person, styles.Person)
