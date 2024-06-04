type imageListType = { id: number; src: string; isShow: boolean; }[]

const getImageList = (): imageListType => {
    const imageList: imageListType = [
        {
            id: 1,
            src: '/memes/01.jpg',
            isShow: false
        }, {
            id: 2,
            src: '/memes/02.jpg',
            isShow: false
        }, {
            id: 3,
            src: '/memes/03.jpg',
            isShow: false
        }, {
            id: 4,
            src: '/memes/04.jpg',
            isShow: false
        }, {
            id: 5,
            src: '/memes/05.jpg',
            isShow: false
        }, {
            id: 6,
            src: '/memes/06.jpg',
            isShow: false
        }, {
            id: 7,
            src: '/memes/07.jpg',
            isShow: false
        }, {
            id: 8,
            src: '/memes/08.jpg',
            isShow: false
        }, {
            id: 9,
            src: '/memes/09.jpg',
            isShow: false
        }, {
            id: 10,
            src: '/memes/10.jpg',
            isShow: false
        }, {
            id: 11,
            src: '/memes/11.jpg',
            isShow: false
        }, {
            id: 12,
            src: '/memes/12.jpg',
            isShow: false
        }, {
            id: 13,
            src: '/memes/13.jpg',
            isShow: false
        }, {
            id: 14,
            src: '/memes/14.jpg',
            isShow: false
        }, {
            id: 15,
            src: '/memes/15.jpg',
            isShow: false
        }, {
            id: 16,
            src: '/memes/16.jpg',
            isShow: false
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