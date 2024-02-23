import { OutcomeStatisticsItem } from './outcome-statistics-item/outcome-statistics-item';
import styles from './outcome-statistics.module.scss';

export const OutcomeStatistics = () => {
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Activities Statistics</h2>
            <ul className={styles.list}>
                <OutcomeStatisticsItem
                    label="Active"
                    progress={50}
                    type="person"
                />
                <OutcomeStatisticsItem
                    label="Closed"
                    progress={50}
                    type="person"
                />
                <OutcomeStatisticsItem
                    label="In Process"
                    progress={0}
                    type="person"
                />
            </ul>
        </div>
    );
};
