const UsersList = ({usersList}) => {
    return (
        <>
           {usersList.map(user => 
                <p>{user.name}</p>)}
        </>
    )
}

export default UsersList;