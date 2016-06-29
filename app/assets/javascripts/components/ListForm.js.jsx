var ListForm = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    };
  },

  handleChange: function(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
  },

  handleClick: function(event) {
    event.stopPropagation();
    var value = this.state.value;

    if (!value) return;

    this.props.addList(value);
    this.setState({ value: '' });
  },

  render: function() {
    return (
      <div id="add-list">
        <article>
          <form>
            <input placeholder="Title..." size="55"
                   value={this.state.value}
                   onChange={this.handleChange} />
            <span className="new"
                  onClick={this.handleClick}></span>
          </form>
        </article>
      </div>
    );
  }
});
