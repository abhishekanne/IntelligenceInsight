import { Cards } from './components/cards/cards';
import { DashboardLayout } from './components/dashboard-layout/dashboard-layout';
import { Goals } from './components/goals/goals';
import { OutcomeStatistics } from './components/outcome-statistics/outcome-statistics';
import { Section } from './components/section/section';
import { TransactionHistory } from './components/transaction-history/transaction-history';
import PageHeader from './components/page-header/page-header';
import { NewTransaction } from './components/new-transaction/new-transaction';
import { GetLoanBanner } from './components/get-loan-banner/get-loan-banner';
import styles from './app.module.scss';
import { Activities } from './components/activities/activities';

function App() {
    return (
        <div className={styles.root}>
            <DashboardLayout>
                <Section>
                    <Section.Content>
                        <PageHeader className={styles.header}>
                            <PageHeader.Title>Activities Sumup</PageHeader.Title>
                            <PageHeader.Subtitle>
                                Get summary of your daily activities
                                here
                            </PageHeader.Subtitle>
                        </PageHeader>
                    </Section.Content>
                </Section>

                <Section>
                    <Section.Content className={styles.dashboardGrid}>
                        <div className={styles.mainColumn}>
                           {/* <Cards cardName='Abhishek Anne'/> */}
                            {/* <TransactionHistory /> */}
                        </div>
                        <div className={styles.secondaryColumn}>
                            <Activities> <h1>Name</h1> </Activities>
                            {/* <Goals /> */}
                            <OutcomeStatistics />
                            
                            <div className={styles.userActionsSection}>
                                {/* <NewTransaction /> */}
                                {/* <GetLoanBanner /> */}
                            </div>
                        </div>
                    </Section.Content>
                </Section>
            </DashboardLayout>
        </div>
    );
}

export default App;
