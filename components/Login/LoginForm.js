import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function LoginForm({ onInputChange, onSubmit }) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(e);
    handleClose();
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Log In
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Log In</DialogTitle>
          <DialogContent>
            <DialogContentText>
              By clicking "Log In," you agree to One Degree's Privacy Policy and
              Terms of Use. Forgot Password? Don't have an account?
            </DialogContentText>
            <TextField
              required
              autoFocus
              id="username"
              label="Username"
              onChange={onInputChange}
              margin="dense"
              autoComplete="username"
              fullWidth
            />
            <TextField
              required
              id="password"
              label="Password"
              onChange={onInputChange}
              margin="dense"
              inputProps={{
                autoComplete: 'current-password',
                type: 'password',
              }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Log In
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

LoginForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
