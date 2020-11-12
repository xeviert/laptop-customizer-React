import React from "react";
import slugify from "slugify";

class FeatureOps extends React.Component {
    render() {
        const {
            item,
            feature,
            selected,
            updateFeature
        } = this.props;

        const USCurrencyFormat = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD'
        });

        const itemHash = slugify(JSON.stringify(item));

        return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === selected[feature].name}
                onChange={() => updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );

    }
}

export default FeatureOps;