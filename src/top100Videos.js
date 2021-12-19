import store from "./store";

export default function top100Videos(videos) {
    const map = {};

    for (const video of videos) {
        try {
            const { time, title, titleUrl, subtitles } = video;
            if (new Date(time) < new Date(store.getState().dateRangeStart) || new Date(time) > new Date(store.getState().dateRangeEnd)){
                continue;
            }
            const videoName = title.split("Watched ")[1];
            const [channelInfo] = subtitles;
            const { name, url } = channelInfo;
            const id = titleUrl.split("https://www.youtube.com/watch?v\u003d")[1];

            if (map[id] === undefined) {
                map[id] = {
                    count: 1,
                    channelName: name,
                    channelURL: url,
                    videoName,
                    videoURL: titleUrl,
                    activity: [
                        time
                    ]
                };
            } else {
                map[id]["count"]++;
                map[id]["activity"].push(time);
            }
        } catch (err) {
        }
    }

    const records = []
    for (const key in map) {
        records.push(map[key]);
    }

    records.sort((item1, item2) => item2.count - item1.count);
    const top100Records = records.slice(0, 100);
    for (let i = 0; i < top100Records.length; i ++){
        if ( i === 0 ){
            top100Records[i]["rank"] = i + 1;
            continue;
        }        

        if (top100Records[i]["count"] === top100Records[i - 1]["count"]){
            top100Records[i]["rank"] = top100Records[i - 1]["rank"]
        } else {
            top100Records[i]["rank"] = i + 1;
        }
    }

    return top100Records;
}