
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
import SearchAutocomplete from './components/search-autocomplete-with-api';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section';
import Weather from './components/weather-app/weather';


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
      {/* <GithubProfileFinder /> */}

      {/* Search Autocomplete with API Component */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe Component */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Component */}
      {/* <FeatureFlagGlobalState >
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook Component */}
      {/* <UseFetchHookTest /> */}

      {/* useOutsideClick - Custom Hook Component */} 
      {/* <UseOnclickOutsideTest /> */}

      {/* useWindowResize - Custom Hook Component */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to Top and Bottom Component */}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll to Section Component */}
      {/* <ScrollToSection /> */}

      {/* Weather App Component */}
      <Weather />

    </div>
  );
}

export default App;