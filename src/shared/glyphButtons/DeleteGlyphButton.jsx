import React from 'react';
import PropTypes from 'prop-types';

import DeleteGlyph from './glyphs/DeleteGlyph';
import GlyphButton from './GlyphButton';

const DeleteGlyphButton = ({ onClick }) => (
    <GlyphButton onClick={onClick}>
        <DeleteGlyph />
    </GlyphButton>
);

DeleteGlyphButton.defaultProps = {
    onClick: () => {},
};

DeleteGlyphButton.propTypes = {
    onClick: PropTypes.func,
};

export default DeleteGlyphButton;
