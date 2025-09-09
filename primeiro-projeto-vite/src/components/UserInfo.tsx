import { UserAge } from "./UserAge"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserName"

export const UserInfo = () => {
    return (
        <>
            <UserName />
            <UserEmail />
            <UserAge />
        </>
    )
}