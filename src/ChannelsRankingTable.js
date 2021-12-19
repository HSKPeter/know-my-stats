import Table from 'react-bootstrap/Table'
import ChannelDetailModal from './ChannelDetailModal'
import DetailGraph from './DetailGraph'
import ViewDetailsButton from './ViewDetailsButton'
import HistoryOfVideosWatched from './HistoryOfVideosWatched'

export default function ChannelsRankingTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Channel</th>
                    <th>Watch Counts</th>
                </tr>
            </thead>
            <tbody>
                {props.dataInput.map((item, i) => {
                    return (
                        <tr key={"channel-" + i}>
                            <td>{item.rank}</td>
                            <td>
                                <a href={item.channelURL} target="_blank" rel="noopener noreferrer">{item.channelName}</a>
                            </td>
                            <td>
                                {item.count}
                                <ViewDetailsButton header={item.channelName} component={
                                    ChannelDetailModal({
                                        graphContent: DetailGraph(item.activity.map(data => data.time)),
                                        history: HistoryOfVideosWatched({data: item.activity})
                                    })
                                    }/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}