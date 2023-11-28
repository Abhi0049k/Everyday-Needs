import { FC } from "react";
import Banner from "../components/Banner";
import ImageComponent from "../components/ImageComponent";

const Home: FC = ()=>{
    return (
        <>
        <Banner/>
        <ImageComponent img="https://images.dailyobjects.com/marche/assets/images/other/backpack-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1" to="/products"/>
        <ImageComponent img="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1" to="/products"/>
        <ImageComponent img="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1" to="/products"/>
        <ImageComponent img="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1" to="/products"/>
        <ImageComponent img="https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1" to="/products"/>
        </>
    )
}

export default Home