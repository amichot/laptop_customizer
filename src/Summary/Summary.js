import React, { Component } from "react";
import SummaryItem from "./SummaryItem";

class Summary extends Component {
	render() {
		return (
			<section className='main__summary'>
				<h3>NEW GREENLEAF 2018</h3>
				<SummaryItem selected={this.props.selected} />
			</section>
		);
	}
}

export default Summary;
