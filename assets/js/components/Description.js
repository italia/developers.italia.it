import React, { Component } from "react";

import "./Description.css";

class Description extends Component {
  render() {
    const { specSelectors, getComponent } = this.props;

    const info = specSelectors.info();
    const description = info.get("description");

    const Markdown = getComponent("Markdown", true);

    return (
      <div className="swagger--description">
        {description ? <Markdown source={description} /> : "-"}
      </div>
    );
  }
}

export default Description;
