import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

interface Link {
    title: string;
    path: string;
}

const midLinks: Link[] = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const rightLinks: Link[] = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    const { basket } = useStoreContext(); 
    const items = basket?.items;
    const itemCount = items?.reduce((sum, item) => sum + item.quantity, 0);
    console.log('gelen basket: ', basket?.items)
    console.log('gelen ItemCount: ', itemCount)
    return (
        <AppBar position='static' sx={{ mb: 4 }}>

            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h6' component={NavLink} to='/' exact sx={navStyles}>
                        V-Store
                    </Typography>
                    <Switch size="small" checked={darkMode} onChange={handleThemeChange} />
                </Box>
                <Box display='flex' alignItems='center'>
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) =>
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        )}
                    </List>
                </Box>
                <Box display='flex' alignItems='center'>
                    <IconButton component={NavLink} to="/basket" size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent={itemCount} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) =>
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        )}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
