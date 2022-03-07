import React from "react";
import '../../css/spinner.css';

const Spinner = (props) => (
    <div className='center'>
        <div class="lds-ripple"><div></div><div></div></div>
    </div>
);

export default Spinner;