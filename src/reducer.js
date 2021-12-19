const dataInitialState = {
    dateRangeStart: "",
    dateRangeEnd: "",
    data: []
};

export default function reducer(data = dataInitialState, action) {
    switch (action.type) {
        case "updateData":
            const newData = [...data.data, ...action.data];
            const dateRangeStart = (newData.length > 0) ? new Date(newData[newData.length - 1]["time"]).toISOString().split("T")[0] : "";
            const dateRangeEnd = (newData.length > 0) ? new Date(newData[0]["time"]).toISOString().split("T")[0] : "";
            return {
                ...data,
                dateRangeStart,
                dateRangeEnd,
                data: newData
            }
        case "updateDateRangeStart":
            return {
                ...data,
                dateRangeStart: action.dateRangeStart
            }
        case "updateDateRangeEnd":
            return {
                ...data,
                dateRangeEnd: action.dateRangeEnd
            }
        default:
            return {
                ...data
            }
    }
}