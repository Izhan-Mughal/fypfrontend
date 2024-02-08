import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'dashboard/app/components';
import SimpleForm from './SimpleForm';
import StepperForm from './StepperForm';
import EditForm from './EditForm';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const AppForm = (props) => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[props.routeName ? { name: 'dashboard', path: '/dashboard' } : { name: 'Material', path: '/material' }, props.routeName ? { name: `${props.routeName}` } : { name: 'Form' }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title={props.routeName == "Edit Profile" ? "Edit Profile" : "My Profile"}>
          {props.routeName ? <EditForm /> :
            <SimpleForm />
          }
        </SimpleCard>
        {props.routeName ? <></> :
          <SimpleCard title="stepper form">
            <StepperForm />
          </SimpleCard>
        }
      </Stack>
    </Container>
  );
};

export default AppForm;
