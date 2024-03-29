import { LiHTMLAttributes } from 'react';
import styles from './goal-item.module.scss';
import { IconButton } from '../../icon-button/icon-button';

interface GoalItemProps extends LiHTMLAttributes<HTMLLIElement> {
    title: string;
    imageUrl: string;
    date: string;
    // amount: number;
    // currency: string;
    status : string
}

export const GoalItem = ({
    title,
    imageUrl,
    date,
    // amount,
    // currency,
    status,
}: GoalItemProps) => {
    // const formattedAmount = new Intl.NumberFormat(undefined, {
    //     style: 'currency',
    //     currency: currency,
    //     minimumFractionDigits: 0,
    //     maximumFractionDigits: 0,
    // }).format(amount);
    return (
        <li className={styles.root}>
            <a href="#0">
                {/* <div className={styles.amount}>{formattedAmount}</div> */}
                <div className={styles.date}>{date}</div>
                <img
                    className={styles.illustration}
                    src={imageUrl}
                    alt=""
                ></img>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.date}>{status}</div>
                <IconButton
                    glyph="settings"
                    size="medium"
                    onClick={() => alert('See Details')}
                />
            </a>
        </li>
    );
};
