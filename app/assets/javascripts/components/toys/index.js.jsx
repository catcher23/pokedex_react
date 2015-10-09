window.ToysIndex = React.createClass({
  render: function () {
    return(
      <ul>
        {this.props.toys && this.props.toys.map(function (toy) {
          return <ToyIndexItem key={toy.id} toy={toy} />
        })}
      </ul>
    );
  }
});
