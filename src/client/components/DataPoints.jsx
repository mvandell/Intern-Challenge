import { useGetAllQuery } from "../redux/api";

const DataPoints = () => {
    const { data, error, isLoading } = useGetAllQuery();

    if (isLoading) {
        return <div> </div>;
    }
    if (error) {
        return <div>Error:{error.message}</div>;
    }

    return (
        <>
            {data && data.map((image) => (
                <tr key={image.image_id}>
                    <td>
                        {image.file_name} {/** Should be replaced witd actual image */}
                    </td>
                    <td>
                        {image.timestamp}
                    </td>
                    <td>
                        {`${image.latitude}, ${image.longitude}`}
                    </td>
                    <td>
                        {`${image.altitude_m} m`}
                    </td>
                    <td>
                        {`${image.heading_deg}&deg`}
                    </td>
                    <td>
                        {`${image.camera_tilt_deg}&deg`}
                    </td>
                    <td>
                        {`${image.focal_length_mm} mm`}
                    </td>
                    <td>
                        {image.iso}
                    </td>
                    <td>
                        {image.shutter_speed}
                    </td>
                    <td>
                        {image.aperture}
                    </td>
                    <td>
                        {`${image.color_temp_k} K`}
                    </td>
                    <td>
                        {`${image.drone_speed_mps} mps`}
                    </td>
                    <td>
                        {`${image.battery_level_pct}%`}
                    </td>
                    <td>
                        {`${image.gps_accuracy_m} m`}
                    </td>
                    <td>
                        {image.gimbal_mode}
                    </td>
                    <td>
                        {image.subject_detection}
                    </td>
                    <td>
                        {image.image_format}
                    </td>
                    <td>
                        {`${image.file_size_mb} mb`}
                    </td>
                    <td>
                        <ul>
                            {image.image_tags.map((tag) => (
                                <li>{tag}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
            ))
            }
        </>
    )
}
export default DataPoints;