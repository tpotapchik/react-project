import React from 'react';

const ProcessPanelIntro = ({title, intro}) => {
    return (
        <div className="process-intro">
            <h2 className="process-intro__title">{title}</h2>
            <p className="process-intro__copy">{intro}</p>
        </div>
    )
};

export default ProcessPanelIntro;