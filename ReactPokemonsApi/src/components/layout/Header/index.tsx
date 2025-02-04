import { Link, Stack, Typography } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import TelegramIcon from '@mui/icons-material/Telegram'
import CustomIcon from '../../../utils/changeIcon'
import InstagramIcon from '@mui/icons-material/Instagram'
import Search from '../../elements/Search'

const CustomInstagramIcon = CustomIcon(InstagramIcon)
const CustomTelegramIcon = CustomIcon(TelegramIcon)

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
                        fontFamily: 'LozangeNoCommercial',
                    }}
                >
                    Pokemon Galery
                </Typography>
                <Search />
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
