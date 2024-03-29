import styles from './fetch-data.module.scss';
import classNames from 'classnames';

export interface FetchDataProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FetchData = ({
    className,
    children = 'FetchData',
}: FetchDataProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
