import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <Paper sx={{ p: 2, pt: 1 }}>
      <Typography fontSize='2.5rem'>{value}</Typography>
      <Typography fontSize='1.25rem' variant='h3'>
        {label}
      </Typography>
    </Paper>
  );
}

export default function Stats() {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {[
        { label: 'Check-ins', value: 10 },
        { label: 'Check-outs', value: 8 },
        { label: 'Rooms Available', value: 17 },
        { label: 'Guests', value: 182 },
      ].map((props) => (
        <Grid key={props.label} item xs={12} sm={6} md={3}>
          <Stat {...props} />
        </Grid>
      ))}
    </Grid>
  );
}
