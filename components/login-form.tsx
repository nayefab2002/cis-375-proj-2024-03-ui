import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyIcon from '@mui/icons-material/Key';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function LoginForm() {
  return (
    <form className='space-y-3 flex-1 rounded-lg bg-gray-50 w-full max-w-[400px] mb-36'>
      <Box display='flex' flexDirection='column' gap={3} p={3}>
        <Typography variant='h2'>Please log in to continue.</Typography>

        <FormControl>
          <TextField
            label='Email'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl>
          <TextField
            type='password'
            label='Password'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <Box textAlign='right'>
          <Button
            endIcon={<ArrowForwardIcon />}
            variant='contained'
            color='primary'
          >
            Log in
          </Button>
        </Box>
      </Box>
    </form>
  );
}
