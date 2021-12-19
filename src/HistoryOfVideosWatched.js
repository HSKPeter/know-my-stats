import Table from 'react-bootstrap/Table'

export default function HistoryOfVideosWatched(props){
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Video</th>
                    <th>DateTime</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item, i) => {
                    return (
                        <tr key={"video-watched-of-channel" + i}>
                            <td>
                                <a href={item.titleUrl} target="_blank" rel="noopener noreferrer">{item.videoName}</a>
                            </td>
                            <td>
                                {new Date(item.time).toLocaleString()}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}