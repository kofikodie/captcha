db.captchas.drop();
db.captchas.insertMany([
    {
        _id: ObjectId('62cac7f3b6ddd9deb4be79eb'),
        imageUrl: 'https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-recipe-1.jpg',
        answer: 'pasta',
        active: true,
    },
    {
        _id: ObjectId('72cac7f3b6ddd9deb4be79eb'),
        imageUrl: 'https://static01.nyt.com/images/2023/08/31/multimedia/RS-Lasagna-hkjl/RS-Lasagna-hkjl-superJumbo.jpg',
        answer: 'lasagna',
        active: true,
    },
    {
        _id: ObjectId('82cac7f3b6ddd9deb4be79eb'),
        imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg',
        answer: 'pizza',
        active: true,
    },
    {
        _id: ObjectId('92cac7f3b6ddd9deb4be79eb'),
        imageUrl: 'https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-articleLarge.jpg',
        answer: 'croissant',
        active: true,
    },
    {
        _id: ObjectId('52cac7f3b6ddd9deb4be79eb'),
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/del089923-risotto-web-001-ab-index-64e7a1083b54e.jpg',
        answer: 'risotto',
        active: true,
    },
    {
        _id: ObjectId('42cac7f3b6ddd9deb4be79eb'),
        imageUrl: 'https://familystylefood.com/wp-content/uploads/2021/09/Parm-Polenta-1.jpg',
        answer: 'polenta',
        active: true,
    }
]);

db.questions.drop();
db.questions.insertMany([
    {
        _id: ObjectId('12cac7f3b6ddd9deb4be79eb'),
        question: 'select all images with pizza',
        answer: ObjectId('82cac7f3b6ddd9deb4be79eb')
        
    },
    {
        _id: ObjectId('22cac7f3b6ddd9deb4be79eb'),
        question: 'select all images with pasta',
        answer: ObjectId('62cac7f3b6ddd9deb4be79eb')
    },
    {
        _id: ObjectId('32cac7f3b6ddd9deb4be79eb'),
        question: 'select all images with lasagna',
        answer: ObjectId('72cac7f3b6ddd9deb4be79eb')
    }
]);
