const UserStatus = ({loggedIn, isAdmin}) => {
  return (
    <>
      {loggedIn && (isAdmin ? <p>Welcome Admin</p> : <p>Welcome User</p>)}
    </>
  );
};

export default UserStatus;