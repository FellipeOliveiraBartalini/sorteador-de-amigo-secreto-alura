import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './Card.module.scss';

export const Card = () => {
    return (
        <div className={style.card}>
            <Outlet />
        </div>
    );
}
