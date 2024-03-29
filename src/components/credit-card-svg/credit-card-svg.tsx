import classNames from 'classnames';
import styles from './credit-card-svg.module.scss';

interface CreditCardSvgProps {
    className?: string;
    logo?: string;
    cardNumberStartsWith: string;
    cardNumberEndsWith: string;
    cardHolderName: string;
    expireDateMonth: string;
    expireDateYear: string;
}

export const CreditCardSvg = ({
    className,
    logo,
    cardNumberStartsWith,
    cardNumberEndsWith,
    cardHolderName,
    expireDateMonth,
    expireDateYear,
}: CreditCardSvgProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.creditCard}>
                <svg width="100%" height="100%" viewBox="0 0 320 206">
                    <text fill="currentColor" fontSize="8" fontWeight="500">
                        <tspan x="20" y="164">
                            Task Owner
                        </tspan>
                    </text>
                    <text fill="currentColor" fontSize="16" fontWeight="bold">
                        <tspan x="20" y="35">
                            {logo ? logo : 'Cloudcash'}
                        </tspan>
                    </text>
                    <text fill="currentColor" fontSize="16" fontWeight="500">
                        <tspan x="20" y="116">
                            {`${cardNumberStartsWith}${cardNumberEndsWith}`}
                        </tspan>
                    </text>
                    <text fill="currentColor" fontSize="12" fontWeight="500">
                        <tspan x="20" y="183">
                            {cardHolderName}
                        </tspan>
                    </text>
                    <text fill="currentColor" fontSize="8" fontWeight="500">
                        <tspan x="128.667" y="164">
                            Date
                        </tspan>
                    </text>
                    <text fill="currentColor" fontSize="12" fontWeight="500">
                        <tspan x="128.667" y="183">
                            {/* expireDateMonth/{expireDateYear} */}
                            {expireDateMonth}
                        </tspan>
                    </text>
                </svg>
            </div>
        </div>
    );
};
