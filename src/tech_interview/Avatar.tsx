import React, { useEffect } from "react"
import classNames from "classnames";
import './styles/avatar.css'

interface Props {
    size: string;
    notification: boolean;
    notificationColor: string;
    initials: string;
    alt: string;
    icon: React.ReactNode | string;
    shape: string;
    background: 'light' | 'dark';
}

export const Avatar = ({ background, size, shape,notificationColor, notification, initials, alt, icon }: Props): JSX.Element => {

    let baseClass = `icon-${shape}-${size}`
    let backgroundClass = background === 'dark' ? 'bg-dark' : 'bg-light';
    let notificationClass = `notification-${notificationColor}`

    return (
        <div className={classNames('avatar', baseClass, backgroundClass)}>
            {initials ? (
                <p>{initials}</p>
            ) : typeof icon === 'string' ? <img className="img-std" src={icon} alt={alt} /> : icon}

            {notification ? <div className={classNames('notification', notificationClass)}></div> : null}
        </div>
    )
}