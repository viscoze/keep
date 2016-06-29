var Item = React.createClass({
  handleCheckboxChange: function(event) {
    event.stopPropagation();
  },

  getCheckbox: function() {
    return (
      <input type="checkbox"
             onClick={this.handleCheckboxChange}
             onChange={this.props.checkItem}
             value={this.props.checked} />
    );
  },

  render: function() {
    return (
      <div className="item">
        <label>
          { this.getCheckbox() }
          <span>{this.props.content}</span>
        </label>
      </div>
    );
  }
});
