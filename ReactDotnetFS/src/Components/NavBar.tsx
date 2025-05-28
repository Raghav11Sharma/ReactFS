import { AppBar, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";



type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}


const midLinks = [
    { title: 'HouseList', path: '/HouseList' },
    { title: 'About', path: '/About' },
]

const rightLinks = [
    { title: 'loginpage', path: '/LoginPage' },
    { title: 'register', path: '/Register' }
]

export default function NavBar() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">Re-Store</Typography>
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{ color: 'inherit', typography: 'h6' }}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <List sx={{ display: 'flex' }}>
                    {rightLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{ color: 'inherit', typography: 'h6' }}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>

    )
}