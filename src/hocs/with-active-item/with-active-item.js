import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this._handleAction = this._handleAction.bind(this);
    }

    _handleAction(activeItem) {
      const {handler} = this.props;
      return () => handler(activeItem);
    }

    render() {
      return <Component {...this.props} handler={this._handleAction}/>;
    }
  }

  WithActiveItem.propTypes = {
    handler: PropTypes.func.isRequired
  };

  return WithActiveItem;
};

export default withActiveItem;
