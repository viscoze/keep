var List = React.createClass({
  getInitialState: function() {
     return {
       checkItems: [],
       items:      []
     };
  },

  componentWillMount: function() {
    this.setState({ items: this.props.items });
  },

  addItem: function(value) {
    this.setState({
      items: this.state.items.concat([
        {
          "content": value,
          "checked": false
        }
      ])
    });
  },

  checkItem: function(item, event) {
    this.strikeItem(event.target);
    if (event.target.checked) {
      this.setState({
        checkItems: this.state.checkItems.concat([item])
      });
    } else {
      var checkItems = this.state.checkItems.filter(function(_item){
        return _item !== item;
      });

      this.setState({
        checkItems: checkItems
      });
    }
  },

  strikeItem: function(checkbox) {
    var span = checkbox.nextSibling;
    span.classList.toggle('strike');
  },

  render: function() {
    return (
      <div className="list">
        <article>
          <header>
            {this.props.title}
          </header>
          <main>
            {
              this.state.items.map(function(item, index) {
                return (<Item key={index}
                              content={item.content}
                              checked={item.checked}
                              checkItem={this.checkItem.bind(this,item)} />);
              }.bind(this))
            }
            <ItemForm addItem={this.addItem} />
          </main>
          <footer>

          </footer>
        </article>
        
      </div>
    );
  }
});
