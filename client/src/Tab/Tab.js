import React, { Component } from 'react';
import "./Tab.css";

class Tab extends Component {
    state = {
        tabs: [1, 2, 3, 4]
    }
    render() {
        const { activeTab } = this.props;
        const tabs = this.state.tabs.map(tab => (
            <div key={tab} onClick={this.props.handleChangeTab(tab)}>
                <span className={tab === activeTab ? "active" : ""}>{tab}</span>
            </div>
        ));
        return (
            <div className="tab">
                {tabs}
            </div>
        );
    }
}

export default Tab;