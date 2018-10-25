import React from 'react';
import PropTypes from 'prop-types';

import EditGlyph from './glyphs/EditGlyph';
import GlyphButton from './GlyphButton';

const EditGlyphButton = ({ onClick }) => (
    <GlyphButton onClick={onClick}>
        <EditGlyph />
    </GlyphButton>
);

EditGlyphButton.defaultProps = {
    onClick: () => {},
};

EditGlyphButton.propTypes = {
    onClick: PropTypes.func,
};

export default EditGlyphButton;
