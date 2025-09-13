import { UserAge } from "./UserAge"
import { UserAvatar } from "./UserAvatar"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserName"
import { UserRoles } from "./UserRoles"

type Props = {
    name: string;
    email: string;
    age: number;
    avatar: string
    roles: {id: number, title: string}[];
}

//https://tse4.mm.bing.net/th/id/OIP.ISTF7i7BSv635VbXUt5ItAHaEK?r=0&cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3

export const UserInfo = ({name, age, avatar, email, roles} : Props) => {
    return (
        <>
            <UserName 
            name={name}
            />
            <UserAvatar 
            src={avatar}
            />
            <UserEmail 
            email={email}
            />
            <UserAge 
            age={age}
            />
            <UserRoles 
            roles={roles}
            />
        </>
    )
}