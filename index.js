import React from 'react';
import faker from 'faker';


const CommentDetail = (props) => {
        console.log(props);
        return (

          <div className="comment">
          <div className="comment">
            <a href="/" classname="StarWars">
              <img alt="StarWars" src={props.avatar} /> 
            </a>
            <div className="content">
              <a href="/" className="Lucas/Author">
                {props.author}
                </a>
                <div className="meta data">
                        <span classname="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.content}</div>
          </div>
          </div>     
            </div>

        );
};

ReactDOM.render(<App />, document.querySelector('#root'));

