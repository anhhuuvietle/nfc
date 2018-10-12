import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
    state = {
        colors: ["rgb(202, 78, 78)", "rgb(115, 255, 0)", "rgb(18, 144, 218)", "rgb(42, 6, 99)"]
    }

    render() {
        const { data } = this.props;
        const diaries = data.content.map((date, index) => (
            <div className="content-row" key={index}>
                <div className="cirle"></div>
                <div className="line"></div>
                <h3>{date.date}</h3>
                <p>{date.info}</p>
                {
                    date.imgs && 
                    <div className="content-row__imgs">
                        {
                            date.imgs.map((img, index) =>
                                <img src={img} alt="img" key={img+index} />
                            )
                        }
                    </div>
                }
            </div>
        ));
        return (
            <div className="section">
                <h3 className="section__header" style={{ backgroundColor: this.state.colors[this.props.tab] }}>
                    {data.title}
                </h3>
                <div className="section__content">
                    {diaries}
                </div>
            </div>
        );
    }
}

export default Section;