import React from 'react';
import PageDefault from '../../components/PageDefault'
import styled from 'styled-components';

export default function ErrorPage() {

    const Iframe = styled.iframe`
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
    `;

    const Text = styled.p`
        margin-top:0;
        text-align: center;
        font-weight: bold;
    `;

    return (
        <PageDefault>
            <Text>PAGE NOT FOUND</Text>
            <Iframe title="joguinho" src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height="600"></Iframe>
        </PageDefault>
    )
}
