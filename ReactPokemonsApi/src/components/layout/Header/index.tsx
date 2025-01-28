import { Box, InputBase, Link, Stack, styled, Typography } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import SearchIcon from '@mui/icons-material/Search'
import TelegramIcon from '@mui/icons-material/Telegram'
import CustomIcon from '../../../utils/changeIcon'
import InstagramIcon from '@mui/icons-material/Instagram'
const CustomInstagramIcon = CustomIcon(InstagramIcon)
const CustomTelegramIcon = CustomIcon(TelegramIcon)
const Search = styled(Box)({
    fontFamily: 'Roboto',
})
const Header = (): JSX.Element => {
    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'} p={2}>
                <CatchingPokemonIcon
                    fontSize="large"
                    sx={{
                        display: {
                            xs: 'block',
                            sm: 'none',
                        },
                    }}
                ></CatchingPokemonIcon>
                <Typography
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                        },
                    }}
                >
                    Pokemon Galery
                </Typography>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    sx={{
                        borderBottom: '1px solid',
                        borderColor: 'text.primary',
                    }}
                >
                    <SearchIcon></SearchIcon>
                    <Search>
                        <InputBase
                            placeholder="Search..."
                            sx={{ fontFamily: 'Roboto' }}
                        />
                    </Search>
                </Stack>
                <Stack gap={1} direction={'row'}>
                    <Link href="https://www.instagram.com/">
                        <CustomInstagramIcon></CustomInstagramIcon>
                    </Link>
                    <Link href="https://t.me/ShadowScribe">
                        <CustomTelegramIcon></CustomTelegramIcon>
                    </Link>
                </Stack>
            </Stack>
        </>
    )
}

export default Header
