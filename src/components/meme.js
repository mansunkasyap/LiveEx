import React, { useEffect, useState } from "react";
// import memesData from "../memeData"  

export default function Meme() {
    // let [url, setURL] = React.useState("");

    //Good Way to do
    const [memes, setMemes] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(
        // () => {
        //     fetch(`https://api.imgflip.com/get_memes`)
        //         .then(e => e.json())
        //         .then(data => setAllMemes(data.data.memes))
        // },
        //Way-2 
        async () => {
            const res = await fetch(`https://api.imgflip.com/get_memes`)
            const data = await res.json()
            setAllMemes(data.data.memes)
        },

        []
    ) // here we fetch all data at once and save it to the state.

    function handleChange(event) {
        const { value, name } = event.target
        setMemes(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    function getImage() {
        //Way-1 
        //my way --> problem here was how i send my url to any where b/c it's is inside imageArray[randomImage] 
        // const imageArray = memesData.data.memes.map((items)=>{
        //     return items.url;
        // })
        // const randomImage = Math.round(Math.random() *imageArray.length);
        // console.log(imageArray[randomImage]);
        // return imageArray[randomImage];

        //Way-2
        // const imageArray = memesData.data.memes
        // console.log(imageArray);
        // const randomIndex = Math.floor(Math.random() * imageArray.length);
        // const url = imageArray[randomIndex].url;
        // setMemes((prevMeme) => ({
        //     ...prevMeme,
        //     randomImage: url
        // }))
        //here we dont't need the old url that's why i have given new url

        //Way-3 Fetching data from api
        // we have all data in our allMemes array

        //generate random index
        const randomIndex = Math.round(Math.random() * allMemes.length)
        //Find image present at that index
        const url = allMemes[randomIndex].url
        setMemes(prevMeme => {
            return (
                {
                    ...prevMeme,
                    randomImage: url
                }
            )
        })
    }





    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top Text"
                    onChange={handleChange}
                    name="topText"
                    value={memes.topText}
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={memes.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getImage}
                >
                    get a new MEME image📷
                </button>
            </div>

            <div className="meme">
                <img
                    src={memes.randomImage}
                    className="meme--image"
                />
                <h2 className="meme-top-text">{memes.topText}</h2>
                <h2 className="meme-bottom-text">{memes.bottomText}</h2>
            </div>
        </main>
    )
}