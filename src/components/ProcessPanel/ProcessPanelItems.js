import React from 'react';
import ProcessPanelItem from './ProcessPanelItem';
import lightbulb from 'assets/lightbulb.svg';
import keyboard from 'assets/keyboard.svg';
import bolt from 'assets/bolt.svg';

const panelItems = [
    {
        id: 1,
        icon: lightbulb,
        title: 'Thoughtful Design',
        text: 'Some article content, some content and other content',
    },
    {
        id: 2,
        icon: keyboard,
        title: 'Well Crafted',
        text: 'Some article content, some content and other content',
    },
    {
        id: 3,
        icon: bolt,
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