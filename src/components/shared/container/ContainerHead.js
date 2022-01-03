import React from 'react';



function ContainerHead() {
    return (
        <div className="container-fluid container-hed">
            <div className="container container-hed__header">
                <div className="container-hed__header__title">
                    <h6>Markets & Resources</h6>
                    <h1>Find The Best</h1>
                    <h1> Doctor Around You</h1>
                </div>
                <div className="container-hed__header__btn">
                    <div className="container-hed__header__btn__left">
                        <button className="btn">Find Doctor &#10010;</button>
                    </div>
                    <div className="container-hed__header__btn__right">
                        <button className="btn">
                            Find Doctor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerHead;