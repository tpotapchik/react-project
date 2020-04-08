import React from 'react';
import ProcessPanelItem from './ProcessPanelItem';

const panelItems = [
    {
        id:1,
        icon: 'lightbulb.svg',
        title: 'Thoughtful Design',
        text: 'Some article content, some content and other content',
    },
    {
        id:2,
        icon: 'keyboard.svg',
        title: 'Well Crafted',
        text: 'Some article content, some content and other content',
    },
    {
        id:3,
        icon: 'bolt.svg',
        title: 'Easy to Customize',
        text: 'Some article content, some content and other content',
    }
];

const ProcessPanelIntro = () => {
    return (
        <div className="process-items">
            {
                panelItems.map(item => {
                    return (
                        <ProcessPanelItem
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    )
                })
            }
        </div>
    )
};

export default ProcessPanelIntro;