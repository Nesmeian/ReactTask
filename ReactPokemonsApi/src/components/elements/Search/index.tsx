import { Box, InputBase, Button, Stack, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
export default function Search({
    setSearch,
}: {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element {
    const SearchContainer = styled(Box)({
        fontFamily: 'Roboto',
    })

    const [searchText, setSearchText] = useState('')
    // useEffect(() => {
    //     document.addEventListener('keydown', detectKeyDown, true)
    // }, [])
    // const detectKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         console.log(e.key)
    //     } else {
    //         console.log('wrong')
    //     }
    // }
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            sx={{
                borderBottom: '1px solid',
                borderColor: 'text.primary',
            }}
        >
            <SearchContainer>
                <Button onClick={() => setSearch(searchText)}>
                    <SearchIcon />
                </Button>
                <InputBase
                    placeholder="Search..."
                    value={searchText}
                    autoFocus
                    autoComplete="off"
                    sx={{ fontFamily: 'Roboto' }}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </SearchContainer>
        </Stack>
    )
}
