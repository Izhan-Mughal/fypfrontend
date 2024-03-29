import { Box, styled } from '@mui/material';
import { MatxLogo } from 'dashboard/app/components';
import useSettings from 'dashboard/app/hooks/useSettings';
import { Span } from './Typography';
import { Link } from 'react-router-dom';

const BrandRoot = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 18px 20px 29px',
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 18,
  marginLeft: '.5rem',
  display: mode === 'compact' ? 'none' : 'block',
}));

const Brand = ({ children }) => {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Link to="/dashboard">
        <Box display="flex" alignItems="center">
          <MatxLogo />
          <StyledSpan mode={mode} className="sidenavHoverShow">
            Hyperconnekt
          </StyledSpan>
        </Box>
      </Link>
      {/* Sidebar Button */}
      {/* <Box className="sidenavHoverShow" sx={{ display: mode === 'compact' ? 'none' : 'block' }}>
        {children || null}
      </Box> */}
    </BrandRoot>
  );
};

export default Brand;
