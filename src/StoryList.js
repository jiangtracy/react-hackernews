import React from "react";
import Story from "./Story";
import SearchForm from "./SearchForm";
import axios from "axios";

// use base_url
const SEARCH_REACT_URL = "https://hn.algolia.com/api/v1/search?query=react ";
const BASE_URL = "https://hn.algolia.com/api/v1";
/* 
props : None 
State: stories
App -> StoryList -> Story, SearchForm
*/

class StoryList extends React.Component {
  constructor(props) {
    super(props);
		this.searchStories = this.searchStories.bind(this);
	}
  state = { stories: [], searchTerm: "react" };

  /* Initialize the list with the searchterm react */
  async componentDidMount() {
    const res = await axios.get(SEARCH_REACT_URL);
    const { hits } = res.data;
    this.setState({
      stories: hits
    })
  };
// componentDidUpdate 
  /* helper function to search for stories using the api */
  async searchStories(searchTerm) {
    const res = await axios.get(`${BASE_URL}/search?query=${searchTerm}`);
    const { hits } = res.data;
    this.setState({
      stories: hits,
      searchTerm,
    })
  }


  render() {
    return (
      <div className="StoryList">
        <div className="StoryList-searchForm">
          <h5>enter your search term</h5>
          <SearchForm search={this.searchStories}></SearchForm>
        </div>
        <h3> Story List based on {this.state.searchTerm}</h3>
        <ul className="StoryList-list">
          {this.state.stories.map(s => <Story key={s.objectID} story={s} />)}
        </ul>
      </div>
    )
  }
}

export default StoryList;