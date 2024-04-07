'use client';

import * as React from 'react';

import RefreshIcon from '@mui/icons-material/Refresh';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { faker } from '@faker-js/faker';
import range from 'lodash/range';

const statuses = ['New', 'Confirmed', 'Checked-in'];

export default function UpcomingReservations() {
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
        <Typography variant='h4'>Upcoming Reservations</Typography>

        <RefreshIcon />
      </Box>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Arrivals' value='1' />
            <Tab label='Departures' value='2' />
            <Tab label='Stayovers' value='3' />
          </TabList>
        </Box>

        <Box mt={1} mx={3}>
          <Tabs
            value={'today'}
            textColor='secondary'
            indicatorColor='secondary'
          >
            <Tab value='today' label='Today' />
            <Tab value='tomm' label='Tomorrow' />
          </Tabs>
        </Box>

        <TabPanel value='1' sx={{ pt: 0 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Guest</TableCell>
                  <TableCell align='right'>Conf #</TableCell>
                  <TableCell align='right'>Room</TableCell>
                  <TableCell align='right'>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {range(10).map((row) => {
                  return (
                    <TableRow
                      key={row}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {faker.person.lastName()}, {faker.person.firstName()}
                      </TableCell>
                      <TableCell align='right'>
                        47820795{faker.number.int({ min: 3000, max: 5000 })}
                      </TableCell>
                      <TableCell align='right'>
                        {faker.number.int({ min: 1, max: 5 })}
                        {faker.number.int(4)}
                        {faker.number.int(9)}
                      </TableCell>
                      <TableCell align='right'>
                        {statuses[faker.number.int(2)]}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value='2'>
          <Typography>Departures</Typography>
        </TabPanel>

        <TabPanel value='3'>
          <Typography>Stayovers</Typography>
        </TabPanel>
      </TabContext>
    </Paper>
  );
}
