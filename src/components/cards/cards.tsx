import Card from '../card/card';
import { CardsDetail } from './cards-detail/cards-detail';
import { CreditCardSvg } from '../credit-card-svg/credit-card-svg';
import styles from './cards.module.scss';
import { Data, GenAIMessages } from '../activities/activitiesmodel';

interface CardsProps {
    className?: string;
    cardName?: string
    cardLogo?: string
    cardNumber?: string
    date?:string
    children?: React.ReactNode
    genAiMessages:GenAIMessages
    taskData:Data

}

export const Cards = ({ className ,cardLogo,cardName,cardNumber,date, children,genAiMessages,taskData}: CardsProps) => {
    return (
        <Card className={className}>
            {/* <Card.Title>Cards</Card.Title> */}
            <Card.Content className={styles.content}>
                <div className={styles.creditCardSection}>
                    <CreditCardSvg
                        className={styles.creditCard}
                        logo={cardLogo}
                        cardNumberStartsWith={cardNumber? cardNumber : '1234'}
                        cardNumberEndsWith=""
                        cardHolderName={cardName? cardName : "Mike Smith"}
                        expireDateMonth={date? date : "JAN"}
                        expireDateYear="22"
                    />
                </div>

                <div className={styles.details}>
                    <CardsDetail
                        label="Slack AI Summary"
                        aiMessage={genAiMessages.slack.summary}
                        historyType="SLACK"
                        slackMessages={taskData.taskData.slack}
                      
                    />
                    <CardsDetail
                        label="Jira AI Summary"
                        aiMessage={genAiMessages.jira.summary}
                        historyType="JIRA"
                        jiraMessages={taskData.taskData.jira}
                    />
                    <CardsDetail
                        label="M365 AI Summary"
                        trend='negative'
                        aiMessage={genAiMessages.m365.summary}
                        historyType="M365"
                        m365Messages={taskData.taskData.m365}
                    />
                    <CardsDetail
                        label="Miro AI Summary"
                        trend='positive'
                        aiMessage={genAiMessages.miro.summary}
                        historyType="MIRO"
                        miroMessages={taskData.taskData.miro}
                    />
                    
                </div>
            </Card.Content>
            {children}
        </Card>
    );
};
