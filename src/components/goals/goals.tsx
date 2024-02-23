import { useEffect,useState } from 'react';
import { IconButton } from '../icon-button/icon-button';
import { GoalItem } from './goal-item/goal-item';
import styles from './goals.module.scss';
import axios from 'axios';
import { Cards } from '../cards/cards';
import { TransactionHistory } from '../transaction-history/transaction-history';
import { Actions } from '../activities/activitiesmodel';

const holidaysImageUrl =
    'https://static.wixstatic.com/shapes/610b66_71524cee9a8c43de91e86b0ecc9f9cab.svg'; // mountain.svg (36x36)
const renovationImageUrl =
    'https://static.wixstatic.com/shapes/610b66_0d486933d56942b48bfed545eba3f3e2.svg'; // brush.svg (36x36)
const xboxImageUrl =
    'https://static.wixstatic.com/shapes/610b66_ca99e04d140f4b8a9633dd902d2cb1b8.svg'; // controller.svg (37x36)

export const Goals = (actions :Actions) => {

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <h2 className={styles.title}>Actions</h2>
                <IconButton
                    glyph="add"
                    size="small"
                    onClick={() => alert('Add manual activity')}
                />
            </div>
            <ul className={styles.goals}>

                <GoalItem
                    key={0}
                    title={"Send Email"}
                    imageUrl={holidaysImageUrl}
                    date={actions.email.subject}
                    status=""
                    
                />
                <GoalItem
                    key={1}
                    title={"Schedule Meeting with " + actions.meeting.with}
                    imageUrl={holidaysImageUrl}
                    date={actions.meeting.agenda}
                    status=""
                    
                />


                
            </ul>
            <ul>
            {/* <TransactionHistory ></TransactionHistory> */}

            </ul>
        </div>
    );
};
function formatDate(): string {
    const date= new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}