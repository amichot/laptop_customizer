// dependencies
import React, { Component } from "react";

//Components
import FeatureItem from "./FeatureItem";

class FeatureList extends Component {
	render() {
		const features = Object.keys(this.props.features);
		return features
			? features.map(key => {
					return (
						<div className='feature' key={key}>
							<div className='feature__name'>{key}</div>
							<FeatureItem
								features={this.props.features}
								selected={this.props.selected}
								list={key}
								handleUpdate={this.props.handleUpdate}
							/>
						</div>
					);
			  })
			: [];
	}
}

export default FeatureList;
