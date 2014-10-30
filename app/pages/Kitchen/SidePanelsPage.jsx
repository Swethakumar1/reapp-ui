var React = require('react');
var DrawerView = require('ui/views/DrawerView');

var SidePanelsPage = React.createClass({
  render() {
    return (
      <DrawerView id="SidePanelsPage" title="SidePanelsPage">
        SidePanelsPage View
      </DrawerView>
    );
  }
});

module.exports = SidePanelsPage;