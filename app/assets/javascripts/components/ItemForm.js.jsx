var ItemForm = React.createClass({
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
    
    this.props.addItem(value);
    this.setState({ value: '' });
  },

  render: function() {
    return (
      <div className="add-item">
        <form>
          <span className="glyphicon glyphicon-plus"
                onClick={this.handleClick}></span>
          <input placeholder="Take a note..." size="55"
                 value={this.state.value}
                 onChange={this.handleChange} />
        </form>
      </div>
    );
  }
});
