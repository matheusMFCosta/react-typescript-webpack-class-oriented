import * as React from "react";
import { Route } from "react-router";
import { Router } from "react-router";
import Hello from "./app/components/app";

import App from "./containers/AppContainer";

export default function(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/hello" component={Hello} />
            </Route>
        </Router>
    );
}
