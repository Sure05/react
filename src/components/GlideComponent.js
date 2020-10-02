import React, {Fragment, useState} from "react";
import Glide from "@glidejs/glide/src";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
function GlideComponent(props) {
    return (
        <Fragment>
            <Form.Field>
                Selected value: <b>{props.type}</b>
            </Form.Field>
            {/*<div className="glide">
                <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides">
                        <li className="glide__slide">asdasdasd</li>
                        <li className="glide__slide">asdasd</li>
                        <li className="glide__slide">asdasd</li>
                    </ul>
                </div>

            </div>*/}
        </Fragment>

    )
}

export default GlideComponent;