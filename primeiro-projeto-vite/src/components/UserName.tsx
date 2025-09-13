type Props = {
    name: string
}

export const UserName = ({name} : Props) => {

    return (
        <h4>Meu nome é: {name.toUpperCase()}!</h4>
    )
}