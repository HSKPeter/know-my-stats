import store from './store';
import Dropzone from "./DropZone";
import NavBar from "./NavBar";
import TabComponent from "./Tabs";
import { connect } from 'react-redux';
import SetDateRange from './SetDateRange';


function App() {
  return (
    <>
      <NavBar />
      <div>
        <div className="mt-5">
          {store.getState().data.length > 0
            ?
            <div className="px-3">
              <SetDateRange />
              <TabComponent />
            </div>
            : <Dropzone />
          }
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App);;
