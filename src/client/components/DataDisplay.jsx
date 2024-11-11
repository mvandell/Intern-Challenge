//import { useGetAllQuery } from "../redux/api";
import DataPoints from "./DataPoints";
//TODO: add form for user queries

const DataDisplay = () => {
    // const { data, error, isLoading } = useGetAllQuery();
    // console.log(data)
    // if (isLoading) {
    //     return <> </>;
    // }
    // if (error) {
    //     return <>Error:{error.message}</>;
    // }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image File</th>
                        <th>Timestamp</th>
                        <th>Location</th>
                        <th>Altitude</th>
                        <th>Heading</th>
                        <th>Camera Tilt</th>
                        <th>Focal Length</th>
                        <th>ISO</th>
                        <th>Shutter Speed</th>
                        <th>Aperture</th>
                        <th>Color Temp</th>
                        <th>Drone Speed</th>
                        <th>Battery Level</th>
                        <th>GPS Accuracy</th>
                        <th>Gimbal Mode</th>
                        <th>Subject Detection</th>
                        <th>Image Tags</th>
                        <th>Image Format</th>
                        <th>File Size</th>
                    </tr>
                </thead>
                <DataPoints />
            </table>
        </div>
    )
}
export default DataDisplay;