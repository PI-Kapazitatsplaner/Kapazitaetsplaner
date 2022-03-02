import prisma from "./client";

//Add data here to seed the database
const main = async () => {
    await prisma.abwesenheit.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.user.createMany({
        data: [
            {
                sub: 'c2842822-67f5-4759-8db8-a431ddfc3500' //hr7 -- Default Test User
            },
            {
                sub: '4296e3d8-a609-4ffa-b27a-3106ed7a5126', //gif
                preferencesWhiteMode: true
            }
        ]
    });
    await prisma.abwesenheit.createMany({
        data: [
            {
                userSub: 'c2842822-67f5-4759-8db8-a431ddfc3500',
                date: new Date(2022, 1, 3)
            },
            {
                userSub: 'c2842822-67f5-4759-8db8-a431ddfc3500',
                date: new Date(2022, 2, 5)
            },
        ]
    });

};

if (process.env.seed?.toLowerCase() === 'true') {
    main()
        .catch((error) => {
            console.error(error);
            process.exit(1);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
} else {
    console.log('\nSeeding is disabled. Set the "seed" environment variable to "true" to enable.')
}