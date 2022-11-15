// const img = document.querySelector('img');

// img.addEventListener('load', () => {
//     const img = new Image();
//     img.src = 'https://content2.onliner.by/catalog/device/header/6eaf0bfae2ba2a9b725a346fdd901c3d.jpeg';
//     document.body.append(img);

//     img.addEventListener('load', () => {
//         const img = new Image();
//         img.src = 'https://content2.onliner.by/catalog/device/header/0333d11dce8c6b44fc271be08877302a.jpg';
//         document.body.append(img);

//         img.addEventListener('load', () => {
//             const img = new Image();
//             img.src = 'https://content.onliner.by/news/1400x5616/4974e4be297c28eda9456fb7c85af6bf.jpeg';
//             document.body.append(img);
//         })
//     })
// });


function loadImg(url, imgElement ) {
    if (!imgElement) {
        imgElement = new Image();
        imgElement.src = url;
    }

    return new Promise(function(resolve, reject) {
        imgElement.addEventListener('load', () => {
            document.body.append(imgElement)
            resolve(imgElement)
        })
    });
}


function awitLoadImg(imgElement) {
    return new Promise(resolve => {
        imgElement.addEventListener('load', () => {
            document.body.append(imgElement)
            resolve(imgElement)
        });
    })
}

async function loadImgAsync(url, imgElement ) {
    if (!imgElement) {
        imgElement = new Image();
        imgElement.src = url;
    }

    return await awitLoadImg(imgElement)
}

const imgs = [
    'https://content2.onliner.by/catalog/device/header/0333d11dce8c6b44fc271be08877302a.jpg',
    'https://content2.onliner.by/catalog/device/header/6eaf0bfae2ba2a9b725a346fdd901c3d.jpeg',
    'https://content.onliner.by/news/1400x5616/4974e4be297c28eda9456fb7c85af6bf.jpeg'
]

async function showImages(imgs) {
    await loadImg(null, document.querySelector('img'))
    for (const src of imgs) {
        const insertedNode = await loadImg(src);
        console.log(insertedNode)
    }
}

// const funmctionPromise = showImages(imgs)
// console.log(funmctionPromise)
// loadImg(null, document.querySelector('img'))
// .then(() => {
//     return loadImg('https://content2.onliner.by/catalog/device/header/0333d11dce8c6b44fc271be08877302a.jpg')
// })
// .then(() => {
//     return loadImg('https://content2.onliner.by/catalog/device/header/6eaf0bfae2ba2a9b725a346fdd901c3d.jpeg')
// })
// .then(() => {
//     return loadImg('https://content.onliner.by/news/1400x5616/4974e4be297c28eda9456fb7c85af6bf.jpeg')
// })

// Promise.race([
//     loadImg('https://content2.onliner.by/catalog/device/header/6eaf0bfae2ba2a9b725a346fdd901c3d.jpeg'),
//     loadImg('https://content2.onliner.by/catalog/device/header/0333d11dce8c6b44fc271be08877302a.jpg'),
//     loadImg('https://content.onliner.by/news/1400x5616/4974e4be297c28eda9456fb7c85af6bf.jpeg')
// ]).then((result) => console.log(result))


// example work with https://mockapi.io

const API = 'https://62bdea82c5ad14c110c90002.mockapi.io/api/v1';

const getAllUser = async () => {
    const resp = await fetch(`${API}/users`);
    const json = await resp.json();
    console.log(json)
} 

const addUser = async (data) => {
    const resp = await fetch(`${API}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await resp.json();
}

const updateUser = async (data, id) => {
    const resp = await fetch(`${API}/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await resp.json();
}