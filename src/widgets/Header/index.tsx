import { memo } from "react";
import { HStack, k } from "@kuma-ui/core";

import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();

    return (
        <HStack
            width={"100%"}
            height={"100%"}
            justifyContent={"space-between"}
            padding={"0 20px"}
        >
            <k.div>Logo</k.div>
            <k.div>{t('aboutMe')}</k.div>
        </HStack>
    );
}

export default memo(Header);
