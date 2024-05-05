import React from 'react';
import { Container } from 'react-bootstrap';

const PageHeader = ({ title, margintop, marginbottom }) => {
    const headerStyles = {
        marginTop: margintop,
        marginBottom: marginbottom
    };

    return (
        <Container className="text-center page-header-container" style={headerStyles}>
            <h1 className='page-header-title'>{title}</h1>
        </Container>
    );
}

export default PageHeader;
