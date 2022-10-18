import * as React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ButtonEffect = () => {
    return (

        <Stack spacing={2} direction="row">
            <Button variant="outlined" sx={{ minWidth: 125 }}> ادامه</Button>
        </Stack>

    );
}

export default ButtonEffect;