import Table from 'react-bootstrap/Table'
import ViewDetailsButton from './ViewDetailsButton'
import DetailGraph from './DetailGraph'

export default function VideosRankingTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Video</th>
                    <th>Channel</th>
                    <th>Watch Counts</th>
                </tr>
            </thead>
            <tbody>
                {props.dataInput.map((item, i) => {
                    return (
                        <tr key={"video-" + i}>
                            <td>{item.rank}</td>
                            <td>
                                <a href={item.videoURL} target="_blank" rel="noopener noreferrer">{item.videoName}</a>
                            </td>
                            <td>
                                <a href={item.channelURL} target="_blank" rel="noopener noreferrer">{item.channelName}</a>
                            </td>
                            <td>
                                {item.count}
                                <ViewDetailsButton header={item.videoName} component={DetailGraph(item.activity)}/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}