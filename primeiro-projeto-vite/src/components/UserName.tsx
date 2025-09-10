export const UserName = () => {
    let names = {nome1: 'João', nome2: 'Lucas'};

    const formatName = (value: string) => value.toUpperCase()

    return (
        <h4>Meu nome é: {names.nome1.toUpperCase()}!</h4>
    )
}