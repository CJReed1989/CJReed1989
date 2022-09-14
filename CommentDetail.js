import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
        return (
<div className="ui container comments">
          {CommentDetail}
          <CommentDetail author="Vader" timeAgo="Today at 12:00PM" content="Great job today" StarWars={faker.image.avatar()}/>
          <CommentDetail author="Kenobi" timeAgo="Today at 2:45AM" content="what did you lose" StarWars={faker.image.avatar()}/>
          <CommentDetail author="Skywalker" timeAgo="Yesterday at 5:55PM" content="are you coming back"StarWars={faker.image.avatar()}/>
          <CommentDetail author="Bobba Fett" timeAgo="In a far away place" content="where no one has been before"StarWars={faker.image.avatar()}/>
          <CommentDetail author="Jabba" timeAgo="Im not getting up till later" content="Im good here"StarWars={faker.image.avatar()}/>
            </div>
        );
};

export default CommentDetail;



