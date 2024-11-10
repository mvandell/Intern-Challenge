import DataPoints from "./DataPoints";

const DataDisplay = () => {
    return (
        <div>
            <table>
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
                <DataPoints />
            </table>
        </div>
    )
}
export default DataDisplay;