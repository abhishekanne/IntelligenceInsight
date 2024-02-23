import Card from '../card/card';
import { TransactionHistoryItem } from './transcation-history-item/transcation-history-item';
import styles from './transaction-history.module.scss';
import { JiraMessage, MrioMessage, SlackMessage, m365Message } from '../activities/activitiesmodel';


interface TransactionHistoryProps {
    cardTitle:string
    type: 'SLACK' | 'JIRA' | 'M365' | 'MIRO'
    slackMessages?:SlackMessage[]
    miroMessages?:MrioMessage[]
    jiraMessages?:JiraMessage[]
    m365Messages?:m365Message[]
}


export const TransactionHistory = (transactionHistoryProps:TransactionHistoryProps) => {
    console.log(transactionHistoryProps.type)
    switch (transactionHistoryProps.type) {
        case 'SLACK':
            return (
        
                <Card>
                    <Card.Title>{transactionHistoryProps.cardTitle}</Card.Title>
                    <Card.Content>
                        <div className={styles.legend}>
                            <span className={styles.receiver}>Message</span>
                            <span className={styles.date}>Date</span>
                            <span className={styles.type}>App</span>
                            {/* <span className={styles.amount}>Amount</span> */}
                        </div>
                        <ul className={styles.transactionList}>
                            {transactionHistoryProps.slackMessages?.map(
                                (
                                    slakMessage,
                                    index
                                ) => (
                                    <TransactionHistoryItem
                                        key={index}
                                        receiver={slakMessage.message}
                                        type={'notifications'}
                                        typeLabel={transactionHistoryProps.type}
                                        date={slakMessage.timestamp}

                                    />
                                )
                            )}
                        </ul>
                    </Card.Content>
                </Card>
            );
        case 'JIRA':
            return (
        
                <Card>
                    <Card.Title>{transactionHistoryProps.cardTitle}</Card.Title>
                    <Card.Content>
                        <div className={styles.legend}>
                            <span className={styles.receiver}> ID</span>
                            <span className={styles.date}>Date</span>
                            <span className={styles.type}>Summary</span>
                            {/* <span className={styles.amount}>Amount</span> */}
                        </div>
                        <ul className={styles.transactionList}>
                            {transactionHistoryProps.jiraMessages?.map(
                                (
                                    jiraMessage,
                                    index
                                ) => (
                                    <TransactionHistoryItem
                                        key={index}
                                        receiver={jiraMessage.issue_id}
                                        type={'Notification'}
                                        typeLabel={transactionHistoryProps.type}
                                        date={jiraMessage.timestamp}

                                    />
                                )
                            )}
                        </ul>
                    </Card.Content>
                </Card>
            );
        case 'M365':
            return (
        
                <Card>
                    <Card.Title>{transactionHistoryProps.cardTitle}</Card.Title>
                    <Card.Content>
                        <div className={styles.legend}>
                            <span className={styles.receiver}>Events</span>
                            <span className={styles.date}>Date</span>
                            <span className={styles.type}>App</span>
                            {/* <span className={styles.amount}>Amount</span> */}
                        </div>
                        <ul className={styles.transactionList}>
                            {transactionHistoryProps.m365Messages?.map(
                                (
                                   m365Messages,
                                    index
                                ) => (
                                    <TransactionHistoryItem
                                        key={index}
                                        receiver={m365Messages.event}
                                        type={'mail'}
                                        typeLabel={transactionHistoryProps.type}
                                        date={m365Messages.timestamp}

                                    />
                                )
                            )}
                        </ul>
                    </Card.Content>
                </Card>
            );
        case 'MIRO':
            return (
        
                <Card>
                    <Card.Title>{transactionHistoryProps.cardTitle}</Card.Title>
                    <Card.Content>
                        <div className={styles.legend}>
                            <span className={styles.receiver}>Activity</span>
                            <span className={styles.date}>Date</span>
                            <span className={styles.type}>App</span>
                            {/* <span className={styles.amount}>Amount</span> */}
                        </div>
                        <ul className={styles.transactionList}>
                            {transactionHistoryProps.miroMessages?.map(
                                (
                                  miroMessage,
                                    index
                                ) => (
                                    <TransactionHistoryItem
                                        key={index}
                                        receiver={miroMessage.activity}
                                        type={transactionHistoryProps.type}
                                        typeLabel={transactionHistoryProps.type}
                                        date={miroMessage.timestamp}

                                    />
                                )
                            )}
                        </ul>
                    </Card.Content>
                </Card>
            );    

    }

};
