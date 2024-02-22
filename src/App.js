
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data";
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';


function App() {
  return (
    <div className='App'>
      {/* Accordion Component */}
      {/* <Accordion /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} /> */}

      {/* Load More Data component */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator Component */}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Mode Component */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs Component */}
      {/* <TabTest/> */}

      {/* Custom Modal Popup Component */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder Component */}
      <GithubProfileFinder />
    </div>
  );
}

export default App;