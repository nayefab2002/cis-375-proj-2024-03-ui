'use client';

import * as React from 'react';

import RefreshIcon from '@mui/icons-material/Refresh';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { faker } from '@faker-js/faker';
import range from 'lodash/range';
import moment from 'moment';

const rates = [124.5, 174.5, 234.5];

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <Paper elevation={0}>
      <Typography fontSize='1.4rem'>{value}</Typography>
      <Typography fontSize='1rem' variant='h5'>
        {label}
      </Typography>
    </Paper>
  );
}

export default function TodaysActivities() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Box
        p={2}
        color='white'
        bgcolor='primary.main'
        display={'flex'}
        justifyContent='space-between'
      >
        <Typography variant='h4'>Today&apos;s Activities</Typography>

        <RefreshIcon />
      </Box>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Sales' value='1' />
            <Tab label='Cancellations' value='2' />
            <Tab label='Overbookings' value='3' />
          </TabList>
        </Box>

        <TabPanel value='1' sx={{ pt: 2 }}>
          <Box display='flex' justifyContent='space-between' mb={2}>
            {[
              { label: 'Booked Today', value: 9 },
              { label: 'Room Nights', value: 28 },
              { label: 'Revenue', value: '$983.37' },
            ].map((props) => (
              <Box key={props.label}>
                <Stat {...props} />
              </Box>
            ))}
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Guest</TableCell>
                  <TableCell align='right'>Revenue</TableCell>
                  <TableCell align='right'>Check-in</TableCell>
                  <TableCell align='right'>Nights</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {range(9).map((row) => {
                  const nights = faker.number.int({ min: 1, max: 9 });
                  const rate = rates[faker.number.int(2)];
                  const checkIn = moment()
                    .add(faker.number.int(7), 'days')
                    .format('LL');

                  return (
                    <TableRow
                      key={row}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {faker.person.lastName()}, {faker.person.firstName()}
                      </TableCell>
                      <TableCell align='right'>
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(nights * rate)}
                      </TableCell>
                      <TableCell align='right'>{checkIn}</TableCell>
                      <TableCell align='right'>{nights}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value='2'>
          <Typography>Cancellations</Typography>
        </TabPanel>

        <TabPanel value='3'>
          <Typography>Overbookings</Typography>
        </TabPanel>
      </TabContext>
    </Paper>
  );
}
