/* eslint-disable react/no-array-index-key */
// @ts-nocheck
import React from 'react';
import {Icon} from 'semantic-ui-react';
import {SkillListType} from '../../types';
import {iconsArray} from '../../data/skillsData';
import './SkillList.css';

// TODO fix ugly code plz look away
const SkillList = ({title, list}: SkillListType) => {
    const normalize = (name: string) => {
        return name.replace(/[-./]/g, '');
    };
    return (
        <ul className={`${title} skill-list`}>
            <h3>{title}</h3>
            {list.map((el, i) => {
                return (
                    <div className="skill">
                        {el.semanticIcon ? (
                            <Icon name={el.semanticIcon}/>
                        ) : (
                            <img src={iconsArray[normalize(el.name)]} className="icon" alt={el.semanticIcon}/>
                        )}

                        <li key={i}>{el.name}</li>
                    </div>
                );
            })}
        </ul>
    );
};

export default SkillList;
