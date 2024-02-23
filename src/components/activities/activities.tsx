import { useEffect, useState } from 'react';
import styles from './activities.module.scss';
import classNames from 'classnames';
import { MasterData } from './activitiesmodel';
import { GoalItem } from '../goals/goal-item/goal-item';
import Card from '../card/card';
import { Cards } from '../cards/cards';
import { Goals } from '../goals/goals';

export interface ActivitiesProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Activities = ({
    className,
    children = 'Activities',
}: ActivitiesProps) => {
    const [masterData, setMasterData] = useState<MasterData>();
    useEffect(() => {
        fetch('http://localhost:1880/masterdata')
            .then((response) => response)
            .then((e) => e.json())
            .then((e) => setMasterData(e as MasterData));
    }, []);

    {
        console.log(masterData);
    }
    return (
        <div className={classNames(styles.root, className)}>
            {/* {children} */}

            {masterData?.data.map((task, index) => (
                // <GoalItem
                //     key={index}
                //     title={task.task}
                //     imageUrl={""}
                //     date={masterData.date}
                //     status={task.status}

                // />
                <Cards key={index}
                    cardLogo={
                        'Task ID: ' + task.taskNo + ' Status: ' + task.status
                    }
                    cardName={masterData.user.name}
                    cardNumber={task.task}
                    date={masterData.date}
                    genAiMessages={task.taskData.genai}
                    taskData={task}
                    
                >
                <Goals email={task.taskData.actions.email} meeting={task.taskData.actions.meeting} />
                    
                </Cards>
            ))}
        </div>
    );
};
