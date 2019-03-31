import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class CustomerChat extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.getInit()
    this.setupSdk()
  }

  getInit() {
    const { xfbml, version } = this.props
    window.fbAsyncInit = function () {
      FB.init({
        xfbml,
        version
      });
    };
  }

  setupSdk() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    const { pageId, attribute } = this.props;
    return (
      <div>
        <div className="fb-customerchat"
          {...attribute}
          page_id={pageId}>
        </div>
      </div>
    );
  }
}

const propTypes = {
  pageId: PropTypes.string.isRequired,
  xfbml: PropTypes.bool,
  version: PropTypes.string,
}

const defaultProps = {
  xfbml: true,
  version: 'v3.2'
}

CustomerChat.propTypes = propTypes
CustomerChat.defaultProps = defaultProps

