// components/App.jsx
import React, { Component } from 'react';
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from './searchbar/Searchbar';
import Loader from './loader/Loader';
import styles from './App.module.css';
import pixabayService from './services/pixabayService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      showModal: false,
      modalImageURL: '',
      loading: false,
    };
  }

  componentDidMount() {
    // Fetch default data on mount
    this.fetchData();
  }

  fetchData = async query => {
    this.setState({ loading: true });

    try {
      const results = await pixabayService.search(query);

      // Simulează o întârziere de 500ms folosind setTimeout
      setTimeout(() => {
        this.setState({ images: results });
      }, 1000);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // Setează starea de încărcare la false după 500ms
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
  };

  handleImageClick = imageURL => {
    this.setState({ modalImageURL: imageURL, showModal: true });
  };

  handleSearchSubmit = query => {
    console.log('Search submitted with query:', query);
    this.fetchData(query);
  };

  render() {
    const { images, showModal, modalImageURL, loading } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {loading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} onImageClick={this.handleImageClick} />
        )}
        {/* Modal component here using showModal and modalImageURL */}
      </div>
    );
  }
}

export default App;
