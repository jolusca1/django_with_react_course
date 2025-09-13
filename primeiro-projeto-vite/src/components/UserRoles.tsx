type Props = {
    roles: { id: number, title: string }[];
}

export const UserRoles = ({roles}: Props) => {

    return (
        <ul>
            {roles.map((value, key) => (
                <li key={key}>
                    {value.title}
                </li>
            ))}
        </ul>
    )
}