import { Box, InputBase, Button, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
export default function Search({
    setSearch,
}: {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element {
    const [searchText, setSearchText] = useState('')
    const detectKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && searchText !== '') {
            setSearch(searchText)
        }
    }
    return (
        <Stack
            direction={'row'}
            sx={{
                borderBottom: '1px solid',
                borderColor: 'text.primary',
            }}
        >
            <Box sx={{ alignContent: 'end' }}>
                <Button
                    onClick={() => setSearch(searchText)}
                    sx={{ padding: 0, minWidth: 'auto' }}
                >
                    <SearchIcon />
                </Button>
                <InputBase
                    placeholder="Search..."
                    value={searchText}
                    autoFocus
                    autoComplete="off"
                    sx={{ fontFamily: 'Roboto' }}
                    inputProps={{ style: { padding: 0 } }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={detectKeyDown}
                />
            </Box>
        </Stack>
    )
}
