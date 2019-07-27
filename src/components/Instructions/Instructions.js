import React from 'react';
import './Instructions.css';

function Instructions(props) {
    return (
        <section id="instructions">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-12">
                        <h2 id="instructions-text">
                            {props.message}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Instructions;
