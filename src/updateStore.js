export function updateData(data) {
    return {
        type: "updateData",
        data
    }
}

export function updateDateRangeStart(dateRangeStart) {
    return {
        type: "updateDateRangeStart",
        dateRangeStart
    }
}

export function updateDateRangeEnd(dateRangeEnd) {
    return {
        type: "updateDateRangeStart",
        dateRangeEnd
    }
}