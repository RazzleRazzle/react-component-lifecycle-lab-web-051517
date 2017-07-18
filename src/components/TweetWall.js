import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  componentWillReceiveProps(nextProps) {
    for (var i = 0; i < nextProps.newTweets.length; i++) {
      this.state.tweets.unshift(nextProps.newTweets[i])
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return(nextProps.newTweets.lenghth > 0)
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
