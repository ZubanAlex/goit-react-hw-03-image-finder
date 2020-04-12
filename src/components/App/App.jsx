import React, { Component } from "react";
import * as APIservices from "../../services/services";
import ImageGallery from "../ImageGallery/ImageGallery";
import Searchbar from "../Searchbar/Searchbar";

import Modal from "../Modal/Modal";

class App extends Component {
  state = {
    isModalOpen: false,
    imgArray: [],
    query: "",
    pageCounter: 1,
    fullURL: "",
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageCounter !== this.state.pageCounter ||
      prevState.query !== this.state.query
    ) {
      this.onSearch();
    }
  }

  onSearch = () => {
    const { scrollHeight } = document.documentElement;

    this.setState({
      isLoading: true,
    });

    APIservices.fetchImgData(this.state.query, this.state.pageCounter)
      .then(({ data }) => {
        this.setState({ imgArray: [...this.state.imgArray, ...data.hits] });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });

        this.setState({
          isLoading: false,
        });
      });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handelFullUrl = (url) => {
    this.setState({ fullURL: url, isModalOpen: true });
  };

  onFormSubmit = (text) => {
    this.setState({
      query: text,
      imgArray: [],
      pageCounter: 1,
    });
  };

  handelPageCounter = () => {
    this.setState({ pageCounter: this.state.pageCounter + 1 });
  };

  render() {
    const { isModalOpen, imgArray, fullURL, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onFormSubmit} />
        {imgArray.length > 0 && (
          <ImageGallery
            imgArray={imgArray}
            onGetFullUrl={this.handelFullUrl}
            loadMoreIMG={this.handelPageCounter}
            isLoading={isLoading}
          />
        )}

        {isModalOpen && <Modal src={fullURL} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
