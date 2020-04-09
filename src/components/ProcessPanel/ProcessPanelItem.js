import React from 'react';

const ProcessPanelItem = ({icon, title, text}) => {
    return (
        <div className="process-item">
            <div className="process-item__icon">
                <img src={icon} alt={title}/></div>
            <h2 className="process-item__title-title">{title}</h2>
            <p className="process-item__copy-text">{text}</p>
        </div>
    )
};

export default ProcessPanelItem;