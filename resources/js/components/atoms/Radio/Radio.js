// react
import { Skeleton } from "primereact/skeleton";
import React from "react";

// styles
import "./Radio.scss";

// IMPORTANT
// your *id*s must match the keys from your *collection*
const Radio = ({
    id,
    name,
    info,
    className,
    collection,
    setCollection,
    skeleton,
    disabled=false,
}) => {
    const collectionUpdate = (e) => {
        // set every radio to false
        let updatedCollection = { ...collection };
        Object.keys(updatedCollection).map(
            (key) => (updatedCollection[key] = false)
        );
        updatedCollection[e.target.id] = true;
        setCollection(updatedCollection);
    };

    return (
        <>
            <label
                className={
                    "radio " + className + (skeleton ? " showSkeleton" : "")
                }
                style={{
                    pointerEvents: disabled ? "none" : "all",
                    opacity: disabled ? ".6" : "1"
                }}
            >
                {info}

                <input
                    type={"radio"}
                    id={id}
                    checked={collection[id]}
                    name={name}
                    onChange={(e) => collectionUpdate(e)}
                    disabled={disabled}
                />

                {skeleton ? (
                    <div
                        className="radioSkeleton"
                        style={{ position: "absolute" }}
                    >
                        <Skeleton width="20px" height="20px" shape="circle" />
                    </div>
                ) : (
                    <span className="check"></span>
                )}
            </label>
        </>
    );
};
export default Radio;
