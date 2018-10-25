import React from 'react';

import EditGlyphButton from '../../shared/glyphButtons/EditGlyphButton';
import DeleteGlyphButton from '../../shared/glyphButtons/DeleteGlyphButton';

import styles from './UserControlPanel.scss';

const UserControlPanel = () => (
    <div className={styles['user-control-panel']}>
        <EditGlyphButton />
        <DeleteGlyphButton />
    </div>
);

export default UserControlPanel;
