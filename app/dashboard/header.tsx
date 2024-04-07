'use client';

import RefreshIcon from '@mui/icons-material/Refresh';
import PrintIcon from '@mui/icons-material/Print';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import moment from 'moment';

export default function Header() {
  const now = moment();
  return (
    <Box display='flex' py={2}>
      <Box display='flex' flexGrow={1}>
        <Typography variant='h2'>{now.format('LL')}</Typography>
      </Box>
      <ButtonGroup variant='outlined' aria-label='Basic button group'>
        <Button>
          <RefreshIcon onClick={() => location.reload()} />
        </Button>
        <Button>
          <PrintIcon onClick={() => window.print()} />
        </Button>
        <Button>
          <ForwardToInboxIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
