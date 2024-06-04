type imageListType = { id: number, imageId: number, src: string, isShow: boolean, disable: boolean }[]

const getImageList = (): imageListType => {
    const imageList: imageListType = [
        {
            id: 1,
            imageId: 1,
            src: '/memes/01.jpg',
            isShow: false,
            disable: false
        }, {
            id: 2,
            imageId: 1,
            src: '/memes/01.jpg',
            isShow: false,
            disable: false
        }, {
            id: 3,
            imageId: 2,
            src: '/memes/02.jpg',
            isShow: false,
            disable: false
        }, {
            id: 4,
            imageId: 2,
            src: '/memes/02.jpg',
            isShow: false,
            disable: false
        }, {
            id: 5,
            imageId: 3,
            src: '/memes/03.jpg',
            isShow: false,
            disable: false
        }, {
            id: 6,
            imageId: 3,
            src: '/memes/03.jpg',
            isShow: false,
            disable: false
        }, {
            id: 7,
            imageId: 4,
            src: '/memes/04.jpg',
            isShow: false,
            disable: false
        }, {
            id: 8,
            imageId: 4,
            src: '/memes/04.jpg',
            isShow: false,
            disable: false
        }, {
            id: 9,
            imageId: 5,
            src: '/memes/05.jpg',
            isShow: false,
            disable: false
        }, {
            id: 10,
            imageId: 5,
            src: '/memes/05.jpg',
            isShow: false,
            disable: false
        }, {
            id: 11,
            imageId: 6,
            src: '/memes/06.jpg',
            isShow: false,
            disable: false
        }, {
            id: 12,
            imageId: 6,
            src: '/memes/06.jpg',
            isShow: false,
            disable: false
        }, {
            id: 13,
            imageId: 7,
            src: '/memes/07.jpg',
            isShow: false,
            disable: false
        }, {
            id: 14,
            imageId: 7,
            src: '/memes/07.jpg',
            isShow: false,
            disable: false
        }, {
            id: 15,
            imageId: 8,
            src: '/memes/08.jpg',
            isShow: false,
            disable: false
        }, {
            id: 16,
            imageId: 8,
            src: '/memes/08.jpg',
            isShow: false,
            disable: false
        }
    ]

    return shuffleArray(imageList)
}

const shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export {
    getImageList
}