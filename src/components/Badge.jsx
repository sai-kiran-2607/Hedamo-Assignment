import clsx from 'clsx';
import PropTypes from 'prop-types';

const statusStyles = {
    draft: {
        bg: 'var(--color-status-draft-bg)',
        text: 'var(--color-status-draft-text)',
        border: 'var(--color-border-subtle)',
    },
    submitted: {
        bg: 'var(--color-status-submitted-bg)',
        text: 'var(--color-status-submitted-text)',
        border: 'transparent',
    },
    published: {
        bg: 'var(--color-status-published-bg)',
        text: 'var(--color-status-published-text)',
        border: 'transparent',
    },
    archived: {
        bg: 'var(--color-bg-tertiary)',
        text: 'var(--color-text-tertiary)',
        border: 'var(--color-border-subtle)',
    }
};

const Badge = ({ status, className }) => {
    const normalizedStatus = status.toLowerCase();
    const styles = statusStyles[normalizedStatus] || statusStyles.draft;

    return (
        <span
            className={clsx('badge', className)}
            style={{
                backgroundColor: styles.bg,
                color: styles.text,
                borderColor: styles.border,
            }}
        >
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
    );
};

Badge.propTypes = {
    status: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Badge;
