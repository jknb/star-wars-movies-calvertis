import './sortByMenu.css';
import { sortByTypes } from '../../../../constants/sortByConstants';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

const SortByMenu = ({ closeButtonMenuClicked, sortedBy, setSortedBy }) => {
    const [selectedIndex, setSelectedIndex] = useState(sortedBy);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div style={{ width: '6%' }}>
            <List aria-label="sortby list">
                <div style={{ display: 'flex' }}>
                    <ListItemText primary="Sort By" ></ListItemText>
                    <ListItemText primaryTypographyProps={{ className: 'close' }} onClick={closeButtonMenuClicked} primary="&times;" ></ListItemText>
                </div>
                <Divider />
                <ListItemButton
                    selected={selectedIndex === sortByTypes.episode}
                    onClick={(event) => { handleListItemClick(event, sortByTypes.episode); setSortedBy(sortByTypes.episode); }}
                >
                    <ListItemText primary="Episode" />
                </ListItemButton>
                <Divider />
                <ListItemButton
                    selected={selectedIndex === sortByTypes.year}
                    onClick={(event) => { handleListItemClick(event, sortByTypes.year); setSortedBy(sortByTypes.year); }}
                >
                    <ListItemText primary="Year" />
                </ListItemButton>
            </List>
        </div>
    )
}

export default SortByMenu;