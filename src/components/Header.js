import React from 'react';

const Header = (props) => (
        <div className="header">
            <div>
                <h1>{props.title}</h1>
            </div>
        </div>
);


Header.defaultProps = {
    title: 'Yukodit Studio'
};

export default Header;