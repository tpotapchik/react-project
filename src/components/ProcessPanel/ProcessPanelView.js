import React from 'react';
import ProcessPanelIntro from './ProcessPanelIntro';
import ProcessPanelItems from './ProcessPanelItems';

import './ProcessPanel.scss';

const ProcessPanelView = () => {
    return (
        <div className="container">
            <div className="process-panel">
                <ProcessPanelIntro
                    title="Why this is awesome"
                    intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <ProcessPanelItems />
            </div>
        </div>
    )
};

export default ProcessPanelView;