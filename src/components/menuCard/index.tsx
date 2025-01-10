import { memo } from "react";
import { k } from "@kuma-ui/core";
import cx from 'classnames';

import styles from './index.module.scss';
import { useRouterState } from "@tanstack/react-router";

export type TMenuCardProps = {
    title: string;
    description: string;
}

function MenuCard(props: TMenuCardProps) {
    const { title, description } = props;
    const routerState = useRouterState();
    const isActive = routerState.location.pathname === title;

    return (
        <k.div
            className={cx(styles.menuCard, styles.hoverUnderlineAnimation, styles.left, {
                [styles.active]: isActive,
            })}
            data-title={title}
        >
            {description}
        </k.div>
    );
}

export default memo(MenuCard);
