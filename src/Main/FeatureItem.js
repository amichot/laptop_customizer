import React, { Component } from "react";
class FeatureItem extends Component {
	render() {
		const options = this.props.features[this.props.list].map((item, index) => {
			const selectedClass =
				item.name === this.props.selected[this.props.list].name
					? "feature__selected"
					: "";
			const featureClass = "feature__option " + selectedClass;
			return (
				<li key={index} className='feature__item'>
					<div
						className={featureClass}
						onClick={e => this.props.handleUpdate(this.props.list, item)}>
						{item.name}(
						{new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD"
						}).format(item.cost)}
						)
					</div>
				</li>
			);
		});

		return <ul className='feature__list'>{options}</ul>;
	}
}

export default FeatureItem;
