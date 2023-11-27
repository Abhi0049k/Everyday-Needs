import { FC } from "react"

const Footer: FC = () => {
    return (
        <>
            <footer className="flex h-[310px] border-b">
                <div className="p-[20px] flex w-[70%] border-t border-r leading-6">
                    <div className="w-[26%]">
                        <h3 className="mb-1">KNOW US</h3>
                        <p>About Everyday Needs</p>
                        <p>Blog</p>
                    </div>
                    <div className="w-[26%]">
                        <h3 className="mb-1">HELPDESK</h3>
                        <p>Terms Of Use</p>
                        <p>Warranty Policy</p>
                        <p>Shipping Policy</p>
                        <p>Cancellation Policy</p>
                        <p>Return and Exchange Policy</p>
                        <p>Privacy & Security Policy</p>
                    </div>
                    <div className="w-[26%]">
                        <h3 className="mb-1">NETWORK</h3>
                        <p>Contact Us</p>
                        <p>Corporate Gifting</p>
                    </div>
                </div>
                <div className="w-[30%] h-full">
                    <h1>FOLLOW US ON</h1>
                    <div>
                        <img src="https://images.dailyobjects.com/marche/icons/social/instagram.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/social/facebook.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/social/youtube.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/social/twitter.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/social/pinterest.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1" alt="img" />
                    </div>
                </div>
                <div>
                    <h1>DOWNLOAD OUR APP</h1>
                    <div>
                        <img src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" alt="img" />
                        <img src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" alt="img" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
