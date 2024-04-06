import Box from '@mui/material/Box';

interface FormBoxProps {
  form: React.ReactNode;
  children?: React.ReactNode;
}

export default function FormBox({ form, children }: FormBoxProps) {
  return (
    <Box
      m={-2}
      mx={-3}
      className='flex items-center justify-center h-screen bg-blue-900'
    >
      <Box
        display='flex'
        flexDirection='column'
        rowGap={2}
        p={3}
        className='rounded-lg bg-gray-50 w-full max-w-[400px] mb-48'
      >
        {form}

        {children}
      </Box>
    </Box>
  );
}
