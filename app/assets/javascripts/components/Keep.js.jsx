var Keep = React.createClass({
  getInitialState: function() {
     return {
       lists: []
     };
  },

  componentWillMount: function() {
    this.setState({ lists: _list_ });
  },

  addList: function(value) {
    this.setState({
      lists: [{ "title": value, "items": [] }].concat(this.state.lists)
    });
  },

  render: function() {
    return (
      <div className="keep">
        <Navbar />
        <main>
          <ListForm addList={this.addList}/>
          {
            this.state.lists.map(function(list, index) {
              return (<List key={list.title} title={list.title}
                            items={list.items} color={list.color} />);
            })
          }
        </main>
      </div>
    );
  }
});
