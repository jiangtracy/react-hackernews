/* Search Form
*  
* props: 
* - none
* 
* state: 
* - formData
* - getStory: fn from parent
* 
*  App -> SearchForm 
*/

class SearchForm extends React.Component {
	state = {
		formData: { searchTerm: '' }
	};

	// Updates form input
	handleChange = (evt) => {
		this.setState({ searchTerm: evt.target.value });
	};

	// Calls parent function and clear form
	handleSubmit = (evt) => {
		evt.preventDefault();
		//helper function from parent, add to here
		this.setState({ searchTerm: "" });
	};

	render() {
		return (
			<form className="SearchForm">
				<input
					className="SearchForm-input"
					name="SearchTerm"
					value={this.formData.searchTerm}
					placeholder="Search Term"
					onChange={this.handleChange}
				/>
				<button className="SearchForm-btn">Search!</button>
			</form>
		);
	}
}
