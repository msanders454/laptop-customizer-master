
import React from 'react';
import Feature from './Feature'

class Customize extends React.Component {
    
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Feature 
                    features={this.props.features}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected} 
                />
            </form>
        )
    }
}

export default Customize