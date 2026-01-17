import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Search } from 'lucide-react';

const Input = ({ icon, className, ...props }) => {
    return (
        <div className={clsx("input-wrapper", className)}>
            {icon && (
                <div className="input-icon">
                    {icon}
                </div>
            )}
            <input
                className={clsx(
                    'input-field',
                    icon && 'input-field--has-icon'
                )}
                style={{
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-text-primary)',
                    backgroundColor: 'var(--color-bg-secondary)',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border-subtle)'}
                {...props}
            />
        </div>
    );
};

Input.propTypes = {
    icon: PropTypes.node,
    className: PropTypes.string,
};

export default Input;
