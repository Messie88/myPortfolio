import React from "react";

import Layout from "../../components/Layout";
import Header from "../../components/header";

const ComingSoon = () => (
    <Layout color>
        <Header />
        <div 
        style={{
            height: "calc(100vh - 70px)", 
            display: "flex", 
            alignItems: "center",
            color: "#d88a83",
            fontSize: "40px",
        }}>
            <div style={{
                display: "flex", 
                alignItems: "center",
                overflow: "hidden",
                padding: "10px",
                border: "1px solid red",
                height: "100px"
            }}>

                <h1>
                  <span>C</span><span>o</span><span>m</span><span>i</span>
                  <span>n</span><span>g</span>
                  <span> S</span><span>o</span><span>o</span><span>n</span>
                </h1>
            </div>
        </div>
    </Layout>
)

export default ComingSoon