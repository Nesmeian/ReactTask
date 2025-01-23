import { styled, SvgIcon, SvgIconProps } from '@mui/material'
import { ComponentType } from 'react'

export default function CustomIcon(
    icon: typeof SvgIcon,
): ComponentType<SvgIconProps> {
    return styled(icon)({
        background: 'black',
        borderRadius: 30,
        padding: 4,
        color: 'white',
    })
}
