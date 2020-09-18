import React from "react";
import BarrelList from "./BarrelList";
import BarrelDetail from "./BarrelDetail";
import CreateBarrelForm from "./CreateBarrelForm"

class BarrelControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBarrelList: [{name: "test", brand: "test", price: 22, abv: 10, remainingPints: 288, id: 1}, {name: "TEST2", brand: "TEST2", price: 33, abv: 51, remainingPints: 288, id: 2}],
      selectedBarrel: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleLowerPint = (reducePintOfBarrel) => {
    const newMasterBarrelList = this.state.masterBarrelList
    if (newMasterBarrelList.length > 0){
      for(let barrel of newMasterBarrelList){
        let index = newMasterBarrelList.indexOf(barrel);
        if(newMasterBarrelList[index].id === reducePintOfBarrel.id){
          newMasterBarrelList[index] -= 1;
          console.log(newMasterBarrelList + " " + newMasterBarrelList[index])
        }
      }
    }
    this.setState({
      masterBarrelList: newMasterBarrelList,
      selectedBarrel: reducePintOfBarrel
    });
  }

  handleAddingNewBarrelToList = (newBarrel) => {
    const newMasterBarrelList = this.state.masterBarrelList.concat(newBarrel);
    this.setState({
      masterBarrelList: newMasterBarrelList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedBarrel = (id) => {
    const selectedBarrel = this.state.masterBarrelList.filter(barrel => barrel.id === id)[0];
    this.setState({selectedBarrel: selectedBarrel});
  }

  handleClick = () => {
    if (this.state.selectedBarrel !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBarrel: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleForceUpdate = () => {
    this.forceUpdate();
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedBarrel != null) {
      currentlyVisibleState = <BarrelDetail barrel = {this.state.selectedBarrel} onSellingBarrel={this.handleLowerPint} />
      buttonText = "Return to Barrel List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CreateBarrelForm onNewBarrelCreation={this.handleAddingNewBarrelToList}  />;
      buttonText = "Return to Barrel List";

    } else {
      currentlyVisibleState = <BarrelList barrelList={this.state.masterBarrelList} onBarrelSelection={this.handleChangingSelectedBarrel} />;
      buttonText = "Add Barrel";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}
        </button>
      </React.Fragment>
    );
  }

}

export default BarrelControl;