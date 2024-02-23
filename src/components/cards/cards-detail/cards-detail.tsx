import classNames from 'classnames';
import styles from './cards-detail.module.scss';
import { IconButton } from '../../icon-button/icon-button';
import { SimplePopup } from '../../simple-popup/simplePopup';
import { TransactionHistory } from '../../transaction-history/transaction-history';
import { JiraMessage, MrioMessage, SlackMessage, m365Message } from '../../activities/activitiesmodel';
import { Component } from 'react';

interface CardsDetailProps {
    className?: string;
    label: string;
    trend?: 'positive' | 'negative' | 'neutral';
    emphasized?: boolean;
    aiMessage:string
    slackMessages?: SlackMessage[]
    miroMessages?: MrioMessage[]
    m365Messages?: m365Message[]
    jiraMessages?: JiraMessage[]
    historyType:'SLACK' | 'JIRA' | 'M365' | 'MIRO'
}

export const CardsDetail = (cardsDetailProps: CardsDetailProps) => {

    return (
        <div className={classNames(styles.root, cardsDetailProps.className)}>
            {/* <h6 className={styles.label}>{label}</h6> */}
            <span
                className={classNames(styles.amount, styles[cardsDetailProps.trend?cardsDetailProps.trend :'neutral'], {
                    [styles.emphasized]: cardsDetailProps.emphasized,
                })}
            >

                {cardsDetailProps.label}{"           "}
                {/* <IconButton
                    glyph="settings"
                    size="medium"
                    onClick={() => alert('See Details')}
                /> */}
                <SimplePopup  buttonLable="AI Summary" message={cardsDetailProps.aiMessage}/>
                <SimplePopup  buttonLable="Messages" >{selectTransactionHistory(cardsDetailProps)}</SimplePopup>
            </span>
        </div>
    );
};

function selectTransactionHistory (cardsDetailProps:CardsDetailProps) {
    switch (cardsDetailProps.historyType) {
        case 'SLACK':
            return  <TransactionHistory type={cardsDetailProps.historyType} cardTitle='Slack Messages' slackMessages={cardsDetailProps.slackMessages}/>
        case 'MIRO':
            return  <TransactionHistory type={cardsDetailProps.historyType} cardTitle='Miro Activities' miroMessages={cardsDetailProps.miroMessages}/>
        case 'M365':
            return  <TransactionHistory type={cardsDetailProps.historyType} cardTitle='M365 Events' m365Messages={cardsDetailProps.m365Messages}/>
         case 'JIRA':
            return  <TransactionHistory type={cardsDetailProps.historyType} cardTitle='Jira Issue List' jiraMessages={cardsDetailProps.jiraMessages}/>

    }
}


function formatDate(): string {
    const date= new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}