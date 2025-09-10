export const UserRoles = () => {
    const roles = [
        {id: 1, title: 'CEO'}, 
        {id: 2, title: 'CTO'},
        {id: 3, title: 'admin'}
    ]
    return (
        <ul>
            {roles.map((value.id) => (
                <li key={key}>
                    {value.title}
                </li>
            ))}
        </ul>
    )
}