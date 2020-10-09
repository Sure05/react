import React, {Fragment, useState} from 'react';
import SplideComponent from "./components/SplideComponent";

import {Form, Grid, Radio, Select} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

function App() {
    const [options, setOptions] = useState({
        autoplay: true,
        type: 'slide'
    });
    return (
        <Fragment>
            <Grid.Column key={4}>
            <Form>
                <Form.Field>
                   <Select placeholder={'effect'}
                           onChange={(e, {value}) => {
                               setOptions({
                                   ...options,
                                   type: value
                               })
                           }}
                           options={[
                       { key: 'slide', value: 'slide', text: 'slide' },
                       { key: 'loop', value: 'loop', text: 'loop' },
                       { key: 'fade', value: 'fade', text: 'fade' },
                   ]}/>
                </Form.Field>
            </Form>
            </Grid.Column>
            <Grid.Column key={8}>
            <SplideComponent options={options} />
            </Grid.Column>
        </Fragment>
    );
}

export default App;
