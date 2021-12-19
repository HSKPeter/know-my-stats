import store from "./store"
import Form from 'react-bootstrap/Form'


export default function SetDateRange() {
    const { data } = store.getState();
    const dateRangeStart = (data.length > 0) ? new Date(data[data.length - 1]["time"]).toISOString().split("T")[0] : "";
    const dateRangeEnd = (data.length > 0) ? new Date(data[0]["time"]).toISOString().split("T")[0] : "";

    return (
        <>
            <Form className="w-50 mb-5">
                <Form.Group className="mb-3 w-50">
                    <Form.Label>Date Range (Start)</Form.Label>
                    <input className="form-control w-50" type='date' id='date-range-start' min={dateRangeStart} max={dateRangeEnd} defaultValue={dateRangeStart} onChange={handleChangeInDateRangeStart}></input>                            
                </Form.Group>

                <Form.Group className="mb-3 w-50">
                    <Form.Label>Date Range (End)</Form.Label>
                    <input className="form-control w-50" type='date' id='date-range-end' min={dateRangeStart} max={dateRangeEnd} defaultValue={dateRangeEnd} onChange={handleChangeInDateRangeEnd}></input>
                </Form.Group>
            </Form>

        </>
    )
}

function handleChangeInDateRangeStart(event) {
    store.dispatch({
        type: "updateDateRangeStart",
        dateRangeStart: event.target.value
    });
}

function handleChangeInDateRangeEnd(event) {
    store.dispatch({
        type: "updateDateRangeEnd",
        dateRangeEnd: event.target.value
    });
}