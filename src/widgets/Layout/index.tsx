import { memo } from "react";
import { Outlet } from "@tanstack/react-router";
import { Grid } from "@kuma-ui/core";

import Header from "../Header";

function Layout() {
    return (
        <Grid
            width={"100%"}
            height={"100%"}
            gridTemplateRows={"50px 1fr"}
        >
            <Header />
            <Outlet />
        </Grid>
    );
}

export default memo(Layout);
