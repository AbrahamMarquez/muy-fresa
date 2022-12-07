import React, { useEffect, useState } from "react";

import { Skeleton } from "primereact/skeleton";


import "./LoginSkeleton.scss";

const LoginSkeleton = () => {

    return (
        <>
            <div className="fs-LoginP">
                <div className="fs-background">
                    <div className="fs-Login">
                        <div className="body-register">
                            <div className="title-container">
                                <div className="title">
                                    <Skeleton className="title" width="190px" height="30px"></Skeleton>
                                </div>
                                <div className="sub-title">
                                    <Skeleton className="title" width="190px" height="24px" ></Skeleton>
                                </div>

                            </div>
                            <div className="txb-container">
                                <div style={{ padding: "5px" }}>
                                    <div className="txb-title">
                                        <Skeleton  width="261px" height="20px"></Skeleton>
                                    </div>
                                    <div className="txb" >
                                        <Skeleton  width="307px" height="31px"></Skeleton>
                                    </div>

                                    {/* passwords */}
                                    <div className="txb-subtitle">
                                        <Skeleton  width="261px" height="20px"></Skeleton>
                                    </div>
                                    <div className="txb">
                                        <Skeleton  width="307px" height="33px"></Skeleton>
                                    </div>
                                </div>
                            </div>
                            {/* remember password */}
                            <div className="remember-box">
                                <div style={{ display: "flex" }}>
                               
                                <label class="radio">
                                    <input type="radio"  id="radioRememberPassword" name="radio" value="1" />
                                    <label htmlFor="radioRememberPassword" className="txt-remember"><Skeleton width="70px" height="14px"></Skeleton></label>
                                </label>
                                </div>
                                <div className="link">
                                    <Skeleton  width="117px" height="14px"></Skeleton>
                                </div>

                            </div>
                            <div className="button-container">
                                <Skeleton  width="303px" height="40px"></Skeleton>
                            </div>
                            <div className="bottom-text">
                                <Skeleton  width="155px" height="24px"></Skeleton>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSkeleton;