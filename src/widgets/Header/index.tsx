import { memo, useCallback } from "react";
import { HStack, k } from "@kuma-ui/core";

import { useTranslation } from "react-i18next";

import MenuCard from "@/components/menuCard";
import { useNavigate, useRouterState } from "@tanstack/react-router";

function Header() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleMenuClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        console.log('click');
        const target = e.target as HTMLDivElement;
        const title = target.getAttribute('data-title');
        console.log(title);
        navigate({
            to: title || '/',
        });
    }, []);

    return (
        <HStack
            width={"100%"}
            height={"100%"}
            justifyContent={"space-between"}
            padding={"0 20px"}
        >
            <k.div>Logo</k.div>
            <HStack onClick={handleMenuClick}>
                <MenuCard title={'/'} description={t('aboutMe')} />
                <MenuCard title={'/blog'} description={t('blog')} />
                <MenuCard title={'/blog'} description={t('reading')} />
                <MenuCard title={'/blog'} description={t('contact')} />
            </HStack>
        </HStack>
    );
}

export default memo(Header);
