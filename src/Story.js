import React from "react";
/* 
dumb component
prop: 
  story 
StoryList -> Story
*/
// filter
class Story extends React.Component {
  render() {
    return (
      <>
        <li>
          <a href={this.props.story.url === "" ? this.props.story.story_url : this.props.story.url}>{this.props.story.title}</a>
        </li>
      </>)
  }

}

export default Story;