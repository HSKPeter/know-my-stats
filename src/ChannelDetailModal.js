import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'

export default function ChannelDetailModal(props) {
    return (
        <Card className="py-3 px-2">
            <Tabs defaultActiveKey="graph" id="tab" className="mb-3">
                <Tab eventKey="graph" title="Graph">
                    {props.graphContent}
                </Tab>
                <Tab eventKey="history" title="History">
                    {props.history}
                </Tab>
            </Tabs>
        </Card>
    )
}