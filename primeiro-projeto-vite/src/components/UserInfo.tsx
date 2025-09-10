import { UserAge } from "./UserAge"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserName"
import { UserRoles } from "./UserRoles"

export const UserInfo = () => {
    return (
        <>
            <UserName />
            <UserEmail />
            <UserAge />
            <UserRoles />
        </>
    )
}