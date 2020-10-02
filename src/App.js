import React, {Fragment, useState} from 'react';
import GlideComponent from "./components/GlideComponent";

import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Radio from "semantic-ui-react/dist/commonjs/addons/Radio";

function App() {
    const [type, setType] = useState('slider');
    return (
        <Fragment>
            <Form>
                <Form.Field>
                    <Radio
                        label='Type slider'
                        name='radioGroup'
                        value='slider'
                        checked={type === 'slider'}
                        onChange={() => setType('slider')}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Type carousel'
                        name='radioGroup'
                        value='carousel'
                        checked={type === 'carousel'}
                        onChange={() => setType('carousel')}
                    />
                </Form.Field>
            </Form>
            <GlideComponent type={type} />
        </Fragment>
    );
}

export default App;
