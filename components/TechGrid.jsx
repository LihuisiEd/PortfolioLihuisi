import CardTech from "./CardTech"
export default function TechGrid() {

    const techData = [
        {
            title: 'JavaScript',
            svg: '/techs/javascript-icon.svg'
        },
        {
            title: 'Kotlin',
            svg: '/techs/kotlinlang-icon.svg'
        },
        {
            title: 'NodeJs',
            svg: '/techs/node.svg'
        },
        {
            title: 'AWS',
            svg: '/techs/aws-icon.svg'
        },
        {
            title: 'Dart',
            svg: '/techs/dartlang-icon.svg'
        },
        {
            title: 'Python',
            svg: '/techs/python.svg'
        },
        {
            title: 'VueJs',
            svg: '/techs/vuejs-icon.svg'
        },
        {
            title: 'MongoDB',
            svg: '/techs/mongodb-icon.svg'
        },
        {
            title: 'Laravel',
            svg: '/techs/laravel-icon.svg'
        },
        {
            title: 'Swift',
            svg: '/techs/swift-icon.svg'
        },
        {
            title: 'MySQL',
            svg: '/techs/mysql-icon.svg'
        },
        {
            title: 'Angular',
            svg: '/techs/angular-icon.svg'
        },
    ];
    return (
        <div className="grid gap-4 grid-cols-4">
            {techData.map((tech, index) => (
                <CardTech key={index}>
                    {{
                        title: tech.title,
                        svg: tech.svg
                    }}
                </CardTech>
            ))}

        </div>
    )
}