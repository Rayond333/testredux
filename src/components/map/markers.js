import React from "react";
import { Marker } from "react-map-gl";
import { useStateMap } from "../map/mapHook";

export const Markers = () => {
    const { markers } = useStateMap();
    return (
        <>
            {markers?.map((marker, index) => (
                <Marker
                    offsetTop={-48}
                    offsetLeft={-24}
                    latitude={marker[1]}
                    longitude={marker[0]}
                >
                    <button className="marker-btn">
                        <img src="/beehive.svg" alt="Beehive Icon" />
                        {/* <img src=" https://img.icons8.com/color/48/000000/marker.png" /> */}
                    </button>
                </Marker>
            ))}
        </>
    );
};