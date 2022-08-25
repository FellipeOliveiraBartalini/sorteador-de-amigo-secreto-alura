import React from 'react';
import style from './Card.module.scss';

export default function Card (children: React.FC) {
    return (
        <div className={style.card}>
            {children}
        </div>
    );
}
