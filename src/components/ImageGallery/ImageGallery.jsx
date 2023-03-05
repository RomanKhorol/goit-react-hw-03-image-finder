import { Component } from 'react';
import Notiflix from 'notiflix';
import { BallTriangle } from 'react-loader-spinner';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { fetchPictures } from '../PicturesAPI';
import Button from 'components/Button/Button';
export default class ImageGllery extends Component {
  state = {
    pictures: [],
    numberPage: 1,
    button: false,
    loading: false,
    shownModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text) {
      this.setState({ pictures: [] });
    }
    if (
      prevProps.text !== this.props.text ||
      prevState.numberPage !== this.state.numberPage
    ) {
      this.setState({ loading: true });
      fetchPictures(this.props.text, this.state.numberPage)
        .then(pictures => {
          this.setState(prevState => ({
            pictures: [...this.state.pictures, ...pictures.hits],
          }));
          if (pictures.hits.length === 0) {
            Notiflix.Notify.warning('No picture are found');
            this.setState({ button: false });
          } else this.setState({ button: true });
        })
        .catch(error => {
          this.setState({ button: false });
          Notiflix.Notify.warning(
            'Were sorry, but youve reached the end of search results.'
          );
        })
        .finally(() => this.setState({ loading: false }));
    }
  }
  onBtnClick = () => {
    this.setState(prevState => ({
      numberPage: prevState.numberPage + 1,
    }));
  };
  toggleModal = () => {
    this.setState(state => ({ shownModal: !state.shownModal }));
  };
  render() {
    const { pictures, button, loading, shownModal } = this.state;

    return (
      <div>
        <ul className="gallery">
          {pictures.map(hit => {
            return (
              <ImageGalleryItem
                key={hit.id}
                pitureUrl={hit.webformatURL}
                hendleImgClik={this.toggleModal}
              ></ImageGalleryItem>
            );
          })}
        </ul>
        {shownModal && (
          <Modal>
            <img src="" alt="" />
          </Modal>
        )}
        {loading && (
          <BallTriangle
            position="absolute"
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        )}
        {button && <Button addPictures={this.onBtnClick} />}
      </div>
    );
  }
}
