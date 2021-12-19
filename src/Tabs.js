import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import ChannelsRankingTable from './ChannelsRankingTable';
import VideosRankingTable from './VideosRankingTable';
import store from './store';
import top100Channels from './top100Channels';
import top100Videos from './top100Videos';


export default function TabComponent() {
  return (
    <Card className="py-3 px-2">
      <Tabs defaultActiveKey="channels" id="tab" className="mb-3">
        <Tab eventKey="channels" title="Channels">
          <ChannelsRankingTable dataInput={top100Channels(store.getState().data)} />
        </Tab>
        <Tab eventKey="videos" title="Videos">
          <VideosRankingTable dataInput={top100Videos(store.getState().data)} />
        </Tab>
      </Tabs>
    </Card>
  )
}